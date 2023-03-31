import React from 'react';

const Header = () => {
    return (
        <div className=''>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <h1 className="font-bold  normal-case text-2xl">Knowledge Cafe</h1>
                </div>
                <div className="flex-none gap-2">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://www.abtahihasan.com/assets/logo/logo.svg?fbclid=IwAR1xexqbx9uMTFa7lyt9XaM-0isKArvg9A09GjN7RRllnm6jMkGVtoZ0Oko" />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default Header;