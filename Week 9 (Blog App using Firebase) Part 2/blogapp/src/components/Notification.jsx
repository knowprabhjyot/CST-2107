import { Snackbar } from '@mui/material'
import React, { memo } from 'react'
import Proptypes from 'prop-types';

const Notification = ({ open, message }) => {
    console.log(message, 'message');
    console.log(open, 'isopen');
    return (
        <Snackbar
            open={open}
            autoHideDuration={2000}
            // onClose={}
            message={message}
        />
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Notification);

Notification.propTypes = {
    open: Proptypes.boolean,
    message: Proptypes.string
}

