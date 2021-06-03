export function createComment({ body, email, id, name,userId }) {
  const initialComments =
    JSON.parse(localStorage.getItem(`newComments_${id}`)) || [];
  let bodyContent = JSON.stringify({
    body: body,
    email: email,
    name: name,
    userId: userId 
  });
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    method: "POST",
    body: bodyContent,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((res) => {
      const response = res;
      initialComments.push(res);
      localStorage.setItem(
        `newComments_${id}`,
        JSON.stringify(initialComments)
      );
      return response;
    });
}
