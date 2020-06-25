import React from "react";

function Header() {
  return (
    <header>
      <div className="btn-hamburguer">
        <div />
        <div />
        <div />
      </div>
      <style jsx>{`
        header {
          height: 52px;
          background-color: #DAD9D7;
          position: fixed;
          width: 100%;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 20px;
        }
        .btn-hamburguer {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 24px;
        }
        .btn-hamburguer div {
          height: 5px;
          width: 34px;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 2px;
        }
        .btn-hamburguer:hover {
          cursor: pointer;
        }
        .btn-hamburguer:hover div {
          background-color: #000;
        }
      `}</style>
    </header>
  );
}

export default Header;
