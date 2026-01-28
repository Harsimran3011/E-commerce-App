let addToCart = document.querySelector(".btn-section .addToCartBtn")

addToCart.addEventListener("mouseenter", (e) => {
    let rect = addToCart.getBoundingClientRect()
    let x = e.clientX - rect.left
    let y = e.clientY - rect.top   // ✅ FIX

    addToCart.style.setProperty("--x", x + "px")
    addToCart.style.setProperty("--y", y + "px")
})
