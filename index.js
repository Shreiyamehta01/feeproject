
function validation(){
 console.log(
    "document ",JSON.stringify(document.formfill) )
   if(document.formfill.Username.value==""){
      
          document.getElementById("result").innerHTML="Enter Username*";
          return false;
}


    else if(document.formfill.Username.value.length<6){
           document.getElementById("result").innerHTML="Atleast six letters";
           return false;
 }

 else if(document.formfill.Email.value==""){
    document.getElementById("result").innerHTML="Enter Your Email";
    return false;
}

else if(document.formfill.Password.value==""){
    document.getElementById("result").innerHTML="Enter Your Password";
    return false;
}


else if(document.formfill.Username.value.length<6){
    document.getElementById("result").innerHTML="Password must be 6 letters long";
    return false;
}
else if(document.formfill.cPassword.value==""){
    document.getElementById("result").innerHTML="Enter confirm password";
    return false;
}
else if(document.formfill.Password.value !== document.formfill.cPassword.value){
    document.getElementById("result").innerHTML="Password doesn't match";
    return false;
}
else if(document.formfill.Password.value==document.formfill.cPassword.value){
    popup.classList.add("open-slide")
    return false;
}
 }
 var popup=document.getElementById('popup');
 function closeSlide(){
    popup.classList.remove("open-slide")
 }