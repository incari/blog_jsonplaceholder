import React from "react";
import { Heading, Text, Link, Flex, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function DetailPost({
  body,
  id,
  isComment = false,
  name = "",
  title,
  userId,
}) {

  return (
    <Box margin={10} as="article" >
      <Heading size="lg">{title}</Heading>
      <Text my="2" fontSize="lg">
        {body}
      </Text>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          {isComment ? (
            <Heading pr="5" size="sm">
              {name}
            </Heading>
          ) : (
            <Link as={RouterLink} to={`/user/${userId}`}>
              <Heading pr="5" size="sm">
                {name}
              </Heading>
            </Link>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
