import { z } from "zod";

const City = z
	.object({
		id: z.number().optional(),
		name: z.string().optional(),
		latitude: z.number().optional(),
		longitude: z.number().optional(),
		elevation: z.number().optional(),
		timezone: z.string().optional(),
		feature_code: z.string().optional(),
		country_code: z.string().optional(),
		country: z.string().optional(),
		country_id: z.number().optional(),
		population: z.number().optional(),
		postcodes: z.array(z.string()).optional(),
		admin1: z.string().optional(),
		admin2: z.string().optional(),
		admin3: z.string().optional(),
		admin4: z.string().optional(),
		admin1_id: z.number().optional(),
		admin2_id: z.number().optional(),
		admin3_id: z.number().optional(),
		admin4_id: z.number().optional(),
	})
	.strict();

const CitiesApiResponse = z
	.object({
		results: z.array(City).optional(),
		generationtime_ms: z.number().optional(),
	})
	.strict();

export { CitiesApiResponse, City };
