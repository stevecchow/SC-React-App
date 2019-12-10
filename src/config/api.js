const api = {
    dev: 'http://localhost:3000',
    prod: '',
    sit: '',
    uat: '',
    test: '',
};

export default api[process.env.REACT_APP_SECRET_BUILD_TYPE];
