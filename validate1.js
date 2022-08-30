function validate(){
    let firstNameInput=document.getElementById("first-name").value;
    let lastNameInput=document.getElementById("last-name").value;
    let emailInput=document.getElementById("email").value;
    let phoneNumberInput=document.getElementById("phone-number").value;
    let batchNumberInput=document.getElementById("batch-number").value;
    let moduleNumberInput=document.getElementById("moduleNumber").value;
    let tnCI=document.getElementById("tnC").checked;
    let error=true;
    if(firstNameInput.length>=3){
        document.getElementById("first-name-valid").style.display="block";
        document.getElementById("first-name-invalid").style.display="none";
    }
    else{
        document.getElementById("first-name-invalid").style.display="block";
        document.getElementById("first-name-valid").style.display="none";
        error=false;
    }
    if(lastNameInput.length>=3){
        document.getElementById("last-name-valid").style.display="block";
        document.getElementById("last-name-invalid").style.display="none";
    }
    else{
        document.getElementById("last-name-invalid").style.display="block";
        document.getElementById("last-name-valid").style.display="none";
        error=false;
    }
    if(emailInput && emailInput.includes("@")&&emailInput.includes(".")&&emailInput.lastIndexOf(".")+3<=emailInput.length && emailInput.indexOf('@')!==0){
        document.getElementById("email-valid").style.display="block";
        document.getElementById("email-invalid").style.display="none" ;  
    }
    else{
        document.getElementById("email-valid").style.display="none";
        document.getElementById("email-invalid").style.display="block"; 
        error=false;
    }
     if(phoneNumberInput.length==10   && parseInt(phoneNumberInput) ){
        document.getElementById("phone-valid").style.display="block";
        document.getElementById("phone-invalid").style.display="none" ;  
    }
    else{
        document.getElementById("phone-valid").style.display="none";
        document.getElementById("phone-invalid").style.display="block" ;  
        error=false;
    }
    if(batchNumberInput!='None'){
        document.getElementById("batch-number-valid").style.display="block";
        document.getElementById("batch-number-invalid").style.display="none" ;
    }
    else{
        document.getElementById("batch-number-invalid").style.display="block";
        document.getElementById("batch-number-valid").style.display="none" ;
        error=false;
    }
    if(moduleNumberInput!='None'){
        document.getElementById("valid-module").style.display="block";
        document.getElementById("invalid-module").style.display="none" ;
    }
    else{
        document.getElementById("invalid-module").style.display="block";
        document.getElementById("valid-module").style.display="none" ;
        error=false;
    }
    if(tnCI){
       
        document.getElementById('tnC-invalid').style.display='none';
    }
    else{
        document.getElementById('tnC-invalid').style.display="block";
        error=false;
       
    }

    const resetField=()=>{
        document.getElementById("first-name").value=" ";
        document.getElementById("last-name").value=" ";
        document.getElementById("email").value=" ";
        document.getElementById("phone-number").value=" ";
        document.getElementById("batch-number").value="None";
        document.getElementById("moduleNumber").value="None";
        document.getElementById("tnC").checked=false;
    }
    if(error){
    alert("Your details have been saved successfully!");
    resetField();
    document.getElementById("first-name-valid").style.display="none";
    document.getElementById("last-name-valid").style.display="none";
    document.getElementById("email-valid").style.display="none";
    document.getElementById("phone-valid").style.display="none";
    document.getElementById("batch-number-valid").style.display="none";
    document.getElementById("valid-module").style.display="none";



}
}