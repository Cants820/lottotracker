import React from "react";

function Login(props) {
  return (
    <section className="login">
        <form>
            <fieldset>
                <legend>Login</legend>
                    <label>Email
                        <input type="email" name="email" placeholder="email" />
                    </label>
                    <label>Password
                        <input type="password" name="password" placeholder="password" />
                    </label>
                    <button type="submit">Submit</button>
            </fieldset>
        </form>
    </section>
  );
}

export default Login;
