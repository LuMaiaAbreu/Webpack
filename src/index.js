import './style.scss'
import img from './matrix.png'

function  rootStyle (){
    const elemRoot = document.getElementById('root')
    elemRoot.classList.add('container')


}


function titleComponent(){
    const elemtH1 = document.createElement('h1')
    elemtH1.innerHTML = 'Hello World 10'
    elemtH1.classList.add('title')
    
    return elemtH1
}

function imageComponent (){
    const elemImg = new Image(1200,800)
    elemImg.src = img
    return elemImg
}

rootStyle()
document.getElementById('root').appendChild(titleComponent())
document.getElementById('root').appendChild(imageComponent())