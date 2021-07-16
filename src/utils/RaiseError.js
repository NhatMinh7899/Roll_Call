import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const RaiseError = (props) =>  {

  const [open, setOpen] = useState(props.open);
  const [mess, setMess] = useState(props.messages);

  useEffect(() => {
    console.log(props.open);
    setOpen(props.open);
    setMess(props.messages);
  }, [props]);


  const handleClose = (event, reason) => {
    setOpen(false);
    }

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={mess}
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
    </div>
  );
};

export default RaiseError;
