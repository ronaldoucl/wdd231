const BOOK_URL = 'https://raw.githubusercontent.com/ronaldoucl/ApiPeliculas/refs/heads/main/books.json';

document.addEventListener('DOMContentLoaded', function() {
    printCards();
    updateCart();
});

function activateButtons() {
    let cartList = JSON.parse(localStorage.getItem("productData")) || [];
    document.querySelectorAll('.card-button').forEach(button => {
        button.addEventListener('click', function(event) {
            let parentDiv = event.target.parentElement; 

            let productInfo = {
                title: parentDiv.querySelector('h3').textContent,  
                price: parentDiv.querySelector('h4').textContent,  
                imagePath: parentDiv.querySelector('img').src
            };

            cartList.push(productInfo);

            localStorage.setItem('productData', JSON.stringify(cartList));
            alert("Product added to the cart");
            console.log('Product added to localStorage');
        });
    });
}

function updateCart() {
    let span = document.getElementById('amount-products');
    let data = JSON.parse(localStorage.getItem("productData"));
    span.textContent = Array.isArray(data) ? data.length : 0;
}


function printCards() {
    const grid = document.getElementById('cards');

    fetch(BOOK_URL)
        .then(response => response.json())
        .then(books => {
            grid.innerHTML = '';

            books.forEach(book => {
                const box = document.createElement('div');
                box.className = 'card';
                box.innerHTML = `
                    <h3>${book.name}</h3>
                    <img src="${book.image}" alt="${book.name}" loading="lazy">
                    <h4>${book.price}</h4>
                    <button class='card-button'>Add to Cart</button>
                `;
                grid.appendChild(box);
            });
            activateButtons();
            updateCart();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            grid.innerHTML = '<p>Error loading the books.</p>';
        });
}