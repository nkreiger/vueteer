const puppeteer = require('puppeteer');
const { connect, getPage } = require('./common');
const { getElement } = require('./common')
const { getValue } = require('../../store');

const type = async (element={}) => {
    // TODO: hard coded for demo, but should be passed from UI (with Element...do this)
    // or make element actions common because they assist api actions?
    element = await getElement()

    await element.type('Noah Kreiger', { delay: 50 })
};

const click = async (element={}) => {
    element = await getElement(null, '#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.tfB0Bf > center > input.gNO89b')

    await element.click({clickCount: 2})
}

module.exports = {
    type,
    click
};
