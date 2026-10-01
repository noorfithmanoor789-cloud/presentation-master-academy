// ============================================================
// FIREBASE IMPORTS
// ============================================================
import { db } from './firebase.js';
import { doc, getDoc, setDoc } from 'firebase/firestore';

// ============================================================
// COLLEGE INFORMATION - Presentation Master Academy
// ============================================================
export const COLLEGE_INFO = {
    name: 'Presentation Master Academy',
    shortName: 'PMA',
    location: 'Pakistan',
    currentSession: '2026',
    firebaseProject: 'presentation-master-acad-41afb'
};

// ============================================================
// STUDENTS LIST (100 Students)
// ============================================================
export const EXAM_STUDENTS = [
    { name: 'AARIZ', username: 'student1', password: '1' },
    { name: 'AASMA', username: 'student2', password: '2' },
    { name: 'ABBAS', username: 'student3', password: '3' },
    { name: 'ABIDA', username: 'student4', password: '4' },
    { name: 'ADIL', username: 'student5', password: '5' },
    { name: 'AFROZ', username: 'student6', password: '6' },
    { name: 'AHMER', username: 'student7', password: '7' },
    { name: 'AHSAN', username: 'student8', password: '8' },
    { name: 'AISHA', username: 'student9', password: '9' },
    { name: 'AKBAR', username: 'student10', password: '10' },
    { name: 'ALIYA', username: 'student11', password: '11' },
    { name: 'AMMAR', username: 'student12', password: '12' },
    { name: 'ANILA', username: 'student13', password: '13' },
    { name: 'ANISA', username: 'student14', password: '14' },
    { name: 'ARIF', username: 'student15', password: '15' },
    { name: 'ARMAN', username: 'student16', password: '16' },
    { name: 'ASAD', username: 'student17', password: '17' },
    { name: 'ASIFA', username: 'student18', password: '18' },
    { name: 'ATIF', username: 'student19', password: '19' },
    { name: 'AYAZ', username: 'student20', password: '20' },
    { name: 'AZHAR', username: 'student21', password: '21' },
    { name: 'BABAR', username: 'student22', password: '22' },
    { name: 'BAHADUR', username: 'student23', password: '23' },
    { name: 'BUSHRA', username: 'student24', password: '24' },
    { name: 'DANYAL', username: 'student25', password: '25' },
    { name: 'EHSAN', username: 'student26', password: '26' },
    { name: 'EMAN', username: 'student27', password: '27' },
    { name: 'FARAH', username: 'student28', password: '28' },
    { name: 'FARHAN', username: 'student29', password: '29' },
    { name: 'FARID', username: 'student30', password: '30' },
    { name: 'FARZANA', username: 'student31', password: '31' },
    { name: 'FAWAD', username: 'student32', password: '32' },
    { name: 'FAZAL', username: 'student33', password: '33' },
    { name: 'FEROZ', username: 'student34', password: '34' },
    { name: 'GHAZALA', username: 'student35', password: '35' },
    { name: 'GULZAR', username: 'student36', password: '36' },
    { name: 'HABIB', username: 'student37', password: '37' },
    { name: 'HAFSA', username: 'student38', password: '38' },
    { name: 'HAIDER', username: 'student39', password: '39' },
    { name: 'HALEEMA', username: 'student40', password: '40' },
    { name: 'HAMEED', username: 'student41', password: '41' },
    { name: 'HAMNA', username: 'student42', password: '42' },
    { name: 'HASAN', username: 'student43', password: '43' },
    { name: 'HINA', username: 'student44', password: '44' },
    { name: 'IFTIKHAR', username: 'student45', password: '45' },
    { name: 'IHSAN', username: 'student46', password: '46' },
    { name: 'IMAD', username: 'student47', password: '47' },
    { name: 'INAYA', username: 'student48', password: '48' },
    { name: 'IRFAN', username: 'student49', password: '49' },
    { name: 'ISHA', username: 'student50', password: '50' },
    { name: 'JABIR', username: 'student51', password: '51' },
    { name: 'JAMIL', username: 'student52', password: '52' },
    { name: 'JAVED', username: 'student53', password: '53' },
    { name: 'KABIR', username: 'student54', password: '54' },
    { name: 'KAMAL', username: 'student55', password: '55' },
    { name: 'KARIM', username: 'student56', password: '56' },
    { name: 'KHALID', username: 'student57', password: '57' },
    { name: 'KHURRAM', username: 'student58', password: '58' },
    { name: 'LATIF', username: 'student59', password: '59' },
    { name: 'LAILA', username: 'student60', password: '60' },
    { name: 'MAHMOOD', username: 'student61', password: '61' },
    { name: 'MAJID', username: 'student62', password: '62' },
    { name: 'MANSOOR', username: 'student63', password: '63' },
    { name: 'MEHRAN', username: 'student64', password: '64' },
    { name: 'MIRZA', username: 'student65', password: '65' },
    { name: 'MUBASHIR', username: 'student66', password: '66' },
    { name: 'MUDASSIR', username: 'student67', password: '67' },
    { name: 'MUNIR', username: 'student68', password: '68' },
    { name: 'MURTAZA', username: 'student69', password: '69' },
    { name: 'MUSHTAQ', username: 'student70', password: '70' },
    { name: 'NADEEM', username: 'student71', password: '71' },
    { name: 'NADIR', username: 'student72', password: '72' },
    { name: 'NADIA', username: 'student73', password: '73' },
    { name: 'NAEEM', username: 'student74', password: '74' },
    { name: 'NAFISA', username: 'student75', password: '75' },
    { name: 'NAJAM', username: 'student76', password: '76' },
    { name: 'NAJMA', username: 'student77', password: '77' },
    { name: 'NASIR', username: 'student78', password: '78' },
    { name: 'NAVEED', username: 'student79', password: '79' },
    { name: 'NAZIR', username: 'student80', password: '80' },
    { name: 'NESAR', username: 'student81', password: '81' },
    { name: 'NIDA', username: 'student82', password: '82' },
    { name: 'NOMAN', username: 'student83', password: '83' },
    { name: 'NOREEN', username: 'student84', password: '84' },
    { name: 'OMER', username: 'student85', password: '85' },
    { name: 'PERVEZ', username: 'student86', password: '86' },
    { name: 'QADIR', username: 'student87', password: '87' },
    { name: 'RAHIL', username: 'student88', password: '88' },
    { name: 'RAHMAN', username: 'student89', password: '89' },
    { name: 'RASHID', username: 'student90', password: '90' },
    { name: 'RIAZ', username: 'student91', password: '91' },
    { name: 'RUBINA', username: 'student92', password: '92' },
    { name: 'SABAH', username: 'student93', password: '93' },
    { name: 'SABIR', username: 'student94', password: '94' },
    { name: 'SALMA', username: 'student95', password: '95' },
    { name: 'SAMINA', username: 'student96', password: '96' },
    { name: 'SHAHID', username: 'student97', password: '97' },
    { name: 'SHAKEEL', username: 'student98', password: '98' },
    { name: 'SHAMIM', username: 'student99', password: '99' },
    { name: 'ZAHID', username: 'student100', password: '100' }
];

