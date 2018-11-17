let img__slide = document.querySelector('.img__slide');
let fixednav = document.querySelector('.fixednav');
let fallowus__imgs = document.querySelector('.fallowus__imgs');

window.addEventListener('scroll', function(){
	if (window.scrollY > 1200){
		img__slide.classList.add("img__slide__2");
	}else{
		img__slide.classList.remove("img__slide__2");
    }
});

window.addEventListener('scroll', function(){
	if (window.scrollY > 150){
		fixednav.classList.add("fixednav__show");
	}else{
		fixednav.classList.remove("fixednav__show");
    }
});

let max = 9;
let count = 5;
function create_divs(){
	for (let i = count ; i < max; i++){
		let div = document.createElement("div");
			div.className = "fallowus__imgs__img img"+i;
			div.style.backgroundColor = 'white';
			fallowus__imgs.appendChild(div);
			}	
			max = max + 4;
			count = count + 4;
	};