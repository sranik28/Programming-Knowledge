import React from 'react';

const Header = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li>
                                <a className="justify-between">
                                    About
                                </a></li>

                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <h1 className=" normal-case lg:text-xl text-[10px] font-bold">Programming Knowledge</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li tabIndex={0}>
                            <a>
                                About
                            </a>
                        </li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="w-10 rounded-full navbar-end">
                        <img src="https://www.abtahihasan.com/assets/logo/logo.svg?fbclid=IwAR1xexqbx9uMTFa7lyt9XaM-0isKArvg9A09GjN7RRllnm6jMkGVtoZ0Oko" />
                    </div>

                </div>
            </div>
        </>




    );
};

export default Header;