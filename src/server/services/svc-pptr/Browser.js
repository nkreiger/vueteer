const puppeteer = require('puppeteer');
const { connect } = require('./common');
const { setValue, getValue, addSet, getSet, remSet } = require('../../store');

const open = async () => {
    const browser = await puppeteer.launch({
        headless: false
    });

    const pages = await browser.pages();
    const pageId = pages[0]._target._targetId;

    // add browser to set
    await addSet('browsers', browser.wsEndpoint())
    await setValue('browser', browser.wsEndpoint());
    await setValue('page', pageId);
};

const close = async () => {
    const ws = await getValue("browser");
    const b = await connect(ws).catch(async (err) => {
        if (err) await remSet('browsers', ws)
    });

    await b.close();
    
    // remove from set
    await remSet('browsers', ws)

    // get most recent browser if exists and set value
    const browsers = await getSet('browsers')
    let browser = ''
    if (browsers.length > 0) {
        browser = browsers[browsers.length - 1]
    }
    await setValue('browser', browser);
    await setValue('page', '');
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
    close,
    newPage
};
