const Mock = require('mockjs');

const data = Mock.mock({
    'list|20': [
        {
            'id|+1': 1,
            createdTime: '@datetime("yyyy-MM-dd")',
            warehouse: {
                'id|+1': 1,
                createdTime: '@datetime("yyyy-MM-dd")',
                code: '@string(5)',
                name: '@cword(4)',
                address: 'testEdit',
            },
            code: '@string(5)',
            'enabled|1': [true, false],
            status: 'DISABLE',
        },
    ],
});

module.exports = {
    'GET /all': (req, res) => {
        setTimeout(() => {
            res.json({
                msg: '请求处理成功',
                code: '200',
                data: data.list,
            });
        }, 2000);
    },
};
