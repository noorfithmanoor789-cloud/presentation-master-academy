import { db } from './firebase.js';
import { 
    collection, addDoc, getDocs, query, orderBy, serverTimestamp 
} from 'firebase/firestore';
import { 
    EXAM_STUDENTS, 
    ALL_TESTS,
    getActiveTestFromFirebase,
    getCurrentTestId,
    getCurrentTestQuestions,
    getCurrentTestConfig
} from './data.js';

// ==================== DYNAMIC VARIABLES ====================
let EXAM_QUESTIONS = [];
let CURRENT_TEST = {};
let ACTIVE_TEST_ID = 'test1';

// ==================== STATE MANAGEMENT ====================
let currentUser = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let timer = null;
let timeLeft = 0;
let examStartTime = null;
let examEndTime = null;
let examSubmitted = false;

// ==================== DOM REFERENCES ====================
const loginSection = document.getElementById('loginSection');
const instructionsSection = document.getElementById('instructionsSection');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const startExamBtn = document.getElementById('startExamBtn');

// ==================== INITIALIZE APP ====================
(async () => {
    try {
        const testId = await getActiveTestFromFirebase();
        ACTIVE_TEST_ID = testId;
        EXAM_QUESTIONS = getCurrentTestQuestions();
        CURRENT_TEST = getCurrentTestConfig();
        userAnswers = new Array(EXAM_QUESTIONS.length).fill(null);
        
        console.log('📝 Loaded Test:', CURRENT_TEST.name);
        console.log('📊 Questions:', EXAM_QUESTIONS.length);
        console.log('👥 Students:', EXAM_STUDENTS.length);
    } catch (error) {
        console.error('❌ Init error:', error);
        ACTIVE_TEST_ID = 'test1';
        EXAM_QUESTIONS = ALL_TESTS['test1'].questions;
        CURRENT_TEST = ALL_TESTS['test1'];
        userAnswers = new Array(EXAM_QUESTIONS.length).fill(null);
    }
})();

// ==================== LOGIN FUNCTIONALITY ====================
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        console.log('🔐 Login attempt:', username);

        // ==================== ADMIN LOGIN ====================
        if (username === 'admin' && password === 'admin123') {
            localStorage.setItem('adminLoggedIn', 'true');
            window.location.href = 'admin/dashboard.html';
            return;
        }

        // ==================== STUDENT LOGIN ====================
        const student = EXAM_STUDENTS.find(s => s.username === username && s.password === password);

        if (student) {
            currentUser = student;
            localStorage.setItem('examUser', JSON.stringify(student));
            
            // Load latest test from Firebase
            try {
                await getActiveTestFromFirebase();
                CURRENT_TEST = getCurrentTestConfig();
            } catch (error) {
                console.log('Using cached test');
            }
            
            if (loginSection) loginSection.style.display = 'none';
            if (instructionsSection) instructionsSection.style.display = 'block';
            if (loginError) loginError.style.display = 'none';
            
            const welcomeMsg = document.getElementById('welcomeMessage');
            if (welcomeMsg) welcomeMsg.textContent = `Welcome, ${student.name}!`;
            
            // Show test info
            const testInfo = document.getElementById('testInfo');
            if (testInfo) {
                testInfo.innerHTML = `
                    <strong>📝 Test:</strong> ${CURRENT_TEST.name} 
                    | <strong>Questions:</strong> ${CURRENT_TEST.totalQuestions} 
                    | <strong>Time:</strong> ${CURRENT_TEST.timeLimit} minutes
                `;
            }
            
            // Update display elements
            const totalQuestionsDisplay = document.getElementById('totalQuestionsDisplay');
            if (totalQuestionsDisplay) totalQuestionsDisplay.textContent = CURRENT_TEST.totalQuestions;
            
            const timeLimitDisplay = document.getElementById('timeLimitDisplay');
            if (timeLimitDisplay) timeLimitDisplay.textContent = CURRENT_TEST.timeLimit;
            
            console.log('✅ Login successful:', student.name);
        } else {
            if (loginError) {
                loginError.textContent = 'Invalid username or password. Please try again.';
                loginError.style.display = 'block';
            }
            console.log('❌ Invalid credentials');
        }
    });
}

// ==================== START EXAM ====================
if (startExamBtn) {
    startExamBtn.addEventListener('click', () => {
        localStorage.setItem('examStarted', 'true');
        window.location.href = 'student/test.html';
    });
}

// ==================== EXAM LOGIC ====================
if (window.location.pathname.includes('test.html')) {
    (async () => {
        await getActiveTestFromFirebase();
        EXAM_QUESTIONS = getCurrentTestQuestions();
        CURRENT_TEST = getCurrentTestConfig();
        ACTIVE_TEST_ID = getCurrentTestId();
        userAnswers = new Array(EXAM_QUESTIONS.length).fill(null);
        timeLeft = CURRENT_TEST.timeLimit * 60;
        
        const userData = JSON.parse(localStorage.getItem('examUser'));
        if (!userData) {
            window.location.href = '../index.html';
        }

        currentUser = userData;
        document.getElementById('studentNameDisplay').textContent = currentUser.name;
        document.getElementById('totalQNum').textContent = EXAM_QUESTIONS.length;
        
        const testNameDisplay = document.getElementById('testNameDisplay');
        if (testNameDisplay) testNameDisplay.textContent = CURRENT_TEST.name;

        displayQuestion(0);
        startTimer();

        document.getElementById('prevBtn')?.addEventListener('click', () => navigateQuestion(-1));
        document.getElementById('nextBtn')?.addEventListener('click', () => navigateQuestion(1));
        document.getElementById('submitBtn')?.addEventListener('click', submitExam);
    })();
}

