import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const CustomContext = createContext()

export const Context = (props) => {


    const [user, setUser] = useState({
        email: ''
    })

    //Избранные
    const [favorite, setFavorite] = useState([])
    const addFavorite = (product) => {
        setFavorite(prev => [...prev, {
            ...product,
            count: 1,
        }])
        localStorage.setItem('favorite', JSON.stringify(favorite))
    }
    const delFavorite = (id) => {
        setFavorite(prev => prev.filter(item => item.id !== id))
    }


    //Работа с корзиной
    const [basket, setBasket] = useState([])
    const addBasket = (product) => {
        setBasket(prev => [...prev, {
            ...product,
            count: 1,
        }])
    }
    const delBasket = (id) => {
        setBasket(prev => prev.filter(item => item.id !== id))
    }


    //Изменение кол-ва товара в корзине
    const plusBasket = (id) => {
        setBasket(prev => prev.map(item => {
            if (item.id === id) {
                return {...item, count: item.count + 1}
            }
            return item
        })
        )
    }
    const minusBasket = (id) => {

        let count = basket.find(item => item.id === id).count

        if (count === 1) {
            setBasket(prev => prev.filter(item => item.id !== id))
        } else {
            setBasket(prev => prev.map(item => {
                    if (item.id === id) {
                        return {...item, count: item.count - 1}
                    }
                    return item
                })
            )
        }
    }

    //Работа с юзером
    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            setUser(JSON.parse(localStorage.getItem('user')));
        }

        if (localStorage.getItem('basket') !== null) {
            setBasket(JSON.parse(localStorage.getItem('basket')))
        }

        if (localStorage.getItem('favorite') !== null) {
            setFavorite(JSON.parse(localStorage.getItem('favorite')))
        }

    }, [])

    //LocalStorage basket
    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket))
    }, [basket])

    //LocalStorage favorite
    useEffect(() => {
        localStorage.setItem('favorite', JSON.stringify(favorite))
    }, [favorite])


    //Получение продуктов
    const [products, setProducts] = useState([])

    const getAllProducts = () => {
        axios(`/products`)
            .then(({data}) => setProducts(data))
            .catch((err) => console.log(err))
    }

    const value = {
        user,
        setUser,
        products,
        setProducts,
        getAllProducts,
        basket,
        addBasket,
        plusBasket,
        minusBasket,
        delBasket,
        favorite,
        addFavorite,
        delFavorite
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}