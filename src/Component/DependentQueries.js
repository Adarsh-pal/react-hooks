import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios'

const fetchUserByName = (id) => {
    return axios.get(`http://localhost:4000/students/${id}`)
}

const fetchDetailsByName = (name) => {
    return axios.get(`http://localhost:4000/studentDetails?name=${name}`)
}

export const DependentQueries = ({ id }) => {

    const { data } = useQuery(["userById", id], () => fetchUserByName(id))
    const getName = data?.data.name;

    const { data: sdf } = useQuery(["detailsByName"], () => fetchDetailsByName(getName), {
        enabled: !!getName
    })

    return (
        <div>{sdf?.data[0].address}</div>
    )
}
