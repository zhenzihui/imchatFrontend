import {IMessage} from "../Interface";
import {MessageListAction} from "../actions/MessageListAction";
import {MessageActions} from "../Common";

const receiveMessage = (action: MessageListAction) => {
    const localData: string = localStorage.getItem("localMessages") || "[]"
    let localMessages: IMessage[] = JSON.parse(localData)
    switch (action.action) {
        case MessageActions.add:
            localMessages.push(action.message)
            localStorage.setItem("localMessages", JSON.stringify(localMessages));


    }
}