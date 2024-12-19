const SERVICES_URL = 'data/services.json';

document.addEventListener("DOMContentLoaded", function() {
    /* Background Images */
    const images = [
        'background1.webp', 'background2.webp', 'background3.webp', 
        'background4.webp', 'background5.webp', 'background6.webp'
    ];
    let currentIndex = 0;

    function updateBackgroundImage(index) {
        const section = document.querySelector('.background-images');
        section.style.backgroundImage = `url('images/${images[index]}')`;
    }

    updateBackgroundImage(currentIndex);

    document.querySelector('.left-button').addEventListener('click', function() {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
        updateBackgroundImage(currentIndex);
    });

    document.querySelector('.right-button').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateBackgroundImage(currentIndex);
    });

    fetch(SERVICES_URL)
    .then(response => response.json())
    .then(services => {
        const grid = document.querySelector('.services-grid');

        services.forEach(feature => {
            const box = document.createElement('div');
            box.className = 'feature-box';
            box.innerHTML = `
                <img src="images/${feature.image}" alt="${feature.title}">
                <h3>${feature.title}</h3>
                <button class="info-btn">More Info</button>
                <dialog class="info-dialog">
                    <p>${feature.text}</p>
                    <button class="close-dialog">Close</button>
                </dialog>
            `;
            grid.appendChild(box);

            const infoBtn = box.querySelector('.info-btn');
            const dialog = box.querySelector('.info-dialog');
            const closeBtn = box.querySelector('.close-dialog');

            infoBtn.addEventListener('click', () => {
                dialog.showModal(); 
            });

            closeBtn.addEventListener('click', () => {
                dialog.close(); 
            });
        });
    })
    .catch(error => console.error('Error loading the services:', error));
});