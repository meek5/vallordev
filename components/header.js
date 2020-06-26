import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import DrowerRight from "./drowerRight";

const useStyles = makeStyles({
  btnMenu: {
    "&:focus": {
      outline: "none",
    },
  },
  btnHamburgerIcon: {
    fontSize: 32,
  },
});

function Header() {

  const classes = useStyles();
  const [isOpenDrawerRight, setisOpenDrawerRight] = useState(false);

  const handleCloseDrawerRight = () => {
    setisOpenDrawerRight((prev) => !prev);
  };

  return (
    <header>
      <IconButton className={classes.btnMenu} onClick={handleCloseDrawerRight}>
        <MenuIcon  className={classes.btnHamburgerIcon}/>
      </IconButton>
      <DrowerRight
        isOpen={isOpenDrawerRight}
        handleClose={handleCloseDrawerRight}
      />
      <style jsx>{`
        header {
          height: 52px;
          background-color: transparent;
          position: fixed;
          width: 100%;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 10px;
        }
      `}</style>
    </header>
  );
}

export default Header;
