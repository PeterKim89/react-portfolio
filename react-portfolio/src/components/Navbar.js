import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<nav className="navbar">
			<ul className="flex-row">
				<li>
					<Link to="/about">About Me</Link>
				</li>
				<li>
					<Link to="/portfolio">Portfolio</Link>
				</li>
				<li>
					<Link to="/footer">Contact Me</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
