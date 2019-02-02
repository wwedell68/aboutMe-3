"use strict";

window.alert('Hi! I\'m Caroline Anne and welcome to my photograpy page! Let\'s play a short guessing game about me!'); 

      //Question 1 -input

      var user = prompt('What is your name?');
         console.log('what is your name?',user);

      //Question 2- Y or N

      var answer= prompt(user +', Was I born in Seattle? Answer Y or N.').toUpperCase();
         console.log('Was I born in Seattle?',answer);

      if (answer === "Y") {
         alert('Wrong Seahawk!, I was born in New England. Go Patriots!!!');
         } else {
         alert('Correct! I was NOT born in Seattle but Go Sounders!');
         }
      // Question 3 Y or N

      var answer3 = prompt(user +', Do you like live music? Answer Y or N.').toUpperCase();
         console.log('Do you like live music?',user);

      if (answer3 === "Y") {
         alert('Wahoo! Me too! In fact that\'s what I love to photograph the most!');
         } else {
         alert('No?, well maybe I can change your mind about that!');
         }
      //Question 4 Y or N

      var answer4 = prompt (user +', Seattle is a great city to watch live music. One of the best venues is the historical Showbox at the Market. Do you think we should save the Showbox ? Answer Y or N.').toUpperCase();
         console.log ('Do you think we should save the Showbox?', user);
      //do we add console.logs in these too?
      if (answer4 === "Y") {
         alert('Yes, We need to save the music! Save the Showbox!');
         } else {
         alert('No? Give it another thought!');
         }

      //Question 5 Y or N
      var answer5 = prompt (user + ', Do I believe grunge is dead in Seattle? Answer Y or N.').toUpperCase();
         console.log ('Do I believe grunge is dead in Seattle?', user);
      
      if (answer5 === "Y") {
         alert('Wrong! Grunge lives on forever in the hearts and minds of those who believe!');
         } else {
         alert('Grunge Lives!');
         }
                  
      // Question 6 
      //counter is less than 6
      
     for(var i=0; i<6; i ++) {
             
      var total = prompt('How many bands did I photograph in 2018. You have 6 chances!');
         console.log ('How many bands did I photograph in 2018. You have 6 chances!',total);

      if (total === '40') {
         alert(`Correct, I photographed 40 bands!!!`); 
      } else if(total >'40') {
         alert('Too high, have another try!');
      }else if (total<'40') {
         alert('Too low, have another go!');
      }
      }
        alert('The Correct answer is 40');
        
   // Question 7 array

      var bands = prompt('Which band did I not photograph live in 2018? Pearl Jam, Carseat Headrest, Thunderpussy, Vok, Bombino, Bon Jovi?').toUpperCase();
         console.log ('Which band did I NOT photographed live',bands);
              
      if(bands === 'Pearl Jam '|| bands=== 'pearl jam'|| bands==='PEARL JAM') {
         alert('Incorrect');
      } else if(bands === 'Carseat Headrest' || bands=== 'carseat headrest'|| bands==='CARSEAT HEADREST') {
         alert('Incorrect');  
      } else if(bands === 'Thunderpussy'|| bands==='thunderpussy'||bands==='THUNDERPUSSY') {
         alert('Incorrect');
      } else if(bands === 'Vok'|| bands==='vok'||bands==='VOK') {
         alert('Incorrect');
      } else if(bands === 'Bombino'|| bands==='bombino'|| bands==='BOMBINO') {
         alert('Incorrect');
      } else if(bands === 'Bon Jovi'|| bands==='bon jovi'||bands==='BON JOVI') {
         alert('Correct!!, I did NOT photographed them live, but I have seen them perform several times!');
      }
      alert('The Correct answer is Bon Jovi');
         


