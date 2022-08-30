import { memo } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

export default memo(Layout);
