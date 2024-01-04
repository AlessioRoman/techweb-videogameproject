import { useState, useEffect } from "react";
import Videogame from "@/model/videogame";
import { useParams } from "react-router-dom";

function Details() {
	const [videogame, setVideogame] = useState<Videogame | null>(null); // Use Videogame | null for initial state
	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`http://localhost:3002/videogames/${id}`);
				if (!response.ok) {
					throw new Error("Failed to fetch videogame details");
				}
				const data: Videogame = await response.json();
				console.log(data);
				setVideogame(data);
			} catch (error) {
				console.error("Error fetching videogame details:", error);
			}
		};

		if (id) {
			fetchData();
		}
	}, [id]);

	return (
		<div>
			{videogame ? (
				<div>
					<h1>{videogame.title}</h1>
					<p>Price: ${videogame.price}</p>
					<p>Author: {videogame.author}</p>
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}

export default Details;
