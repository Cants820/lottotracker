import React from "react";

const NoMatch = () => {
  return (
    <div className="nomatch container d-flex flex-column justify-content-center pt-5 mt-n6">
      <div className="pt-7 pb-5">
        <div className="text-center mb-2 pb-4">
          <h1>404</h1>
          <h2>Page not found!</h2>
          <p className="pb-2">It seems we can’t find the page you are looking for.</p>
        </div>
      </div>
    </div>
  );
};

export default NoMatch;
