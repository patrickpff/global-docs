import { getCountry } from "./registry.js";

export function validateDocument(
  country: string,
  type: string,
  value: string
): boolean {
  const module = getCountry(country);
  if (!module) return false;

  const validator = module.documents[type.toUpperCase()];
  if (!validator) return false;

  return validator.validate(value);
}
