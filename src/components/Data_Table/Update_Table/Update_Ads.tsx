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
} from "@nextui-org/react";
// import "./_Create_Form.scss";
import Image from "next/image";
import { toast } from "react-toastify";
import { Form_Data } from "@/util/FormData/Form_Data";
import { useReload } from "@/contexts/providerReload";
import { AdsType, update_AdsType } from "@/model/advserModel";
import { list_PartnerType, PartnerModel, PartnerType } from "@/model/partnerModel";
import useDebounce from "@/hooks/customs/useDebounce";
import { Partner } from "@/api/Partner";
import { Validate_Create_Ads, Validate_Update_Ads } from "@/util/Validate/Ads";
import { Ads } from "@/api/Ads";
import { Send } from "@/api/Send";
import { URLValidate } from "@/util/Validate/Url";

type Prop = {
    isOpen: boolean;
    onOpenChange: () => void;
    table: string;
    data: AdsType;
};

const UpdateFormAds = ({ isOpen, onOpenChange, table, data }: Prop) => {
    const { set_ReloadAds } = useReload()
    const [status, Set_Status] = useState(false)
    const [Listpartner, set_ListPartner] = useState<list_PartnerType>([]);
    const [infoPartner, Set_InfoPartner] = useState<PartnerType>(PartnerModel.init)
    const [valueAds, set_ValueAds] = useState<AdsType>(data)
    const [change, set_Change] = useState<update_AdsType>({ Ads_Image: "" })
    const [urlAudio, set_Audio] = useState('')
    const [urlImage, set_Image] = useState('')

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

    useEffect(() => {
        if (data?.Partner_Id != '') {
            Promise.all([
                Partner.Get_Id(data?.Partner_Id)
                    .then((res) => {
                        if (res.status == 200) {
                            Set_InfoPartner(res.data)
                        }
                    }),
            ])
        }

        if (URLValidate.isUrl(data?.Ads_Image)) {
            Send.Image_A(data?.Ads_Image)
                .then((res) => set_Image(URL.createObjectURL(res)))
        } else {
            set_Image(data?.Ads_Image)
        }


        if (!URLValidate.isUrl(data?.Ads_Audio)) {
            Send.Audio_A(data?.Ads_Audio)
                .then((res) => set_Audio(URL.createObjectURL(res)))
        } else {
            set_Audio(data?.Ads_Audio)
        }
    }, [])




    const SubmitForm = (e: any, onClose: () => void) => {
        e.preventDefault();
        const Error_Check = Validate_Update_Ads(change);
        if (!Error_Check.status) {
            const formdata = Form_Data(change)
            Ads.Update(data.Ads_Id, formdata)
                .then((res) => {
                    if (res.status == 200) {
                        toast.success('Update successfully!')
                        Set_Status(false)
                        set_ListPartner([])
                        Set_InfoPartner(PartnerModel.init)
                        set_ReloadAds()
                        onClose()
                    } else {
                        toast.error(res.message)
                    }
                })
        } else {
            const getKey = Object.keys(Error_Check.Error)
            toast.error(Error_Check.Error[getKey[0]])
        }
    }

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
                                <div className="Title_Delete">Update {table}</div>
                                <Input
                                    type="text"
                                    label="Ads name"
                                    value={valueAds?.Ads_Name}
                                    onChange={(e) => {
                                        set_ValueAds({ ...valueAds, Ads_Name: e.target.value })
                                        set_Change({ ...change, Ads_Name: e.target.value })
                                    }}
                                />
                                <div className="frameInputPartner">
                                    <Input
                                        type="text"
                                        label="Partner name"
                                        value={infoPartner.Partner_Name}
                                        onChange={(e) => {
                                            Set_InfoPartner({ ...infoPartner, Partner_Name: e.target.value })
                                            // set_Change({ ...change, Ads_Name: e.target.value })
                                        }}
                                    />
                                    {status &&
                                        <ul>
                                            {Listpartner.map((partner, index) => <li key={index}
                                                onClick={() => {
                                                    Set_Status(false)
                                                    Set_InfoPartner(partner)
                                                    set_ValueAds({ ...valueAds, Partner_Id: partner.Partner_Id })
                                                    set_Change({ ...change, Partner_Id: partner.Partner_Id })
                                                }}>
                                                {partner?.Partner_Name}</li>)}
                                        </ul>}
                                </div>

                                <Checkbox onChange={(e) => {
                                    set_ValueAds({ ...valueAds, is_Publish: e.currentTarget.checked })
                                    set_Change({ ...change, is_Publish: e.currentTarget.checked })
                                }} defaultChecked={valueAds.is_Publish}> Public</Checkbox>
                                <div className="frameFile">
                                    <div className="leftFrameFile">
                                        <div className="frameImg">
                                            <Image alt="" src={urlImage || errorImg} width={200} height={50} />
                                        </div>
                                        <div className="lableBtn">
                                            <label htmlFor="inputImgAds">Choose image</label>
                                            <input type="file" name="" id="inputImgAds" className="none"
                                                onChange={(e) => {
                                                    set_Change({ ...change, Ads_Image: e.target.files ? e.target.files[0] : '' })
                                                    set_Image(e.target.files ? URL.createObjectURL(e.target.files[0]) : '')
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="rightFrameFile">
                                        <div className="frameAudio">
                                            <audio src={urlAudio} controls />
                                        </div>
                                        <div className="lableBtn">
                                            <label htmlFor="">Cant change</label>
                                        </div>


                                    </div>
                                </div>
                                <div className="frameFooter">
                                    <textarea name="" id="" value={valueAds.Content} onChange={(e) => {
                                        set_ValueAds({ ...valueAds, Content: e.target.value })
                                        set_Change({ ...change, Content: e.target.value })
                                    }
                                    }></textarea>
                                    <div className="frameCalander">
                                        <div className="frameInputDate">
                                            <h1>Start date</h1>
                                            <div className="frameInput">
                                                <input type="date" value={new Date(valueAds.Start_time).toISOString().substring(0, 10)}
                                                    onChange={(e) => {
                                                        set_ValueAds({ ...valueAds, Start_time: new Date(e.target.value).toISOString() })
                                                        set_Change({ ...valueAds, Start_time: new Date(e.target.value).toISOString() })
                                                    }} />
                                            </div>

                                        </div>
                                        <div className="frameInputDate">
                                            <h1>End date</h1>
                                            <div className="frameInput">
                                                <input type="date" value={new Date(valueAds.End_time).toISOString().substring(0, 10)}
                                                    onChange={(e) => {
                                                        set_ValueAds({ ...valueAds, End_time: new Date(e.target.value).toISOString() })
                                                        set_Change({ ...valueAds, End_time: new Date(e.target.value).toISOString() })
                                                    }} />
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

export default UpdateFormAds;
