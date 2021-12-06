let counter = 0;
let value = document.querySelector("#value")
value.textContent = counter;

let allBtns = document.querySelectorAll(".btn")

allBtns.forEach((btn)=>{
  btn.addEventListener("click", (e) => {
    const id = e.currentTarget.id;

    if(id == "decrease") {
      counter = counter -1;
    } else if(id == "increase") {
      counter = counter +1;
    } else if(id == "reset") {
      counter = 0;
    }

    if(counter < 0) {
      value.style.color = "#bf4343";
    } else if(counter > 0){
      value.style.color = "#76a145";
    } else if(counter == 0){
      value.style.color = "#102a42";
    }

    value.textContent = counter;
  })
})

