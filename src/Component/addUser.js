import React, { useState } from 'react'
import { useAddUser } from './useAddUser';

const AddUser = () => {

    const [add, setAdd] = useState(true);
    const [name, setName] = useState("");

    const { mutate } = useAddUser();

    const clickHandler = () => {
        setAdd(false);
    }

    const submitHandler = () => {
        setAdd(true);
        mutate({
            name: name
        })

    }


    return (
        <div>
            <br />
            {
                <button disabled={!add} onClick={clickHandler}>Add user</button>
            }

            {
                !add && (

                    <div>
                        <br />
                        <label>name : </label>
                        <input type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)} /><br /><br />
                        <button onClick={submitHandler}>submit</button>
                    </div>


                )
            }
        </div>
    )
}

export default AddUser
