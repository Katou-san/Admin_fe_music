export const Auth_respone = {
    is_Login: false,
    Access_Token: "",
    User_Name: "",
    Avatar: "",
}

export type Auth_respone_type = typeof Auth_respone

export const Login_request = {
    User_Email: "",
    User_Pass: ""
}

export type Login_request_type = typeof Login_request