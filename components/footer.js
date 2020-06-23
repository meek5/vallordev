import React from "react";

function Footer() {
  return (
    <footer className="container">
      <p>© 2020 vallordev. Tous droits réservés.</p>
      <style jsx>{`
        footer {
          width: 100%;
          height: 50px;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        p {
          color: rgba(0, 0, 0, 0.5);
          font-size: 10px;
          line-height: 12px;
          margin:0px;
          font-family: 'Karla', sans-serif;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
