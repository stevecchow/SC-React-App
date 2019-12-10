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
        const currentLanguage = localStorage.getItem('lang') || 'zh-CN';
        return (
            <div className="UserContent-Component">
                <div>
                    <select onChange={this.onSelectLocale} value={currentLanguage}>
                        {Language.map(locale => (
                            <option key={locale.value} value={locale.value}>
                                {locale.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        );
    }
}

export default UserContent;
