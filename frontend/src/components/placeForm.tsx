import React, { useState } from "react";
import { addPlace } from "../functions/placeServices";

const PlaceForm: React.FC = () => {
	const [name, setName] = useState("");
	const [firstTime, setfirstTime] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		addPlace({ name: name, firstTime: firstTime });
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Name:</label>
				<input
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div>
				<label>First Time?</label>
				<input
					type='checkbox'
					onChange={() => setfirstTime(firstTime => !firstTime)}
					checked={firstTime}
				/>
			</div>
			<button type='submit'>Add</button>
		</form>
	);
};

export default PlaceForm