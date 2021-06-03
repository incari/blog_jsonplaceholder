export function getComments() {
  return fetch(` https://jsonplaceholder.typicode.com/comments`)
    .then((response) => response.json())

}
