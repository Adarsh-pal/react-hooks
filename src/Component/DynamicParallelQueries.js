import { useQueries } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios'

const fetchData = (id) => {

    return axios.get(`http://localhost:4000/dummydata/${id}`)

}

export const DynamicParallelQueries = (props) => {

    const results = useQueries({
        queries: props.userIds.map((userId) => {
            return {
                queryKey: ["users", userId],
                queryFn: () => fetchData(userId)
            }
        })
    })



    return (
        <div>DynamicParallelQueries</div>
    )
}
