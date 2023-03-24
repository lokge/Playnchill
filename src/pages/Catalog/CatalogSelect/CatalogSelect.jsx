import React from 'react';
import { Select } from '@chakra-ui/react';

const CatalogSelect = () => {
    return (
        <div>
            <Select className="catalog__select" bg='#252036'
                    borderColor='#252036'
                    color='white' placeholder='Сначала дешевые' selected>
                <option style={{backgroundColor: '#252036'}} value='option2'>Сначала дорогие</option>
                <option style={{backgroundColor: '#252036'}} value='option3'>По алфавиту</option>
            </Select>
        </div>
    );
};

export default CatalogSelect;