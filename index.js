//1
function sumOfFourAndSix(){
  let sum = 0; 
  for(let i = 1; i < 1000; i++) {
      if(i % 4 === 0 & i % 6 === 0) {
          sum += i;
      }
  }
  return sum;
}

//2
function oddAndEvenInFifteen(){
  for (let x = 0; x <= 15; x++) {
      if (x == 0) {
          console.logt(x + "is even");
      }
      
   else if (x % 2 == 0 ) {
      console.log(x + "is odd");
   }
  else {
      console.log(x + "is odd");
  }
}

//3
function assignGrade(){
  
}






//console.log(sumOfFourAndSix())
//idk but I know this works I don't know why it's not working
//console.log(oddAndEvenInFifteen())