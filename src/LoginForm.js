
    
    import React, { useRef} from "react";
    import classes from "./LoginForm.module.css";
    const LoginForm = () => {
      const email = useRef();
      const password = useRef();
    
      const loginHandler = async (event) => {
        event.preventDefault();
        try {
          const res = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCGgKs5wlApGUw5YdBGxaewBtwG5Nlup0A", {
            method: "POST",
            body: JSON.stringify({
              email: email.current.value,
              password: password.current.value,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          const data = await res.json();
    
          if (res.ok) {
            console.log(data);
          } else {
            throw new Error(data.error.message);
          }
        } catch (err) {
          alert(err.message);
        }
      };
    
      return (
        <div className={classes.login}>
          <form className={classes.form} onSubmit={loginHandler}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" ref={email} />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" ref={password} />
            <div>
              <button type="submit">
                continue
              </button>
            </div>
          </form>
        </div>
      );
    };
    
    export default LoginForm;
    