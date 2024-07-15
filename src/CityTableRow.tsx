import { useMemo } from "react";
import type { z } from "zod";
import type { City } from "./CitiesApiResponse";
import { CityTemperatureTableCell } from "./CityTemperatureTableCell";

interface Props {
	city: z.infer<typeof City>;
}

const CityTableRow = ({ city }: Props) => {
	const postCodes = useMemo(() => {
		return city.postcodes?.join(",") ?? "";
	}, [city.postcodes]);

	const administrativeAreas = useMemo(() => {
		return [
			city.admin1 ?? "",
			city.admin2 ?? "",
			city.admin3 ?? "",
			city.admin4 ?? "",
		].join("/");
	}, [city.admin1, city.admin2, city.admin3, city.admin4]);

	return (
		<tr>
			<td>{city.name ?? ""}</td>
			<td>{city.country ?? ""}</td>
			<td>{postCodes}</td>
			<td>{administrativeAreas}</td>
			{city.latitude === undefined || city.longitude === undefined ? (
				<td />
			) : (
				<CityTemperatureTableCell
					latitude={city.latitude}
					longitude={city.longitude}
				/>
			)}
		</tr>
	);
};

export { CityTableRow };
