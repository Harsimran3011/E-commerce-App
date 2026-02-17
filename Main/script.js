let products = [
    {
        name: "Wireless Earbuds, IPX8",
        price: "$89.99",
        image: "img/red.webp",
        rating: 6,
        reviews: 121
    },
    {
        name: "JBL Headphones, X81P",
        price: "$50.99",
        image: "img/jbl.jpg",
        rating: 6,
        reviews: 121
    },
    {
        name: "Green Exclusive, P56Q",
        price: "$169.99",
        image: "img/green.webp",
        rating: 6,
        reviews: 121
    },
    {
        name: "Earphones, LK56",
        price: "$40.99",
        image: "img/small.webp",
        rating: 6,
        reviews: 121
    },
    {
        name: "Zebronics Headphones",
        price: "$35.99",
        image: "img/game.webp",
        rating: 6,
        reviews: 121
    },
    {
        name: "Wired Earphone, HOQ56",
        price: "$22.99",
        image: "img/wired.webp",
        rating: 6,
        reviews: 121
    },
    {
        name: "Gaming Headphone, 56PQ",
        price: "$19.99",
        image: "img/ing.webp",
        rating: 6,
        reviews: 121
    },
    {
        name: "Patron Headphone",
        price: "$11.99",
        image: "img/la.jpg",
        rating: 6,
        reviews: 121
    },
    {
        name: "Red JBL Headphone",
        price: "$89.99",
        image: "img/red.webp",
        rating: 6,
        reviews: 121
    },
    {
        name: "White-Purple Headphone",
        price: "$50.99",
        image: "img/jbl.jpg",
        rating: 6,
        reviews: 121
    },
    {
        name: "Dark JBL Headphone",
        price: "$169.99",
        image: "img/green.webp",
        rating: 6,
        reviews: 121
    },
    {
        name: "Sky Blue Earbuds IPX8",
        price: "$40.99",
        image: "img/small.webp",
        rating: 6,
        reviews: 121
    }
];

products = products.map((p, i) => ({ ...p, id: i }))

let cartBtns = []
let productPrice = []

// Grid Functionality
function productsSection() {

    let inp = document.querySelector(".input input");
    let grid = document.querySelector(".grid");


    function showProducts(prd) {
        grid.innerHTML = "";
        prd.forEach(function (proo, idx) {

            let main = document.createElement("div");
            main.classList.add("one");

            let img = document.createElement("img");
            img.src = proo.image;
            img.classList.add("img");

            let h3 = document.createElement("h3");
            h3.textContent = proo.name;
            h3.classList.add("h3");

            let span = document.createElement("h4");
            span.textContent = proo.price;
            span.classList.add("span");

            let btn = document.createElement("button");
            btn.classList.add("add-btn");
            btn.textContent = "Add to Cart";

            btn.dataset.idx = idx

            main.appendChild(img);
            main.appendChild(h3);
            main.appendChild(span);
            main.appendChild(btn);
            grid.appendChild(main);

            productPrice.push(span);

            cartBtns.push(btn)
        });
    };

    inp.addEventListener("input", function () {
        let newOn = products.filter(function (u) {
            return u.name.toLowerCase().startsWith(inp.value.toLowerCase());
        });

        showProducts(newOn);
    });

    showProducts(products);
}
productsSection(products)



// Side Tab Functionality
let cart = []
const sideTab = document.querySelector('.page1 .sideTab')
const sideIcon = document.querySelector('.nav-bar #cart')
const sideClose = document.querySelector('.sideItems .top .close')

sideIcon.addEventListener("click", () => { sideTab.style.right = "0" })
sideClose.addEventListener("click", () => { sideTab.style.right = "-22%" })

products.forEach(function (e) {

    cartBtns.forEach(function (val) {
        val.onclick = function () {
            let idx = this.dataset.idx
            let product = products[idx]

            if (idx === undefined) {
                console.error("data-idx missing on button");
                return;
            }

            cartProduct = document.querySelector('.sideTab .sideItems .sideProducts')

            productDiv = document.createElement('div')
            productDiv.classList.add('products')

            cartImg = document.createElement('img')
            cartImg.src = product.image
            cartImg.classList.add('cartImg')

            imgDetails = document.createElement('div')
            imgDetails.classList.add('img-details')
            imgDetails.innerHTML = product.name

            cartCrossIcon = document.createElement('i')
            cartCrossIcon.classList.add('ri-close-line')

            productDiv.append(cartImg)
            productDiv.append(imgDetails)
            productDiv.append(cartCrossIcon)

            cartProduct.appendChild(productDiv)

            cart.push(product)

            accessSideProduct(productDiv)

        }
    })



})


function getPrice() {



}


function accessSideProduct(val) {
    let icon = val.lastChild;

    icon.addEventListener('click', () => {
        val.remove();
    })

}
