import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const CustomContext = createContext()

export const Context = (props) => {

    const [notification, setNotification] = useState({
        text: '',
        type: 'error',
        active: false,
    })

    const [user, setUser] = useState({
        email: ''
    })

    //Избранные
    const [favorite, setFavorite] = useState([])
    const addFavorite = (product) => {
        //Проверка на наличие в избранном
        if (favorite.some(item => item.id === product.id)) {
            return setNotification({text: 'Игра уже в избранном', type: 'error', active: true});
        } else {
            setFavorite(prev => [...prev, {
                ...product,
                count: 1,
            }]);

            localStorage.setItem('favorite', JSON.stringify(favorite));
            return setNotification({text: 'Вы добавили игру в избранные', type: 'success', active: true});
        }
    }
    const delFavorite = (id) => {
        setFavorite(prev => prev.filter(item => item.id !== id))
        return setNotification({text: 'Игра удалена из избранных', type: 'success', active: true});
    }


    //Работа с корзиной
    const [basket, setBasket] = useState([])
    const addBasket = (product) => {
        if (basket.some(item => item.id === product.id)) {
            return setNotification({text: 'Игра уже в корзине', type: 'error', active: true});
        } else {
            setBasket(prev => [...prev, {
                ...product,
                count: 1,
            }])

            localStorage.setItem('basket', JSON.stringify(basket))
            return setNotification({text: 'Игра добавлена в корзину', type: 'success', active: true});
        }
    }
    const delBasket = (id) => {
        setBasket(prev => prev.filter(item => item.id !== id))
        return setNotification({text: 'Игра удалена из корзины', type: 'success', active: true});
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
        delFavorite,
        notification,
        setNotification
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}