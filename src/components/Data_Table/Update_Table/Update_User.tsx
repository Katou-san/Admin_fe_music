"use client";
import React, { useEffect, useState } from "react";
import "./Update_Table.scss";
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
import { update_userType, userType } from "@/model/userModel";
import { state_User } from "@/configs/status";
import { Role } from "@/api/Role";
import { list_roleType } from "@/model/roleModel";
import { useSelector } from "react-redux";
import { RootState } from "@/hooks/redux/store";
import { Validate_SignUp_Employess } from "@/util/Validate/User";
import { User } from "@/api/User";
import { toast } from "react-toastify";
import { useReload } from "@/contexts/providerReload";
type Prop = {
    isOpen: boolean;
    onOpenChange: () => void;
    table: string;
    data: userType;
};

const UpdateFormUser = ({ isOpen, onOpenChange, table, data }: Prop) => {
    const { set_ReloadEmploy } = useReload()
    const userProvider = useSelector((state: RootState) => state.auth)
    const [Title, Set_Title] = useState("")
    const [change, set_Change] = useState<update_userType>({});
    const [dataUser, set_data] = useState<userType>(data);
    const [list_role, set_ListRole] = useState<list_roleType>([]);
    useEffect(() => {
        Set_Title(table);
    }, [table, data]);

    useEffect(() => {
        if (isOpen) {
            Role.Get_User().then((res) => {
                if (res.status == 200) {
                    set_ListRole(res.data)
                }
            });
        }
    }, [isOpen]);
    const SubmitForm = (e: any, onClose: () => void) => {
        e.preventDefault();

        if (userProvider.Access_Token != '' && userProvider.is_Login) {
            User.Update(dataUser.User_Id, change)
                .then((res) => {
                    if (res.status == 200) {
                        set_ReloadEmploy()
                        toast.success(res.message)

                        onClose()
                    } else {
                        toast.error(res.message)
                    }

                })
        }

    };
    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <form
                                action=""
                                onSubmit={(e: any) => {
                                    SubmitForm(e, onClose);
                                }}
                            >
                                <ModalBody>
                                    <div className="Title_Delete">Update {Title}</div>

                                    <div className="select_group">
                                        <Select
                                            isRequired
                                            label={"Roles"}
                                            placeholder="Select"
                                            className="w-full"
                                            onChange={(e) => {

                                                set_Change({
                                                    ...change,
                                                    Role_Id: list_role[Number(e.target.value)].Role_Id,
                                                })
                                            }
                                            }

                                        >
                                            {list_role.map((item, i) => (
                                                <SelectItem
                                                    key={i}
                                                    value={item.Role_Id}
                                                    textValue={undefined}
                                                >
                                                    {item.Role_Name}
                                                </SelectItem>
                                            ))}
                                        </Select>
                                        <Select
                                            isRequired
                                            label={"Status"}
                                            placeholder="Select"
                                            className="w-full"
                                            onChange={(e) =>
                                                set_Change({
                                                    ...change,
                                                    Status: Number(e.target.value),
                                                })
                                            }
                                        >
                                            {state_User.map((item, i) => (
                                                <SelectItem
                                                    key={i}
                                                    value={item.value}
                                                    textValue={undefined}
                                                >
                                                    {item.lable}
                                                </SelectItem>
                                            ))}
                                        </Select>
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
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default UpdateFormUser;
