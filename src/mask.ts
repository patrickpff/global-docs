import { getCountry } from "./registry.js";

export function mask(path: string, value: string): string {
    const [countryCode, documentType] = path.split(".");
    const countryModule = getCountry(countryCode);

    const definition = countryModule?.documents[documentType.toUpperCase()];

    return definition?.mask ? definition.mask(value) : value;
}