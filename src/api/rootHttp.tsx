import { EnvConfig } from "@/configs/Env_Config";
import axios from "axios";

class HttpError extends Error {
    status: number
    payload: any
    constructor({ status, payload }: { status: number, payload: any }) {
        super("Http Error")
        this.status = status
        this.payload = payload
    }
}

const Validate = (url: string, body?: any) => {
    if (url.length <= 0 || url.includes("undefined")) {
        console.log("Error: url is empty or undefined")
        return false
    }
    return true
}

export const http = {
    get: async (url: string, option?: any) => {
        if (Validate(url)) {
            const request = await axios.get(url, option || undefined)
            if (request.status !== 200) {
                return new HttpError(request.data)
            }
            return request.data
        } else {
            throw new Error("url is not valid")
        }

    },
    post: async (url: string, body: any, option?: any) => {
        if (Validate(url, body)) {
            const request = await axios.post(url, body, option || undefined)
            if (request.status !== 200) {
                return new HttpError(request.data)
            }
            return request.data
        } else {
            throw new Error("url is not valid")
        }

    },
    put: async (url: string, body: any, option?: any) => {
        if (Validate(url, body)) {
            const request = await axios.put(url, body, option || undefined)
            if (request.status !== 200) {
                return new HttpError(request.data)
            }
            return request.data
        }
    },
    delete: async (url: string) => {
        if (Validate(url)) {
            const request = await axios.put(url)
            if (request.status !== 200) {
                return new HttpError(request.data)
            }
            return request.data
        }
    },


}