/* eslint-disable no-console */
import dva from 'dva';
import createLoading from 'dva-loading';
import { createBrowserHistory } from 'history';
import intl from 'react-intl-universal';

import router from './routes';
import * as models from './models';

import './index.less';

const i18n = {
    'en-US': require('@/i18n/en-US.js'),
    'zh-CN': require('@/i18n/zh-CN.js'),
    'zh-TW': require('@/i18n/zh-TW.js'),
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
        [currentLocale]: i18n[currentLocale].default,
    },
})
    .then(() => {
        app.start('#root');
    });
