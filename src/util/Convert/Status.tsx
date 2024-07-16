const StatusUser = [{ key: 1, value: "active" }, { key: 2, value: "vacation" }, { key: 3, value: "paused" }]

export const getStatusUser = (key: Number) => {
    let result;
    StatusUser.map(status => {
        if (status.key == key) {
            result = status.value
        }
    })
    return result
}