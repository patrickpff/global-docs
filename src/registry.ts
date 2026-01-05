import { CountryModule } from "./types.js";

const registry = new Map<string, CountryModule>();

export function registerCountry(module: CountryModule): void {
    registry.set(module.country.toLowerCase(), module);
}

export function getCountry(code: string): CountryModule | undefined {
    return registry.get(code.toLowerCase());
}