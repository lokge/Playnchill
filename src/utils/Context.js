import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const CustomContext = createContext()

export const Context = (props) => {

    const [products, setProducts] = useState([])

    const getAllProducts = () => {
        axios('http://localhost:6969/products')
            .then(({data}) => setProducts(data))
            .catch((err) => console.log(err))
    }

    const value = {
        products,
        setProducts,
        getAllProducts
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}