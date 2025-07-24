"use client";

import React from "react";
import Header from "@/components/Header/Header";
import { RecoilRoot } from "recoil";
import Player from "@/components/Player/Player";
import Footer from "@/components/mobileAndTabletFooter/footer";

interface AuthorisedLayoutProps {
  children: React.ReactNode;
}

const AuthorisedLayot: React.FC<AuthorisedLayoutProps> = ({ children }) => {
  return (
    <>
      <RecoilRoot>
        <Header />
        {children}
        <Player />
        <Footer />
      </RecoilRoot>
    </>
  );
};

export default AuthorisedLayot;
