import { IconButton } from "@chakra-ui/button";
import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { GoCommentDiscussion } from "react-icons/go";

export default function FloatingButton({isComment}) {
const icon  = isComment ? <GoCommentDiscussion/> : <BsPencilSquare />

  return (
    <IconButton
      width="60px"
      height="60px"
      bottom="60px"
      right="20px"
      position="fixed"
      fontSize="2xl"
      isRound
      colorScheme="teal"
      aria-label="write a new entry"
      size="lg"
      icon={icon}
    />
  );
}
