import { fetchWeatherApi } from "openmeteo";
import { useEffect, useState } from "react";

interface Props {
	latitude: number;
	longitude: number;
}

const CityTemperatureTableCell = ({ latitude, longitude }: Props) => {
	const [temperature, setTemperature] = useState("");

	useEffect(() => {
		const url = "https://api.open-meteo.com/v1/forecast";
		const params = {
			latitude,
			longitude,
			current: "temperature_2m",
			timezone: "auto",
		};

		fetchWeatherApi(url, params)
			.then((weatherApiResponses) => weatherApiResponses[0])
			.then((weatherApiResponse) => weatherApiResponse?.current())
			.then((currentWeatherData) => currentWeatherData?.variables(0)?.value())
			.then((currentTemperature) => {
				if (!currentTemperature) {
					setTemperature("");
					return;
				}

				const roundedTemperature = Math.round(currentTemperature);
				setTemperature(roundedTemperature.toString());
			})
			.catch((error) => console.error(error));
	});

	return <td>{temperature}</td>;
};

export { CityTemperatureTableCell };
