import { getUsers } from "api/getUsers";
import { getPosts } from "api/getPosts";
import { getSinglePost } from "api/getSinglePost";
import { getComments } from "api/getComments";
import { getPostComments } from "api/getPostComments";
import { createComment } from "api/createComment";

describe("API calls from jsonplaceholder.com", () => {
  test("getUsers Has 10 users", async () => {
    const userCall = await getUsers();
    expect(userCall.length).toEqual(10);
  });

  test("getPosts Has 100 post", async () => {
    const userCall = await getPosts();
    expect(userCall.length).toEqual(100);
  });

  test("getSingle post with id=1", async () => {
    const userCall = await getSinglePost(1);
    const expectedJson = {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    };
    expect(userCall).toEqual(expectedJson);
  });

  test("getSingle post with id over 100 return empty object", async () => {
    const userCall = await getSinglePost(105);
    const expectedJson = {};
    expect(userCall).toEqual(expectedJson);
  });

  test("getPostComments with id = 1 has 5 comments", async () => {
    const userCall = await getPostComments(1);
    expect(userCall.length).toEqual(5);
  });
  test("getPostComments with id = 105 return empty array", async () => {
    const userCall = await getPostComments(105);
    expect(userCall).toEqual([]);
  });

  test("Has 500 comments", async () => {
    const userCall = await getComments();
    expect(userCall.length).toEqual(500);
  });
});

describe("Sending data to jsonplaceholder", () => {
  test("Creating new comment", async () => {
    const testObject = {
      body: "testing",
      email: "Shanna@melissa.tv",
      name: "Ervin Howell",
      userId: "2",
      id: "2",
    };
    const expectedJson = {
      ...testObject,
      postId:testObject.id,
      id: 501,
    };
    const sendingData = await createComment(testObject);
    expect(sendingData).toEqual(expectedJson);
  });

  test("Sending empty data", async () => {
    const testObject = {
      body: "",
      email: "",
      name: "",
      userId: "",
      id: "2",
    };
    const expectedJson = {
      ...testObject,
      postId:testObject.id,
      id: 501,
    };
    const sendingData = await createComment(testObject);
    expect(sendingData).toEqual(expectedJson);
  });

  test("Sending null data", async () => {
    const testObject = {
      body: null,
      email: null,
      name: null,
      userId: null,
      id: "2",
    };
    const expectedJson = {
      ...testObject,
      postId:testObject.id,
      id: 501,
    };
    const sendingData = await createComment(testObject);
    expect(sendingData).toEqual(expectedJson);
  });
});
