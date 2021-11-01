const quizQuestionHistory = [
    {
        question: '1. The Satapatha Brahmana and Taitriya Brahmana are the Brahmana texts of',
        ans1: 'Rigveda',
        ans2: 'Yajurveda',
        ans3: 'Samaveda',
        ans4: 'Atharavaveda',
        ans: 'ans2'
    },
    {
        question: '2. Who among the following was the founder of Pushyabhuti Dynasty ?',
        ans1: 'Pushyabhuti',
        ans2: 'Prabhakar Vardhan',
        ans3: 'Aditya vardhan',
        ans4: 'Harshavardhan',
        ans: 'ans1'
    },
    {
        question: '3. Taxila was the capital of which ancient Mahajanpada ?',
        ans1: 'Nedunjeral Adan, the Chera ruler',
        ans2: 'Senguttuvan, the Chera ruler',
        ans3: 'Karikala, the Chola ruler',
        ans4: 'Nedujeliyan, the Pandyan ruler',
        ans: 'ans2'
    },
    {
        question: '4. Which among the following ruler is known for Junagarh Rock Inscription?',
        ans1: 'Rudradaman I',
        ans2: ' Jivadaman',
        ans3: 'Damajadasri',
        ans4: 'Jayadaman',
        ans: 'ans1'
    },
    {
        question: '5. Charak was a contemporary of which of the following Kings?',
        ans1: 'Chandra Gupta Maurya',
        ans2: 'Kanishka',
        ans3: 'Ashoka',
        ans4: 'Akbar',
        ans: 'ans2'
    }

];

const quizQuestionPolitical = [
    {
        question: '1. Which article of the Indian Constitution provides for Vice-President of India?',
        ans1: 'Article 61',
        ans2: 'Article 62',
        ans3: 'Article 63',
        ans4: 'Article 65',
        ans: 'ans3'
    },
    {
        question: '2. In which year, the first meeting of Rajya Sabha was held in Independent India?',
        ans1: '1950',
        ans2: '1952',
        ans3: '1953',
        ans4: '1954',
        ans: 'ans2'
    },
    {
        question: '3.The chairman of the Committee on Public Accounts is nominated by which among the following?',
        ans1: 'President',
        ans2: 'Lok Sabha Speaker',
        ans3: 'Lok Sabha Secretary',
        ans4: 'Cabinet Committee on Parliamentary Affairs',
        ans: 'ans2'
    },
    {
        question: '4. Which among the following is the basis of representation in Rajya Sabha for States?',
        ans1: 'Area',
        ans2: 'Population',
        ans3: 'Both A & B',
        ans4: 'Neither A nor B',
        ans: 'ans2'
    },
    {
        question: '5. Which among the following acts, incorporated 11th Fundamental duty in Indian Constitution?',
        ans1: '42nd Amendment Act',
        ans2: '44th Amendment Act',
        ans3: '86th Amendment Act',
        ans4: '100th Amendment Act',
        ans: 'ans3'
    }

];

let questionCount = 0;
let score = 0;
let i;
let topicSelected;


const questionDiv = document.getElementById('questionDiv');
const scoreCard = document.getElementById('scoreCard');
const start = document.getElementById('start');
const optionHistory = document.getElementById('history');
const optionPolitical = document.getElementById('political');
const question = document.getElementById('questions');
const options1 = document.getElementById('option1');
const options2 = document.getElementById('option2');
const options3 = document.getElementById('option3');
const options4 = document.getElementById('option4');
const answer = document.querySelectorAll('.ans');
const nextBtn = document.getElementById('nextbtn');
const playAgain = document.getElementById('refresh');
const submitBtn = document.getElementById('submit');
const setTimer = document.getElementById('setTimer');
const timer = document.getElementById('timer');

const timeStart = 2;
let time = timeStart * 60;

