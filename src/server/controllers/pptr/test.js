const { pptr } = require('../../services');

const test = (req, res) => {
    return res.send({
        msg: 'Ok'
    });
};

const pptrTest = async (req, res) => {
    await pptr.open();
    return res.send({
        msg: 'Ok'
    });
};


module.exports = {
    test,
    pptrTest
};
