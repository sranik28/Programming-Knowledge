import React from 'react';

const Header = () => {
    return (
        <div className='lg:px-28'>
            <div className="navbar bg-base-100 shadow-xl">
                <div className="flex-1">
                    <h1 className="btn btn-ghost normal-case text-xl">Knowledge Cafe</h1>
                </div>
                <div className="flex-none gap-2">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://www.abtahihasan.com/assets/logo/logo.svg?fbclid=IwAR1xexqbx9uMTFa7lyt9XaM-0isKArvg9A09GjN7RRllnm6jMkGVtoZ0Oko" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default Header;