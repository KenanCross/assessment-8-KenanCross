import { getPlaces } from "../functions/placeServices";

const PlaceList: React.FC = () => {
	
	const places = getPlaces();

	return (
		<ul>
			{places.map((place) => (
				<li key={place._id}>
					<div>
						<p>ID: {place._id}</p>
						<p>Name: {place.name}</p>
						<p>First Time: {place.firstTime ? "yes" : "no"}</p>
					</div>
				</li>
			))}
		</ul>
	);
};

export default PlaceList;
