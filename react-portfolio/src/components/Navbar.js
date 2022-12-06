import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<nav className="navbar">
			<ul className="flex-row">
				<li>
					<Link to="./About">About Me</Link>
				</li>
				<li>
					<Link to="./Portfolio">Portfolio</Link>
				</li>
				<li>
					<Link to="./Contact">Contact Me</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
