/* eslint-disable no-console */
import dva from 'dva';
import createLoading from 'dva-loading';
import { createBrowserHistory } from 'history';
import intl from 'react-intl-universal';

import router from './router.jsx';
import * as models from './models';

import './index.less';

const locales = {
    'en-US': require('@/locales/en-US.js'),
    'zh-CN': require('@/locales/zh-CN.js'),
    'zh-TW': require('@/locales/zh-TW.js'),
};

const currentLocale = localStorage.getItem('lang') || 'zh-CN';

// 1. Initialize
const app = dva({
    history: createBrowserHistory(),
    onError(e) {
        try {
            // 统一处理错误
            console.log('dva err>>>', e);
        } catch (error) {
            console.log('onError e', error);
        }
    },
});

// 2. Plugins
app.use(createLoading());

// 3. Model
Object.keys(models).forEach((item) => {
    app.model(models[item]);
});
// 4. Router
app.router(router);

// 5. Start
intl.init({
    currentLocale,
    locales: {
        [currentLocale]: locales[currentLocale].default,
    },
})
    .then(() => {
        app.start('#root');
    });
