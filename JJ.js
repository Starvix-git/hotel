// Find the booking form in the HTML so JavaScript can respond to submissions.
const bookingForm = document.getElementById("form");
// Find the booking section so the page can scroll to it when a room is selected.
const bookingSection = document.getElementById("Booking");
// Find all three room menus: Single, Double, and Luxury.
const roomSelects = document.querySelectorAll(".room-select");

// Add a click action to every room button on the page.
document.querySelectorAll(".room-button").forEach((button) => {
    button.addEventListener("click", () => {
        // Put the room chosen from a room card into the matching menu.
        roomSelects.forEach((select) => {
            select.value = button.dataset.room;
        });
        // Take the user to the form so they can complete the booking.
        bookingSection.scrollIntoView({ behavior: "smooth" });
    });
});

// Run this code when the user presses the booking form's submit button.
bookingForm.addEventListener("submit", (event) => {
    // Stop the browser from refreshing the page after the form is submitted.
    event.preventDefault();

    // Read the guest's name and remove extra spaces from the beginning or end.
    const name = document.getElementById("name").value.trim();
    // Find which room menu contains a selected room.
    const selectedRoom = Array.from(roomSelects).find((select) => select.value !== "select");
    // Read the check-in and check-out dates from the form.
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    // Show an instruction and stop if no room has been selected.
    if (!selectedRoom) {
        document.getElementById("result").textContent = "Please select a room.";
        return;
    }

    // Get the name of the selected room, such as "Single Room 1".
    const room = selectedRoom.value;

    // Display the completed booking details inside the result paragraph.
    document.getElementById("result").innerHTML =
        "Booking successful!<br><br>" +
        "Thank you, " + name + "<br>" +
        "Room: " + room + "<br>" +
        "Check-in: " + checkin + "<br>" +
        "Check-out: " + checkout;
});