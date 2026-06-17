import "./style.css";

import { homeScreenController } from "./home.js";
import { menuScreenController } from "./menu.js";

function screenHandler() {
	const homeBtn = document.querySelector(".home-btn");
	const menuBtn = document.querySelector(".menu-btn");
	const aboutBtn = document.querySelector(".about-btn");

	homeBtn.addEventListener("click", homeScreenController);
	menuBtn.addEventListener("click", menuScreenController);
}

screenHandler();
