const puppeteer = require('puppeteer');
const { connect } = require('./common');
const { setValue, getValue } = require('../../store');

const open = async () => {
    const browser = await puppeteer.launch({
        headless: false
    });

    const pages = await browser.pages();
    const pageId = pages[0]._target._targetId;

    await setValue('browser', browser.wsEndpoint());
    await setValue('page', pageId);
};

const newPage = async () => {
    const ws = await getValue("browser");
    const browser = await connect(ws);

    const page = await browser.newPage();
    const pageId = page._target._targetId;

    await setValue('page', pageId);
};

module.exports = {
    open,
    newPage
};
