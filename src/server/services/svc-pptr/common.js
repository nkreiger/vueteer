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

module.exports = {
    connect,
    getPage
};