function displayQuestion(index) {
    if (index < 0 || index >= EXAM_QUESTIONS.length) return;

    const question = EXAM_QUESTIONS[index];
    document.getElementById('currentQNum').textContent = index + 1;
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('progressFill').style.width = `${((index + 1) / EXAM_QUESTIONS.length) * 100}%`;

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    const optionKeys = ['A', 'B', 'C', 'D', 'E'];
    optionKeys.forEach((key) => {
        if (question.options[key]) {
            const div = document.createElement('div');
            div.className = 'option-item';
            if (userAnswers[index] === key) div.classList.add('selected');
            div.textContent = `${key}. ${question.options[key]}`;
            div.addEventListener('click', () => selectOption(index, key));
            optionsContainer.appendChild(div);
        }
    });

    currentQuestionIndex = index;
    updateButtons();
}

function selectOption(questionIndex, optionKey) {
    userAnswers[questionIndex] = optionKey;
    displayQuestion(questionIndex);
}

function navigateQuestion(direction) {
    const newIndex = currentQuestionIndex + direction;
    if (newIndex >= 0 && newIndex < EXAM_QUESTIONS.length) {
        displayQuestion(newIndex);
    }
}

function updateButtons() {
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    document.getElementById('nextBtn').disabled = currentQuestionIndex === EXAM_QUESTIONS.length - 1;
}

function startTimer() {
    const timerDisplay = document.getElementById('timerDisplay');
    examStartTime = new Date();

    timer = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('Time is up!');
            submitExam();
        }
    }, 1000);
}

async function submitExam() {
    if (examSubmitted) return;
    
    const unanswered = userAnswers.filter(a => a === null).length;
    if (unanswered > 0) {
        if (!confirm(`You have ${unanswered} unanswered questions. Submit?`)) return;
    }

    examSubmitted = true;
    clearInterval(timer);
    examEndTime = new Date();
    const timeTaken = Math.floor((examEndTime - examStartTime) / 1000);

    let correct = 0;
    EXAM_QUESTIONS.forEach((q, index) => {
        if (userAnswers[index] === q.correct) correct++;
    });

    const total = EXAM_QUESTIONS.length;
    const percentage = ((correct / total) * 100).toFixed(2);
    const passFail = percentage >= 50 ? 'Pass' : 'Fail';

    const resultData = {
        studentName: currentUser.name,
        username: currentUser.username,
        testId: ACTIVE_TEST_ID,
        testName: CURRENT_TEST.name,
        score: correct,
        totalQuestions: total,
        percentage: parseFloat(percentage),
        passFail: passFail,
        examDate: new Date().toLocaleDateString(),
        timeTaken: timeTaken,
        submittedAt: new Date().toISOString()
    };

    localStorage.setItem('examResult', JSON.stringify(resultData));

    try {
        await addDoc(collection(db, 'exam-results'), {
            ...resultData,
            submittedAt: serverTimestamp()
        });
        alert('✅ Result Saved Successfully!');
    } catch (error) {
        console.error('Error:', error);
        alert('⚠️ Saved locally');
    }
    
    window.location.href = 'result.html';
}

// ==================== RESULT PAGE ====================
if (window.location.pathname.includes('result.html')) {
    const resultData = JSON.parse(localStorage.getItem('examResult'));
    if (!resultData) {
        window.location.href = '../index.html';
    }

    const resultContainer = document.getElementById('resultContent');
    resultContainer.innerHTML = `
        <h2>📊 Exam Results</h2>
        <div class="result-item">
            <span class="label">Student Name:</span>
            <span class="value">${resultData.studentName}</span>
        </div>
        <div class="result-item">
            <span class="label">Username:</span>
            <span class="value">${resultData.username}</span>
        </div>
        <div class="result-item">
            <span class="label">Test:</span>
            <span class="value">${resultData.testName || 'N/A'}</span>
        </div>
        <div class="result-item">
            <span class="label">Score:</span>
            <span class="value">${resultData.score} / ${resultData.totalQuestions}</span>
        </div>
        <div class="result-item">
            <span class="label">Percentage:</span>
            <span class="value">${resultData.percentage}%</span>
        </div>
        <div class="result-item">
            <span class="label">Status:</span>
            <span class="value ${resultData.passFail === 'Pass' ? 'pass' : 'fail'}">
                ${resultData.passFail === 'Pass' ? '✅ PASS' : '❌ FAIL'}
            </span>
        </div>
        <div class="result-item">
            <span class="label">Time Taken:</span>
            <span class="value">${Math.floor(resultData.timeTaken / 60)}m ${resultData.timeTaken % 60}s</span>
        </div>
        <div class="result-item">
            <span class="label">Date:</span>
            <span class="value">${resultData.examDate}</span>
        </div>
    `;

    document.getElementById('logoutBtn')?.addEventListener('click', () => {
        localStorage.clear();
        window.location.href = '../index.html';
    });
}

// ==================== AUTO REDIRECT ====================
if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
    const userData = JSON.parse(localStorage.getItem('examUser'));
    const examStarted = localStorage.getItem('examStarted');
    
    if (userData && examStarted === 'true') {
        window.location.href = 'student/test.html';
    }
}

export { };
