
const toggle_btn = document.querySelector(".form-check");
const toggle_main = document.querySelector(".form-check-input");

// toggle_btn.addEventListener('change', ()=>{

//   if(toggle_btn.checked){
//     console.log("checked")
//     document.body.classList.add('dark-mode')
//   } 
  
//   else{
//     console.log("unchecked")
    
//     document.body.classList.remove('dark-mode')
    
//   }

// })

toggle_main.addEventListener('change', ()=>{

  if(toggle_main.checked){
    console.log("checked")
    document.body.classList.add('dark-mode')
  } 
  
  else{
    console.log("unchecked")
    document.body.classList.remove('dark-mode')

    
  }

})