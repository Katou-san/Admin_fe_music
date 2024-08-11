"use client";
import React, { useEffect, useState } from "react";
import img from "@/assets/avatar.jpg";
import {
    Modal,
    ModalContent,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    Checkbox,
} from "@nextui-org/react";
import Image from "next/image";
import { toast } from "react-toastify";
import { Form_Data } from "@/util/FormData/Form_Data";
import { PartnerType, update_PartnerType } from "@/model/partnerModel";
import { Validate_UpdatePartner } from "@/util/Validate/Partner";
import { Partner } from "@/api/Partner";
import igmError from "../../../../public/errorImg.png"
import { URLValidate } from "@/util/Validate/Url";
import { Send } from "@/api/Send";
import { useReload } from "@/contexts/providerReload";
type Prop = {
    isOpen: boolean;
    onOpenChange: () => void;
    table: string;
    data: PartnerType;

};

const UpdateFormPartner = ({ isOpen, onOpenChange, table, data }: Prop) => {
    const { set_ReloadPartner } = useReload()
    const [partnerValue, set_PartnerValue] = useState<PartnerType>(
        data
    );

    const [Change, Set_Change] = useState<update_PartnerType>({ Logo: '' })
    const [url, set_Url] = useState('');


    useEffect(() => {
        if (data?.Logo != '') {
            if (URLValidate.isUrl(data.Logo)) {
                Send.Logo(data.Logo)
                    .then((res) => set_Url(URL.createObjectURL(res)))
            } else {
                set_Url(data.Logo)
            }
        }

    }, [data])



    const SubmitForm = (e: any, onClose: () => void) => {
        e.preventDefault();
        const Error_Check = Validate_UpdatePartner(Change);
        if (!Error_Check.status) {
            const formdata = Form_Data({ ...Change, Song_Audio: "" });
            Partner.Update(partnerValue.Partner_Id, formdata).then((res) => {
                if (res.status == 200) {
                    toast.success(res.message);
                    set_ReloadPartner()
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
                            className="pt-5 formValueUpdatePartner"
                            encType="multipart/form-data"
                        >
                            <ModalBody>
                                <div className="Title_Delete">Update {table}</div>
                                <Input
                                    type="text"
                                    label="Partner name"
                                    value={partnerValue?.Partner_Name}
                                    onChange={(e) => {
                                        set_PartnerValue({ ...partnerValue, Partner_Name: e.target.value })
                                        Set_Change({ ...Change, Partner_Name: e.target.value })
                                    }}
                                />
                                <Checkbox
                                    defaultChecked={partnerValue?.Status}
                                    onChange={(e) => {
                                        set_PartnerValue({ ...partnerValue, Status: e.currentTarget.checked })
                                        Set_Change({ ...Change, Status: e.currentTarget.checked })
                                    }

                                    }>Status</Checkbox>
                                <div className="frameLogo">
                                    <div className="frameImg">
                                        <Image alt="" src={url || igmError} width={50} height={50} />
                                    </div>
                                    <div className="frameLabel">
                                        <label htmlFor="LogoInput">Chosse logo</label>
                                        <input type="file" name="" id="LogoInput" className="none" accept="image/*" onChange={(e) => {
                                            Set_Change({ ...Change, Logo: e.target?.files ? e.target.files[0] : '' })
                                            set_Url(e.target?.files ? URL.createObjectURL(e.target.files[0]) : '')
                                        }} />
                                    </div>
                                </div>
                                <Input
                                    type="text"
                                    label="Phone"
                                    value={partnerValue?.Phone}
                                    onChange={(e) => {
                                        set_PartnerValue({ ...partnerValue, Phone: e.target.value })
                                        Set_Change({ ...Change, Phone: e.target.value })
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

export default UpdateFormPartner;
