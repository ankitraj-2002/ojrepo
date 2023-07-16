// import { useState } from "react";
import React, { useState } from "react";


export const User_login = (props) => {
    const [user_id, setuser_id] = useState('');
    const [user_pass, setuser_pass] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();
        // console.log(email)
    }

    return (
        <>
            <form onSubmit={handlesubmit}>
                <label htmlFor="user_id">USER ID</label>
                <input value={user_id} onChange={(e) => setuser_id(e.target.value)} placeholder="user_id" id="user_id" name="user_id" />
                <label htmlFor="user_pass">PASSWORD</label>
                <input value={user_pass} onChange={(e) => setuser_pass(e.target.value)} type="password" placeholder="********" id="user_pass" name="user_pass" />
                <button type="submit">Log In</button>
            </form>
            <button onClick={() => props.onform_switch('User_signup')}>Don't have an account? Signup here</button>
        </>
    );
}