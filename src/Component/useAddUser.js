import React from 'react'
import { useQueryClient, useMutation } from '@tanstack/react-query';
import axios from 'axios';

const addUser = (user) => {
    return axios.post("http://localhost:4000/students", user);
}

export const useAddUser = () => {

    const queryClient = useQueryClient();
    // queryClient.resetQueries()

    return useMutation(addUser, {
        onSuccess: (data) => {
            //  queryClient.invalidateQueries('students');

            queryClient.setQueryData(['students'], (oldQueryData) => {
                return {
                    ...oldQueryData,
                    data: [...oldQueryData.data, data.data],
                }
            });
        }
    });

}


