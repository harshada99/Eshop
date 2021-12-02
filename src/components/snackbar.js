import React, {useState}from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function SimpleSnackbar(props) {

    // const [open, setOpen] = React.useState(false);
    const [show, setShow] = useState(false);
    const { open } = props;

    let msg = '';

    const OpenSnackBar = () => {
        console.log('from Opensnackbar')
        switch (open) {
            case 'added':
                msg = "Added to cart";
                show = true;
                setShow(true);
                break;
            case 'removed':
                msg = "Removed from cart";
                show = true;
                setShow(true);
                break;

            default: break;
        }
    }


    const handleClick = () => {
        //setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setShow(false);
    };

    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={show}
                autoHideDuration={3000}
                onClose={handleClose}
                message={msg}
                action={
                    <React.Fragment>
                        <Button color="secondary" size="small" onClick={handleClose}>
                            UNDO
            </Button>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
            {OpenSnackBar}
        </div>
    );
}
