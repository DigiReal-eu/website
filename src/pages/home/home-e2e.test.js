import puppeteer from 'puppeteer';

describe('home.tsx', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false
        });
        page = await browser.newPage();
        await page.goto('http://localhost:3000');
    });

    it('has a change language button that switches between Dutch and English and saves the selected language on page refresh', async () => {
        await page.waitForSelector('.title');
        await page.waitForSelector('.language');

        // Get the string values when page is on Dutch
        const textNL = await page.$eval('.title', (e) => e.textContent);
        const buttonNL = await page.$eval('.language', (e) => e.textContent);

        // Change language to English
        await page.click('.language');

        // Get the string values when page is on English
        const textEN = await page.$eval('.title', (e) => e.textContent);
        const buttonEN = await page.$eval('.language', (e) => e.textContent);

        // Reload page
        await page.reload();

        // Get the string values after page reload
        const textAfterReload = await page.$eval('.title', (e) => e.textContent);
        const buttonAfterReload = await page.$eval('.language', (e) => e.textContent);

        // Compare the Dutch strings with the expected strings
        expect(textNL).toContain('Welkom bij');
        expect(buttonNL).toContain('English');

        // Compare the English strings with the expected strings
        expect(textEN).toContain('Welcome to');
        expect(buttonEN).toContain('Nederlands');

        // Compare the After Reload strings with the expected strings
        expect(textAfterReload).toContain('Welcome to');
        expect(buttonAfterReload).toContain('Nederlands');
    });

    afterAll(() => browser.close());
});
