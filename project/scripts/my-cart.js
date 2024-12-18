document.addEventListener('DOMContentLoaded', function() {
    printProducts();
});

function printProducts() {
    let myProducts = document.getElementById('my-products');
    let cartList = JSON.parse(localStorage.getItem("productData")) || [];

    if (cartList.length > 0) {
        let total = 0;
        cartList.forEach(product => {
        const article = document.createElement('article');
        article.className = 'article';
        article.innerHTML = `
            <img src="${product["imagePath"]}" alt="${product["title"]} loading='lazy'">
            <div>
                <h3>Title: ${product["title"]}</h3>
                <h3>Price: $${product["price"]}</h3>
            </div>`;
        myProducts.appendChild(article);
        total = total + Number(product["price"].replace('$', ''));
        });
        const h2 = document.createElement("h2");
        h2.textContent = "Total: $" + total;
        h2.className = "total-amount";
        myProducts.appendChild(h2);
    } else {
        let p = document.createElement("p");
        p.textContent = "Your cart is empty";
        p.className = "empty-message";
        myProducts.appendChild(p);
    }
}