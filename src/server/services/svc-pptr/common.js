const puppeteer = require('puppeteer');
const { getValue } = require('../../store');

const connect = async (browserWSEndpoint) => {
    return await puppeteer.connect({
        browserWSEndpoint
    })
};

const getPage = async (browser) => {
    const pId = await getValue('page');
    const pages = await browser.pages();

    return pages.find(p => p._target._targetId === pId);
};

const getElement = async (page, selector='#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input') => {
    const ws = await getValue('browser');
    const browser = await connect(ws);
    if (!page) {
        page = await getPage(browser).catch((err) => console.error(err));
    }

    return await page.$(selector);
}

module.exports = {
    connect,
    getPage,
    getElement
};
