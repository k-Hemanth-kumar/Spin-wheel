const start=document.querySelector('.start')
const wheel=document.querySelector('.wheel')
const root=document.querySelector(':root')
var vd=1
var predeg=0
start.addEventListener('click',()=>{
    start.classList.add('active')
    start1()
})
function start1(){
    wheel.classList.add('rotate')
    var rand=Math.floor(Math.random()*10+1)
    var deg=rand * 1200
    //console.log(deg);
    //root.style.setProperty('--timer',Math.floor(Math.random()*10+1) * 5 + 's')
    var dt=parseInt(root.style.getPropertyValue('--dt'), 10)
    console.log(predeg);
    root.style.setProperty('--deg',(deg + predeg) + 'deg')
    predeg=deg+predeg
    root.style.setProperty('--timer',deg /360 + 's')
}