/**
 * author: huangyu
 * sliderdown下滑动画组件
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './index.less';

export default class AnimateSlider extends PureComponent {
    static propTypes = {
        show: PropTypes.bool,
        duration: PropTypes.string,
        animateBefore: PropTypes.func,
        animateEnd: PropTypes.func,
    };

    static defaultProps = {
        show: true,
        duration: '450ms',
        animateBefore: () => { },
        animateEnd: () => { },
    };

    constructor(props) {
        super();
        this.state = {
            show: props.show,
            height: 0,
        };
        this.timer = [];
    }

    componentWillReceiveProps({ show }) {
        const { show: oldShow } = this.state;
        if (show !== oldShow) {
            this.timer.forEach(t => clearTimeout(t));
            this.timer = [];
            if (show) {
                this.open(show);
            } else {
                this.close(show);
            }
        }
    }

    open() {
        this.setState({
            height: this.getHeight(),
        }, () => {
            this.timer.push(
                setTimeout(() => {
                    const { show, animateBefore } = this.props;
                    animateBefore(show);
                    this.setState({
                        show: true,
                    }, () => {
                        this.timer.push(
                            setTimeout(() => {
                                const { show: endShow, animateEnd } = this.props;
                                this.setState({
                                    height: 0,
                                });
                                animateEnd(endShow);
                            }, 500),
                        );
                    });
                }, 18),
            );
        });
    }

    close() {
        const { show, animateBefore } = this.props;
        animateBefore(show);
        this.setState({
            height: this.getHeight(),
        }, () => {
            this.timer.push(
                setTimeout(() => {
                    this.setState({
                        show: false,
                    }, () => {
                        setTimeout(() => {
                            const { show: endShow, animateEnd } = this.props;
                            animateEnd(endShow);
                        }, 500);
                    });
                }, 18),
            );
        });
    }

    getHeight() {
        const { content } = this;
        const { height } = content.getBoundingClientRect();
        return height;
    }

    getStyle() {
        const { show, height } = this.state;
        const { duration } = this.props;
        if (show && !!height) {
            return {
                height,
                transitionDuration: duration,
            };
        }
        return { transitionDuration: duration };
    }

    render() {
        const { show } = this.state;
        const { children } = this.props;
        const style = this.getStyle();
        return (
            <div
                className={`sliderContent${show ? '' : ' animate-hide'}`}
                style={style}
            >
                <div
                    className="sliderContentInner"
                    ref={(c) => { this.content = c; }}
                >
                    {children}
                </div>
            </div>
        );
    }
}
