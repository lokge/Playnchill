import React, {useContext, useEffect, useState} from 'react';
import {CustomContext} from "../../utils/Context";
import axios from "../../utils/axios";
import Card from "../Card/Card";
import {useNavigate, useParams} from "react-router-dom";
import {gameData} from "../../utils/gameData"
import {Select} from "@chakra-ui/react";
import { Checkbox, Stack } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'
import CatalogSelect from "./CatalogSelect/CatalogSelect";
import debounce from "@material-ui/core/utils/debounce";


const Catalog = () => {

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const [games, setGames] = useState([])
    const [order, setOrder] = useState('default')
    const [title, setTitle] = useState('')

    const {category} = useParams()

    const navigate = useNavigate()

    useEffect(() => {

        let categories = `${category !== 'all' ? 'category=' + category + '&' : ''}`

        const selectOrder = () => {
            switch (order) {
                case 'asc' : {
                    return `_sort=price&_order=asc&`
                }
                case 'desc' : {
                    return `_sort=price&_order=desc&`
                }
                case 'abc' : {
                    return `_sort=title&_order=asc&`
                }
                case 'default' : {
                    return ''
                }
            }
        }
        let orders = selectOrder()

        let titleFilter = `${title.length !== 0 ? 'title_like=' + title + '&' : ''}`

        axios(`/products?${categories}${orders}${titleFilter}`)
            .then(({data}) => setGames(data))
            .catch((err) => console.log('Данные не получены'))
    },[category, order, title])

    const {getAllProducts} = useContext(CustomContext)

    useEffect(() => {
        getAllProducts()
    },[])

    return (
        <section className="catalog">
            <div className="container">
                <div className="catalog__content">
                    <aside className="catalog__aside">
                        <label className="catalog__aside-label">
                            <input defaultValue={title} onChange={debounce(handleChange, 500)} placeholder="Я ищу.." type="search" className="catalog__aside-search"/>
                            <Select onChange={(e) => {navigate(`/catalog/${e.target.value}`)}} className="catalog__select" bg='#06030F'
                                    borderColor='#FFFFFF1A'
                                    color='white'>
                                {
                                    gameData.map((item) => (
                                        <option style={{backgroundColor: "#06030F"}} selected={item.en === category} key={item.en} value={item.en}>{item.ru}</option>
                                    ))
                                }
                            </Select>
                            <Accordion className="catalog__aside-accordion" defaultIndex={[0]} allowMultiple>
                                <AccordionItem>
                                    <h2 className="catalog__aside-border">
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Тип аккаунта
                                            </Box>
                                            <AccordionIcon fill="green" />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <Stack className="catalog__aside-checkboxes" spacing={5} direction='column'>
                                            <Checkbox colorScheme='green' defaultChecked>
                                                Аккаунт
                                            </Checkbox>
                                            <Checkbox colorScheme='green'>
                                                Лицензионный ключ
                                            </Checkbox>
                                            <Checkbox colorScheme='green'>
                                                Активация
                                            </Checkbox>
                                        </Stack>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </label>
                    </aside>
                    <div className="catalog__row">
                        <div className="catalog__row-header">
                            <h2 className="catalog__row-title">
                                Каталог товаров
                            </h2>
                            <CatalogSelect order={order} setOrder={setOrder}/>
                        </div>
                        <div className="catalog__row-cards">
                            {
                                games.map((item) => (
                                    <Card key={item.id} item={item}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
       );
};

export default Catalog;