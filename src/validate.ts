import { getCountry } from "./registry.js";

export function validate(
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

export function validatePath(
  path: string,
  value: string
): boolean {
  const [country, type] = path.split(".");
  if (!country || !type) return false;
  
  return validate(country, type, value);
}

/** @deprecated use validate instead */
export const validateDocument = validate;