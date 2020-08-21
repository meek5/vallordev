import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Link from "@material-ui/core/Link";
import {TweenMax} from "gsap"
import {
  List,
  makeStyles,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import ListIcon from "@material-ui/icons/List";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles({
  listMenu: {
    width: 250,
    height: "100%",
    backgroundColor: "#DAD9D7",
  },
  btnClose: {
    "&:focus": {
      outline: "none",
    },
  },
  listLink: {
    "&:hover": {
      color:"#000",
    },
  },
  headerSideMenu: {
    textAlign: "right",
  },
});
function DrowerRight({ isOpen, handleClose }) {

  const classes = useStyles();

  const preventDefault=(location)=>{
      TweenMax.to(window, {duration:1, scrollTo:{y:location, offsetY:52}})
      handleClose()
  }
  
  return (
    <Drawer anchor="right" open={isOpen} onClose={handleClose}>
      <List className={classes.listMenu}>
        <div className={classes.headerSideMenu}>
          <IconButton className={classes.btnClose} onClick={handleClose}>
            <ClearIcon />
          </IconButton>{" "}
        </div>
        <Link className={classes.listLink} onClick={preventDefault} color="inherit">
          <ListItem className={classes.listItemCont}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Accueil</ListItemText>
          </ListItem>
        </Link>
        <div  className={classes.listLink}  color="inherit">
          <ListItem onClick={preventDefault.bind("#services")}>
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText>Services</ListItemText>
          </ListItem>
        </div>
        <Link className={classes.listLink} onClick={preventDefault.bind("#equipe")} color="inherit">
          <ListItem>
            <ListItemIcon>
              <PeopleOutlineIcon />
            </ListItemIcon>
            <ListItemText>Equipe</ListItemText>
          </ListItem>
        </Link>
        <Link href="/#oeuvres" className={classes.listLink} onClick={preventDefault} color="inherit">
          <ListItem>
            <ListItemIcon>
              <DoneAllIcon />
            </ListItemIcon>
            <ListItemText>Œuvres</ListItemText>
          </ListItem>
        </Link>
        <Link href="/#faq" className={classes.listLink} onClick={preventDefault} color="inherit">
          <ListItem>
            <ListItemIcon>
              <LiveHelpIcon />
            </ListItemIcon>
            <ListItemText>FAQ</ListItemText>
          </ListItem>
        </Link>
        <Link href="/#contact" className={classes.listLink} onClick={preventDefault} color="inherit">
          <ListItem>
            <ListItemIcon>
              <ContactSupportIcon />
            </ListItemIcon>
            <ListItemText>Contact</ListItemText>
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
}

export default DrowerRight;
