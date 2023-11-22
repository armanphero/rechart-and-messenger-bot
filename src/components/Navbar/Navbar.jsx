import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [routes, setRoutes] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        fetch('route.json')
            .then(res => res.json())
            .then(data => setRoutes(data))
    }, [])

    return (
        <nav className='flex justify-between items-center md:px-20 bg-slate-500 relative'>
            <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='rounded-lg' style={{ height: '60px' }} />
            <ul className={`flex md:gap-6 flex-col md:flex-row text-white font-semibold z-10 absolute md:static right-0 bg-slate-500 duration-500 ${isOpen ? 'top-14' : '-top-72'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
            {
                !isOpen && <Bars3Icon className="h-6 w-6 text-white md:hidden w-16 cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
            }
            {
                isOpen && <XMarkIcon className="h-6 w-6 text-white md:hidden w-16 cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
            }
        </nav>
    );
};

export default Navbar;