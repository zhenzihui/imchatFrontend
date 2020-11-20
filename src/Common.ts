import Axios from "axios";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import UserList from "./components/UserList";
import App from "./App";

export const host = "localhost:8080"

export enum MessageActions {
    remove,
    add
}

export const axiosInstance = Axios.create({
    baseURL: "/api",
    timeout: 30000,
    headers: {
        "Access-Control-Allow-Headers": "*"
    }
})

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        inline: {
            display: 'inline',
        },
        stickToBottom: {
            width: '100%',
            position: 'fixed',
            bottom: 1,
        },
    }),
);

export const useComponentStyles =
    makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: 'flex',
                width: "90%",
                flex: 1,
                backgroundColor: theme.palette.background.default,
            },
            sendButton: {
                color: theme.palette.action.active
            }
        }))

