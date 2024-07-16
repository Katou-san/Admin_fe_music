import { Category } from '@/api/Category';
import { Select, SelectItem } from '@nextui-org/react';
import React, { useState } from 'react';

type Prop = {
    array: Array<any>,
    Title: string,
    event?: any,
    lables: Array<string>
}
const SelectCus = ({ array, Title, event, lables }: Prop) => {
    const Get_Select = (e: React.ChangeEvent<HTMLSelectElement>) => {
        event({ type: "CHANGE", payload: { Category_Id: e.target.value } });
    }
    return (
        <Select
            isRequired
            label={Title}
            placeholder="Select"
            className="w-full"
            onChange={Get_Select}
        >
            {array.map((item, i) => (
                <SelectItem key={item[lables[0]]} value={item[lables[1]]} textValue={undefined}>
                    {item[lables[0]]}
                </SelectItem>
            ))}
        </Select>
    );
}

export default SelectCus;
