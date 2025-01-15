import { useState, useEffect } from "react";
import Place from "../models/places";
import axios from "axios";

export const getPlaces = () => {
	const [places, setPlaces] = useState<Place[]>([]);
	useEffect(() => {
		axios
			.get("http://localhost:5001/places")
			.then((res) => setPlaces(res.data))
			.catch((err) => console.error("Error Fetching Places", err));
	}, [places]);
	return places;
};

export const addPlace = (place: Place) => {
	axios
		.post("http://localhost:5001/places", {
			name: place.name,
			firstTime: place.firstTime,
		})
		.then((res) => console.log("Place Added", res.data))
        .catch((err) => console.error(err));
    getPlaces();
};
