function check(){
  
var question1=document.quiz.question1.value;
var question2=document.quiz.question2.value;
var question3=document.quiz.question3.value;
var question4=document.quiz.question4.value;
var question5=document.quiz.question5.value;
var question6=document.quiz.question6.value;
var question7=document.quiz.question7.value;
var question8=document.quiz.question8.value;
var question9=document.quiz.question9.value;
var question10=document.quiz.question10.value;
var correct=0;


    if (question1=="30"){
        correct++;
  }


   if (question2=="34"){
       correct++;
  }  


  if (question3=="22"){
      correct++;
  }
  if (question4=="17"){
    correct++;
}
if (question5=="240"){
    correct++;
}
if (question6=="36"){
    correct++;
}
if (question7=="3"){
    correct++;
}
if (question8=="38"){
    correct++;
}
if (question9=="32"){
    correct++;
}
if (question10=="34"){
    correct++;
}
var range;



document.getElementById("number_correct").innerHTML="&rarr;you got "+correct+" correct.";
document.getElementById("pictures").src=pictures[range];


}