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

const contactMethod = document.getElementById("contact-method");
const emailBox = document.getElementById("email-box");
const phoneBox = document.getElementById("phone-box");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

if (contactMethod) {

    contactMethod.addEventListener("change", function () {

        emailBox.style.display = "none";
        phoneBox.style.display = "none";

        emailInput.required = false;
        phoneInput.required = false;

        if (contactMethod.value === "email") {
            emailBox.style.display = "block";
            emailInput.required = true;
        }

        if (contactMethod.value === "phone") {
            phoneBox.style.display = "block";
            phoneInput.required = true;
        }

    });

}