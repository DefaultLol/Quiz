const questionNumber=document.querySelector(".question-number");
const questionText=document.querySelector(".question-text");
const questionContainer=document.querySelector(".option-container");
const answersIndicator=document.querySelector(".answers-indicator");
const nextBtn=document.getElementById("next");
const previousBtn=document.getElementById("previous");
const quizBox=document.querySelector(".quiz-box");
const homeBox=document.querySelector(".home-box");

let questionCounter=0;
let currentQuestion;
let availableQuestions=[];
let answers=[];
let currentOption=null;
let selected=[];

function setAvailableQuestions(){
    const totalQuestion=quiz.length;
    for(let i=0;i<totalQuestion;i++){
        availableQuestions.push(quiz[i]);
    }
}

function getNewQuestion(){
    console.log(questionCounter);
    if(questionCounter != 0){
        previousBtn.classList.remove('hide');
    }
    if(questionCounter >= quiz.length){
        nextBtn.classList.add('hide');
    }
    questionContainer.innerHTML='';
    questionNumber.innerHTML="Questio N°" + (questionCounter+1) + " of " + quiz.length;

    currentQuestion=quiz[questionCounter];
    questionText.innerHTML=currentQuestion.q;
    selected=answers.filter(doc => doc.id==questionCounter);
    let currentObject=answers.filter((elt)=> elt.id===questionCounter.toString());
    for(let i=0;i<currentQuestion.options.length;i++){
        let styling="";
        selected.forEach(doc=>{
            if(doc.value===currentQuestion.options[i]){
                styling="background-color:rgb(0, 100, 90) !important";
            }
        })
        console.log(selected);
        
        
        if (currentQuestion.type==='image')
        {
            questionContainer.innerHTML+='<div style="'+styling+'" id="'+questionCounter+'" class="option" required onclick="optionClicked(this)">'+
             currentQuestion.options[i] +'<br>'+'<img class="question-img" src="../Image/'+currentQuestion.image[i]+'">'+'</div>';
    
        }
        else 
        {
            questionContainer.innerHTML+='<div style="'+styling+'" id="'+questionCounter+'" class="option" required onclick="optionClicked(this)">'+ 
            currentQuestion.options[i] +'</div>';
        }
    }
}

function next(){
    if(questionCounter===quiz.length-1){
        questionCounter++;
        questionNumber.innerHTML="Question End";
        questionText.innerHTML='<p>Quiz Finnished</p>';
        questionContainer.innerHTML='';
        nextBtn.classList.add('hide');
        console.log('Quiz finished');
    }
    else{
        questionCounter++;
        getNewQuestion();
    }
}

function previous(){
    console.log(questionCounter);
    if(questionCounter <= 0 ){
        previousBtn.classList.add('hide');
        
    }
    else{
        nextBtn.classList.remove('hide');
        questionCounter--;
        if(questionCounter <= 0 ){
            previousBtn.classList.add('hide');
            
        }
        getNewQuestion();
    }
}

function optionClicked(e){
    const id=e.id;

    const value=e.innerHTML.split('<br')[0];
    const singleAnswer={};
    if(e.classList.contains('selected-option')){
        e.classList.remove('selected-option')
        answers=answers.filter(doc => doc.value !== value);
    }
    else{
        e.classList.add('selected-option')
        singleAnswer.id=id;
        singleAnswer.value=value;
        answers.push(singleAnswer);
    }

    /*if(currentOption===null){
        currentOption=e;
        e.classList.add('selected-option');
    }
    else if(currentOption!==e){
        currentOption.classList.remove('selected-option');
        e.classList.add('selected-option');
        currentOption=e;
    }*/
    //check if we already gave a solution to the current question
    /*const exist=answers.some((elt)=> elt.id===id);
    if(!exist){
        singleAnswer.id=id;
        singleAnswer.value=value;
        answers.push(singleAnswer);
    }
    else{
        answers.forEach((elt)=>{
            if(elt.id===id){
                elt.value=value;
            }
        });
        console.log('updated');
    }*/
    console.log(answers);
    answers.forEach(answer => {
        if (answer.id==21){
             let ResultatDEQUIZZ =answer.value ;
             console.log(ResultatDEQUIZZ);
        }


   });
   
    const circle=document.getElementById('circle '+e.id);
    console.log(circle);
    circle.classList.add('checked')
}

function start(){
    quizBox.classList.remove('hide');
    homeBox.classList.add('hide');
}

window.onload=function(){
    setAvailableQuestions();
    getNewQuestion();
    for(let i=0;i<quiz.length;i++){
        answersIndicator.innerHTML+='<div id="circle '+i+'"></div>'
    }
}