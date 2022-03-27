import puppeteer from 'puppeteer';

describe('home.tsx', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:3000');
    });

    it('has a change language button that switches between Dutch and English', async () => {
        await page.waitForSelector('.language');
        const textNL = await page.$eval('.title', (e) => e.textContent);

        await page.$eval('.language', (btn) => btn.click());
        const textEN = await page.$eval('.title', (e) => e.textContent);

        expect(textNL).toContain('Welkom bij');
        expect(textEN).toContain('Welcome to');
    });

    afterAll(() => browser.close());
});
