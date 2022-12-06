import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [error, setError] = useState("");
	const { name, email, message } = formState;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!error) {
			console.log("Submit Form", formState);
		}
	};

	const handleChange = (e) => {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setError("Your email is invalid.");
			} else {
				setError("");
			}
		} else {
			if (!e.target.value.length) {
				setError(`${e.target.name} is required.`);
			} else {
				setError("");
			}
		}

		if (!error) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
			console.log("Handle Form", formState);
		}
	};

	return (
		<section>
			<h1>Contact Me</h1>
			<form id="contact-form" onSubmit={handleSubmit}>
				<div>
					<label htmlLabel="name">Name:</label>
					<input
						type="text"
						name="name"
						defaultValue={name}
						onBlur={handleChange}
					/>
				</div>
				<div>
					<label htmlLabel="email">Email address:</label>
					<input
						type="email"
						name="email"
						defaultValue={email}
						onBlur={handleChange}
					/>
				</div>
				<div>
					<label htmlLabel="message">Message:</label>
					<textarea
						name="message"
						rows="4"
						defaultValue={message}
						onBlur={handleChange}
					/>
				</div>
				{error && (
					<div>
						<p className="error-message">{error}</p>
					</div>
				)}
				<button type="submit">Submit</button>
			</form>
		</section>
	);
}

export default Contact;
