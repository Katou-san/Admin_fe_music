const Reducer_Request = (state: any, action: any) => {
    const { type, payload }: { type: string, payload: any } = action;
    switch (type) {
        case "REQUEST":
            return { ...state, is_Loading: true };
        case "SUCCESS":
            return { ...state, is_Loading: false, ...payload };
        case "ERROR":
            return { ...state, is_Loading: false, ...payload };
        default:
            break;
    }
};

const Reducer_Change = (state: any, action: any) => {
    const { type, payload }: { type: string, payload: any } = action;
    switch (type) {
        case "CHANGE":
            return { ...state, ...payload };
        case "RESET":
            return {};
        default:
            break;
    }
};

export { Reducer_Change, Reducer_Request };