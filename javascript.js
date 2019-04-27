$('#isloading').css('display', 'none');
document.getElementById('calculate').addEventListener('click',()=>{
 let operation =document.getElementById('operations').value;
 optFun(operation);   
});

document.getElementById('clear').addEventListener('click',()=>{
    Clear();
});





function optFun(operation){
    let number = parseInt(document.getElementById('firstNum').value);
    let number2 = parseInt(document.getElementById('secondNum').value);    
    if (number>0 && number2>0){

    switch(operation){
        case"Add":
            Add(number,number2);
            break;
    

     case"Subtract":
     Sub(number,number2);
    break;


    case"Divide":
    Div(number,number2);
    break;
    
    case"Multiply":
    Multi(number,number2);
    break;

    }
}else{

    result(0);
}
}  
          Add=(number,number2)=>{
            let sum = number+number2;
            result(sum);
             }
          Sub=(number,number2)=>{
              let dif =number-number2;
              result(dif);
            }
           Div=(number,number2)=>{
            let Div = number/number2;
            result(Div);
             }
        
          Multi=(number,number2)=>{
            let Multi = number*number2;
            result(Multi);
        }
    
        
     result=Result=>{
         let Ress= document.getElementById('result');
         Ress.value=Result;
         funFact(Result)
     }
Clear=()=>{

    document.getElementById('firstNum').value="";
    document.getElementById('secondNum').value="";
    document.getElementById('result').value="";
    document.getElementById('Fact').innerHTML="";

}
funFact=(Fact)=>{
     $(document).ajaxStart(function() {
 	$('#isloading').css('display', 'block');
 });
 
$.get(`http://numbersapi.com/${Fact}`, data => {
    let fact =data;
    document.getElementById('Fact').innerHTML=fact;
    
})

$(document).ajaxComplete(function() {
    $('#isloading').css('display', 'none');
});
}