// script.js
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service");

    const services = {
        commercial: {
            title: "Commercial Service",
            description: "Comprehensive cleaning for offices and businesses.",
            price: "$200"
        },
        janitorial: {
            title: "Janitorial Service",
            description: "Daily upkeep and cleaning for your premises.",
            price: "$150"
        },
        "floor-cleaning": {
            title: "Floor Cleaning",
            description: "Expert floor cleaning and maintenance.",
            price: "$100"
        },
        disinfection: {
            title: "Disinfection Service",
            description: "Deep cleaning and disinfection for health safety.",
            price: "$250"
        }
    };

    if (services[service]) {
        const { title, description, price } = services[service];
        document.getElementById("booking-services").innerHTML = `
            <h2>${title}</h2>
            <p>${description}</p>
            <p>Price: ${price}</p>
            <button onclick="bookService('${service}')">Book Now</button>
        `;
    } else {
        document.getElementById("booking-services").innerHTML = `
            <h2>Service not found</h2>
            <p>Please select a valid service from the previous page.</p>
        `;
    }
});

// Booking function (implement as needed)
function bookService(service) {
    alert(`You have selected to book the ${service}.`);
    // Here you can redirect to a booking form or process the booking
}
