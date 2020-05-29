const puppeteer = require('puppeteer');
const { connect, getPage } = require('./common');
const { getValue } = require('../../store');

const navigateTo = async (page, url='https://www.google.com/') => {
    const ws = await getValue('browser');
    const browser = await connect(ws);
    if (!page) {
        page = await getPage(browser).catch((err) => console.error(err));
    }
    await page.goto(url).catch((err) => console.error(err));
};

module.exports = {
    navigateTo
};
