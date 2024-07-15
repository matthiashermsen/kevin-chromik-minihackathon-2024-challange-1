import { useEffect, useState } from "react";
import type { z } from "zod";
import { CitiesApiResponse, type City } from "./CitiesApiResponse";
import { CitiesTable } from "./CitiesTable";
import { CityNameInput } from "./CityNameInput";

const MainContent = () => {
	const [citySearchText, setCitySearchText] = useState("");
	const [cities, setCities] = useState<z.infer<typeof City>[]>([]);

	useEffect(() => {
		if (citySearchText.length === 0) {
			return;
		}

		const encodedNameQuery = encodeURIComponent(citySearchText);

		fetch(
			`https://geocoding-api.open-meteo.com/v1/search?name=${encodedNameQuery}&language=de`,
		)
			.then((response) => response.json())
			.then((data) => CitiesApiResponse.parse(data))
			.then((apiResponse): z.infer<typeof City>[] => apiResponse.results ?? [])
			.then((cities) => setCities(cities))
			.catch((error) => console.error(error));
	}, [citySearchText]);

	return (
		<div>
			<CityNameInput
				currentValue={citySearchText}
				setValue={setCitySearchText}
			/>
			<CitiesTable cities={cities} />
		</div>
	);
};

export { MainContent };
