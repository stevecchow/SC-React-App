import React from 'react';
import AppRoutes from './AppRoutes';
import Menus from '@/components/Menus';
import UserContent from '@/components/UserContent';
import './AppContainer.less';

export default function AppContainer() {
    return (
        <div className="App">
            <div className="menu-content">
                <div className="logo">admin</div>
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
}
