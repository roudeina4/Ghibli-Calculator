const buttons = [...document.querySelectorAll('.calcul')];
const list = buttons.map(click => click.dataset.key);
const ScreenResult = document.querySelector(" .ScreenResult")

document.addEventListener('keydown' , (e) => {
   const val = e.keyCode.toString();
   calculer(val)
})

document.addEventListener('click',(e) => {
   const val = e.target.dataset.key;
   calculer(val)
 
})

const calculer = (val) => {
    if(list.includes(val)){
         switch(val){
            case'8' : 
            ScreenResult.textContent = ""
            break;
            case'13' : 
            const calcul = eval(ScreenResult.textContent);
            ScreenResult.textContent = calcul;
            break;
            case'192':
            const Percentage = (ScreenResult.textContent / 100)
            console.log(Percentage)
            ScreenResult.textContent = Percentage;
            break;
            default:
               const indexKeyCode = list.indexOf(val);
               const touch = buttons[indexKeyCode]
               ScreenResult.textContent += touch.innerHTML
               

         }
    }
}

window.addEventListener('error', (e) => 
{
   alert('Error',e.message)
}
)