import React, { useState } from "react";
import { Button, Flex, useColorMode, Image } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import logo from "public/logo-placeholder.png"

export default function TopNavbar() {
  const [darkmode, setDarkmode] = useState(
    localStorage.getItem("chakra-ui-color-mode")
  );
  const { toggleColorMode } = useColorMode();

  const handleDarkmode = () => {
    setDarkmode(!darkmode);
    toggleColorMode();
  };

  return (
    <Flex margin="auto" alignItems="center" justifyContent="space-between" maxW="700px">
      <Image h="80px" src={ logo} ></Image>
      <Button onClick={handleDarkmode} fontSize="20">
        {darkmode ? <FaSun /> : <FaMoon />}
      </Button>
    </Flex>
  );
}
