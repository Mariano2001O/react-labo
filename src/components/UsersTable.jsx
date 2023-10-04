// components/UserTable.js 
import axios from 'axios';
import { useUsers } from '../hooks/useUsers';
import Button from '@material-ui/core/Button'
// import { Table } from '@material-ui/core';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';




const deleteUserButton = (userid) => {
    axios.delete(`http://localhost:3000/api/users/${userid}`)
    .then((resp) => {
      alert('usuario eliminado');
      console.log(resp);
    })
    .catch((error) => {
      alert('No se pudo eliminar el usuario');
      console.log(error);
    })
}
const verPostsButton = (userid) => {
  axios.get(`http://localhost:3000/api/users/${userid}`)
  .then((resp) => {
    alert('posteos cargados');
    console.log(resp);
  })
  .catch((error) => {
    alert('No se pudieron cargar posteos del usuario');
    console.log(error);
  })
}

function UserTable() {
  const lista = useUsers();
  console.log(lista);
  const users = lista.users

  if (lista.length === 0) {
    return (
      <h1>Cargando usuarios</h1>
    )
  } else {
    
    return (
      
      <TableContainer>
      
      <h1>Usuarios</h1>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>accion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.id}</TableCell>
                <TableCell><Button  variant="contained" color="primary" onClick={()=>verPostsButton(user.id)}>Ver Posts</Button></TableCell>
                <TableCell><Button variant="contained" color="secondary"onClick={()=>deleteUserButton(user.id)}>Eliminar</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }

  /**/
}

export default UserTable