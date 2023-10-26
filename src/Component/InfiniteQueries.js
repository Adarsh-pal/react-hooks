import React, { Fragment } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';


const fetchMarks = ({ pageParam = 1 }) => {
    return axios.get(`http://localhost:4000/studentMarks?_limit=2&_page=${pageParam}`)
}

const InfiniteQueries = () => {

    const { data, isLoading, isError, error, hasNextPage, fetchNextPage } = useInfiniteQuery(
        ['marks'],
        fetchMarks,

        {
            getNextPageParam: (lastPage, allPages) => {

                if (allPages.length < 5) {
                    return allPages.length + 1;
                }
                else {
                    return undefined
                }


            }
        }

    )

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div>
            <h1>Result</h1>
            <p>Student &nbsp;&nbsp;&nbsp; Marks</p>
            <div>
                {
                    data?.pages.map((group, i) => {
                        return (<Fragment key={i}>
                            {
                                group.data.map(student => {
                                    return (
                                        <div key={student.name}>
                                            <span>{student.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                            <span> {student.marks}</span>
                                        </div>
                                    )
                                })
                            }
                        </Fragment>
                        )
                    })
                }
            </div>



            <br />
            <button onClick={fetchNextPage} disabled={!hasNextPage}>Load More</button>

        </div >
    )
}


export default InfiniteQueries