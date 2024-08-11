"use client";
import React, { useEffect, useReducer, useState } from "react";
import errorImg from '../../../../public/errorImg.png'
import {
    Modal,
    ModalContent,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    Checkbox,
    Table,
} from "@nextui-org/react";
import "./_Create_Form.scss";
import Image from "next/image";
import { toast } from "react-toastify";
import { Form_Data } from "@/util/FormData/Form_Data";
import { useReload } from "@/contexts/providerReload";
import { AdsModel, create_AdsType } from "@/model/advserModel";
import { list_PartnerType, PartnerModel, PartnerType } from "@/model/partnerModel";
import useDebounce from "@/hooks/customs/useDebounce";
import { Partner } from "@/api/Partner";
import { Validate_Create_Ads } from "@/util/Validate/Ads";
import { Ads } from "@/api/Ads";

type Prop = {
    isOpen: boolean;
    onOpenChange: () => void;
    table: string;
    data?: any;
};

const CreateFormAds = ({ isOpen, onOpenChange, table, data }: Prop) => {
    const [status, Set_Status] = useState(false)
    const { set_ReloadAds } = useReload()
    const [Title, Set_Title] = useState("");
    const [Listpartner, set_ListPartner] = useState<list_PartnerType>([]);
    const [infoPartner, Set_InfoPartner] = useState<PartnerType>(PartnerModel.init)
    const [valueAds, set_ValueAds] = useState<create_AdsType>(AdsModel.init_create)
    const [Urlfile, set_Url] = useState({
        img: '',
        audio: '',
    });
    const debounceValue = useDebounce(infoPartner?.Partner_Name.trim(), 500)

    useEffect(() => {
        if (infoPartner?.Partner_Name != '') {
            Partner.Find(infoPartner?.Partner_Name)
                .then((res) => {
                    if (res.status == 200) {
                        set_ListPartner(res.data)
                        Set_Status(true)
                    }
                })
        } else {
            Set_Status(false)
            set_ListPartner([])
            Set_InfoPartner(PartnerModel.init)
        }
    }, [debounceValue])

    const SubmitForm = (e: any, onClose: () => void) => {
        e.preventDefault();
        const Error_Check = Validate_Create_Ads(valueAds);
        if (!Error_Check.status) {
            const formdata = Form_Data(valueAds)
            Ads.Create(formdata)
                .then((res) => {
                    if (res.status == 200) {
                        toast.success('Create successfully!')
                        Set_Status(false)
                        set_ListPartner([])
                        Set_InfoPartner(PartnerModel.init)
                        set_ReloadAds()
                    } else {
                        toast.error(res.message)
                    }
                })
        } else {
            const getKey = Object.keys(Error_Check.Error)
            toast.error(Error_Check.Error[getKey[0]])
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
                            className="pt-5 formAddAds"
                            encType="multipart/form-data"
                        >
                            <ModalBody>
                                <div className="Title_Delete">Create {table}</div>
                                <Input
                                    type="text"
                                    label="Ads name"
                                    value={valueAds?.Ads_Name}
                                    onChange={(e) => {
                                        set_ValueAds({ ...valueAds, Ads_Name: e.target.value })
                                    }}
                                />
                                <div className="frameInputPartner">
                                    <Input
                                        type="text"
                                        label="Partner name"
                                        value={infoPartner.Partner_Name}
                                        onChange={(e) => {
                                            Set_InfoPartner({ ...infoPartner, Partner_Name: e.target.value })
                                        }}
                                    />
                                    {status &&
                                        <ul>
                                            {Listpartner.map((partner, index) => <li key={index}
                                                onClick={() => {
                                                    Set_Status(false)
                                                    Set_InfoPartner(partner)
                                                    set_ValueAds({ ...valueAds, Partner_Id: partner.Partner_Id })
                                                }}>
                                                {partner?.Partner_Name}</li>)}
                                        </ul>}
                                </div>

                                <Checkbox defaultChecked={false} onChange={(e) => set_ValueAds({ ...valueAds, is_Publish: e.currentTarget.checked })}> Public</Checkbox>
                                <div className="frameFile">
                                    <div className="leftFrameFile">
                                        <div className="frameImg">
                                            <Image alt="" src={Urlfile.img || errorImg} width={200} height={50} />
                                        </div>
                                        <label htmlFor="inputImgAds">
                                            <div className="lableBtn">
                                                Choose image

                                                <input type="file" name="" id="inputImgAds" className="none" accept="image/*"
                                                    onChange={(e) => {
                                                        set_ValueAds({ ...valueAds, Ads_Image: e.target.files ? e.target.files[0] : '' })
                                                        set_Url({ ...Urlfile, img: e.target.files ? URL.createObjectURL(e.target.files[0]) : '' })
                                                    }}
                                                />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="rightFrameFile">
                                        <div className="frameAudio">
                                            <audio src={Urlfile.audio} controls />
                                        </div>
                                        <label htmlFor="inputAudioAds">
                                            <div className="lableBtn">
                                                Choose audio
                                                <input type="file" name="" id="inputAudioAds" className="none" accept="audio/*"
                                                    onChange={(e) => {
                                                        set_ValueAds({ ...valueAds, Ads_Audio: e.target.files ? e.target.files[0] : '' })
                                                        set_Url({ ...Urlfile, audio: e.target.files ? URL.createObjectURL(e.target.files[0]) : '' })
                                                    }}
                                                />
                                            </div></label>


                                    </div>
                                </div>
                                <div className="frameFooter">
                                    <textarea name="" id="" onChange={(e) => set_ValueAds({ ...valueAds, Content: e.target.value })}></textarea>
                                    <div className="frameCalander">
                                        <div className="frameInputDate">
                                            <h1>Start date</h1>
                                            <div className="frameInput">
                                                <input type="date" onChange={(e) => set_ValueAds({ ...valueAds, Start_time: new Date(e.target.value).toISOString() })} />
                                            </div>

                                        </div>
                                        <div className="frameInputDate">
                                            <h1>End date</h1>
                                            <div className="frameInput">
                                                <input type="date" onChange={(e) => set_ValueAds({ ...valueAds, End_time: new Date(e.target.value).toISOString() })} />
                                            </div>
                                        </div>

                                    </div>
                                </div>


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

export default CreateFormAds;
