import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from "@material-ui/core";
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  headerDialog: {
    textAlign: "center",
    backgroundColor:"#000",
    color:"#fff",
  },
  btnSend: {
    color: "#F4A242",
    border: "2px solid #F4A242",
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Karla",
    "&:hover": {
      backgroundColor: "#F4A242",
      boxShadow: "none",
      color: "#fff",
    },
    "&:active": {
      boxShadow: "none",
    },
    "&:focus": {
      outline: "none",
      backgroundColor: "#F4A242",
      color: "#fff",
    },
  },
  btnClose: {
    position: "absolute",
    left: 10,
    top: 10,
    color:"#fff",
    "&:active": {
      boxShadow: "none",
    },
    "&:focus": {
      outline: "none",
      backgroundColor: "#F4A242",
      color: "#fff",
    },
  },
  titleForm: {
    fontSize: 24,
    fontFamily: "Sorts Mill Goudy",
    fontWeight: "700",
    marginTop: 10,
    marginBottom:0,
  },
  inputField: {
    width: "100%",
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom:30,
    "& label": {
      fontFamily: "Karla",
      fontSize: 22,
      fontWeight: "bold",
    },
    "& label.Mui-focused": {
      color: "#F4A242",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#F4A242",
    },
  },
  inputMulti: {
    width: "100%",
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 30,
    fontFamily:"Karla",
    "& label": {
      fontFamily: "Karla",
      fontSize: 22,
      fontWeight: "bold",
    },
    "& label.Mui-focused": {
      color: "#F4A242",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#F4A242",
    },
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function ProjectForm({ isOpen, handleClose }) {
  const classes = useStyles();
  return (
    <Dialog open={isOpen} fullScreen fullWidth TransitionComponent={Transition}>
      <DialogTitle className={classes.headerDialog}>
        <IconButton className={classes.btnClose} onClick={handleClose}>
          <ArrowBackIosIcon />
        </IconButton>{" "}
            <Typography className={classes.titleForm}>Un nouveau projet ?</Typography> 
      </DialogTitle>
      <DialogContent className="">
        <form>
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <TextField
                  type="text"
                  label="Nom et Prénom*"
                  className={classes.inputField}
                />
              </div>
              <div className="col-sm-6">
                <TextField
                  type="email"
                  label="Email*"
                  className={classes.inputField}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <TextField
                  type="email"
                  label="Téléphone*"
                  className={classes.inputField}
                />
              </div>
              <div className="col-sm-6">
                <TextField
                type="text"
                label="Entreprise"
                className={classes.inputField}
                />
              </div>
            </div>
          </div>
          <div className="container">
         
            <TextField
              type="text"
              label="Type d'entreprise"
              className={classes.inputField}
            />
            <TextField
              type="text"
              label="Nom du projet"
              className={classes.inputField}
            />
            <TextField
              label="Description du projext"
              placeholder="( Indiquez-nous les informations spécifiques, détails ou spécificités techniques de votre projet )."
              multiline
              rows={6}
              className={classes.inputMulti}
            />
          </div>
          <div className="container text-right">
            <Button
              variant="outlined"
              className={classes.btnSend}
              endIcon={<SendIcon />}
            >
              Envoyer
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ProjectForm;
