

let webCheck = document.querySelector(".check>a");
let checkAccess= document.querySelector(".check_access");
webCheck.addEventListener("click" , e=>{
  console.log("webcheck");
  e.preventDefault();
  checkAccess.classList.toggle('on');

})
