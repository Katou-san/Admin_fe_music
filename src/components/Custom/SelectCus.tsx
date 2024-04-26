import { Select, SelectItem } from '@nextui-org/react';
import React from 'react';

type Prop = {
    array: Array<any>,
    Title: string,
    default_v: string,
    event?: () => void,
    lables: Array<string>
}
const SelectCus = ({ array, Title, default_v, event, lables }: Prop) => {


    return (
        <Select
            isRequired
            label={Title}
            placeholder="Select"
            defaultSelectedKeys={[default_v]}
            className="max-w-xs"
        >
            {array.map((item, i) => (
                <SelectItem key={i} value={item[lables[0]]}>
                    {item[lables[1]]}
                </SelectItem>
            ))}
        </Select>
    );
}

export default SelectCus;
