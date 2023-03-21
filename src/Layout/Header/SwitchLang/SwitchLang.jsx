import React from 'react';
import {Popover, PopoverTrigger, Button, PopoverContent, Portal, PopoverArrow,PopoverCloseButton, PopoverBody} from "@chakra-ui/react";
import {useTranslation} from "react-i18next";

const SwitchLang = () => {

    const {t, i18n} = useTranslation()

    const changesLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <div>
            <Popover>
                <PopoverTrigger className='popover__btn'>
                    <Button style={{ textTransform: "uppercase"}} className='popover__btn'>{i18n.language}</Button>
                </PopoverTrigger>
                <Portal>
                    <PopoverContent className='btns__popover'>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody className='popover__body'>
                            <Button className={`switchLangBtn ${i18n.language === 'ru' ? 'active' : ''}`} onClick={() => {
                                changesLanguage("ru")
                            } } colorScheme='#100D18'>Русский (RU)</Button>
                            <Button className={`switchLangBtn ${i18n.language === 'en' ? 'active' : ''}`} onClick={() => {
                                changesLanguage("en")
                            }} colorScheme='#100D18'>English (EN)</Button>
                        </PopoverBody>
                    </PopoverContent>
                </Portal>
            </Popover>
        </div>
    );
};

export default SwitchLang;