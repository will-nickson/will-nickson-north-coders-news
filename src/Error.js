import React from "react";

const Error = ({ hasError }) => {
  return (
    <div>
      {hasError ? (
        <p>{hasError.repsonse.data.message || "Error"}</p>
      ) : (
        <p>page not found</p>
      )}
    </div>
  );
};

export default Error;
