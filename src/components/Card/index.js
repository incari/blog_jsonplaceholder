import React, { useEffect, useState } from "react";
import { Heading, Text, Link, LinkBox, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Card({
  body,
  comments,
  id,
  isComment = false,
  name = "",
  title,
  userId,
}) {
  const [isPost, setIsPost] = useState(true);
  
  useEffect(() => {
    setIsPost(isComment ? false : true);
  }, [isComment]);

  return (
    <LinkBox margin={10} as="article" position="relative"  p="5" borderWidth="1px" rounded="md" >
      <Link
        _hover={{ textDecoration: "none" }}
        as={RouterLink}
        to={`/post/${id}`}
      >
        <Heading size="lg">{title}</Heading>
        <Text my="2" fontSize="lg">
          {body}
        </Text>
        <Flex alignItems="center" justifyContent="flex-end">
          {isPost ? (
            <Heading size="sm" float="right">
              {comments} comments
            </Heading>
          ) : (
            ""
          )}
        </Flex>
      </Link>

      <Link
        position="absolute"
        bottom="18px"
        as={RouterLink}
        to={`/user/${userId}`}
      >
        <Heading pr="5" size="sm">
          {name}
        </Heading>
      </Link>
    </LinkBox>
  );
}

export default React.memo(Card)