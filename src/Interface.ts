export interface IUserListProps {
    users: IUser[],
}

export interface IUser {
    id: string,
    name: string,
    password: string,
    avatar: string
}

export interface IMessageListProps {
    messages: IMessage[]
}

export interface IMessageListState {
    messages: IMessage[]
}

export interface IMessage {
    id: string,
    content: string,
    sender: string,
    available: boolean,
    to: string,
    channelId: string,
    createOn: number

}

