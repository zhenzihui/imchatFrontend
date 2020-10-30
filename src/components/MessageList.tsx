import React from "react";
import {IMessage, IUserListProps} from "../Interface";
import Axios from "axios";
import {host} from "../Common";

const MessageList = (props: IUserListProps) => {

    const source = new EventSource(host + "/api/user/message/2");

    source.onmessage = (messageEvent: MessageEvent<IMessage>) => {

    }

    return (
        <div>
            <ul>
                {props.users.map(user => {
                    return <li>{user.name}</li>
                })}
            </ul>
        </div>
    )
}

export default MessageList
