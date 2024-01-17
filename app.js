const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector(".btn-btn-hero")
const color = document.querySelector(".color")

btn.addEventListener('click',function(){
    const RandomNumber = GetRandomNumber();
    
    document.body.style.backgroundColor = colors[RandomNumber];
    color.textContent = colors[RandomNumber];
})
const GetRandomNumber = function(){
  return  Math.floor(Math.random()* colors.length);
} 