"use strict";

//STRING
// alert ("hello javascript");
// const alert = confirm("How old are your");// CONFIRM => true or false qaytaradi
// console.log(alert);

// const currentPlace = prompt("where are you?", "");// PROMPT => taklif kiritish
// console.log(currentPlace);

//NUMBER
//const variable = +prompt("Necha yowdasan", "20");//    + =>> faqat wu belgi bn string nni number qiliw mmkn
//console.log(typeof variable)// typeof => qays turga ekanligini number, object, string ekanligini korstaib beradi


//PROMPT
// const objectArray = []; // user yoqtirgan rangini kiritadi va array waklida hosil boladi

// objectArray[0] = prompt("What is your favourite color #1", "");
// objectArray[1] = prompt("What is your favourite color #1", "");
// objectArray[2] = prompt("What is your favourite color #1", "");

// console.log(typeof objectArray);






//INTERPOLATSIYA
// const channel = prompt("What is your favourite youtuber");
// console.log("https://youtobe.com/" + channel + "/videos")
// console.log(`https://youtobe.com/${channel}`);


// const user = "al_Rizo";
// const job = "Siyosatshunos";
// console.log("He is name " + user + "", "kasbi " + job);// bu + bn yozw eski usuli
// console.log(`he name is ${user}, kasbi ${job}`)// INTERPOLATSIYA



// //INCREMENT AND DECREMENT
// const incr = 10;
// const decr = 10

// console.log(incr++)//=>>
// console.log(decr--)//=>>
// console.log(incr)//11
// console.log(decr)//1

// console.log(++incr)//11
// console.log(--decr)//9

// console.log( 11 % 3);

// //qiymati boyicha togri   TRUE
// console.log(5 * 5 == "25");

// //malumot turi boycha  FALSE 
// console.log(5*5 === "25");




//////      &&   =>>>>>>>>> VA   degani
// 2 ta TRUE and 1ta FALSE bolsa ham =>>> FALSE qaytaradi
// const firstAge = true;
// const firstJob = true;
// const frFrom = false;
// console.log(age && job && from);// FALSE


// ///// || =>>>>>>>>>> YOKI degani
// // 2 ta FALSE and 1ta TRUE bolsa ham =>>> TRUE qaytaradi
// const age = true;
// const job = false;
// const from = false;
// console.log(age || job || from);//TRUE

// // !!!!!!!!!!! =>>>> belgisi  ! => emas yani !TRUE emas ili !FALSE emas yani teskarisi
// const agee = true;
// const jobb = false;
// const fromm = false;
// //console.log(agee || jobb || fromm);//TRUE
// console.log(!agee);//FALSE



// console.log(2 + 2 * 2 !== 8)//TRUE
// console.log(2 + 2 * 2 == 8)//FALSE
