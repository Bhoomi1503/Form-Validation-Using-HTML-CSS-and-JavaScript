function validation(){
    var firstname=document.validateform.firstname.value;
    var lastname=document.validateform.lastname.value;
    var city=document.validateform.city.value;
    var phoneno=document.validateform.phoneno.value;
    var address=document.validateform.address.value;
    if(firstname==null || firstname==""){
        alert("FirstName should not be blank");
        return false;
    }
    else if(lastname==null || lastname==""){
        alert("LastName should not be blank");
        return false;
    }
    else if(city==null || city==""){
        alert("Please enter the City");
        return false;
    }
    else if(phoneno.length<10 || phoneno.length>10){
        alert("Provide a valid phone number");
        return false;
    }
    else if(address==null || address==""){
        alert("Fill the address");
        return false;
    }
    else{
        alert("Form Submitted Successful!!!");
    }

}