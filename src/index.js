import "./style.css";

import { homeScreenController } from "./home.js";
import { menuScreenController } from "./menu.js";
import { aboutScreenController } from "./about.js";
homeScreenController();

function screenHandler() {
	const homeBtn = document.querySelector(".home-btn");
	const menuBtn = document.querySelector(".menu-btn");
	const aboutBtn = document.querySelector(".about-btn");

	homeBtn.addEventListener("click", homeScreenController);
	menuBtn.addEventListener("click", menuScreenController);
	aboutBtn.addEventListener("click", aboutScreenController);
}

screenHandler();
