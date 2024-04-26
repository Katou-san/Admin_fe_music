import React from 'react'
import Aside from '@/layout/aside/Aside'
import Header from '@/layout/header/Header'
import "./_dashboard.scss"
export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="farme-Main">
            <div className="layout-Main">
                <div className="aside-layout">
                    <Aside />
                </div>
                <div className="content-layout">
                    <div className='content-value'>
                        <Header />
                        <section className='current-content'>
                            {children}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )

}
