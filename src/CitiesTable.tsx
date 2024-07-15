import type { z } from "zod";
import type { City } from "./CitiesApiResponse";
import { CityTableRow } from "./CityTableRow";

interface Props {
	cities: z.infer<typeof City>[];
}

const CitiesTable = ({ cities }: Props) => {
	if (cities.length === 0) {
		return <></>;
	}

	return (
		<table>
			<thead>
				<tr>
					<th>Stadt</th>
					<th>Land</th>
					<th>Postleitzahlen</th>
					<th>Verwaltungsbereich</th>
					<th>Aktuelle Temperatur ( Celsius °C )</th>
				</tr>
			</thead>
			<tbody>
				{cities.map((city) => {
					return <CityTableRow city={city} key={city.id} />;
				})}
			</tbody>
		</table>
	);
};

export { CitiesTable };
