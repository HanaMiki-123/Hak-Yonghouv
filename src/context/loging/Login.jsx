import React from 'react';
import { Link } from 'react-router-dom';

import style from './Login.module.css';

import { IoClose } from "react-icons/io5";

const Login = ({ setLogins }) => {

    const handleClose = () => {
        setLogins(false);
    }
    return (
        <>
            <section className={style.login_box}>
                <div className={style.close_box} title='Close' onClick={handleClose}><IoClose /></div>
                <h3 className={style.title}>Login</h3>
                <form className={style.form_login}>
                    <div className={style.box_form}>
                        <label>Email / Phone number</label><br />
                        <input type="email" placeholder='Input email or number.' />
                    </div>

                    <div className={style.box_form} style={{ marginTop: '20px' }}>
                        <label>Password</label><br />
                        <input type="password" placeholder='Input password.' />
                    </div>
                    <div className={style.box_btn_login}>
                        <button>Login</button>
                    </div>
                </form>
                <div className={style.option_login}>
                    <div><Link to="" className={style.register}>Register</Link></div>
                    <div><Link to="" className={style.forgot}>Forgot password?</Link></div>
                </div>
            </section>
        </>
    );
};

export default Login;