export function getUserPost(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(
    (response) => response.json()
  );
}
