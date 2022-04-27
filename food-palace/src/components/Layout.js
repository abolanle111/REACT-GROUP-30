import React from "react";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <section class="container">
          <Nav />
        </section>
      </header>

      <main className="container">{children}</main>

      <Footer />
    </>
  );
};

export default Layout;

