import { expect, test } from '../setup';

test.describe('Dummy trend ui tests', () => {

    test('Dummy trend ui test', async () => {
        test.info().annotations.push({ type: "tag", description: "ui" });
        test.info().annotations.push({ type: "feature", description: "dummy-trend" });  
        expect(true).toBe(true);
    });
});