function homeScreenController() {
	const contentDiv = document.querySelector("#content");
	contentDiv.textContent = "";

	const homeDiv = document.createElement("div");
	homeDiv.classList.add("home");

	const homeParagraph = document.createElement("p");
	homeParagraph.textContent =
		"Count memories not calories. This where the fun happens.";
	const reservationDiv = document.createElement("div");
	reservationDiv.classList.add("reservation");

	const reservationButton = document.createElement("button");
	reservationButton.textContent = "Reservations";

	reservationDiv.appendChild(reservationButton);

	homeDiv.appendChild(homeParagraph);
	homeDiv.appendChild(reservationDiv);

	contentDiv.appendChild(homeDiv);
}
export { homeScreenController };
