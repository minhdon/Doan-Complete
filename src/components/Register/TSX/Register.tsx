import { useState } from "react";
import styles from "../CSS/Register.module.css";

export const Register = () => {
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const actionUnHiddenPassword = () => {
    setHiddenPassword(false);
  };
  const actionHiddenPassword = () => {
    setHiddenPassword(true);
  };
  const unHidden = hiddenPassword ? "" : styles.unhidden;
  const Hidden = hiddenPassword ? "" : styles.hidden;
  const typePassword = hiddenPassword ? "password" : "text";
  return (
    <>
      <section className={styles.root}>
        <section className={styles.image}>
          <img src="/images/bgLogin.png" alt="" />
        </section>

        <section className={styles.hero}>
          <div className={styles.logo}>
            <img src="/images/logo.png" alt="" />
          </div>
          <div className={styles.wrapper}>
            <div
              className={`${styles["form-box"]} ${styles.register}`}
              id="register-box"
            >
              <h2>Register</h2>
              <p className={styles["first-p"]}>
                Create your account <a href="/">Medicare</a>
              </p>

              <form className={styles.form} action="">
                <div className={styles["input-box"]}>
                  <span className={styles.icon}>
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <input type="text" required id="email-res" />

                  <label htmlFor="email-res">Email</label>
                </div>

                <div className={styles["input-box"]}>
                  <span className={styles.icon}>
                    <i
                      className={`fa-solid fa-eye ${styles["fa-eye"]} ${unHidden}`}
                      id="eye"
                      onClick={actionHiddenPassword}
                    ></i>

                    <i
                      className={`fa-solid fa-eye-slash ${styles["fa-eye-slash"]} ${Hidden}  `}
                      id="eye-slash"
                      onClick={actionUnHiddenPassword}
                    ></i>
                  </span>

                  <input type={typePassword} id="password-res" required />
                  <label htmlFor="password-res">Password</label>
                </div>

                <div className={styles["input-box"]}>
                  <span className={styles.icon}>
                    <i
                      className={`fa-solid fa-eye ${styles["fa-eye"]} ${unHidden}`}
                      id="eye"
                      onClick={actionHiddenPassword}
                    ></i>

                    <i
                      className={`fa-solid fa-eye-slash ${styles["fa-eye-slash"]} ${Hidden}  `}
                      id="eye-slash"
                      onClick={actionUnHiddenPassword}
                    ></i>
                  </span>

                  <input
                    type={typePassword}
                    id="confirm-password-res"
                    required
                  />
                  <label htmlFor="confirm-password-res">Confirm Password</label>
                </div>

                <div className={styles.agree}>
                  <label htmlFor="agree-checkbox">
                    <input type="checkbox" id="agree-checkbox" />
                    <span>I agree to the terms & conditions</span>
                  </label>
                </div>

                <button type="submit" className={styles.btn} id="btnRegister">
                  Register
                </button>

                <div className={styles["login-register"]}>
                  <p>
                    Already have an account?
                    <a
                      href="/Login"
                      className={styles["login-link"]}
                      id="login-link"
                    >
                      Login
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
