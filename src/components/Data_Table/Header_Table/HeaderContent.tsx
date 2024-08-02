"use client";
import CreateFormArtist from "@/components/Data_Table/Create_Form/Form_Artist";
import CreateFormCate from "@/components/Data_Table/Create_Form/Form_Cate";
import CreateFormEmployess from "@/components/Data_Table/Create_Form/Form_Employess";
import CreateFormPlaylist from "@/components/Data_Table/Create_Form/Form_Playlist";
import CreateFormRole from "@/components/Data_Table/Create_Form/Form_Role";
import CreateFormSong from "@/components/Data_Table/Create_Form/Form_Song";
import CreateFormSub from "@/components/Data_Table/Create_Form/Form_Sub";
import CreateFormUser from "@/components/Data_Table/Create_Form/Form_User";
import CreateFormPartner from "@/components/Data_Table/Create_Form/From_Partner";
import { Convert_Title } from "@/util/Convert/Table";
import { PlusIcon, SearchIcon } from "@/util/Icons/Icon";
import {
    Button,
    Select,
    SelectItem,
    Input,
    useDisclosure,
} from "@nextui-org/react";
import React, { useEffect, useMemo, useState } from "react";

type Prop = {
    data: Array<any>;
    select: Array<string>;
    table: string;
    find: string;
    event: React.Dispatch<any[]>;
    create?: Boolean
    onselect?: Boolean;
};

const HeaderContent = ({ data = [], select, table, find, event, create = true, onselect = true }: Prop) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    type data_type = (typeof data)[0];
    const [Array_s1, Set_Array_s1] = useState<Array<any>>([]);
    const [Array_s2, Set_Array_s2] = useState<Array<any>>([]);
    const [select1, set_Select1] = useState("");
    const [select2, set_Select2] = useState("");
    const [find_Value, set_find_Value] = useState("");

    useEffect(() => {
        let temp1: Array<any> = [];
        let temp2: Array<any> = [];
        data.map((value: data_type) => {
            temp1.push(value[select[0]]);
            if (select2 != undefined && select[1] != undefined) {
                temp2.push(value[select[1]]);
            }
            Set_Array_s1(Array.from(new Set(temp1)));
            Set_Array_s2(Array.from(new Set(temp2)));
        });
    }, [data, select]);

    const result = useMemo(() => {
        let datatemp = data;
        if (find_Value.length > 0) {
            datatemp = data.filter((value: data_type) =>
                value[find].includes(find_Value.trim())
            );
        } else {
            datatemp = data;
        }
        return datatemp.filter((value: data_type, i, array) => {
            if (select2.length > 0 && select1.length > 0) {
                return (
                    value[select[0]] == Array_s1[Number(select1)] &&
                    value[select[1]] == Array_s2[Number(select2)]
                );
            } else if (select2.length > 0 && select1.length == 0) {
                return value[select[1]] == Array_s2[Number(select2)];
            } else if (select1.length > 0 && select2.length == 0) {
                return value[select[0]] == Array_s1[Number(select1)];
            } else if (select2.length == 0 && select1.length == 0) {
                return datatemp;
            }
        });
    }, [select1, select2, find_Value]);

    useEffect(() => {
        event([...result]);
    }, [result]);

    return (
        <div className="Header_Content">
            <Input
                isClearable
                className=" max-w-xs h-full"
                placeholder="Search by name..."
                startContent={<SearchIcon />}
                size="lg"
                onValueChange={set_find_Value}
            />

            {onselect && <>
                <Select
                    labelPlacement={"inside"}
                    label={Convert_Title(select[0])}
                    className="max-w-xs max-h-xs"
                    size="sm"
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        set_Select1(e.target.value)
                    }
                >
                    {Array_s1.map((value: string, i: number) => {
                        return (
                            <SelectItem key={i} value={value} textValue={value}>
                                {String(value)}
                            </SelectItem>
                        );
                    })}
                </Select>
                {select[1] && (
                    <Select
                        labelPlacement={"inside"}
                        label={Convert_Title(select[1])}
                        className="max-w-xs max-h-xs"
                        size="sm"
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            set_Select2(e.target.value)
                        }
                    >
                        {Array_s2.map((value: string, i: number) => {
                            return (
                                <SelectItem key={i} value={value} textValue={value}>
                                    {String(value)}
                                </SelectItem>
                            );
                        })}
                    </Select>
                )}</>}

            {create != false && (
                <Button
                    color="primary"
                    endContent={<PlusIcon />}
                    size="lg"
                    onClick={onOpen}
                >
                    Add New
                </Button>
            )}
            {table === "user" && (
                <CreateFormUser
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    table={table}
                />
            )}
            {table === "employess" && (
                <CreateFormEmployess
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    table={table}
                />
            )}
            {table === "song" && (
                <CreateFormSong
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    table={table}
                />
            )}
            {table === "playlist" && (
                <CreateFormPlaylist
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    table={table}
                />
            )}
            {table === "role" && (
                <CreateFormRole
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    table={table}
                />
            )}
            {table === "cate" && (
                <CreateFormCate
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    table={table}
                />
            )}
            {table === "sub" && (
                <CreateFormSub
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    table={table}
                />
            )}
            {table === "artist" && (
                <CreateFormArtist
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    table={table}
                />
            )}


            {
                table === 'partner' && (<CreateFormPartner isOpen={isOpen} onOpenChange={onOpenChange}
                    table={table}
                />)
            }



        </div>
    );
};

export default HeaderContent;
