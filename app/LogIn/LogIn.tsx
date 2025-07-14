import styles from "./LogIn.module.scss";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMassage } from "./ErorsMessage";
import { Product } from "./interface/singIn";

interface props {
  currentItem?: Product;
}
const LogIn = (props: props) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    defaultValues: props.currentItem,
  });

  const onDone = () => {};

  return (
    <div className={styles.container}>
      <Image src="/LogIn.png" alt="photo" width={770} height={729} />

      <div className={styles.logInContainerStyle}>
        <div className={styles.containerLogIn}>
          <p className={styles.sinInStyleText}>Sign In</p>
          <form
            className={styles.formContainer}
            onSubmit={handleSubmit(onDone)}
          >
            <div className={styles.singInContainer}>
              <input
                className={styles.inputStyle}
                placeholder="Enter your Email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
                type="email"
              />
              {errors.email && (
                <ErrorMassage>{errors.email.message}</ErrorMassage>
              )}
              <div className={styles.passwordInputWrapper}>
                <input
                  className={styles.inputStylePosition}
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 5,
                      message: "Min length is 5",
                    },
                  })}
                />

                <Image
                  className={styles.inputPositionStyle}
                  onClick={toggleShowPassword}
                  src={showPassword ? "/Hide.svg" : "/HideOff.svg"}
                  alt="photo"
                  width={24}
                  height={24}
                />
              </div>
              {errors.password && (
                <ErrorMassage>{errors.password.message}</ErrorMassage>
              )}
              <div className={styles.checkboxContainer}>
                <input
                  className={styles.inputCheckboxStyle}
                  id="singin"
                  type="checkbox"
                />
                <label className={styles.lableTextStyle} htmlFor="singin">
                  Remember password
                </label>
              </div>
            </div>
            <div className={styles.submitContainer}>
              <input
                className={styles.submitStyle}
                type="submit"
                value="Sign in"
              />
              <p className={styles.account}>
                Don’t you have an account?{" "}
                <a className={styles.singUpStyle} href="#">
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
