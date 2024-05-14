let products = [
	{
		title: 'Desi Cat', 
		price: 500,
		image: './pexels-kowalievska-1170986.jpg'
	},
	{
		title: 'American Cat', 
		price: 1500,
		image: './images (1).jpg'
	},
	{
		title: 'Australian cat', 
		price: 2700,
		image: './2a5cf940b0aec1d17b42a6f15ce36005.jpg'
	},
	{
		title: 'Indian cat', 
		price: 3400,
		image: './87a01c3d9319ba24953a3e41220ba1cd.jpg'
	},
	{
		title: 'Canadian Cat', 
		price: 5500,
		image: './d68fdb168eb66557fb15bd9701b5ebeb.jpg'
	},
	{
		title: 'Canadian Cat', 
		price: 5500,
		image: './d68fdb168eb66557fb15bd9701b5ebeb.jpg'
	},
    {
		title: 'Canadian Cat', 
		price: 5500,
		image: './d68fdb168eb66557fb15bd9701b5ebeb.jpg'
	}
]



let hamBurger = document.querySelector('.icon');
let navItems = document.querySelector('.navitems');

let productDiv = document.querySelector('.products');

function showNav(){
navItems.classList.toggle("hidden");
}



let slideImage = document.querySelector(".slide");

let images = [
	"./pngtree-many-cats-are-standing-on-a-grey-background-picture-image_3135100.jpg",
	"./pngtree-many-cats-are-standing-on-a-grey-background-picture-image_3135100.jpg",
	"./pngtree-group-of-cats-sitting-on-a-white-background-picture-image_3133297.jpg",
];
let i = 0;
slideImage.src = images[i];

function right() {
	i++;
	if (i < images.length) {
		slideImage.src = images[i];
	} else {
		i = 0;
		slideImage.src = images[i];
	}
}
setInterval( right, 1000);



products.forEach((item)=>{
	productDiv.innerHTML += `
	
	 <div class="product flex flex-col justify-center">
            <img src="${item.image}" class="product-image h-[200px] w-[300px] mx-auto">
            <p class="title text-sm font-bold text-center">${item.title}</p>
            <p class="price text-center">${item.price}</p>
            <button type="button" class="text-center bg-gray-50 p-1 rounded-lg shadow-lg shadow-slate-800 w-full mx-auto" onclick= 'products.indexof(${item})'>Add to cart</button>
        </div>`;
	
})