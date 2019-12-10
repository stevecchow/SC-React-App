import React from 'react';
import { connect } from 'dva';

@connect(state => ({
    example: state.example,
}))
class IndexPage extends React.Component {
    addSyncEvent = () => {
        const { dispatch } = this.props;
        dispatch({ type: 'example/add', payload: 1 });
    };

    addAsyncEvent = () => {
        const { dispatch } = this.props;
        dispatch({ type: 'example/effectsAdd' });
    };

    render() {
        const { example } = this.props;
        return (
            <div>
                <div>同步操作：{example.syncCount}</div>
                <span onClick={this.addSyncEvent}>+</span>
                <div>异步操作：{example.asyncCount}</div>
                <span onClick={this.addAsyncEvent}>+</span>
            </div>
        );
    }
}

export default IndexPage;
