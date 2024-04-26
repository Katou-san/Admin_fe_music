'use client'

import React from 'react'
import { NextUIProvider } from '@nextui-org/react'

export default function NextUI({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}
