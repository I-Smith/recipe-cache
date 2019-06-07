import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
	return (
		<div class="jumbotron">
			<h2 class="display-3">Welcome to Recipe Cache</h2>
			<p class="lead">An app to help keep your recipes organized in one convenient place.</p>
			<hr class="my-4" />
			<h4>Browse your recipes</h4>
			<p class="lead">
				<NavLink className="btn btn-primary btn-lg" to="/recipes" role="button">Learn more</NavLink>
			</p>
		</div>
	);
}

export default HomePage;