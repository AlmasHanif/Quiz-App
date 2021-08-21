var key = firebase.database().ref("Question").push().key;
// console.log(key)


// console.log(firebase)
  
window.onload = function(){
    showQuestion(0);
}



Questions = [
    {
        id:1,
        question:"What does HTML stands for ?",
        answer: "Hyper text markup language . ",
        options:[
            "Hyper text markup language . ",
            "Hello to my land . ",
            "Hyper trust manage language . ",
            "Help time meaning language . ",
        ]
    },
    {
        id:1,
        question: "What is the full form http?",
        answer: "Hypertext transfer protocol  . ",
        options:[
            "Hyper text transfer product . ",
            "Hyper text test protocol . ",
            "Hey transfer protocol . ",
            "Hypertext transfer protocol  . ",
        ]
    },
    
    {
        id:1,
        question: "What does CSS stand for?",
        answer: "Cascanding style sheet . ",
        options:[
            "Colour set style . ",
            "Creative style sheet . ",
            "Cascanding style sheet . ",
            "Create style sight . ",
        ]
    },
    {
        id:1,
        question: "What is the full form www?",
        answer:   "World wide web . ",
        options:[
            "World wide web . ",
            "wow were who . ",
            "What was wrap . ",
            "Want with was . ",
        ]
    },
    {
        id:1,
        question: "What is the full form of JS?",
        answer: "JavaScript . ",
        options:[
            "Java Super . ",
            "JavaScript . ",
            "Jordan shoe . ",
            "java style . ",
        ]
    }
]




let counter = 0 ;
let score = 0;


var data = {
    questions : Questions[0].question ,
    key : key
}
firebase.database().ref("Question").set(data);


function nextQuestion(){

    let user_ans = document.querySelector('li.option.active').innerHTML;
    if(user_ans == Questions[counter].answer ){
         score += 10;
         sessionStorage.setItem('score',score);
    }
    else{
        score;
        sessionStorage.setItem('score',score);

    }
    

    if(counter == Questions.length - 1){
        sessionStorage.setItem("time",`${minutes} minutes and ${seconds} seconds`);
        clearInterval(user_all_time);
        location.href= 'scores.html';
        return;
    }

   
    // console.log(score)

    counter++;
    showQuestion(counter);
}


function showQuestion(count){

       let question = document.getElementById('questions');

       question.innerHTML = ` <h2> Q${counter+1 }. ${Questions[count].question}</h2>
              <ul class="option-group">
       
                  <li class="option">${Questions[count].options[0]}</li>
                  <li class="option">${Questions[count].options[1]}</li>
                  <li class="option">${Questions[count].options[2]}</li>
                  <li class="option">${Questions[count].options[3]}</li>
        </ul>
       
       
       `;
       toggle();
}

function toggle (){
     let options = document.querySelectorAll("li.option");

     for(let i= 0; i < options.length; i++){
              options[i].onclick= function(){
                for( let j = 0 ; j < options.length; j++){
                    if(options[j].classList.contains("active")){
                        options[j].classList.remove("active");
                    }
                }
                  options[i].classList.add("active")
              }
     }
}


function formSubmit(e){
    e.preventDefault();
    
    let user_name = document.forms['welcome-form']['username'].value;
    sessionStorage.setItem('user_name',user_name);
    let quiz_user_name = document.getElementById('input-user-name').value;
    if(quiz_user_name === ''){
        alert('Enter Your name first');
        return false;
    }
    location.href = "quiz.html"
    
    // console.log(user_name);

}