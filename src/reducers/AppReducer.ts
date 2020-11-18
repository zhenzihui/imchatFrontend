import {IMessage, IUserListProps} from "../Interface";
import {MessageListAction} from "../actions/MessageListAction";
import {MessageActions} from "../Common";

const receiveMessage = (state: IUserListProps, action: any): IUserListProps  => {
    switch (action.action) {
        case MessageActions.add:
            return {
                users: []
            };
        default:
            return {
                users: []
            }


    }
}
const ChatApp = receiveMessage
export default ChatApp