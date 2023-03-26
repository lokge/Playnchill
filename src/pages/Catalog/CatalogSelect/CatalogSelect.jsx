import React from 'react';
import { Select } from '@chakra-ui/react';

const CatalogSelect = ({order, setOrder}) => {

    const handleChange = (e) => {
        setOrder(e.target.value)
    };

    return (
        <div>
            <Select className="catalog__select" bg='#252036'
                    borderColor='#252036'
                    color='white'
                    value={order}
                    onChange={handleChange}>
                <option style={{backgroundColor: '#252036'}} value={'default'}>Любой</option>
                <option style={{backgroundColor: '#252036'}} value={'asc'}>Сначала дешевые</option>
                <option style={{backgroundColor: '#252036'}} value={'desc'}>Сначала дорогие</option>
                <option style={{backgroundColor: '#252036'}} value={'abc'}>По алфавиту</option>
            </Select>
        </div>
    );
};

export default CatalogSelect;