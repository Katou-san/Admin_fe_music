const initArtist = [{
    Artist_Id: '',
    Artist_Key: '',
    Artist_Name: '',
    User_Id: '',
    Vertify: false,
}]

const createArtist = {
    Artist_Name: '',
    Vertify: false,
}

export const artistModel = {
    init: initArtist[0],
}

export type artistType = typeof initArtist[0]
export type create_artistType = typeof createArtist
export type list_artistType = typeof initArtist