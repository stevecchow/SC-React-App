# jusda-react-app

> 当前分支已添加antd <br>修改主题色直接在webpack配置文件中修改。


- `webpack.config.dev.js`
- `webpack.config.prod.js`

```
{
    loader: require.resolve('less-loader'),
    options: {
        modifyVars: { 
            "@primary-color": "#1DA57A" //antd主题配色
        },
        javascriptEnabled: true
    },
}
```

更多主题色less变量参见 [antd github](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)
