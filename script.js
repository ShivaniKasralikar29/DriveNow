let price = 0;
let driverCharge = 0;


// Explore Cars
function scrollToCars() {
    document.getElementById("cars").scrollIntoView({
        behavior: "smooth"
    });
}


// Search Cars
function searchCars() {

    let location = document.getElementById("location").value;
    let type = document.getElementById("carType").value;

    let cars = document.querySelectorAll(".car-card");

    cars.forEach(function(car) {

        if (
            (location == "all" || location == car.dataset.location) &&
            (type == "all" || type == car.dataset.type)
        ) {
            car.style.display = "block";
        } else {
            car.style.display = "none";
        }

    });
}


// Open Booking
function openBooking(name, carPrice) {

    price = carPrice;
    driverCharge = 0;

    document.getElementById("selectedCar").innerText =
        "Selected Car: " + name;

    document.getElementById("driverOption").value = "self";
    document.getElementById("driverName").style.display = "none";
    document.getElementById("driverName").value = "";

    document.getElementById("totalPrice").innerText = "";

    document.getElementById("bookingModal").style.display = "flex";
}


// Close Booking
function closeBooking() {
    document.getElementById("bookingModal").style.display = "none";
}


// Driver Option
document.getElementById("driverOption").onchange = function() {

    let driverName = document.getElementById("driverName");

    if (this.value == "driver") {

        driverCharge = 500;
        driverName.style.display = "block";

    } else {

        driverCharge = 0;
        driverName.style.display = "none";
        driverName.value = "";
    }

    calculateTotal();
};


// Calculate Total Price
function calculateTotal() {

    let days = document.getElementById("days").value;

    if (days == "") {
        return;
    }

    let total = (price + driverCharge) * days;

    document.getElementById("totalPrice").innerText =
        "Total Price: ₹" + total;
}


// Calculate price when days change
document.getElementById("days").oninput = function() {
    calculateTotal();
};


// Confirm Booking
function confirmBooking() {

    let name = document.getElementById("customerName").value;
    let phone = document.getElementById("phone").value;
    let days = document.getElementById("days").value;

    let option = document.getElementById("driverOption").value;
    let driver = document.getElementById("driverName").value;

    if (name == "" || phone == "" || days == "") {

        alert("Please fill all details");

    } else if (option == "driver" && driver == "") {

        alert("Please select a driver");

    } else {

        alert("Booking Confirmed!");
        closeBooking();
    }
}


// Select Driver
function selectDriver(name) {

    document.getElementById("driverOption").value = "driver";
    document.getElementById("driverName").style.display = "block";
    document.getElementById("driverName").value = name;

    driverCharge = 500;

    calculateTotal();

    alert(name + " selected!");
}


// Contact Form
function contactForm(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    alert("Thank you " + name + "!");

    event.target.reset();
}