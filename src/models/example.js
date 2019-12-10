import { exmpleService } from '../service/example';

export default {
    namespace: 'example',

    state: {
        syncCount: 1,
        asyncCount: 0,
    },

    subscriptions: {
        setup({ history }) {
            console.log('run subscriptions', history);
        },
    },

    effects: {
        *effectsAdd({ payload }, { call, put }) {
            console.log('payload: ', payload);
            yield call(exmpleService);
            yield put({ type: 'asyncAdd' });
        },
    },

    reducers: {
        add(state) {
            const syncCount = state.syncCount + 1;
            return { ...state, syncCount };
        },
        asyncAdd(state) {
            const asyncCount = state.asyncCount + 1;
            return { ...state, asyncCount };
        },
    },
};
