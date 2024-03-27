import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <section className="notFound">
      <p>404 NOT FOUND</p>
      <Link className="customLink" to="/">
        Go back to main page!
      </Link>
    </section>
  );
};

export default NotFound;
