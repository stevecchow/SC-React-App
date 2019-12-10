/* eslint-disable no-shadow */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import intl from 'react-intl-universal';
import './index.less';
import { deepCopy } from '@/utils/fn';
import { withRouter } from 'react-router-dom';
import { menus } from '../../constants/Menus';
import AnimateSlider from '../AnimateSlider';

class index extends Component {
    constructor(props) {
        super(props);
        this.menus = menus;
        this.defaultPath = [];
        this.initActive(this.menus);
        this.state = {
            menus: this.menus,
        };
    }

    componentDidMount() {
        this.menuItemEvent(this.defaultPath);
    }

    initActive(data) {
        data.map(item => {
            item.active = false;
            return item.children ? this.initActive(item.children) : true;
        });
    }

    cleanNodeActive(data) {
        data.map(item => {
            item.nodeActive = false;
            if (item.children) {
                this.cleanNodeActive(item.children);
            }
            return true;
        });
    }

    menuItemEvent(pathIndex, route) {
        let tmpMenus = this.state.menus;
        pathIndex.map((item, key) => {
            // 展开收起切换
            tmpMenus[item].active = !(tmpMenus[item].active && key === pathIndex.length - 1);
            // 最后一级节点渲染
            if (!tmpMenus[item].children && key === pathIndex.length - 1) {
                this.cleanNodeActive(this.state.menus);
                tmpMenus[item].nodeActive = true;
                if (route) {
                    this.props.history.push(route);
                }
            }
            return (tmpMenus = tmpMenus[item].children);
        });
        this.setState({
            menus: this.state.menus,
        });
    }

    recursion(menus, active, pathIndex, tag) {
        return (
            <AnimateSlider show={active}>
                <div className="menu-item">
                    {menus.map((item, index) => {
                        const path = deepCopy(pathIndex);
                        path.push(index);
                        const children = item.children ? this.recursion(item.children, item.active, path, tag + 1) : '';
                        if (this.props.location.pathname === `/${item.route}`) {
                            this.defaultPath = path;
                        }
                        return (
                            <div key={index}>
                                <div
                                    className={`title ${item.nodeActive ? 'node-active' : ''}`}
                                    style={{ textIndent: `${tag}rem` }}
                                    onClick={() => {
                                        this.menuItemEvent(path, item.route);
                                    }}
                                >
                                    {intl.get(item.title)}
                                    {item.children
                                        ? <i className={`iconfont icon-down-arrow ${item.active ? 'active' : ''}`} />
                                        : ''}
                                </div>
                                {children}
                            </div>
                        );
                    })}
                </div>
            </AnimateSlider>
        );
    }

    render() {
        const { menus } = this.state;
        return <div className="Menus-component">{this.recursion(menus, true, [], 1)}</div>;
    }
}

export default withRouter(index);
