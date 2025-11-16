import styles from "../CSS/ForgotPassword.module.css";

export const ForgotPassword = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.card}>
            <h2 className={styles["card-title"]}>Quên Mật Khẩu?</h2>

            <p className={styles["card-description"]}>
              Đừng lo lắng! Chỉ cần nhập email của bạn bên dưới và chúng tôi sẽ
              gửi cho bạn một liên kết để đặt lại mật khẩu.
            </p>

            <form action="#" method="POST">
              <div className={styles["form-group"]}>
                <label htmlFor="email" className={styles["form-label"]}>
                  Địa chỉ Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="ban@example.com"
                  className={styles["form-input"]}
                />
              </div>

              <div className={styles["button-container"]}>
                <button
                  type="submit"
                  id="submit-button"
                  className={styles["submit-button"]}
                >
                  Gửi liên kết đặt lại
                </button>
              </div>
            </form>

            <div id="success-message" className={styles.hidden}>
              Đã gửi liên kết! Vui lòng kiểm tra email của bạn.
            </div>

            <div className={styles["login-link-container"]}>
              <a href="/login" className={styles["login-link"]}>
                Quay lại Đăng nhập
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
