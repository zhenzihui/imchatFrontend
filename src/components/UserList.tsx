import React from "react";
import {IUserListProps} from "../Interface";
// @ts-ignore
import {Get} from 'react-axios'
import Axios from "axios";

const UserList = (props: IUserListProps) => {
    const instance = Axios.create({
        baseURL: `api`,
        timeout: 2000,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }

    })


    return (
            <div>
                <ul>
                    <Get url={`/user`} instance = {instance} >
                        {
                            (error: any, response: any, isLoading: any, onReload: any) => {
                                if(error != null) {
                                    return error
                                }
                                return <li> <div>{response}</div> </li>
                            }
                        }

                    </Get>
                </ul>
            </div>
    )
}

export default UserList
