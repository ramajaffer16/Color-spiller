const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
 const btn = document.querySelector(".btn-btn-hero");
 const colorhex = document.querySelector(".color");
 
 btn.addEventListener('click', function(){
    let hexcolor = '#';
    GetRandomNumber = function(){
        return  Math.floor(Math.random()*hex.length)
      }
    // let RandomNumber = GetRandomNumber();
    for (let i = 0; i < 6; i++ ){
        hexcolor += hex[GetRandomNumber()];
    };
    colorhex.textContent= hexcolor;
    document.body.style.backgroundColor= hexcolor;

 });
    
    // let RandomNumber = GetRandomNumber