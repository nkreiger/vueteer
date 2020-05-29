const { pptr } = require('../../services');
const delay = require('delay');

const handleCmds = async (req, res) => {
    console.log(req.body);
    const cmds = req.body.cmds;
    console.log('SERVICES: ')
    console.log(pptr.services)
    for (const c of cmds) {
        const f = pptr.services[c.type][c.cmd.value];
        await delay(500);
        await f() // handle pass parameters here
    }

        return res.send({
        msg: 'Ok'
    })
}
;
module.exports = {
    handleCmds
};
