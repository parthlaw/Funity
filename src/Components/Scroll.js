import React from "react";

const Scroll = (prop) => {
  return (
    <div
      style={{
        width: "100%",
        overflowY: "scroll",
        height: "100vh",
        marginBottom: "100px",
      }}
    >
      {prop.children}
    </div>
  );
};
export default Scroll;
