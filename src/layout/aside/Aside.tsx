'use client'
import React, { useState } from 'react'
import { AsideConfig } from '@/configs/Aside_Config'
import "./_Aside.scss"
import ContentBox from '@/layout/aside/ContentBox'
import { Logo_DarkHole } from '@/util/Icons/Logo'
export default function Aside() {
    const [active, Set_active] = useState(0)
    return (
        <div className='Aside-farme'>
            <div className='Logo-Aside'>
                <i><Logo_DarkHole w={50} color='#000' /></i>
                <h2>Yuta</h2></div>
            {AsideConfig.map((v, i) => {
                return (
                    <ContentBox Vaule={v} key={i} index={i} event={{ active, Set_active }} />
                )
            })}
        </div>
    )
}
