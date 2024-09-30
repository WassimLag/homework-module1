const partners = [
    { src: 'images/partner-rentalbike.png', alt: 'Rental Bike' },
    { src: 'images/partner-tourgroup.png', alt: 'Tour Group' },
    { src: 'images/partner-collegetours.png', alt: 'College Tours' },
    { src: 'images/partner-campingadv.png', alt: 'Camping Adventure' },
    { src: 'images/partner-cabinrental.png', alt: 'Cabin Rentals' },
    { src: 'images/partner-bustour.png', alt: 'Bus Tour' },
];

const partnersList = document.getElementById('partners-list');

partners.forEach(partner => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = partner.src;
    img.alt = partner.alt;
    li.appendChild(img);
    partnersList.appendChild(li);
});
