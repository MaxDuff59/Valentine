const alternatives = [
  {text:"", images:"images/shanymax.mp4"},
  {text:"Réfléchis bien.", images:"images/comeon.webp"},
  {text:"Réfléchis encore.", images:"images/fastfurious.webp"},
  {text:"Tu vas me faire attendre longtemps comme ça ?", images:"images/dwayne.webp"},
  {text:"Bon réponds oui wesh.", images:"images/colere.webp"},
]
const ohyes = {text:"Vamos 🎉🥳", images:"images/happy.webp"}
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;

function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "Oui"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
      }
      if(button.textContent == 'Non'){
          count++
          if(count < alternatives.length){
              updateDisplay(alternatives[count])
          }else{
              buttons.forEach(btn => btn.style.display = 'none')
              errorButton.style.display = 'inline-block'
          }
      }
  })
})