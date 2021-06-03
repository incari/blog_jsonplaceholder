import React from "react";
import { FormControl } from "@chakra-ui/form-control";
import { Textarea } from "@chakra-ui/react"
import { Input } from "@chakra-ui/input";

export default function PostForm({ initialRef }) {
  return (
    <>
      <FormControl>
        <Input  placeholder="Post title" />
      </FormControl>

      <FormControl mt={4}>
        <Textarea placeholder="What inspires you today?" />
      </FormControl>
    </>
  );
}
