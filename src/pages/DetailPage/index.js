import { getPostComments } from "api/getPostComments";
import { getSinglePost } from "api/getSinglePost";
import DetailPost from "components/DetailPost";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Heading } from "@chakra-ui/react";
import { Box, Container } from "@chakra-ui/layout";

import Modal from "components/Modal";
import CommentForm from "components/CommentForm";

export default function DetailPage() {
  const { id } = useParams();
  const [singlePost, setSinglePost] = useState({});
  const [comments, setComments] = useState([]);
  const [submited, setSubmited] = useState(false);
  const [closeModal, setCloseModal] = useState(false);

  const { body, title } = singlePost;

  const deleteLocalComments = () => {
    localStorage.removeItem(`newComments_${id}`);
    getPostComments(id).then((res) => setComments(res));
  };
  useEffect(() => {
    getSinglePost(id).then((res) => setSinglePost(res));
  }, [id]);

  useEffect(() => {
    getPostComments(id).then((res) => setComments(res));
  }, [id]);

  const onSubmit = () => {
    setSubmited(true);
  };

  const newComment = (data) => {
    setSubmited(false);
    setComments([data, ...comments]);
    onCloseModal();
  };

  const onCloseModal = () => {
    setCloseModal(true);
    setTimeout(() => {
      setCloseModal(false);
    }, 0);
  };

  return (
    <Container maxW="700px">
      <Modal
        title={"Make a new comment"}
        isComment={true}
        closeModal={closeModal}
      >
        <CommentForm
          callback={onSubmit}
          submited={submited}
          newComment={newComment}
          onCloseModal={onCloseModal}
          postId={id}
        ></CommentForm>
      </Modal>
      <Heading size="xl"> Post </Heading>
      <DetailPost body={body} title={title} />
      <Heading size="lg">
        Comments
        <Button colorScheme="red" onClick={deleteLocalComments}>
          Delete new comments
        </Button>
      </Heading>
      {comments.map(({ body, email, name, id }) => (
        <Box key={id} boxShadow={"2px 2px gray"} padding={"0.5"} margin={3} rounded="md">
          <DetailPost
            key={id}
            isComment={true}
            body={body}
            title={""}
            name={`${name} ${email}`}
          />
        </Box>
      ))}
    </Container>
  );
}
