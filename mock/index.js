const fs = require('fs');
const path = require('path');

function readFiles(pwd) {
    const files = fs.readdirSync(pwd);
    return files.reduce((a, b) => {
        if (!/^index/.test(b)) {
            const bPath = path.join(pwd, b);
            if (fs.statSync(bPath).isDirectory()) {
                return [...a, ...readDirFiles(bPath)];
            } else {
                return [...a, require(path.join(pwd, b))];
            }
        } else {
            return a;
        }
    }, []);
}

const apis = readFiles(path.resolve(__dirname, './'));

const proxy = apis.reduce((a, b) => {
    return {
        ...a,
        ...(b.default ? b.default : b),
    };
}, {});

module.exports = proxy;
