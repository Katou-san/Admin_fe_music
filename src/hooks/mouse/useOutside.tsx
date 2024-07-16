import React, { useEffect } from 'react';

type Prop = {
    ref: React.MutableRefObject<HTMLInputElement | null>,
    fun: () => any
}

export const useOutside = ({ ref, fun }: Prop) => {
    useEffect(() => {
        let handle = (e: any) => {
            if (ref.current && !ref.current.contains(e.target)) {
                fun()
            }
        }
        document.addEventListener('mousedown', handle)
        return () => {
            document.removeEventListener("mousedown", handle);
        };
    }, [ref, fun])
    return (
        <div>

        </div>
    );
}
