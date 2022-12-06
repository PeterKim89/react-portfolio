import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";

function App() {
	return (
		<div>
			<Header></Header>
			<About></About>
			<Portfolio></Portfolio>
			<Contact></Contact>
			<Footer></Footer>
		</div>
	);
}

export default App;
