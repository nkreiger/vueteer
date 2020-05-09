const client = require('redis').createClient();

client.on('connect', () => {
    console.log('Redis client connected');
});

client.on("error", (error) => {
    console.error(error);
});

const setValue = async (key, value) => {
    return new Promise(resolve => {
        client.set(key, value, (err, res) => {
            if (err) console.error(err);
            resolve(res);
        })
    })
};

const getValue = async (key) => {
    return new Promise(resolve => {
            client.get(key, (err, res) => {
                if (err) console.error(err);
                resolve(res);
            })
        }
    )
};

async function test() {
    let test = await getValue('browser');
    console.log(test);
}

test().then(() => {
    console.log('test done')
});

module.exports = {
    setValue,
    getValue
};
