import React from 'react'
import "./_manage.scss"
export default function page({ children }: { children: React.ReactNode }) {
    return (
        <div className="FarmeManage">{children}</div>
    )
}