// ============================================================
// TEST 1: Computer Basics (20 Questions)
// ============================================================
const TEST1_QUESTIONS = [
    { id: 1, question: "According to the presentation, a computer is an electronic device that takes some input, processes it, and produces ______.", options: { A: "memory", B: "output", C: "software", D: "hardware" }, correct: "B" },
    { id: 2, question: "Which of the following are the four essential functions a computer performs?", options: { A: "Accepts, Manipulates, Produces, Stores", B: "Inputs, Outputs, Prints, Saves", C: "Reads, Writes, Calculates, Displays", D: "Accepts, Deletes, Produces, Shares" }, correct: "A" },
    { id: 3, question: "When did the first fully electronic computers appear?", options: { A: "1920s", B: "1940s", C: "1960s", D: "1980s" }, correct: "B" },
    { id: 4, question: "In medicine, computers support disease diagnosis and treatment planning, helping clinicians identify cures more ______.", options: { A: "cheaply", B: "efficiently", C: "slowly", D: "manually" }, correct: "B" },
    { id: 5, question: "Which specialized software drives magnetic resonance imaging (MRI) to examine the body's internal organs?", options: { A: "System software", B: "Application software", C: "Medical imaging software", D: "Barcode software" }, correct: "C" },
    { id: 6, question: "In the Input–Process–Output cycle, what is described as 'data provided to the computer for processing'?", options: { A: "Output", B: "Process", C: "Input", D: "Storage" }, correct: "C" },
    { id: 7, question: "In the Input–Process–Output cycle, what does the OUTPUT stage deliver?", options: { A: "The raw data before processing", B: "The commands applied to data", C: "The data produced after processing — the result of the input", D: "The instructions stored in memory" }, correct: "C" },
    { id: 8, question: "Unprocessed facts and figures are called ______.", options: { A: "information", B: "data", C: "output", D: "software" }, correct: "B" },
    { id: 9, question: "The word 'information' comes from the Latin informare, which means ______.", options: { A: "'to compute'", B: "'to give form to'", C: "'to store data'", D: "'to process'" }, correct: "B" },
    { id: 10, question: "Which of the following is TRUE about hardware?", options: { A: "It is intangible and cannot be touched", B: "It is a set of instructions that guides the computer", C: "It refers to the physical, tangible parts of a computer", D: "It only includes the CPU" }, correct: "C" },
    { id: 11, question: "Which of the following is an example of System Software?", options: { A: "MS Paint", B: "Notepad", C: "Photoshop", D: "Windows" }, correct: "D" },
    { id: 12, question: "Application software is best described as:", options: { A: "Main, general-purpose software that operates the hardware", B: "Specific-purpose software used by end users to complete particular tasks", C: "Software that only works in the background", D: "Software that cannot be seen or used" }, correct: "B" },
    { id: 13, question: "What are the three main components of a computer according to the presentation?", options: { A: "Monitor, Keyboard, Mouse", B: "Input Devices, Central Processing Unit, Output Devices", C: "RAM, ROM, Hard Disk", D: "System Software, Application Software, Hardware" }, correct: "B" },
    { id: 14, question: "Which keyboard layout is the standard used in Western countries, named for the first six alphabetic keys on the top row?", options: { A: "AZERTY", B: "QWERTY", C: "QWERTZ", D: "ABCDEF" }, correct: "B" },
    { id: 15, question: "Which input device is described as 'a screen you touch with a finger to enter information (e.g., ATMs)'?", options: { A: "Joystick", B: "Touch Screen", C: "Scanner", D: "Bar Code Scanner" }, correct: "B" },
    { id: 16, question: "Which output device 'gives sound output similar to speakers, but worn on the ears so only one person hears it'?", options: { A: "Speaker", B: "Monitor", C: "Headphones", D: "Printer" }, correct: "C" },
    { id: 17, question: "Which part of the CPU performs arithmetic functions (addition, subtraction, multiplication, division) and logical functions (AND, OR)?", options: { A: "Control Unit", B: "Registers", C: "Arithmetic & Logic Unit (ALU)", D: "RAM" }, correct: "C" },
    { id: 18, question: "Which part of the CPU is described as 'small, high-speed storage areas inside the processor — faster than any other memory'?", options: { A: "ALU", B: "Registers", C: "Control Unit", D: "ROM" }, correct: "B" },
    { id: 19, question: "Which of the following is TRUE about RAM?", options: { A: "It is non-volatile and retains data without power", B: "It is a form of volatile memory that does not retain data without power", C: "It is read-only memory", D: "It is an optical disc" }, correct: "B" },
    { id: 20, question: "Which storage device is described as 'the main storage device — stores important data, the operating system, and application software'?", options: { A: "Floppy Disk", B: "Compact Disc (CD)", C: "Hard Disk", D: "USB Flash Drive" }, correct: "C" }
];

