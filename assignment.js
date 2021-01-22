//  function kilometerToMeter(meter){

//     var Meter=meter*1000;
//      return Meter;
//  }
 //code-1

 //code-2
//  function budgetCalculator( watchQuantity , mobileQuantity,laptopQuantity){
//      var prizeWatch =1000;
//      var prizeMobile =5000;
//      var prizeLaptop =20000;
//      watch = watchQuantity*prizeWatch;
//      mobile = mobileQuantity* prizeMobile;
//      laptop = laptopQuantity*prizeLaptop;

//       var budget=watch+mobile+laptop;

//   return budget;
//   }
 

  //code3
   function hotelCost( day ){
       var rent = 0;
       if (day <= 10){
            rent = day * 100;
       }
       else if (day <=20){
           var firstTENdays= 10 * 100;
           var remaining= day - 10;
           var secondTendays= remaining * 80;
            rent=  firstTENdays + secondTendays;
    
       } 
       else if (day =>21){
           var firstTENdays = 10 * 100;
           var secondTendays = 10 * 80;
           
           var remaining = day-20;
           var afterTwentydays = remaining * 50;
            rent= firstTENdays + secondTendays + afterTwentydays;

      }
       return rent;
   }

 //code-3
//  var RESULT=kilometerToMeter(20);
//   console.log(RESULT);
//   console.log(4);
   var rentCost=hotelCost(20);
   console.log(rentCost);
// var TOTAL=budgetCalculator(1,3,2);
// console.log(TOTAL);
