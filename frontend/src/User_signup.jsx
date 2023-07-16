import React, { useEffect, useState } from "react"
import { uploaddata } from "./service/api";
export const User_signup = (props) => {
    const [user_id, setuser_id] = useState('');
    const [user_pass, setuser_pass] = useState('');
    const [user_name, setuser_name] = useState('');
    const [user_email, setuser_email] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(user_email)
    }

    useEffect(() => {

        const getdata = async () => {

            if (user_email && user_id && user_name && user_pass) {
                const data = new FormData();
                data.append("user_id", user_id);
                data.append("user_pass", user_pass);
                data.append("user_name", user_name);
                data.append("user_pass", user_pass);

                const response = await uploaddata(data);
                console.log(response);
            }
        }
        getdata();

    }, [])

    return (
        <>
            <form onSubmit={handlesubmit}>
                <label htmlFor="user_id">USER ID</label>
                <input value={user_id} onChange={(e) => setuser_id(e.target.value)} placeholder="user_id" id="user_id" name="user_id" />
                <label htmlFor="user_name">NAME</label>
                <input value={user_name} onChange={(e) => setuser_name(e.target.value)} placeholder="Full Name" id="user_name" name="user_name" />
                <label htmlFor="user_email">EMAIL</label>
                <input value={user_email} onChange={(e) => setuser_email(e.target.value)} type="email" placeholder="abc@gmail.com" id="user_email" name="user_email" />
                <label htmlFor="user_pass">PASSWORD</label>
                <input value={user_pass} onChange={(e) => setuser_pass(e.target.value)} type="password" placeholder="********" id="user_pass" name="user_pass" />
                <button type="submit">Create Account</button>
            </form>
            <button onClick={() => props.onform_switch('login')}>Already have an account? Login here</button>
        </>
    );
}