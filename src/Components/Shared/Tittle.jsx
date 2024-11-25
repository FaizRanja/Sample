import React from "react";
import { Helmet } from "react-helmet-async";

const Tittle = ({
  tittle = "Chat App",
  descripation = "This is the chat app",
}) => {
  return (
    <>
      <Helmet>
        <title>{tittle}</title>
        <meta name="descripation" content={descripation} />
      </Helmet>
    </>
  );
};

export default Tittle;
