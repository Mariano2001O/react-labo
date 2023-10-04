// components/UserTable.js 
import axios from 'axios';
import usePosts from '../hooks/usePosts';
import Button from '@material-ui/core/Button'
import { Table } from '@material-ui/core';


//esto podria ir en usePosts
const deletePostButton = (postid) => {
  axios.delete(`http://localhost:3000/api/posts/${postid}`)
    .then((resp) => {
      alert('Posteo eliminado');
      console.log(resp);
    })
    .catch((error) => {
      alert('No se pudo eliminar el posteo');
      console.log(error);
    })
}

function PostTable() {

  const lista = usePosts();
  console.log(lista);
  const posts = lista.posts

  if (lista.length === 0) {
    return (
      <h1>Cargando Posteos</h1>
    )
  } else {
    return (
      <>
            <h1>Publicaciones</h1>

      <Table>
        <thead>
          <tr>
            <th>descripcion</th>
            <th>ubicacion</th>
            <th>fecha</th>
            <th>ID usuario</th>
            <th>accion</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.descripcion}</td>
              <td>{post.ubicacion}</td>
              <td>{post.fecha}</td>
              <td>{post.userId}</td>
              <td><Button variant="contained" color="secondary" onClick={()=>deletePostButton(post.id)}>Eliminar</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      
      </>
    
      
    )
  }

}

export default PostTable