let slide_index = 1;
show_slides(slide_index);

function currentSlide(n){
    show_slides(slide_index = n);
}

function show_slides(index){
    let slide = document.getElementsByClassName("top__slider-item");
    let dot = document.getElementsByClassName("top__slider-dot");

    if(index > slide.length) slide_index = 1;
    if(index < 1) slide_index = slide.length;

    for(let i = 0;i < slide.length ; i++){
        slide[i].style.display = "none";
        //slide[i].hide();
    }

    for(let i = 0;i < slide.length ; i++){
        dot[i].classList.remove("active");

    }

    slide[slide_index-1].style.display = "block";
    dot[slide_index - 1].classList.add("active");
}

let timer = 0;
makeTimer(); //Создаем интервал 
function makeTimer(){
    clearInterval(timer); //Очистим интервал, это позволит прервать его работу и отменить перелистывание
    timer = setInterval(function(){
    slide_index++;
    show_slides(slide_index);
    },2000);
}