'use client'
import CreateForm from '@/components/Data_Table/Header_Content/Create_Form';
import { PlusIcon, SearchIcon } from '@/util/Icons/Icon';
import { Button, Select, SelectItem, Input, useDisclosure } from '@nextui-org/react';
import React, { useEffect, useMemo, useState } from 'react';


type Prop = { data: Array<any>, select: Array<string>, table: string, find: string, event: React.Dispatch<any[]> }

const HeaderContent = ({ data = [], select, table, find, event }: Prop) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    type data_type = typeof data[0]
    const [Array_s1, Set_Array_s1] = useState<Array<any>>([])
    const [Array_s2, Set_Array_s2] = useState<Array<any>>([])
    const [select1, set_Select1] = useState("");
    const [select2, set_Select2] = useState("")
    const [find_Value, set_find_Value] = useState("")

    useEffect(() => {
        let temp1: Array<any> = []
        let temp2: Array<any> = []
        data.map((value: data_type) => {
            temp1.push(value[select[0]])
            if (select2 != undefined) {
                temp2.push(value[select[1]])
            }
            Set_Array_s1(Array.from(new Set(temp1)))
            Set_Array_s2(Array.from(new Set(temp2)))
        })
    }, [data, select])

    const result = useMemo(() => {
        let datatemp = data
        if (find_Value.length > 0) {
            datatemp = data.filter((value: data_type) => value[find].includes(find_Value.trim()))
        } else {
            datatemp = data
        }
        return datatemp.filter((value: data_type, i, array) => {
            if (select2.length > 0 && select1.length > 0) {
                return value[select[0]] == Array_s1[Number(select1)] && value[select[1]] == Array_s2[Number(select2)]
            } else if (select2.length > 0 && select1.length == 0) {
                return value[select[1]] == Array_s2[Number(select2)]
            } else if (select1.length > 0 && select2.length == 0) {
                return value[select[0]] == Array_s1[Number(select1)]
            } else if (select2.length == 0 && select1.length == 0) {
                return datatemp
            }
        })

    }, [select1, select2, find_Value])

    useEffect(() => {
        event([...result])
    }, [result])


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
            <Select
                labelPlacement={"inside"}
                label="Role"
                className="max-w-xs max-h-xs"
                size="sm"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => set_Select1(e.target.value)}>
                {Array_s1.map((value: string, i: number) => {
                    return (
                        <SelectItem key={i} value={value}>
                            {String(value)}
                        </SelectItem>
                    )
                })}
            </Select>
            <Select
                labelPlacement={"inside"}
                label="Status"
                className="max-w-xs max-h-xs"
                size="sm"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => set_Select2(e.target.value)}
            >
                {Array_s2.map((value: string, i: number) => {
                    return (
                        <SelectItem key={i} value={value}>
                            {value}
                        </SelectItem>
                    )
                })}
            </Select>
            <Button color="primary" endContent={<PlusIcon />} size="lg" onClick={onOpen}>
                Add New
            </Button>
            <CreateForm isOpen={isOpen} onOpenChange={onOpenChange} table='user' />
        </div>
    );
}

export default HeaderContent;
