var infoList = document.querySelector('.info-list')
var main = document.querySelector('#main')
var pageNumber = 0;
infoList.addEventListener('click',function(e){
  e.preventDefault()
  var tagName = e.target.tagName.toLowerCase()
  if(tagName === 'a'){
    pageNumber = [].indexOf.call(infoList.children,e.target.parentNode)
    var selector= e.target.getAttribute('data-name')
    var element = document.querySelector('.'+selector)
    for(let i=0;i<main.children.length;i++){
      main.children[i].classList.remove('active')
    }
    element.classList.add('active')
  }
})

var showMore = document.querySelector('.showMore')
var portfolio = document.querySelector('.portfolio')
var homepage = document.querySelector('.homepage')
var projects = document.querySelector('.projects')
var skills = document.querySelector('.skills')
showMore.addEventListener('click',function(e){
  showAndHide(homepage,portfolio)
})


function showAndHide(hideEle,showEle){
  hideEle.classList.remove('active')
  showEle.classList.add('active')
}