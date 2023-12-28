const form = document.querySelector("form"),
statusTxt = form.querySelector(".btn-area span");

form.onsubmit = (e)=>{
    e.preventDefault(); //previwing Form
    statusTxt.style.color = 'blue';

    statusTxt.style.display = "block";


    let xhr = new XMLHttpRequest() //CREATING NEW XML OBJECT
    xhr.open("post" ,"index.php", true);//sebding post request to index.php
    xhr.onload = ()=>{ //once ajax loaded
        if(xhr.readyState == 4 && xhr.status == 200) {//when ajax response status is 200 and ready status is 4 mean no error
            let response = xhr.response; //storing ajax response in a response variable
            if (response.indexOf("Email and Password is Required!") != -1 || response.indexOf("Enter Valid Email Address") || response.indexOf("sorry , Failed to Send Your Message!")) {
                statusTxt.style.color = 'red';
         }else{
            form.reset();
            setTimeout(()=>{
                statusTxt.style.display = "none";

            },3000);
         }
            
      
        statusTxt.innerText = response;
        }
    } 
    let formData = new FormData(form);//creating new Form Data obt. this obt. used to send form data
        xhr.send(formData);//sending formdata
}