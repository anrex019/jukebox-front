"use client";
import styles from "./SingUp.module.scss";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputText from "@/components/inputText/InputText";
import { Product } from "./interface/singup";
import Link from "next/link";
import { ErrorMassage } from "./ErorsMessage";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import axios from "axios";

interface props {
  currentItem?: Product;
}
const SingUp = (props: props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);

  const router = useRouter();

  const onSubmit = (Values: any) => {
    axios
      .post("https://jukebox-back.onrender.com/auth/register")
      .then((r) => {
        router.push("/singin");
      })
      .catch(() => {
        console.log("registracias ver gadis");
      });
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleHidePassword = () => {
    setHidePassword((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    defaultValues: props.currentItem,
  });

  return (
    <div className={styles.container}>
      <Image src="/musiclogo.png" alt="photo" width={770} height={729} />

      <div className={styles.logInContainerStyle}>
        <div className={styles.containerLogIn}>
          <p className={styles.sinInStyleText}>Sign up</p>
          <form
            className={styles.formContainer}
            onSubmit={handleSubmit(onSubmit)}
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
              <div className={styles.passwordInputWrapper}>
                <InputText
                  placeholder="Repeat password"
                  type={hidePassword ? "text" : "Password"}
                  {...register("RepeatPassword", {
                    required: true,
                    minLength: {
                      value: 8,
                      message: "It's not correct",
                    },
                  })}
                />

                <Image
                  className={styles.inputPositionStyle}
                  onClick={toggleHidePassword}
                  src={hidePassword ? "/HideOff.svg" : "/Hide.svg"}
                  alt="photo"
                  width={24}
                  height={24}
                />
              </div>
              {errors.RepeatPassword && (
                <ErrorMassage>{errors.RepeatPassword.message}</ErrorMassage>
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
              <Button title={"Sign up"} />
              <p className={styles.account}>
                Don’t you have an account?{" "}
                <Link className={styles.singUpStyle} href="/">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