// ============================================================
// TEST 2: The Internet (20 Questions)
// ============================================================
const TEST2_QUESTIONS = [
    { id: 1, question: "What does the term Information Technology (IT) refer to?", options: { A: "An entire industry only", B: "The use of computers and software to manage information", C: "Only computer hardware", D: "Only the Internet" }, correct: "B" },
    { id: 2, question: "IT is the branch of engineering that deals with computers and telecommunications to ______, store, and transmit information.", options: { A: "Delete", B: "Retrieve", C: "Print", D: "Format" }, correct: "B" },
    { id: 3, question: "What does the word 'Internet' literally stand for?", options: { A: "Internal Network", B: "Inter (between) + Net (network)", C: "International Network", D: "Interface Network" }, correct: "B" },
    { id: 4, question: "The Internet is a worldwide network connecting hundreds of thousands of smaller networks in more than ______ countries.", options: { A: "50", B: "100", C: "200", D: "500" }, correct: "C" },
    { id: 5, question: "Unlike the light bulb or telephone, the Internet has ______.", options: { A: "One inventor", B: "No single inventor", C: "Two inventors", D: "A government inventor" }, correct: "B" },
    { id: 6, question: "The Internet began in the United States more than 50 years ago as a government tool during the ______.", options: { A: "World War II", B: "Cold War", C: "Industrial Revolution", D: "Space Race" }, correct: "B" },
    { id: 7, question: "Who is known as the Father of the Internet?", options: { A: "Bill Gates", B: "Vinton Cerf", C: "Tim Berners-Lee", D: "Steve Jobs" }, correct: "B" },
    { id: 8, question: "What does TCP/IP stand for?", options: { A: "Transmission Control Protocol / Internet Protocol", B: "Transfer Control Program / Internet Program", C: "Total Control Protocol / Internal Protocol", D: "Transmission Computer Program / Internet Program" }, correct: "A" },
    { id: 9, question: "ARPA stands for ______.", options: { A: "Advanced Research Program Agency", B: "Advanced Research Project Agency", C: "American Research Project Agency", D: "Advanced Regional Project Agency" }, correct: "B" },
    { id: 10, question: "The experimental computer network started on January 2, 1969 was first named ______.", options: { A: "INTERNET", B: "ARPA", C: "ARPANET", D: "TCP/IP" }, correct: "C" },
    { id: 11, question: "The first page of a website (which starts the website) is called the ______.", options: { A: "Webpage", B: "Home Page", C: "Browser", D: "Domain" }, correct: "B" },
    { id: 12, question: "What is a 'web host'?", options: { A: "A software used to browse the web", B: "A computer that provides space to place a website for viewing on the Internet", C: "A name or address for a particular website", D: "A collection of web pages" }, correct: "B" },
    { id: 13, question: "Transferring data from your local computer to the server is called ______.", options: { A: "Uploading", B: "Downloading", C: "Browsing", D: "Hosting" }, correct: "A" },
    { id: 14, question: "Copying files back from the server to your local computer is called ______.", options: { A: "Uploading", B: "Downloading", C: "Hosting", D: "Surfing" }, correct: "B" },
    { id: 15, question: "Today's e-mail is based on which model?", options: { A: "Real-time model", B: "Store-and-forward", C: "Peer-to-peer", D: "Broadcast" }, correct: "B" },
    { id: 16, question: "In an e-mail address, the ______ symbol is unique to e-mail addresses.", options: { A: "#", B: "@", C: "$", D: "&" }, correct: "B" },
    { id: 17, question: "The World Wide Web (WWW) is a system of interlinked ______ documents accessed via the Internet.", options: { A: "Text", B: "Hypertext", C: "Image", D: "Video" }, correct: "B" },
    { id: 18, question: "Which protocol is described as 'the foundation of data communication for the World Wide Web'?", options: { A: "FTP", B: "HTTP", C: "IP", D: "TCP" }, correct: "B" },
    { id: 19, question: "What does URL stand for?", options: { A: "Uniform Resource Locator", B: "Universal Reference Link", C: "Uniform Reference Locator", D: "Universal Resource Link" }, correct: "A" },
    { id: 20, question: "Which search engine is described as 'privacy-focused, does not track users'?", options: { A: "Google", B: "Bing", C: "Yahoo! Search", D: "DuckDuckGo" }, correct: "D" }
];

