"use client";
import React, { useState } from "react";
import imgTemp from "@/assets/avatar.jpg";
import errorImg from '../../../../public/errorImg.png'
import {
    Modal,
    ModalContent,
    ModalBody,
    ModalFooter,
    Button,
    Input,
} from "@nextui-org/react";
import "./_Create_Form.scss";
import Image from "next/image";
import { Song } from "@/api/Song";
import { toast } from "react-toastify";
import { Form_Data } from "@/util/FormData/Form_Data";
import { useReload } from "@/contexts/providerReload";
import { create_PartnerType, PartnerModel } from "@/model/partnerModel";
import { Validate_CreatePartner } from "@/util/Validate/Partner";
import { Partner } from "@/api/Partner";

type Prop = {
    isOpen: boolean;
    onOpenChange: () => void;
    table: string;
    data?: any;
};

const CreateFormPartner = ({ isOpen, onOpenChange, table, data }: Prop) => {
    const { set_ReloadSong } = useReload()
    const [url, set_Url] = useState("")
    const [valuePartner, set_ValuePartner] = useState<create_PartnerType>(PartnerModel.init_create)


    const SubmitForm = (e: any, onClose: () => void) => {
        e.preventDefault();

        const Error_Check = Validate_CreatePartner(valuePartner);
        if (!Error_Check.status) {
            const formdata = Form_Data(valuePartner);
            Partner.Create(formdata).then((res) => {
                if (res.status == 200) {
                    set_ReloadSong()
                    toast.success(res.message);
                    onClose();
                } else {
                    toast.error(res.message);
                }
            });
        } else {
            let Array_Key = Object.keys(Error_Check.Error);
            toast.error(Error_Check.Error[Array_Key[0]]);
        }
    };
    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="md">
                <ModalContent>
                    {(onClose) => (
                        <form

                            action=""
                            onSubmit={(e: any) => {
                                SubmitForm(e, onClose);
                            }}
                            className="pt-5 formValuePartner"
                            encType="multipart/form-data"
                        >
                            <ModalBody>
                                <div className="Title_Delete">Create {table}</div>
                                <Input
                                    type="text"
                                    label="Partner name"
                                    value={valuePartner?.Partner_Name}
                                    onChange={(e) => {
                                        set_ValuePartner({ ...valuePartner, Partner_Name: e.target.value })

                                    }}
                                />
                                <div className="frameLogo">
                                    <div className="frameImg">
                                        <Image alt="" src={url || errorImg} width={50} height={50} />
                                    </div>
                                    <div className="frameLabel">
                                        <label htmlFor="LogoInput">Chosse logo</label>
                                        <input type="file" name="" id="LogoInput" className="none" onChange={(e) => {
                                            set_ValuePartner({ ...valuePartner, Logo: e.target?.files ? e.target.files[0] : '' })
                                            set_Url(e.target?.files ? URL.createObjectURL(e.target.files[0]) : '')
                                        }} />
                                    </div>
                                </div>
                                <Input
                                    type="text"
                                    label="Phone"
                                    value={valuePartner?.Phone}
                                    onChange={(e) => {
                                        set_ValuePartner({ ...valuePartner, Phone: e.target.value })
                                    }}
                                />
                                <Input
                                    type="text"
                                    label="Contract Id"
                                    value={valuePartner?.Contract_num}
                                    onChange={(e) => {
                                        set_ValuePartner({ ...valuePartner, Contract_num: e.target.value })
                                    }}
                                />


                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" type="submit" disabled={false}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default CreateFormPartner;
