import React, { useContext } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Button, ModalBody, ModalFooter, Textarea } from "@chakra-ui/react";
import { createComment } from "api/createComment";
import { Field, Form, Formik } from "formik";
import LoginContext from "context/LoginContext";

export default function CommentForm({ newComment, onCloseModal, postId  }) {
  const { login } = useContext(LoginContext);

  function validateField(value, field) {
    let error;
    if (!value) {
      error = `${field} is required`;
    }
    return error;
  }

  const submitForm = (values, actions) => {
    values = { ...values, id: postId, userId: login.id || 0};
    createComment(values)
      .then((res) => newComment(res))
      .then(() => actions.setSubmitting(false));
  };

  return (
    <Formik
      initialValues={{ name: login.name, email: login.email, body: "" }}
      onSubmit={(values, actions) => submitForm(values, actions)}
    >
      {(props) => (
        <Form>
          <ModalBody pb={6}>
            <Field
              name="name"
              validate={(value) => validateField(value, "Name")}
            >
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input {...field} id="name" placeholder="name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field
              name="email"
              validate={(value) => validateField(value, "Email")}
            >
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    {...field}
                    id="email"
                    placeholder="email"
                    type="email"
                  />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field
              name="body"
              validate={(value) => validateField(value, "A comment")}
            >
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.body && form.touched.body}>
                  <FormLabel htmlFor="comment">Comment</FormLabel>
                  <Textarea
                    {...field}
                    placeholder="What do you think about it?"
                    id="body"
                  />
                  <FormErrorMessage>{form.errors.body}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="teal"
              isLoading={props.isSubmitting}
              mr={3}
              type="submit"
            >
              Save
            </Button>
            <Button onClick={onCloseModal}>Cancel</Button>
          </ModalFooter>
        </Form>
      )}
    </Formik>
  );
}
