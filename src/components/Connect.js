import React from "react";
import Navbar from "./Navbar";

const Connect = (props) => {
  console.log("Map", props);
  return (
    <>
      <Navbar />

      <iframe
        width="600"
        height="450"
        title="addedNewListing"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={
          "https://www.google.com/maps/embed/v1/place?key=AIzaSyCh5I0uYvNQrOBIhNw0K9ZNCZWuCGusuEQ&q=Lubbock+TX"
        }
      ></iframe>
    </>
  );
};

export default Connect;
