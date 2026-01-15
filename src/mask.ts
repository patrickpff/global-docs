import { getCountry } from "./registry.js";

export function mask(
    country: string,
    type: string,
    value: string
): string {
    const countryModule = getCountry(country);

    const definition = countryModule?.documents[type.toUpperCase()];

    return definition?.mask ? definition.mask(value) : value;
}

export function maskPath(
    path: string,
    value: string
): string {
    const [country, type] = path.split(".");
    if (!country || !type) return value;

    return mask(country, type, value);
}
