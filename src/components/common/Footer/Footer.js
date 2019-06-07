import React from "react";
import { NavLink } from "react-router-dom";
import './footer.css'

const Footer = () => {
	return (
		<footer>
			<section>This project is licensed under the <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GNU GPL3</a> license.</section>
			<section>Made with <span role="img" aria-label="heart-emoji">❤️</span> by <a href="https://github.com/I-Smith/recipe-cache">I-Smith</a></section>
		</footer>
	);
};

export default Footer;