import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Header() {
	return (
		<header className="flex-row">
			<h1>
				<Link to="/">Peter Kim</Link>
			</h1>
			<Navbar></Navbar>
		</header>
	);
}

export default Header;
