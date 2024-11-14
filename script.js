
//1
let uploadBtn = document.querySelector('.upload button');
//2
let uploadInput = document.querySelector('.upload input');
let viewImg = document.querySelector('.viewImg img');

//5
let filterButton = document.querySelectorAll('.filterButton button');


//8
let sliderRange = document.querySelector('.slider input');


//10
let brightness = 100,
   blur = 0 ,
   invert = 0,
   saturate = 100,
   contrast = 100;  


//3
uploadBtn.addEventListener('click', () => {
    uploadInput.click();
});


//4
uploadInput.addEventListener('change', () => {
    let file = uploadInput.files[0];
    
    viewImg.src = URL.createObjectURL(file)

    //7
    document.querySelector('.disabled').classList.remove('disabled')
});


//6
filterButton.forEach((element) => {

    element.addEventListener('click',() => {
      document.querySelector('.active').classList.remove('active');
      element.classList.add('active');
      document.getElementById('filterName').innerText = element.id


    })
});


//9
sliderRange.addEventListener('input', () => {
   document.getElementById('rangeVal').innerText = sliderRange.value;
   let startActive = document.querySelector('.active');

   //11
   if (startActive.id === "blur"){
    blur = sliderRange.value;

   }else if (startActive.id === "brightness"){
    brightness = sliderRange.value;

}else if (startActive.id === "invert"){
    invert = sliderRange.value;

}else if (startActive.id === "saturate"){
    saturate = sliderRange.value;

}else if (startActive.id === "contrast"){
    contrast = sliderRange.value;
}



//12
viewImg.style.filter = `blur(${blur}px) brightness(${brightness}%) invert(${invert}%) saturate(${saturate}%) contrast(${contrast}%)`


});


let btnn = document.querySelector('.btnn');




btnn.addEventListener('.click', () => {
    


})