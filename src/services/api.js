const API_URL = 'http://localhost:3000/api/users'

export async function getUsers() {
  const resp = await fetch(API_URL);
  return resp.json();
}


export async function createUser(data) {
  const resp = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(data)
  });

  return resp.json();
}

export const deleteUser = async (data,id) => {

  const resp = await fetch(`${API_URL}/${id}`,{
    method:'DELETE',
    body: JSON.stringify(data)
  })

  return resp.json()

}

const API_URLposts = 'http://localhost:3000/api/posts'
export async function getPosts() {
  const resp = await fetch(API_URLposts);
  return resp.json();
}


