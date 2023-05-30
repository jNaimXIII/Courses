import puppeteer from "puppeteer";
import { setTimeout } from "timers/promises";

const browser = await puppeteer.launch({
  headless: false,
  defaultViewport: { width: 1920, height: 1080 },
  // slowMo: 250,
  userDataDir: "temporary",
});

const page = await browser.newPage();

const defaultPageConfig = {
  // waitUntil: "networkidle2",
  // timeout: 60 * 1000,
};

// await page.goto("https://example.com/", defaultPageConfig);
// await page.screenshot({ path: "example.com.png" });

await page.goto("https://devconfbd.com/", defaultPageConfig);
await page.screenshot({ path: "devconfbd.com.png" });

const guestElement = await page.waitForSelector('img[alt="guest"]');

await guestElement.scrollIntoView();
await setTimeout(1000);

await guestElement.click('img[alt="guest"]');
await setTimeout(1000);

await page.screenshot({ path: "guest.png" });

await browser.close();