// ============================================================
// TEST 3: Understanding Essential Computer Concepts (20 Questions)
// ============================================================
const TEST3_QUESTIONS = [
    { id: 1, question: "First generation computers (1940–1956) used which of the following as circuitry?", options: { A: "Transistors", B: "Integrated Circuits", C: "Vacuum tubes", D: "Microprocessors" }, correct: "C" },
    { id: 2, question: "Which of the following were notable machines of the first generation era?", options: { A: "UNIVAC and ENIAC", B: "IBM PC and Apple Macintosh", C: "Cray and Deep Blue", D: "Altair and Commodore" }, correct: "A" },
    { id: 3, question: "In first generation computers, input was based on ______.", options: { A: "Keyboard and mouse", B: "Punched cards and paper tape", C: "Touchscreen", D: "Voice recognition" }, correct: "B" },
    { id: 4, question: "In second generation computers (1956–1963), vacuum tubes were replaced by ______.", options: { A: "Integrated Circuits", B: "Microprocessors", C: "Transistors", D: "Artificial Intelligence" }, correct: "C" },
    { id: 5, question: "The processor of second generation computers operated in the ______ speed range.", options: { A: "Millisecond", B: "Microsecond", C: "Nanosecond", D: "Picosecond" }, correct: "B" },
    { id: 6, question: "The development of the Integrated Circuit (IC) was the hallmark of which generation?", options: { A: "First Generation", B: "Second Generation", C: "Third Generation", D: "Fourth Generation" }, correct: "C" },
    { id: 7, question: "Which language was used for programming in third generation computers?", options: { A: "Machine language", B: "Assembly language", C: "High-level language", D: "Natural language" }, correct: "B" },
    { id: 8, question: "Fourth generation computers were developed using ______ technology.", options: { A: "Vacuum tube", B: "Transistor", C: "Microprocessor", D: "ULSI" }, correct: "C" },
    { id: 9, question: "The processors of fourth generation computers operate in the ______ speed range.", options: { A: "Millisecond", B: "Microsecond", C: "Nanosecond", D: "Picosecond" }, correct: "D" },
    { id: 10, question: "Fifth generation computers (2010–Present) are based on which technology?", options: { A: "Vacuum tubes", B: "Transistors", C: "Integrated Circuits", D: "ULSI (Ultra Large Scale Integration)" }, correct: "D" },
    { id: 11, question: "All AI computer programs are built on which two basic elements?", options: { A: "Hardware and software", B: "A knowledge base and an inferencing capability", C: "Input and output", D: "Data and information" }, correct: "B" },
    { id: 12, question: "Which expert system supports the diagnosis of respiratory conditions?", options: { A: "PROSPECTOR", B: "PUFF", C: "ENIAC", D: "UNIVAC" }, correct: "B" },
    { id: 13, question: "Which of the following is the largest and fastest of all computers?", options: { A: "Mainframe", B: "Supercomputer", C: "Desktop", D: "Notebook" }, correct: "B" },
    { id: 14, question: "Which computer is described as 'a mobile computer with a touchscreen display, circuitry and battery in a single unit'?", options: { A: "Notebook", B: "Desktop", C: "Tablet PC", D: "Mainframe" }, correct: "C" },
    { id: 15, question: "Which of the following is the main electronic component of the computer where processing tasks occur?", options: { A: "Hard Disk", B: "Motherboard", C: "Modem", D: "ROM BIOS" }, correct: "B" },
    { id: 16, question: "What does ROM BIOS stand for?", options: { A: "Read Only Memory Basic Input/Output System", B: "Random Only Memory Basic Input/Output System", C: "Read Only Memory Binary Input/Output System", D: "Random Only Memory Binary Input/Output System" }, correct: "A" },
    { id: 17, question: "Eight bits make a ______.", options: { A: "Kilobyte", B: "Byte", C: "Megabyte", D: "Gigabyte" }, correct: "B" },
    { id: 18, question: "One Gigabyte (GB) is equal to ______.", options: { A: "One thousand bytes", B: "One million bytes", C: "One billion bytes", D: "One trillion bytes" }, correct: "C" },
    { id: 19, question: "What is virtual memory?", options: { A: "Extra memory that simulates RAM if more is needed", B: "A type of ROM", C: "A storage device", D: "A type of optical drive" }, correct: "A" },
    { id: 20, question: "Which of the following is TRUE about CD-ROMs?", options: { A: "They allow you to write and modify data", B: "They are for 'read-only' access", C: "They are the fastest storage devices", D: "They can only store audio files" }, correct: "B" }
];

