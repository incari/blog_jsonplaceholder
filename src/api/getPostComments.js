
export function getPostComments(id) {
  const initialComments = JSON.parse(localStorage.getItem(`newComments_${id}`)) || [];
  return fetch(
    ` https://jsonplaceholder.typicode.com/posts/${id}/comments`
  ).then((response) => response.json())
  .then((res) => {
    const response = initialComments.concat(res)
    return response ;
  });
}
