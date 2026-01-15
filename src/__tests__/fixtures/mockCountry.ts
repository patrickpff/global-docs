import { CountryModule } from "../../types.js";

export const mockCountry: CountryModule = {
    country: "XX",
    documents: {
        TEST: {
            validate: (value: string) => value === "valid",
            mask: (value: string) => `masked-${value}`
        }
    }
};
