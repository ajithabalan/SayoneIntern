

function validation(event){ 
    event.preventDefault();

    var name=document.querySelector("#name").value;
    var age=document.querySelector("#age").value;
    var cc=document.querySelector("#countrycode").value;
    var n=document.querySelector("#number").value;
    var digits=digitcount(n);
    var email=document.querySelector("#email").value;
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var letters = /^[A-Za-z]+$/;
    var error=false;

function digitcount(n){
      var count = 0;
  if (n >= 1) ++count;
  while (n / 10 >= 1) {
        n /= 10;
        ++count;
  }
  return count;
}

    if((name == "")||(letters.test(name) === false))
    {  
        
         document.querySelector('#errors').innerHTML="Please enter a valid name";
         error=true;
                
    }
    if((age=="")||(age>100))
    {  
        
         document.querySelector('#errors2').innerHTML="Invalid age";               
          
         error=true;
        
                
    }
    
    if(n!=""){
    if((cc!= 91)||(digits<9))
    {  
        
         document.querySelector('#errors3').innerHTML="Invalid number";
         error=true;
        
                
    }
}
    

    if((regex.test(email) === false)||(email=="")) {
        document.querySelector('#errors4').innerHTML="Invalid Email";
        error=true;
        
                
       
    }
    if(error){
        document.querySelector('#errors6').innerHTML="Invalid Form!";
    }else{
        document.querySelector('#errors6').innerHTML="Form submitted";
        alert("Details submitted succesffully")
        location.reload();
    }

    
}