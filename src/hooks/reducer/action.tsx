export const Reducer_Change = (state: any, action: any) => {
    const { type, payload }: { type: string, payload: any } = action;
    switch (type) {
        case "CHANGE":
            return { ...state, ...payload };
        default:
            break;
    }
};