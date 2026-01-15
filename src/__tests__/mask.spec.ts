import { beforeAll, describe, expect, it } from "vitest";
import { registerCountry } from "../registry.js";
import { mockCountry } from "./fixtures/mockCountry.js";
import { mask, maskPath } from "../mask.js";

beforeAll(() => {
    registerCountry(mockCountry);
});

describe("mask", () => {
    it("masks a known document", () => {
        expect(mask("XX", "TEST", "123")).toBe("masked-123");
    });

    it("returns raw value when mask is not defined", () => {
        const noMaskCountry = {
            country: "YY",
            documents: {
                TEST: {
                    validate: () => true
                }
            }
        };

        registerCountry(noMaskCountry);
        expect(mask("YY", "UNKNOWN", "123")).toBe("123");
    });

    it("returns raw value for unknown document", () => {
        expect(mask("XX", "UNKNOWN", "123")).toBe("123")
    });
});

describe("maskPath", () => {
    it("masks using path syntax", () => {
        expect(maskPath("XX.TEST", "abc")).toBe("masked-abc");
    });
})
