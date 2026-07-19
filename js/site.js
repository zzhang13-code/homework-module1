// 1. Array containing the data for all 6 partners
const partnersList = [
    { src: "images/partners/partner-bustour.png", alt: "Partner Bus Tour" },
    { src: "images/partners/partner-cabinrental.png", alt: "Partner Cabin Rental" },
    { src: "images/partners/partner-campingadv.png", alt: "Partner Camping Adventure" },
    { src: "images/partners/partner-collegetours.png", alt: "Partner College Tours" },
    { src: "images/partners/partner-rentalbike.png", alt: "Partner Rental Bike" },
    { src: "images/partners/partner-tourgroup.png", alt: "Partner Tour Group" }
];

// 2. Find the empty <ul> element on the page using its ID
const partnersUl = document.getElementById("partners");

// 3. This condition makes sure the code only runs if the <ul> is found on the page
if (partnersUl) {
    let htmlPlaceholder = ""; // A temporary container to hold our new HTML text

    // 4. Loop through each item in the array
    partnersList.forEach(function(partner) {
        // Build the HTML structure dynamically using backticks (``)
        htmlPlaceholder += `
            <li class="partner">
                <img src="${partner.src}" alt="${partner.alt}">
            </li>
        `;
    });

    // 5. Shove all that newly built HTML into the empty <ul> tag
    partnersUl.innerHTML = htmlPlaceholder;
}