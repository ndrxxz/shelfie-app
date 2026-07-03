import { Image, useColorScheme } from "react-native";
import React from "react";
import { LogoDark, LogoLight } from "@/assets/img";

const ThemedLogo = ({ ...props }) => {
  const colorScheme = useColorScheme();
  const logo = colorScheme === "dark" ? LogoDark : LogoLight;

  return (
    <Image source={logo} {...props} />
  );
};

export default ThemedLogo;
