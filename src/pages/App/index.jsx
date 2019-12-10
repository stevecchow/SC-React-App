import React from 'react';
import AppRoutes from '@/routes/App';
import Menus from '@/components/Menus';
import UserContent from '@/components/UserContent';
import logo from '@/images/logo.png';
import './index.less';

export default () => {
    return (
        <div className="App">
            <div className="menu-content">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="menu-list">
                    <Menus />
                </div>
            </div>
            <div className="content">
                <div className="user-content">
                    <UserContent />
                </div>
                <div className="content-body">
                    <AppRoutes />
                </div>
            </div>
        </div>
    );
};
