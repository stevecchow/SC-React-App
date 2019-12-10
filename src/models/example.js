/* eslint-disable no-unused-vars */

export default {

    namespace: 'example',

    state: {},


    effects: {
        *fetch({ payload }, { call, put }) {
            yield put({ type: 'save' });
        },
    },

    reducers: {
        save(state, { payload }) {
            return {
                ...state,
                ...payload,
            };
        },
    },

};
