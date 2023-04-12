import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErronPage = () => {
    const {error , status} = useRouteError()
    return (
        <div>
            <h1 className='text-4xl
             font-extrabold text-center mt-52 text-white rounded-3xl mr-32 ml-32 bg-purple-950 p-20'>{error.message}</h1>
        </div>
    );
};

export default ErronPage;