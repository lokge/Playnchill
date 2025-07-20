import React from 'react';

const NotFound = ({ title = 'Страница не найдена' }) => {

    return (
        <div style={{width: "100%", textAlign: "center"}}>
            <span style={{color: "white", fontSize: "24px", fontWeight: "700"}} className='notFound-title'>{title}</span>
        </div>
    );
};

export default NotFound;