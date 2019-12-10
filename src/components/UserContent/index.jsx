import React, { Component } from 'react';
import Language from '@/constants/Language';
import './index.less';

class UserContent extends Component {
    onSelectLocale(e) {
        const lang = e.target.value;
        localStorage.setItem('lang', lang);
        window.location.reload();
    }


    render() {
        return (
            <div className="UserContent-Component">
                <div>
                    <select onChange={this.onSelectLocale}>
                        <option value="">Language</option>
                        {Language.map(locale => (
                            <option key={locale.value} value={locale.value}>{locale.name}</option>
                        ))}
                    </select>
                </div>
                <div className="user-name">
                    <span>Colin</span>
                    <span>退出</span>
                </div>
            </div>
        );
    }
}

export default UserContent;
