import React from "react";

const Error = ({ hasError }) => {
  return (
    <div>
      {hasError ? (
        <p>{hasError.repsonse.data.message || "Error"}</p>
      ) : (
        <p>pagenotfound</p>
      )}
    </div>
  );
};

export default Error;
