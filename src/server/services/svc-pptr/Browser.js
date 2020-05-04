const puppeteer = require('puppeteer');
const delay = require('delay');

const open = async () => {
    return await puppeteer.launch({
        headless: false
    });
};

module.exports = {
    open
};
