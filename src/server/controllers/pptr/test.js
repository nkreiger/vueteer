const { pptr } = require('../../services');
const delay = require('delay');

const test = (req, res) => {
    console.log('test hit!')
    return res.send({
        msg: 'Ok'
    });
};

const pptrTest = async (req, res) => {
    await pptr.open();
    await delay(500);
    await pptr.navigateTo();
    await delay(500);
    await pptr.newPage();
    await delay(500);
    await pptr.navigateTo();
    await delay(500);
    await pptr.newPage();
    await delay(500);
    await pptr.navigateTo();
    await delay(500);
    await pptr.newPage();
    await delay(500);
    await pptr.navigateTo();
    await delay(500);
    await pptr.newPage();
    await delay(500);
    await pptr.navigateTo();
    return res.send({
        msg: 'Ok'
    });
};


module.exports = {
    test,
    pptrTest
};
