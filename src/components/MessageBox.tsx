import React from 'react';
import {useComponentStyles, useStyles} from "../Common";
import {Button, Fab, Grid, InputBase, TextField} from "@material-ui/core";

export default function () {
    const componentStyles = useComponentStyles();
    const classes = useStyles();
    return (

    <Grid container spacing={1} className={classes.stickToBottom}>
        <Grid item xs={9}>
            <TextField
                variant="standard"
                fullWidth
                multiline
            />
        </Grid>
        {/*<Grid item xs={10}>*/}
        {/*    <InputBase className={componentStyles.root} fullWidth endAdornment={<Button>Send</Button>}/>*/}
        {/*</Grid>*/}
        <Grid item xs={3}>
            <Button variant="contained" color="primary">
                Send
            </Button>
        </Grid>
    </Grid>
    )
}