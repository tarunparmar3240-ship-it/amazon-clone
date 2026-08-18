import React from "react";
import NavbarBanner from "./NavbarBanner/NavbarBanner";
import NavbarBelt from "./NavbarBelt/NavbarBelt";
import AuthForm from "../AuthForm/AuthForm";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  // const localToken = localStorage.getItem("accessToken");
  // const isLogged = localToken;
  const isLogged = token;

  return (
    <div>
      <NavbarBelt />
      <NavbarBanner />
      {!isLogged ? <AuthForm /> : null}
    </div>
  );
};

export default Navbar;
