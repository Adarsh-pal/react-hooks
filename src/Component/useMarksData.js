import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const fetchMarks = (pageNumber) => {
    return axios.get(`http://localhost:4000/studentMarks?_limit=2&_page=${pageNumber}`)
}

const useMarksData = (pageNumber) => {

    return useQuery(['marks', pageNumber], () => fetchMarks(pageNumber),{
        keepPreviousData : true
    });

}

export default useMarksData;
