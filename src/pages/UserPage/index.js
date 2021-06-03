import { Button } from "@chakra-ui/button";
import { Center, Link, Heading, Box, Container } from "@chakra-ui/layout";
import { getUserPost } from "api/getUserPost";
import { getUsers } from "api/getUsers";
import Card from "components/Card";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Link as RouterLink } from "react-router-dom";
export default function UserPage() {
  const { userId } = useParams();
  const [userPost, setUserPost] = useState([]);
  const [userExist, setUserExist] = useState(false);
  
  useEffect(() => {
    const postPromise = getUserPost(userId);
    const userListPromise = getUsers();

    function getName(postItem, userList) {
      const { name } = userList.find((user) => user.id === postItem.userId);
      return name;
    }

    Promise.all([postPromise, userListPromise]).then(([postList, userList]) => {
      const postMerged = postList.map((postItem) => ({
        name: getName(postItem, userList),
        ...postItem,
      }));
      setUserPost(postMerged);
      setUserExist(postMerged.some((user) => user.userId === parseInt(userId)));
    });
  }, [userId]);

  return (
    <>
      {!userExist ? (
        <Center height="60vh">
          <Box>
            <Heading size="md" mb={5}>
              Sorry... We can't find an user with this id
            </Heading>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
              <Button colorScheme="teal">Return to home</Button>
            </Link>
          </Box>
        </Center>
      ) : (
        <Container maxW="700px">
          <Heading mb="5">Logged-in as {userPost[0].name}</Heading>
          <Heading size="lg">My lastest posts</Heading>

          {userPost.map(({ body, id, title }) => (
            <Card
              key={id}
              body={body}
              id={id}
              title={title}
              userId={userId}
              isComment={true}
            />
          ))}
        </Container>
      )}
    </>
  );
}
