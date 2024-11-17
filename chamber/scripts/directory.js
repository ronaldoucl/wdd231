let data = '';

document.addEventListener('DOMContentLoaded', () => {
    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json'); 
            data = await response.json();
            toggleDirectory('grid');
        } catch(error) {
            console.error('Failed to fetch members:', error);
        }
    }

    fetchMembers();
});


function toggleDirectory(type) {
    const gridViewBtn = document.getElementById('gridViewBtn');
    const listViewBtn = document.getElementById('listViewBtn');
    const gridDirectory = document.getElementById('grid-directory');
    const listDirectory = document.getElementById('list-directory');
    

    if(type === 'grid'){
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
        listDirectory.innerHTML = '';
        displayInformation(gridDirectory);
    } else {
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
        gridDirectory.innerHTML = '';
        displayInformation(listDirectory);
    }
}

function displayInformation(container) {
    if (data && Array.isArray(data)) {
        data.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${member.icon_file}" alt="${member.name} Logo">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone_number}</p>
                <p><a href="${member.website_url}" target="_blank">${member.website_url}</a></p>
            `;
            container.appendChild(card);
        });
    } else {
        console.error('Data is not available or is not an array.');
    }
}