import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import { removeUserSession } from "../../utils/common";
import { useNavigate } from "react-router-dom";


const DBNavbar = ({ onMobileNavOpen, ...rest }) => {
  const [notifications] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setOpen(true);
  }

    const handleClose = () => {
      setOpen(false);
    };

    const handleCloseSuccess = () => {
      removeUserSession();
      navigate("/login");
    };


  return (
    <AppBar elevation={0}>
      <Toolbar>
        <RouterLink to="/"></RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <Hidden lgDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" onClick={handleLogout}>
            <InputIcon />
          </IconButton>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Bạn có muốn thoát không? "}
            </DialogTitle>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Không
              </Button>
              <Button onClick={handleCloseSuccess} color="primary" autoFocus>
                Có
              </Button>
            </DialogActions>
          </Dialog>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

DBNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DBNavbar;
