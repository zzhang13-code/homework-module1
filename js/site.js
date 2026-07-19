// Array containing the data for all six partners
const partnersList = [
    {
        src: "images/partners/partner-bustour.png",
        alt: "Partner Bus Tours"
    },
    {
        src: "images/partners/partner-cabinrental.png",
        alt: "Partner Cabin Rental"
    },
    {
        src: "images/partners/partner-campingadv.png",
        alt: "Partner Camping Adventure"
    },
    {
        src: "images/partners/partner-collegetours.png",
        alt: "Partner College Tours"
    },
    {
        src: "images/partners/partner-rentalbike.png",
        alt: "Partner Bike Rentals"
    },
    {
        src: "images/partners/partner-tourgroup.png",
        alt: "Partner Tour Group"
    }
];

// Find the partners list on the page
const partnersUl = document.getElementById("partners");

// Run the code only when the partners list exists
if (partnersUl) {

    let htmlPlaceholder = "";

    partnersList.forEach(function (partner) {

        htmlPlaceholder += `
            <li class="partner">
                <img src="${partner.src}" alt="${partner.alt}">
            </li>
        `;

    });

    // Insert the generated partner items into the list
    partnersUl.innerHTML = htmlPlaceholder;
}