import React from "react";

function NavBar() {
	return (
		<nav className="navbar">
			<ul className="flex-row">
				<li>
					<a href="#about">About Me</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#contact">Contact Me</a>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
