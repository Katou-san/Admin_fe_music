import { Button, Modal, ModalBody, ModalContent, ModalFooter, Pagination } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import "./_Pdetail.scss"
import ItemSongPlaylist from '@/components/Data_Table/Item_Table/item_Song_Playlist';
import { Track } from '@/api/Track';
type Prop = {
    isOpen: boolean,
    onOpenChange: () => void,
    table: string,
    PlaylistId: string
    title: any
}
const FormSongPlaylist = ({ isOpen, onOpenChange, table, title, PlaylistId }: Prop) => {
    const [Title, Set_Title] = useState("")
    const [list, set_list] = useState([])
    const [current, set_Current] = useState({ index: 0, limit: 4 })
    const lenght = list.length % 4 != 0 ? Math.floor(list.length / 4) + 1 : Math.floor(list.length / 4)
    useEffect(() => {
        if (PlaylistId) {
            Track.Get_Track(PlaylistId)
                .then(res => {
                    set_list(res.data)
                })
        }

    }, [PlaylistId])
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='lg' style={{ overflow: 'unset' }}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalBody>
                            <div className='Table_Detail'>
                                <div className='Title_Delete'>Playlist: {String(title)}</div>
                                <div className='List_Song_Detail'>
                                    {list.map((song, index) => {
                                        if (index >= current.index * current.limit && index < (current.index + 1) * current.limit) {
                                            return <ItemSongPlaylist key={index} song={song} />
                                        }
                                    })}
                                </div>
                                <div className="numberpage">
                                    <Pagination total={lenght} initialPage={1} onChange={(page) => set_Current({ ...current, index: page - 1 })} />
                                </div>

                            </div>


                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Close
                            </Button>

                        </ModalFooter>

                    </>
                )}
            </ModalContent>
        </Modal>
    );
}

export default FormSongPlaylist;
