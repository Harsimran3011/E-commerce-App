let products = [
    {
        name: "Wireless Earbuds, IPX8",
        price: "$89.99",
        image: "red.webp",
        rating: 6,
        reviews: 121
    },
    {
        name: "JBL Headphones, X81P",
        price: "$50.99",
        image: "jbl.jpg",
        rating: 6,
        reviews: 121
    },
    {
        name: "Green Exclusive, P56Q",
        price: "$169.99",
        image: "green.webp",
        rating: 6,
        reviews: 121
    },
    {
        name: "Earphones, LK56",
        price: "$40.99",
        image: "small.webp",
        rating: 6,
        reviews: 121
    },
    {
        name: "Zebronics Headphones",
        price: "$35.99",
        image: "game.webp",
        rating: 6,
        reviews: 121
    },
    {
        name: "Wired Earphone, HOQ56",
        price: "$22.99",
        image: "wired.webp",
        rating: 6,
        reviews: 121
    },
    {
        name: "Gaming Headphone, 56PQ",
        price: "$19.99",
        image: "ing.webp",
        rating: 6,
        reviews: 121
    },
    {
        name: "Patron Headphone",
        price: "$11.99",
        image: "la.jpg",
        rating: 6,
        reviews: 121
    },
    {
        name: "Red JBL Headphone",
        price: "$89.99",
        image: "red.webp",
        rating: 6,
        reviews: 121
    },
    {
        name: "White-Purple Headphone",
        price: "$50.99",
        image: "jbl.jpg",
        rating: 6,
        reviews: 121
    },
    {
        name: "Dark JBL Headphone",
        price: "$169.99",
        image: "green.webp",
        rating: 6,
        reviews: 121
    },
    {
        name: "Sky Blue Earbuds IPX8",
        price: "$40.99",
        image: "small.webp",
        rating: 6,
        reviews: 121
    }
];

let inp = document.querySelector(".input input");
let grid = document.querySelector(".grid");

function showProducts(prd) {
    grid.innerHTML = "";
    prd.forEach(function (proo) {

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

        main.appendChild(img);
        main.appendChild(h3);
        main.appendChild(span);
        main.appendChild(btn);
        grid.appendChild(main);
    });

};



inp.addEventListener("input", function () {
    let newOn = products.filter(function (u) {
        return u.name.toLowerCase().startsWith(inp.value.toLowerCase());

    });


    showProducts(newOn);
});


showProducts(products);
