import React from 'react'

const Navbar = ({ setCheck }) => {

    const GetUsers = () => {

        setCheck(true);
        
    }

    return (
        <div>
            <header className='flex justify-between px-6 py-4 bg-rose-400'>
                <div className='font-bold font-poppins text-3xl text-gray-200'>
                    <h2>Amex</h2>
                </div>
                <div className='border-2 rounded-3xl px-4 py-1 font-semibold bg-red-400 
             shadow-md shadow-slate-700'>
                    <button onClick={GetUsers}>Get Users</button>
                </div>
            </header>
        </div>
    )
}

export default Navbar;