// ============================================================
// TEST 4: Cyber Security (20 Questions)
// ============================================================
const TEST4_QUESTIONS = [
    { id: 1, question: "What is Cyber Security?", options: { A: "The body of technologies, processes and practices designed to protect networks, computers, programs and data from attack, damage or unauthorized access", B: "A type of computer virus", C: "The act of hacking computers and networks", D: "A programming language" }, correct: "A" },
    { id: 2, question: "Cyber attacks are usually aimed at ______.", options: { A: "Speeding up computers", B: "Accessing, changing, or destroying sensitive information", C: "Installing new software", D: "Updating operating systems" }, correct: "B" },
    { id: 3, question: "What is the goal of cyber security?", options: { A: "To ensure confidentiality, integrity, and availability of data", B: "To spread viruses", C: "To hack into networks", D: "To slow down computers" }, correct: "A" },
    { id: 4, question: "Cyber crime includes any criminal act dealing with computers and networks, also called ______.", options: { A: "Spamming", B: "Hacking", C: "Browsing", D: "Programming" }, correct: "B" },
    { id: 5, question: "Most cyber crime is committed by cyber criminals or hackers who want to ______.", options: { A: "Help people", B: "Make money", C: "Fix software", D: "Teach security" }, correct: "B" },
    { id: 6, question: "What is a computer virus?", options: { A: "A hardware component", B: "A computer program that can copy itself and infect a computer without the permission or knowledge of the owner", C: "A type of anti-virus software", D: "A network cable" }, correct: "B" },
    { id: 7, question: "One of the first detected viruses was the ______ virus in the early 1970s.", options: { A: "Melissa", B: "Creeper", C: "ILOVEYOU", D: "Conficker" }, correct: "B" },
    { id: 8, question: "A time bomb is a virus program that performs a malicious activity on ______.", options: { A: "A particular date or time", B: "A certain action or condition", C: "Every computer startup", D: "Opening a document" }, correct: "A" },
    { id: 9, question: "A logical bomb is a virus program that performs an activity when ______.", options: { A: "A particular date or time arrives", B: "A certain action or condition has occurred", C: "The computer is turned off", D: "A file is deleted" }, correct: "B" },
    { id: 10, question: "Which of the following is a famous example of a worm?", options: { A: "Creeper", B: "Concept", C: "ILOVEYOU", D: "Melissa" }, correct: "C" },
    { id: 11, question: "A boot sector virus infects the boot sector of computers and is loaded into main memory during ______.", options: { A: "System shutdown", B: "System boot", C: "File deletion", D: "Internet browsing" }, correct: "B" },
    { id: 12, question: "A macro virus is associated with application software like ______.", options: { A: "Word and Excel", B: "Chrome and Firefox", C: "Windows and Linux", D: "Photoshop and Illustrator" }, correct: "A" },
    { id: 13, question: "Most macro viruses are VBA viruses — VBA is the language used by Microsoft for its applications. What does VBA stand for?", options: { A: "Visual Basic for Applications", B: "Visual Binary Applications", C: "Virtual Basic for Applications", D: "Variable Basic for Applications" }, correct: "A" },
    { id: 14, question: "Script viruses are written in scripting languages such as ______.", options: { A: "C++ and Java", B: "VBScript or JavaScript", C: "Python and Ruby", D: "HTML and CSS" }, correct: "B" },
    { id: 15, question: "What is a Trojan Horse?", options: { A: "A virus that replicates itself across networks", B: "A destructive program that usually pretends to be a computer game or application software", C: "A type of anti-virus software", D: "A hardware component" }, correct: "B" },
    { id: 16, question: "What do key loggers do?", options: { A: "Speed up the computer", B: "Record every keystroke to steal passwords and credit card numbers", C: "Clean the computer system", D: "Update software automatically" }, correct: "B" },
    { id: 17, question: "According to the presentation, how often should you update your anti-virus software?", options: { A: "Once a year", B: "At least weekly", C: "Once a month", D: "Never" }, correct: "B" },
    { id: 18, question: "Which of the following is a safe habit to prevent virus infection?", options: { A: "Open all e-mail attachments immediately", B: "Scan all external media and downloads before opening them", C: "Share Drive C: without a password", D: "Disable anti-virus software" }, correct: "B" },
    { id: 19, question: "According to the presentation, where should computers be kept for Internet safety at home?", options: { A: "In private bedrooms", B: "In common family areas", C: "In the basement", D: "In the kitchen" }, correct: "B" },
    { id: 20, question: "Which of the following is a recommended action for Internet safety at home?", options: { A: "Set up Internet filtering and schedule Internet access", B: "Allow unlimited access to all websites", C: "Keep computers in private bedrooms", D: "Never talk to children about online safety" }, correct: "A" }
];

