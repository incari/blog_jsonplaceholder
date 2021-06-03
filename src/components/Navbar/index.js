import React, { useContext } from "react";
import { Box, Flex, IconButton, Link, Container } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import LoginContext from "context/LoginContext";

import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";

export default function Navbar() {
  const { login } = useContext(LoginContext);

  const { id } = login;
  const routControl = id ? `/user/${id}` : "/config";

  return (
    <Box
      position="fixed"
      justifyItems="center"
      bottom="0"
      backgroundColor="teal"
      w="100%"
    >
      <Container w="100%">
        <Flex justifyContent="space-between" maxW="700px">
          <Link
            _hover={{ textDecoration: "none" }}
            as={RouterLink}
            to={routControl}
          >
            <IconButton
              fontSize="2xl"
              colorScheme="teal"
              aria-label="write a new entry"
              size="lg"
              icon={<FaUser />}
            />
          </Link>

          <Link _hover={{ textDecoration: "none" }} as={RouterLink} to={`/`}>
            <IconButton
              fontSize="2xl"
              colorScheme="teal"
              aria-label="write a new entry"
              size="lg"
              icon={<AiFillHome />}
            />
          </Link>

          <Link
            _hover={{ textDecoration: "none" }}
            as={RouterLink}
            to={`/config`}
          >
            <IconButton
              fontSize="2xl"
              colorScheme="teal"
              aria-label="write a new entry"
              size="lg"
              icon={<BsGearFill />}
            />
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
