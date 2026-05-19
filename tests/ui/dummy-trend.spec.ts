import { expect, test } from '../setup';

test.describe('Dummy trend ui tests', () => {

    test('Dummy trend ui test', async ({ pages }) => {
        test.info().annotations.push({ type: "tag", description: "ui" });
        test.info().annotations.push({ type: "feature", description: "dummy-trend" });

        const { homePage } = pages;

        await homePage.open();

        expect(true).toBe(true);
    });
});