// ============================================================
// ALL TESTS
// ============================================================
export const ALL_TESTS = {
    test1: {
        id: 'test1',
        name: 'Computer Basics',
        description: '20 MCQs on Computer Basics',
        totalQuestions: 20,
        timeLimit: 25,
        passingScore: 50,
        questions: TEST1_QUESTIONS
    },
    test2: {
        id: 'test2',
        name: 'The Internet',
        description: '20 MCQs on The Internet',
        totalQuestions: 20,
        timeLimit: 25,
        passingScore: 50,
        questions: TEST2_QUESTIONS
    },
    test3: {
        id: 'test3',
        name: 'Understanding Essential Computer Concepts',
        description: '20 MCQs on Essential Computer Concepts',
        totalQuestions: 20,
        timeLimit: 25,
        passingScore: 50,
        questions: TEST3_QUESTIONS
    },
    test4: {
        id: 'test4',
        name: 'Cyber Security',
        description: '20 MCQs on Cyber Security',
        totalQuestions: 20,
        timeLimit: 25,
        passingScore: 50,
        questions: TEST4_QUESTIONS
    }
};

// ============================================================
// 🔥 FIREBASE-BASED TEST SWITCHING
// ============================================================

// Global variable for active test
let currentActiveTestId = 'test1';

// ============================================================
// GET ACTIVE TEST FROM FIREBASE
// ============================================================
export const getActiveTestFromFirebase = async () => {
    try {
        const configRef = doc(db, 'system-config', 'active-test');
        const configSnap = await getDoc(configRef);
        
        if (configSnap.exists()) {
            const data = configSnap.data();
            const testId = data.activeTestId;
            
            if (ALL_TESTS[testId]) {
                currentActiveTestId = testId;
                console.log('✅ Active test from Firebase:', testId);
                return testId;
            }
        } else {
            // Create default config
            await setDoc(configRef, {
                activeTestId: 'test1',
                updatedAt: new Date().toISOString()
            });
        }
    } catch (error) {
        console.error('❌ Error:', error);
    }
    return currentActiveTestId;
};

