
//my guit hub: https://github.com/knayem/assignment-3

 //My assignment code link: https://github.com/knayem/assignment-3/blob/main/assignment.js

//CODE-1


   function kilometerToMeter(meter){

      
      if ( meter >= 0){
        var Meter=meter*1000;}
        else if ( meter >'a' || meter <'z' || meter >'A' || meter <'Z' ){
            return "Please enter in  number only for input";

        }
        
        
        else if ( meter < 0 ){
           return "Please enter in positive number only for input";
        }

        else if ( meter == null ){
            return "Please enter in any number for input";
         }
        
    
      
       return Meter;
      
   }
       var RESULT=kilometerToMeter(5);
       console.log("Result is : ",RESULT); 

      /////////CODE-1


 //CODE-2
    function budgetCalculator( watchQuantity , mobileQuantity,laptopQuantity){
        var prizeWatch =1000;
        var prizeMobile =5000;
       var prizeLaptop =20000;

       if ( watchQuantity < 0 || mobileQuantity <0 || laptopQuantity < 0 ){
        return "Please enter in positive number only for input";}
        watch = watchQuantity*prizeWatch;
        mobile = mobileQuantity* prizeMobile;
        laptop = laptopQuantity*prizeLaptop;

         var budget=watch+mobile+laptop;

     return budget;
     }
        var TOTAL=budgetCalculator(1,3,2);
        console.log("Total Budget Cost :",TOTAL);

    ///////////CODE-2

  //code3
    function hotelCost( day ){
        var rent = 0;
        if ( day < 0 ){
            return "Please enter in positive number only for input";}
        else if (day <= 10){
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
          var rentCost=hotelCost(2);
          console.log("Total Rent cost  :" , rentCost);
  
        ////// //code-3


// //    var rentCost=hotelCost(29);
// //    console.log(rentCost);

//CODE_4

  function megaFriend(friendNames){

      var max=friendNames[0];
      for (var i=0 ; i < friendNames.length ; i++){
         var elements = friendNames[i];
     if ( elements.length > max.length  ){
           max = elements;

     }
     else if ( friendNames[i] >= 0 ||  friendNames[i] < 0 || friendNames[i] == null ){
        return "Please enter in string only for input";

    }
    
    
      
 }
      return max;
     }
   
      var MegaName=megaFriend([ " leo messi" , "xavi"  , " pique" ]);
     console.log("Mega Name is : " ,MegaName);
    

//CODE-4




