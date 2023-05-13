let a= document.querySelector(".main__languages a");

a.forEach((ele)=>{
    if(a.textContent.includes("2.0")){
        ele.style.display="none";
    }
});