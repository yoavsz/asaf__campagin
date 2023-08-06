let dropdown=document.querySelectorAll(".subject h2")
let dropdown__img=document. querySelectorAll(".subject h2 img")
let dropdown__content=document.querySelectorAll(".dropdown__content")
let formerid=dropdown__content[1] 
let former__arrow=dropdown__img[1]


    
for (let i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
        const id = i;
        let letopen=false;
        for (let j = 0; j < dropdown__content.length; j++) {
          
          if (j === id&&letopen===false) {

              if(dropdown__content[j].style.display==="block"){
                dropdown__content[j].style.display="none"
                dropdown__img[j].classList.remove("dropdown__img__upsidedown")
                dropdown__img[j].classList.toggle("dropdown__img__reg")
                
                letopen=true
           
                console.log(letopen)                
              }
              else{
                formerid.style.display="none"
                former__arrow.classList.remove("dropdown__img__upsidedown")
                former__arrow.classList.toggle("dropdown__img__reg")
                dropdown__content[j].style.display="block"
                dropdown__img[j].classList.remove("dropdown__img__reg")
                dropdown__img[j].classList.toggle("dropdown__img__upsidedown")
                letopen=false
                console.log(letopen)
                formerid=dropdown__content[j] 
                former__arrow=dropdown__img[j] 
                
              }
            }

          
        }
      });
    }



