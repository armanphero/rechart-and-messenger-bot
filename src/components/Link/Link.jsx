import React from 'react';

const Link = ({route}) => {
    const {name, path} = route;
    return (
        <li className='px-10 py-3 md:p-0 hover:bg-slate-700 md:hover:bg-slate-500'>
            <a href={path}>{name}</a>
        </li>
    );
};

export default Link;