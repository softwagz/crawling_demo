const config = require("./config.json");
const puppeteer = require("puppeteer");
const sound = require("sound-play");
const path = require("path");
const filePath1 = path.join(__dirname, "./assets/audio/await.mp3");
const filePath2 = path.join(__dirname, "./assets/audio/see you.mp3");


async function initCrawling() {
    const browser = await puppeteer.launch(config.options);
    const page = (await browser.pages())[0];
    await page.setViewport(config.browser);
    sound.play(filePath1);
    await page.goto(config.url);
    await page.click(config.selectors.search_icon, { delay: 2000 });
    await page.waitForTimeout(1000);
    await mensaje_en_el_buscador(page, config.selectors.input_search, config.selectors.frase_para_baby);
    await mensaje_en_el_buscador(page, config.selectors.input_search, config.selectors.frase_para_baby2);
    await mensaje_en_el_buscador(page, config.selectors.input_search, config.selectors.frase_para_baby3);
    await mensaje_en_el_buscador(page, config.selectors.input_search, config.selectors.frase_para_baby4);
    await mensaje_en_el_buscador(page, config.selectors.input_search, config.selectors.frase_para_baby5);
    await mensaje_en_el_buscador(page, config.selectors.input_search, config.selectors.frase_para_baby6);
    await mensaje_en_el_buscador(page, config.selectors.input_search, config.selectors.frase_para_baby7);
    await mensaje_en_el_buscador(page, config.selectors.input_search, config.selectors.frase_para_baby8);
    sound.play(filePath2);
    await page.waitForTimeout(3000);
    await mensaje_en_el_buscador(page, config.selectors.input_search, config.selectors.frase_para_baby9);
    await mensaje_en_el_buscador(page, config.selectors.input_search, 'Adios!');
    await page.waitForTimeout(500);
    await browser.close();
}

async function mensaje_en_el_buscador(page, selector, frase) {
    await page.type(selector, frase, { delay: 50 })
    await page.waitForTimeout(2000);
    for (let x = 0; x < frase.length; x++) { await page.keyboard.press('Backspace', { delay: 10 }) }
}

initCrawling();