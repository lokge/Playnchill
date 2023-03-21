import React from 'react';
import {useTranslation} from "react-i18next";

const HeaderSearchItem = () => {

    const {t} = useTranslation()

    return (
        <ul className='header__search-list'>
            <li className="header__search-list-item">{t('header.filter1')}</li>
            <li className="header__search-list-item">{t('header.filter2')}</li>
            <li className="header__search-list-item">{t('header.filter3')}</li>
            <li className="header__search-list-item">{t('header.filter4')}</li>
            <li className="header__search-list-item">{t('header.filter5')}</li>
            <li className="header__search-list-item">{t('header.filter6')}</li>
            <li className="header__search-list-item">{t('header.filter7')}</li>
            <li className="header__search-list-item">{t('header.filter8')}</li>

        </ul>
    );
};

export default HeaderSearchItem;