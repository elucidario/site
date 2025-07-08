import { describe, expect, it } from "vitest";

import { getLastUpdateDate, getCreationDate } from "./git";

describe("getLastUpdateDate", () => {
    it("should return the last update date of a file", async () => {
        const file = "README.md";
        const lastUpdateDate = await getLastUpdateDate(file);

        console.log(
            `A data da última atualização de "${file}" é: ${lastUpdateDate}`,
        );

        expect(lastUpdateDate).toBeDefined();
        expect(lastUpdateDate).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
    });

    it("should return null for a non-existent file", async () => {
        const file = "non_existent_file.txt";
        const lastUpdateDate = await getLastUpdateDate(file);

        expect(lastUpdateDate).toBeNull();
    });
});

describe("getCreationDate", () => {
    it("should return the creation date of a file", async () => {
        const file = "README.md";
        const creationDate = await getCreationDate(file);

        console.log(`A data de criação de "${file}" é: ${creationDate}`);

        expect(creationDate).toBeDefined();
        expect(creationDate).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
    });

    it("should return null for a non-existent file", async () => {
        const file = "non_existent_file.txt";
        const creationDate = await getCreationDate(file);

        expect(creationDate).toBeNull();
    });
});