function updateTime() {
    const min = Math.floor(time/60);
    let sec = time % 60;
    
    if (min==2) {
        setTimer.innerHTML = `<span class="h2">${min} : ${sec}${'0'}</span>`
        }
        else if(min==0 && sec==0){
            timeOver();
        }
        else if(min<=1 && sec<10){
            setTimer.innerHTML = `<span class="h2">${min} : ${'0'}${sec}</span>`
        }
        else if(min<=1){
            setTimer.innerHTML = `<span class="h2">${min} : ${sec}</span>`
        }
    time--;
}


function setTopic() {
    let chooseTopic = document.getElementById('topic').value;
    topicSelected = chooseTopic;

}

start.addEventListener('click', () => {
    

    if (topicSelected === 'History') {
        start.disabled=true;
       
        questionDiv.style.display = 'block';
        setInterval(updateTime, 1000);
       
        
        historyQuestion();

        nextBtn.addEventListener('click', () => {
            const checkAnswer = getAnswer();
            if (questionCount === quizQuestionHistory.length - 1) {
                nextBtn.disabled = true;
                submitBtn.disabled = false;
                showScore();

            }
            if (checkAnswer === quizQuestionHistory[questionCount].ans) {
                score++;
            }
            questionCount++;

            if (questionCount < quizQuestionHistory.length) {
                answer[i].checked = false;
                historyQuestion();
            }


        })

    }
    else if (topicSelected === 'Political') {
        start.disabled=true;

        questionDiv.style.display = 'block';
        setInterval(updateTime, 1000);
        politicalQuestion();

        nextBtn.addEventListener('click', () => {
            const checkAnswer = getAnswer();
            if (questionCount === quizQuestionPolitical.length - 1) {
                nextBtn.disabled = true;
                submitBtn.disabled = false;
                showScore();

            }
            if (checkAnswer === quizQuestionPolitical[questionCount].ans) {
                score++;
            }
            questionCount++;

            if (questionCount < quizQuestionPolitical.length) {
                answer[i].checked = false;
                politicalQuestion();
            }

        })
    }
})



const historyQuestion = () => {
    const questionList = quizQuestionHistory[questionCount];

    question.innerHTML = questionList.question;
    options1.innerHTML = questionList.ans1;
    options2.innerHTML = questionList.ans2;
    options3.innerHTML = questionList.ans3;
    options4.innerHTML = questionList.ans4;


}
const politicalQuestion = () => {
    const questionList = quizQuestionPolitical[questionCount];

    question.innerHTML = questionList.question;
    options1.innerHTML = questionList.ans1;
    options2.innerHTML = questionList.ans2;
    options3.innerHTML = questionList.ans3;
    options4.innerHTML = questionList.ans4;


}


function getAnswer() {

    for (i = 0; answer.length; i++) {
        let selectedAnswer;
        if (answer[i].checked) {
            selectedAnswer = answer[i].id;
            return selectedAnswer
        }

    }
}

function showScore() {
    submitBtn.addEventListener('click', function submitBtnn() {
        submitBtn.disabled = true;
        questionDiv.style.display = 'none'
        scoreCard.style.display = 'block';
        scoreCard.innerHTML = `
        <h3>Score ${score}/${quizQuestionHistory.length}</h3>
        <button class="btn btn-primary" onclick="location.reload()">play again</button>
        `
        document.getElementById('topic').style.display = 'none';
        document.getElementById('topics').style.display = 'none';
        document.getElementById('setTimer').style.display = 'none';
        document.getElementById('start').style.display = 'none';
        timer.style.display = 'none';
    })
}

function timeOver() {
    nextBtn.disabled = true;
    submitBtn.disabled = true;
    submitBtn.disabled = true;
        questionDiv.style.display = 'none'
        scoreCard.style.display = 'block';
        scoreCard.innerHTML = `
        <h3>Score ${score}/${quizQuestionHistory.length}</h3>
        
        
        `
        document.getElementById('topic').style.display = 'none';
        document.getElementById('topics').style.display = 'none';
        document.getElementById('setTimer').style.display = 'none';
        document.getElementById('start').style.display = 'none';
        timer.style.display = 'none';
}




