"use client";
import styles from "./LogIn.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMassage } from "./ErorsMessage";
import { Product } from "./interface/singIn";
import InputText from "@/components/inputText/InputText";
import Link from "next/link";
import axios from "axios";
import Button from "@/components/Button/Button";
import { setCookie } from "@/cookies";
import { useRouter } from "next/navigation";

interface props {
  currentItem?: Product;
}

const LogIn = (props: props) => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

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

  const onLogin = (value: any) => {
    axios
      .post("https://jukebox-back.onrender.com/auth/login", value)
      .then((r) => {
        setCookie("token", r.data.token, 60);
        router.push("/");
      });
  };

  return (
    <div className={styles.container}>
      <Image
        className={styles.musicLogoStyles}
        src="/musiclogo.png"
        alt="photo"
        width={770}
        height={729}
      />
      <div className={styles.logInContainerStyle}>
        <div className={styles.containerLogIn}>
          <p className={styles.sinInStyleText}>Sign In</p>
          <form
            className={styles.formContainer}
            onSubmit={handleSubmit(onLogin)}
          >
            <div className={styles.singInContainer}>
              <InputText
                placeholder="Enter your Email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
              />
              {errors.email && (
                <ErrorMassage>{errors.email.message}</ErrorMassage>
              )}
              <div className={styles.passwordInputWrapper}>
                <InputText
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 8,
                      message: "Min length is 8",
                    },
                  })}
                />

                <Image
                  className={styles.inputPositionStyle}
                  onClick={toggleShowPassword}
                  src={showPassword ? "/HideOff.svg" : "/Hide.svg"}
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
              <Button title={"Sing in"} />
              <p className={styles.account}>
                Don’t you have an account?{" "}
                <Link className={styles.singUpStyle} href="/register">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
