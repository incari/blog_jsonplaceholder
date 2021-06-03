import React, { useContext } from "react";
import LoginContext from "context/LoginContext";
import { useHistory } from "react-router";

import { Heading, LinkBox, Text } from "@chakra-ui/react";

function UserCard({ user }) {
  const { name, company } = user;
  const { bs, catchPhrase, name: companyName } = company;
  const { setLoginLocal } = useContext(LoginContext);
  const history = useHistory();

  const loginUser = () => {
    setLoginLocal(user);
    history.push(`/`);
  };

  return (
    <LinkBox
      _hover={{ cursor: "pointer" }}
      maxHeight="200px"
      as="article"
      p="5"
      borderWidth="1px"
      rounded="md"
      onClick={loginUser}
      m={2}
    >
      <Heading size="md" my={3}>
        {name}
      </Heading>
      <Heading size="xs">Company: {companyName}</Heading>
      <Text fontSize=".8em">{catchPhrase}</Text>
      <Text fontSize=".8em">{bs}</Text>
    </LinkBox>
  );
}

export default  React.memo(UserCard)