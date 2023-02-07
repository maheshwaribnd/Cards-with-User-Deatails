import React from 'react'
import { useState, useEffect } from 'react';
import Cards from './Cards';
import Loader from './Loader';

function ShowCards() {

    const [details, setDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        setIsLoading(true);

        fetch('https://reqres.in/api/users?page=1')
            .then(response => response.json())
            .then(data => { setDetails(data) })
            .catch((error) => {
                console.log(error);
            }
        )
        setIsLoading(false);

    }, [])

    return (

        <div className='px-40 pb-3 bg-rose-200 min-h-screen'>
            {isLoading ? <Loader/> : <div className='row flex flex-wrap hover cursor-pointer'>
                {details?.data?.map((element) => {
                    return <div className='h-72 w-64 mx-4 my-5 shadow-xl' key={element.id}>
                        <Cards avatar={element.avatar}
                            email={element.email}
                            first_name={element.first_name}
                            last_name={element.last_name}
                        />
                    </div>
                })}
            </div>}
        </div>
    )
}

export default ShowCards
