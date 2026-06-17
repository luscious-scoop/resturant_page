export function menuScreenController() {
	const contentDiv = document.querySelector("#content");
	contentDiv.textContent = "";
	const cardContainer = document.createElement("div");
	cardContainer.classList.add("card-container");
	cardContainer.textContent = "";
	const menu = [
		{
			pic: "../assets/images/dragon-roll.jpg",
			name: "Dragon Roll",
			description: `	Spicy Tuna and sweetwater Eel with finely cut Avocado
						slices`,
			price: "14.37$",
		},

		{
			pic: "../assets/images/salmon.jpg",
			name: "Salmon Roll",
			description: `Classic fresh salmon draped over lightly seasoned sushi
						rice.`,
			price: "17.61$",
		},

		{
			pic: "../assets/images/nigiri.jpg",
			name: "Nigiri",
			description: ` Norwegian salmon, tuna, and yellowtail, delivering a perfect melt-in-your-mouth bite.`,
			price: "20.00$",
		},
		{
			pic: "../assets/images/spicy-tuna.jpg",
			name: "Spicy Tuna ",
			description: `s Spicy Tuna Roll is a traditional maki Spicy Tuna Roll packed and topped with flavorful, spicy tuna Spicy Tuna`,
			price: "12.02$",
		},

		{
			pic: "../assets/images/tea.jpg",
			name: "Green tea ",
			description: `: Delivers a delicate, earthy taste that can be enjoyed plain or enhanced with natural ingredients like lemon, jasmine, or mint`,
			price: "6.00$",
		},

		{
			pic: "../assets/images/water.jpg",
			name: "Water bottle ",
			description: ` Just your regular water bottle nothing special. Funnily enough  you have to pay for it. `,
			price: "2.00$",
		},
	];

	for (let i = 0; i < menu.length; i++) {
		const card = document.createElement("div");
		card.classList.add("card");

		const imageContainer = document.createElement("div");
		imageContainer.classList.add("item-img");

		const image = document.createElement("img");
		image.src = menu[i].pic;

		imageContainer.appendChild(image);

		const itemName = document.createElement("div");
		itemName.textContent = menu[i].name;
		itemName.classList.add("item-name");

		const itemDescription = document.createElement("div");
		itemDescription.textContent = menu[i].description;
		itemDescription.classList.add("item-description");

		const itemPrice = document.createElement("div");
		itemPrice.textContent = menu[i].price;
		itemPrice.classList.add("item-price");

		card.appendChild(imageContainer);
		card.appendChild(itemName);

		card.appendChild(itemDescription);
		card.appendChild(itemPrice);

		cardContainer.appendChild(card);
	}
}
