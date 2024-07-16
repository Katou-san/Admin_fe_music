"use client";
import React, { useEffect, useReducer, useState } from "react";
import {
    Modal,
    ModalContent,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    Select,
    SelectItem,
} from "@nextui-org/react";
import { partner, partnerCreateType } from "@/model/partner";
import Image from "next/image";
import { Reducer_Change } from "@/hooks/reducer/action";
import { Validate_CreatePartner } from "@/util/Validate/Partner";
import { toast } from "react-toastify";
import { Partner } from "@/api/Partner";
import { Form_Data } from "@/util/FormData/Form_Data";
type Prop = {
    isOpen: boolean;
    onOpenChange: () => void;
    table: string;
    data?: any;
};

const CreateFormPartner = ({ isOpen, onOpenChange, table, data }: Prop) => {
    const [Title, Set_Title] = useState("");
    const [valuePartner, setValuePartner] = useState<partnerCreateType>(
        partner.initCreate
    );
    const [togo, setTogo] = useState(false);
    let Array_Status = [
        { label: "advertise", value: 0 },
        { label: "test", value: 1 },
    ];
    const [Urlfile, dispacth_url] = useReducer(Reducer_Change, {
        img: null,
        audio: null,
        logo: null
    });
    const url =
        "https://www.siliconera.com/wp-content/uploads/2024/05/star-rail-hope-is-a-thing-with-feathers-guide.jpg";

    useEffect(() => {
        Set_Title(table);
    }, [table, data]);

    const changeValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValuePartner({ ...valuePartner, Type: Number(e.target.value) });
    };

    const SubmitForm = (e: any, onClose: () => void) => {
        e.preventDefault();
        const checkError = Validate_CreatePartner(valuePartner)
        console.log(valuePartner)
        if (!checkError.status) {
            Partner.Create(Form_Data(valuePartner))
                .then((res) => {
                    if (res.status === 200) {
                        toast.success(res.message)
                    } else {
                        toast.error(res.message)
                    }
                })
            onClose()
        } else {
            let Array_Key = Object.keys(checkError.Error);
            toast.error(checkError.Error[Array_Key[0]]);
        }


    };
    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form
                            action=""
                            onSubmit={(e: any) => {
                                SubmitForm(e, onClose);
                            }}
                            encType="multipart/form-data"
                            className="pt-5  "
                        >
                            <ModalBody>
                                <div
                                    className={`formContent partnerForm ${togo ? "showRightContentPartner" : ""
                                        }`}
                                >
                                    <div className="leftContent">
                                        <div className="Title_Delete">Create {Title}</div>
                                        <Input
                                            type="text"
                                            label="Partner Name"
                                            className="input"
                                            onChange={(e) => {
                                                setValuePartner({
                                                    ...valuePartner,
                                                    Partner_Name: e.target.value,
                                                });
                                            }}
                                        />
                                        <Input
                                            type="text"
                                            label="Title"
                                            className="input"
                                            onChange={(e) => {
                                                setValuePartner({
                                                    ...valuePartner,
                                                    Title: e.target.value,
                                                });
                                            }}
                                        />
                                        <Input
                                            type="text"
                                            label="Content"
                                            className="input"
                                            onChange={(e) => {
                                                setValuePartner({
                                                    ...valuePartner,
                                                    Content: e.target.value,
                                                });
                                            }}
                                        />
                                        <Input
                                            type="text"
                                            label="Link"
                                            className="input"
                                            onChange={(e) => {
                                                setValuePartner({
                                                    ...valuePartner,
                                                    Link: e.target.value,
                                                });
                                            }}
                                        />
                                        <div className="select_group">
                                            <Select
                                                isRequired
                                                label={Title}
                                                placeholder="Select"
                                                className="w-full input"
                                                onChange={changeValue}
                                            >
                                                {Array_Status.map((item, i) => (
                                                    <SelectItem
                                                        key={i}
                                                        value={item.value}
                                                        textValue={undefined}
                                                    >
                                                        {item.label}
                                                    </SelectItem>
                                                ))}
                                            </Select>
                                            <div
                                                className="btNext"
                                                onClick={() => setTogo((prev) => !prev)}
                                            >
                                                Next
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rightContent">
                                        <div
                                            className="btnPrev"
                                            onClick={() => setTogo((prev) => !prev)}
                                        >
                                            Previous
                                        </div>
                                        <div className="formInfomationImage">
                                            <div className="farmeImage">
                                                <h1>Image</h1>
                                                <Image src={Urlfile?.img ? Urlfile.img : url} alt="" width={1000} height={1000} />
                                                <div className="frameLabel">
                                                    <label htmlFor="inputImage">import</label>
                                                    <input
                                                        type="file"
                                                        id="inputImage"
                                                        className="none"
                                                        accept="image/*"
                                                        onChange={(e) => {
                                                            setValuePartner({
                                                                ...valuePartner,
                                                                Partner_Image: e.target.files
                                                                    ? e.target.files[0]
                                                                    : null,
                                                            });

                                                            dispacth_url({
                                                                type: "CHANGE",
                                                                payload: {
                                                                    img: e.target.files
                                                                        ? URL.createObjectURL(e.target.files[0])
                                                                        : null,
                                                                },
                                                            });
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="farmeLogo">
                                                <h1>Logo</h1>
                                                <Image src={Urlfile?.logo ? Urlfile.logo : url} alt="" width={1000} height={1000} />
                                                <div className="frameLabel">
                                                    <label htmlFor="inputLogo">import</label>
                                                    <input
                                                        type="file"
                                                        id="inputLogo"
                                                        className="none"
                                                        accept="image/*"
                                                        onChange={(e) => {
                                                            setValuePartner({
                                                                ...valuePartner,
                                                                Logo: e.target.files
                                                                    ? e.target.files[0]
                                                                    : null,
                                                            });

                                                            dispacth_url({
                                                                type: "CHANGE",
                                                                payload: {
                                                                    logo: e.target.files
                                                                        ? URL.createObjectURL(e.target.files[0])
                                                                        : null,
                                                                },
                                                            });
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="farmeAudio">
                                            <div className="frameAudio">
                                                <audio src={Urlfile?.audio ? Urlfile.audio : ""} controls />
                                            </div>

                                            <div className="frameLabel">
                                                <label htmlFor="inputAudio">import</label>
                                                <input
                                                    type="file"
                                                    id="inputAudio"
                                                    className="none"
                                                    accept="audio/*"
                                                    onChange={(e) => {
                                                        setValuePartner({
                                                            ...valuePartner,
                                                            Partner_Audio: e.target.files
                                                                ? e.target.files[0]
                                                                : null,
                                                        });

                                                        dispacth_url({
                                                            type: "CHANGE",
                                                            payload: {
                                                                audio: e.target.files
                                                                    ? URL.createObjectURL(e.target.files[0])
                                                                    : null,
                                                            },
                                                        });
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>

                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" type="submit">
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
