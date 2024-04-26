'use client'
import React, { useState } from 'react'
import { AsideConfig } from '@/configs/Aside_Config'
import "./_Aside.scss"
import ContentBox from '@/layout/aside/ContentBox'
export default function Aside() {
    const [active, Set_active] = useState(0)
    return (
        <div className='Aside-farme'>
            <div className='Logo-Aside'>Yuta Admin</div>
            {AsideConfig.map((v, i) => {
                return (
                    <ContentBox Vaule={v} key={i} index={i} event={{ active, Set_active }} />
                )
            })}
        </div>
    )
}
