export function aboutScreenController() {
	const contentDiv = document.querySelector("#content");
	contentDiv.textContent = "";

	const aboutContainer = document.createElement("div");
	aboutContainer.classList.add("about-container");

	const aboutDiv = document.createElement("div");
	aboutDiv.classList.add("child-1");
	aboutDiv.classList.add("child");

	const aboutFirstChild = document.createElement("h2");
	aboutFirstChild.textContent = "About Us";

	const aboutParaFirstChild = document.createElement("p");
	aboutParaFirstChild.textContent =
		"Serious About Food, Not So Serious About Ourselves.";

	const aboutSecondParaChild = document.createElement("p");
	aboutSecondParaChild.textContent = "Serving customers since 1998.";

	aboutDiv.appendChild(aboutFirstChild);
	aboutDiv.appendChild(aboutParaFirstChild);
	aboutDiv.appendChild(aboutSecondParaChild);

	aboutContainer.appendChild(aboutDiv);

	const locationDiv = document.createElement("div");
	locationDiv.classList.add("child");
	locationDiv.classList.add("child-2");

	const locationFirstChild = document.createElement("h2");
	locationFirstChild.textContent = "Location";

	const locationParaFirstChild = document.createElement("p");
	locationParaFirstChild.textContent =
		"Book a reservation mate and find out.";

	locationDiv.appendChild(locationFirstChild);
	locationDiv.appendChild(locationParaFirstChild);

	aboutContainer.appendChild(locationDiv);

	const contactDiv = document.createElement("div");
	contactDiv.classList.add("child");
	contentDiv.classList.add("child-3");

	const contactFirstChild = document.createElement("h2");
	contactFirstChild.textContent = "Contact us.";

	const contactParaFirstChild = document.createElement("p");
	contactParaFirstChild.textContent = "(111) 23 456";

	contactDiv.appendChild(contactFirstChild);
	contactDiv.appendChild(contactParaFirstChild);

	aboutContainer.appendChild(contactDiv);

	contentDiv.appendChild(aboutContainer);
}
