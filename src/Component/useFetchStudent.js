import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";

const useFetchStudent = (studentId) => {
    const queryClient = useQueryClient();

    return useQuery(["student", studentId], () => {
        return axios.get(`http://localhost:4000/students/${studentId}`);
    }, {

        initialData: () => {


            const student = queryClient.getQueryData(["students"])?.data?.find((student) => student.id === parseInt(studentId));
            console.log(queryClient);
            if (student) {
                return {
                    data: student
                }
            }
            else {
                // alert("Student not found")
                return undefined;
            }
        }

    });


}

export default useFetchStudent;