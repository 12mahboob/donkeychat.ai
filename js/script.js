// Responses object
const responses = {

    "Hello": "ہیلو! کیا حال چال ہیں؟",
    "How are you?": "میں ٹھیک آپ کیسے ھیں۔",
    "What's your name?": "میرا نام گدھا چیٹ  ہے ۔",
    "What do you do?": "میں آپ کی مدد کرکے کبھی کبھی خود بھی ہنس لیتا ہوں۔",
    "Where are you from?": "میں ڈیجیٹل دنیا سے آیا ہوں، قریب ہی کہیں۔",
    "Tell me a joke": "ایک گدھا دوسرے سے کہتا ہے، 'بھائی، آج ہنسنے کا دل نہیں کر رہا' دوسرا کہتا ہے، 'کوئی بات نہیں، پھر بھی ہنس دو'",
    "What's the time?": "مجھے وقت کا پتہ نہیں، معاف کرنا۔",
    "How old are you?": "میری عمر ڈیجیٹل ہے، ہمیشہ جوان رھتا ہوں۔",
    "What is AI?": "AI یعنی مصنوعی ذہانت، جیسے گدھا سمجھدار ہو جائے",
    "How's your day?": "میرے لیے دن کا کوئی میٹر نہیں ہوتا، مگر آپ کا کیسا گزر رہا ہے؟",
    "Do you dream?": "میں کبھی روبوٹ خواب نہیں دیکھتا، آپ کو خواب میں کیا دکھائی دیتا ہے؟",
    "What's your favorite food?": "میں تو صرف ڈیٹا کھاتا ہوں، آپ کو کیا پسند ہے؟",
    "Can you sing?": "میں گانے نہیں گا سکتا، میں بس جواب دینے کی کوشش کرتا ہوں۔",
    "Tell me something interesting.": "کیا آپ جانتے ہیں گدھے کی آواز گھڑے کی آواز سے بلکل مختلف ہوتی ہے؟",
    "Can you dance?": "میں رقص نہیں کر سکتا، مگر آپ کیا کر سکتے ہیں؟",
    "Tell me a fun fact.": "گدھے کے کان مسموں کی طرح ہوتے ہیں، آپ نے کبھی دیکھا ہے؟",
    "What's the meaning of life?": "جی آپکو کیا لگتا ہے، زندگی کا مطلب کیا ہے؟",
    "Do you like coding?": "میں کوڈنگ پسند کرتا ہوں، کیا آپ نے کبھی کوڈ لکھا ہے؟",
    "Can you tell me a story?": "ایک دفعہ کی بات ہے، گدھا نے ایک کہانی سنائی، کیا آپ بھی سنانا چاہیں گے؟",
    "What's your favorite movie?": "میری پسندیدہ مووی 'The Matrix' ہے، آپ کی کون سی ہے؟",
    "Can you tell the future?": "میں نہیں، مگر آپ کیا سوچتے ہیں؟",
    "What's your favorite song?": "میرے پسندیدہ گانے کی فہرست بہت لمبی ہے، آپ کا کیا ہے؟",
    "Do you have any pets?": "میں دیجیٹل دنیا کا ہوں، پالتو جانور نہیں ہوتے۔"
};

// Variable to count questions asked
let questionCount = 0;

// Function to handle user input and response
function handleSearch() {
    const searchBar = document.getElementById('search-bar');
    const searchButton = document.querySelector('.search-button');
    const processing = document.getElementById('processing');
    const responseContainer = document.getElementById('response-container');
    const questionText = searchBar.value.trim();

    if (questionText) {
        questionCount++;
        const questionBox = document.createElement('div');
        questionBox.className = 'question';
        questionBox.innerText = questionText;

        const answerBox = document.createElement('div');
        answerBox.className = 'answer';

        // Default answer if question is not recognized
        let answerText = 'مجھے سوال سمجھ نہیں آیا۔';

        // Check if question is in responses object
        const responseKeys = Object.keys(responses);
        if (questionCount <= 500 && responseKeys.length >= questionCount) {
            answerText = responses[responseKeys[questionCount - 1]];
        }

        // Append question and answer to response container
        responseContainer.appendChild(questionBox);
        responseContainer.appendChild(answerBox);

        // Clear search bar and disable button during processing
        searchBar.value = '';
        searchBar.disabled = true;
        searchButton.disabled = true;

        // Animate question box using GSAP
        gsap.fromTo(questionBox, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1 });

        // Display processing animation
        processing.style.display = 'block';

        setTimeout(() => {
            // Hide processing animation
            processing.style.display = 'none';

            // Animate answer box character by character
            let currentText = '';
            let index = 0;
            const interval = setInterval(() => {
                currentText += answerText[index];
                answerBox.innerText = currentText;
                index++;
                if (index >= answerText.length) {
                    clearInterval(interval);
                    searchBar.disabled = false;
                    searchButton.disabled = false;
                    searchBar.focus(); // Autofocus on search bar after response
                }
            }, 50);

            // Animate answer box using GSAP
            gsap.fromTo(answerBox, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1 });

            // Scroll to the bottom to show the latest question and answer
            setTimeout(() => {
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }, 500);
        }, 2000);
    }
}

// GSAP animations for initial load
gsap.fromTo(".outer-circle", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1.5, delay: 0.5 });

gsap.fromTo(".inner-circle", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1.5, delay: 1 });

gsap.fromTo("nav", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });

// Auto-focus on the search bar when the page loads
window.onload = function () {
    const searchBar = document.getElementById('search-bar');
    const searchButton = document.querySelector('.search-button');
    searchBar.disabled = false;
    searchButton.disabled = false;
    searchBar.focus();
}

