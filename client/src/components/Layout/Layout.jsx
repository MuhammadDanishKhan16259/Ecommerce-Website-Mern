import React from "react";
import Header from "../Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
const layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />

        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>{children}</main>
      <Footer />
    </div>
  );
};

layout.defaultProps = {
  title: "Ecommerce APP - Shop now",
  description: "Mern Stack Project",
  keywords: "Mern,React,Node,MongoDB",
  author: "Technifo",
};
export default layout;
