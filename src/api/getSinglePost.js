export function getSinglePost(id) {
  return fetch(
    ` https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((response) => response.json());
}