// ============================================================
// SET ACTIVE TEST IN FIREBASE
// ============================================================
export const setActiveTestInFirebase = async (testId) => {
    try {
        if (!ALL_TESTS[testId]) {
            console.error('❌ Invalid test:', testId);
            return false;
        }
        
        const configRef = doc(db, 'system-config', 'active-test');
        await setDoc(configRef, {
            activeTestId: testId,
            activeTestName: ALL_TESTS[testId].name,
            updatedAt: new Date().toISOString(),
            updatedBy: 'admin'
        }, { merge: true });
        
        currentActiveTestId = testId;
        console.log('✅ Test switched in Firebase:', testId);
        return true;
    } catch (error) {
        console.error('❌ Error:', error);
        return false;
    }
};

// ============================================================
// GETTERS
// ============================================================
export const getCurrentTestId = () => currentActiveTestId;
export const getCurrentTestQuestions = () => ALL_TESTS[currentActiveTestId].questions;
export const getCurrentTestConfig = () => ALL_TESTS[currentActiveTestId];

// ============================================================
// DEFAULT EXPORTS
// ============================================================
export const ACTIVE_TEST_ID = 'test1';
export const EXAM_QUESTIONS = ALL_TESTS['test1'].questions;
export const CURRENT_TEST = ALL_TESTS['test1'];

// ============================================================
// GET ALL TESTS LIST
// ============================================================
export function getAllTests() {
    return Object.keys(ALL_TESTS).map(key => ({
        id: ALL_TESTS[key].id,
        name: ALL_TESTS[key].name,
        description: ALL_TESTS[key].description,
        totalQuestions: ALL_TESTS[key].totalQuestions,
        timeLimit: ALL_TESTS[key].timeLimit,
        passingScore: ALL_TESTS[key].passingScore,
        isCurrent: key === currentActiveTestId
    }));
}
