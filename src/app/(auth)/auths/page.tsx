'use client'

import LoginForm from '@/app/(auth)/auths/login-form';
import React, { useState } from 'react'
import "./_login.scss"
import RegisterForm from '@/app/(auth)/auths/register-form';
export default function FormLS() {
    const [ChangeForm, setChangeForm] = useState(false);
    const [valueError, setValueError] = useState({});
    const valueSend = {
        HandleChangeForm: () => {
            setChangeForm((prev) => !prev);
        },
        GetValueError: (value: Object) => {
            setValueError(value);
        },
    };
    return (
        <div className="farme">
            {/* <Blob /> */}
            <div className="formContent ">
                <span className="iconf">
                    {/* <ion-icon className="iconClose" name="close-outline"></ion-icon> */}
                </span>

                <div className={`FromLS LoginForm ${ChangeForm ? "active" : ""}`}>
                    <LoginForm Value={valueSend} />
                </div>
                <div className="FromLS RegisterForm">
                    <RegisterForm Value={valueSend} />
                </div>

            </div>
        </div>
    )
}
