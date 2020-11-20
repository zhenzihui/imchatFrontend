import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ChatIcon from '@material-ui/icons/Chat';
import {useStyles} from "../Common";
import {Link} from "react-router-dom";

export default function () {
    const classes = useStyles();
    const pathname = window.location.pathname; // in case user visits the path directly. The BottomNavBar is able to follow suit.
    const [value, setValue] = React.useState(pathname);
    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };
    return (
        <BottomNavigation className={classes.stickToBottom} value = {value} onChange = {handleChange}>
            <BottomNavigationAction label="Users" value="/users" icon={<AccountBoxIcon />}
                    component={Link} to = "/users"
            />
            <BottomNavigationAction label="Message" value="/" icon={<ChatIcon />}
                    component={Link} to = "/"
            />
        </BottomNavigation>

    )

}