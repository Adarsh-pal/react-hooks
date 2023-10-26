import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchStudent from './useFetchStudent';

export const UserById = () => {

  const { id } = useParams();

  const { isLoading, data, isError } = useFetchStudent(id);

  const user = data?.data;

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (isError) {
    return <h1>{"some error"}</h1>
  }

  return (
    <div>{user.name} is {user.age} years  old. They speak " {user.lang} "</div>
  )
}



