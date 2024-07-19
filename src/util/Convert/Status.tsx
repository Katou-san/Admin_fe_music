const StatusUser = [{ key: 0, value: "paused" }, { key: 1, value: "active" }, { key: 2, value: "vacation" }]

export const getStatusUser = (key: Number) => {
    let result;
    StatusUser.map(status => {
        if (status.key == Number(key)) {
            result = status.value
        }
    })
    return result
}