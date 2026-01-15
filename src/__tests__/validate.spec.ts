import { beforeAll, describe, expect, it } from "vitest";
import { mockCountry } from "./fixtures/mockCountry.js";
import { registerCountry } from "../registry.js";
import { validate, validatePath } from "../validate.js";

beforeAll(() => {
    registerCountry(mockCountry);
});

describe ("validate", () => {
    it("validates a known document", () => {
        expect(validate("XX", "TEST", "valid")).toBe(true);
        expect(validate("XX", "TEST", "invalid")).toBe(false);
    });

    it("returns false for unknown document", () => {
        expect(validate("XX", "UNKNOWN", "value")).toBe(false);
    });

    it("returns false for unknown country", () => {
        expect(validate("ZZ", "TEST", "value")).toBe(false);
    })
});

describe("validatePath", () => {
    it("validates using path syntax", () => {
        expect(validatePath("XX.TEST", "valid")).toBe(true);
    })
})