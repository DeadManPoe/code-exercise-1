import React, { FC } from "react";
import Navigation from "..";
import Footer from "../footer";
import styles from "./styles.module.scss";

const Layout: FC = ({ children }) => {
  return (
    <>
      <nav>
        <Navigation />
      </nav>

      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default Layout;
