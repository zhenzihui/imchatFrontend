import React from 'react';
import {useComponentStyles, useStyles} from "../Common";
import {Button, Grid, InputBase} from "@material-ui/core";

export default function () {
    const componentStyles = useComponentStyles();
    const classes = useStyles();
    return (

    <Grid container spacing={0} className={classes.stickToBottom}>
        <Grid item xs>
        </Grid>
        <Grid item xs={10}>
            <InputBase className={componentStyles.root} fullWidth endAdornment={<Button>Send</Button>}/>
        </Grid>
        <Grid item xs>
        </Grid>
    </Grid>
    )
}