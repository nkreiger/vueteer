const { pptr } = require('../../services');
const delay = require('delay');

const test = (req, res) => {
    console.log('test hit!')
    return res.send({
        msg: 'Ok'
    });
};

const pptrTest = async (req, res) => {
    console.log(pptr.services.browser);
    await pptr.services.browser.open();
    await pptr.services.browser.newPage();
    await delay(500);
    await pptr.services.page.navigateTo();
    await pptr.services.browser.close();
    return res.send({
        msg: 'Ok'
    });
};

const handleCmds = async (req, res) => {
    console.log(req.body);

    return res.send({
        msg: 'Ok'
    })
}


module.exports = {
    test,
    pptrTest,
    handleCmds
};
