import Card from "components/Card";
import React, { useEffect, useState } from "react";
import { getPosts } from "api/getPosts";
import { Container } from "@chakra-ui/layout";
import { getUsers } from "api/getUsers";
import { getComments } from "api/getComments";

export default function Home() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const postListPromise = getPosts();
    const userListPromise = getUsers();
    const commentsListPromise = getComments();

    function commentsCounter(postId, commentList) {
      let totalComments = commentList.filter((comment) => comment.postId===postId.id)
      return totalComments.length
    }

    Promise.all([postListPromise, userListPromise, commentsListPromise]).then(
      ([postList, userList, commentsList]) => {
        const postMerged = postList.map((postItem) => ({
          ...userList.find((user) => user.id === postItem.userId),
          comments: commentsCounter(postItem, commentsList),
          ...postItem,
        }));
        setPost(postMerged);
      }
    );
  }, []);


  return (
    <>
      <Container maxW="700px">

        {post.map(({ body, comments, id, title, name, userId }) => (
          <Card
            key={id}
            body={body}
            id={id}
            title={title}
            userId={userId}
            name={name}
            comments={comments}
          />
        ))}
      </Container>
    </>
  );
}
