import React, {useContext, useEffect, useState} from 'react';
import {CustomContext} from "../../utils/Context";
import axios from "../../utils/axios";
import Card from "../Card/Card";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
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
import Pagination from '../../components/Pagination';
import NotFound from '../../components/NotFound'


const Catalog = () => {

    const handleChange = (e) => {
        setTitle(e.target.value)
        setFirstPage()
    }

    const [searchParams, setSearchParams] = useSearchParams();

    const [games, setGames] = useState([])
    const [order, setOrder] = useState('default')
    const [title, setTitle] = useState('')

    // Количество товаров на странице
    const limit = 9;
    const [currentPage, setCurrentPage] = useState(searchParams.get("page") || 1);

    // Индексы товаров для текущей страницы
    const indexOfLastItem = currentPage * limit;
    const indexOfFirstItem = indexOfLastItem - limit;

    // Обрезаем массив по этим индексам
    const currentItems = games.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        // Прокрутка страницы вверх при смене страницы
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });

        setCurrentPage(pageNumber);
    };

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

        let titleFilter = `${title != '' && title != null ? 'title_like=' + title + '&' : ''}`

        axios(`/products?${categories}${orders}${titleFilter}`)
            .then(({data}) => setGames(data))
            .catch((err) => console.log('Данные не получены'))
    },[category, order, title])

    function setFirstPage() {
        if (currentPage != 1) {
            handlePageChange(1);
        }
    }

    const newParams = new URLSearchParams(searchParams);
    useEffect(() => {
        // Обновление параметров URL при смене страницы
        newParams.set('page', currentPage);
        setSearchParams(newParams);
    }, [currentPage]);

    useEffect(() => {
        if (searchParams.get("title") == '') {
            return
        }

        setCurrentPage(searchParams.get("page"));
        setTitle(searchParams.get("title"));
    }, [searchParams]);

    console.log(currentPage)

    // const {getAllProducts} = useContext(CustomContext)

    // useEffect(() => {
    //     getAllProducts()
    // },[])

    return (
        <section className="catalog">
            <div className="container">
                <div className="catalog__content">
                    <aside className="catalog__aside">
                        <label className="catalog__aside-label">
                            <input defaultValue={title} onChange={debounce(handleChange, 500)} placeholder="Я ищу.." type="search" className="catalog__aside-search"/>
                            <Select onChange={(e) => {navigate(`/catalog/${e.target.value}`); setFirstPage()}} className="catalog__select" bg='#06030F'
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
                            <CatalogSelect order={order} setOrder={setOrder} setFirstPage={setFirstPage}/>
                        </div>

                        {
                            (currentItems.length) ? 
                            <div className="catalog__row-cards">
                                {
                                    currentItems.map((item) => (
                                        <Card key={item.id} item={item}/>
                                    ))
                                }
                            </div> :
                            <NotFound title="Игры не найдены. Попробуйте изменить фильтры"/>
                        }

                        <div className="pagination">
                            <Pagination
                                totalItems={games.length}
                                itemsPerPage={limit}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
       );
};

export default Catalog;