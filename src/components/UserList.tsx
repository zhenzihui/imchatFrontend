import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {IUser, IUserListProps} from "../Interface";
// @ts-ignore
import {Get} from 'react-axios';
import {axiosInstance, useStyles} from "../Common";
import {Typography} from "@material-ui/core";
import {Link, Redirect, useLocation} from "react-router-dom";
import BottomBar from "./BottomBar";


const userItem = (user: IUser) => {
    let to = `/chat/${user.id}`;

    return (
        <ListItem button alignItems="center" component={Link} to={to}>
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={user.avatar}>{user.name.substr(0, 1)}</Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={user.name}
            />
        </ListItem>
    )

}

export default function UserList(props: IUserListProps) {
    const classes = useStyles();

    return (
        <div>
            <List className={classes.root}>
                <Get instance={axiosInstance} url="/user">
                    {(error: any, response: any, isLoading: any, onReload: any) => {
                        if (!isLoading && response != null) {
                            const users: IUser[] = response.data
                            return users.map((user) => {
                                return (
                                    <div>
                                        {userItem(user)}
                                        <Divider variant="inset" component="li"/>
                                    </div>
                                )
                            })
                        } else {
                            return <Typography>Loading....</Typography>
                        }
                    }}
                </Get>
            </List>
            <BottomBar/>
        </div>

    );
}