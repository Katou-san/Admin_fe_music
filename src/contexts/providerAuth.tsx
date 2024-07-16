'use client'
import { Auth } from '@/api/Auth';
import { EnvConfig } from '@/configs/Env_Config';
import { login } from '@/hooks/redux/action/auth';
import { Auth_respone, Auth_respone_type } from '@/model/auth';
import { useRouter } from 'next/navigation';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
interface contextType {
    auth: Auth_respone_type,
    setAuth?: any
}

const defaultContext = {
    auth: Auth_respone
}

const contextAuth = createContext<contextType>(defaultContext);

const ProviderAuth = ({ children }: { children: ReactNode }) => {
    const dispath = useDispatch()
    const router = useRouter()
    const [auth, Set_auth] = useState<Auth_respone_type>(Auth_respone)

    useEffect(() => {
        let result
        if (typeof window !== 'undefined') {
            result = localStorage.getItem(EnvConfig.LocalToken)
            if (result) {
                Auth.Auth()
                    .then(res => {
                        if (res.status === 200) {
                            Set_auth(res.data)
                            dispath(login(res.data))
                            router.push('/home')
                        } else {
                            router.push('/auths')
                        }
                    })
            } else {
                router.push('/auths')
            }
        } else {
            router.push('/auths')
        }
    }, [])

    return (
        <contextAuth.Provider value={{
            auth, setAuth: Set_auth
        }}
        >
            {children}
        </contextAuth.Provider>
    );
}
export { ProviderAuth, contextAuth };
