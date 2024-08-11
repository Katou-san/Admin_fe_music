const ListSizesByte = ['MB', 'GB']

const formatMBToGB = (value: number, convert: string = '', current = '',) => {
    const index = ListSizesByte.indexOf(convert)
    if (index == 1) {
        return Number((value / 1024).toFixed(2))
    } else {
        return value
    }

}

export { formatMBToGB, ListSizesByte }