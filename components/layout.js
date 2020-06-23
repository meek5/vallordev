import React from "react";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
