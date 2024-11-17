document.addEventListener('DOMContentLoaded', () => {
    const gridViewBtn = document.getElementById('gridViewBtn');
    const listViewBtn = document.getElementById('listViewBtn');
    const memberGrid = document.getElementById('memberGrid');
    const memberList = document.getElementById('memberList');

    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json'); 
            const data = await response.json();
    
            displayMembers(data, 'grid');
            displayMembers(data, 'list');
        } catch(error) {
            console.error('Failed to fetch members:', error);
        }
    }

    function displayMembers(data, viewType) {
        const container = viewType === 'grid' ? memberGrid : memberList;
        container.innerHTML = '';

        data.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${member.icon_file}" alt="${member.name} Logo">
                <h3>${member.name}</h3>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone_number}</p>
                <p><strong>Website:</strong> <a href="${member.website_url}" target="_blank">${member.website_url}</a></p>
                <p><strong>Industry:</strong> ${member.industry}</p>
                <p><strong>Established:</strong> ${member.established}</p>
                <p><strong>Membership Level:</strong> ${member.membership_level}</p>
            `;
            container.appendChild(card);
        });
    }

    gridViewBtn.addEventListener('click', () => {
        memberGrid.classList.add('active');
        memberList.classList.remove('active');
    });

    listViewBtn.addEventListener('click', () => {
        memberList.classList.add('active');
        memberGrid.classList.remove('active');
    });

    fetchMembers();
});