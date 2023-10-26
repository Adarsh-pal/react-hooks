import React from 'react'
import useMarksData from './useMarksData';
import { useState } from 'react';
export const PaginatedQueriesPage = () => {

    const [pageNumber, setPageNumber] = useState(1);
    const { data, isLoading, isError, error } = useMarksData(pageNumber);


    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div>
            <h1>Student Marks</h1>
            <table>
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data.map((mark) => (
                        <tr key={mark.name}>
                            <td>{mark.name}</td>
                            <td>{mark.marks}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <button onClick={() => setPageNumber(page => page - 1)} disabled={pageNumber === 1}> &lt; Prev Page</button>
            <button onClick={() => setPageNumber(page => page + 1)} disabled={pageNumber === 5}> Next Page &gt;</button>
        </div>
    )
}
