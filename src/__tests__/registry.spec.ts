import { beforeEach, describe, expect, it } from "vitest";
import { getCountry, registerCountry } from "../registry.js";
import { mockCountry } from "./fixtures/mockCountry.js";

describe("registry", () => {
    beforeEach(() => {});

    it("registers a country module", () => {
        registerCountry(mockCountry);
        const country = getCountry("XX");

        expect(country).toBeDefined();
        expect(country?.country).toBe("XX");
    });

    it("returns undefined for unknown country", () => {
        expect(getCountry("ZZ")).toBeUndefined();
    });
});