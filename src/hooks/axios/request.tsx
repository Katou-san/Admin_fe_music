'use client'

import { Request_Action } from "@/hooks/axios/action/request";
import { useReducer } from "react";

export default function useRequest() {
    const [Req_state, Req_dispatch] = useReducer(Request_Action, {
        data: {},
        is_Loading: false,
        error: null,
    });

    return [Req_state, Req_dispatch];
}

export { useRequest };