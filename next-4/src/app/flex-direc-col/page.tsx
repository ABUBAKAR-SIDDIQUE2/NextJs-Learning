import { Fragment } from "react";

export default function Page() {
  return (
    <Fragment>
      <div className="wrapper flex flex-col justify-center">
        <a href="#" className="link login-link">
          Login
        </a>
        <a href="#" className="link signup-link">
          Create account
        </a>
      </div>
    </Fragment>
  );
}
