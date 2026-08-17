
    let x = prompt("Enter your name");
    let y;
    let z;
    let age;

    if (x == "") {

        for (let i = 0; i < 3; i++) {
            x = prompt("Enter your name");

            if (x !== "") {
                break;
            }
        }
    }

    y = prompt("Enter your birth year");

    y = Number(y);
    z = new Date().getFullYear();

    if (y >= 2010) {

        for (let i = 0; i < 3; i++) {
            y = Number(prompt("Enter your birth year"));

            if (y < 2010) {
                break;
            }
        }
    }

    age = z - y;

    document.write("Name: " + x + "<br>");
    document.write("Birth year: " + y + "<br>");
    document.write("Age: " + age);



















// let x = prompt("Enter your name");
// let y;
// let z;
// let age;

// if (x == "") {

//     for (let i = 0; i < 3; i++) {
//         x = prompt("Enter your name");

//         if (x !== "") {
//             y = prompt("Enter your birth year");
//             break;
//         }
//     }

// } else {
//     y = prompt("Enter your birth year");
// }

// y = Number(y);
// z = new Date().getFullYear();

// if (y > 2010 && y== "" && y==="string") {

//     for (let i = 0; i < 3; i++) {
//         y = Number(prompt("Enter your birth year"));

//         if (y < 2010) {
//             age = z - y;
//             break;
//         }
//     }

// } else {
//     age = z - y;
// }


// let x= prompt("Enter your name")
// let y;
// let z;
// let age;

// if(x == ""){

//   for(i=0; i<3; i++){
//        let x= prompt("Enter your name");  
//        if(x !==""){
//         let y= prompt("Enter your birth year");
//         break;
//        }
// }
// }else{
//         let y= prompt("Enter your birth year");  
// }

// y = Number(y);
// z = new Date().getFullYear();
// if (y > 2010){
//   for(i=0; i<3; i++){
//     let y= prompt("Enter your birth year");
//     if(y < 2010)
//       let age =z-y;
//     break; 
//   }

// }else{
//       let age =z-y; 
// }









// let y= prompt("Enter your birth year"); 
// if(y > 2010){
//   for(i<0; i<3; i++)
//   let y= prompt("Enter your birth year");
//    if(y < 2010)
//     break;
// }











// let x = prompt("Enter your name")

// if(x ===""){

//   let x = prompt("Enter your name") 

// }else{
//   let y =prompt("Enter your age")
// }

// let x = prompt("Entar Your Name")
// if (x === ""){
//   for(i=0; i<3; i++){
//     if(x === ""){
//       let x = prompt("Entar Your Name")
//     }break;
//   }
// }else{
//   let y = prompt("Enter your age")
// }

// for (let x=0; x<3; x++) {
//   if( x ===" "){
//          let x = prompt("Entar Your Name")
//    }else{
// break;   }
// }
