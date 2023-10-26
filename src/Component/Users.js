import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import AddUser from './addUser';

export const Users = () => {

    const onSuccess = (data) => {
        console.log(data);
    }

    const onError = (error) => {
        console.log(error);
    }

    const { isLoading, data, isError, error, refetch } = useQuery(["students"], () => {
        return axios.get("http://localhost:4000/students");
    }, {
        onSuccess,
        onError,

    });


    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>{"some error"}</h1>
    }

    return (
        <>
            <br />
            <h3>Users : </h3>
            {
                data?.data.map((user) => {
                    return <div key={user.name}>
                        <NavLink to={`/user/${user.id}`} >{user.name} </NavLink>
                    </div>

                })

            }

            <br />
            <button onClick={refetch}>refresh</button>
            <AddUser></AddUser>
        </>

    )
}
