import { useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

export const UserEnter = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/api/users', { username, password, email })
      .then((resp) => {
        alert('Los datos fueron cargados correctamente');
        console.log(resp);
      })
      .catch((error) => {
        alert('No anda');
        console.log(error);
      })
  }

  return (
    <>
      <h1>Add Usuarios</h1>
      <form action="" onSubmit={handleSubmit}>
        <Container>
        <TextField type="text"
                  label='username'
                  variant='outlined' 
                  value={username} 
                  onChange={(event) => setUsername(event.target.value)} />
        
        <TextField type="password" label='password' variant='outlined' value={password} onChange={(event) => setPassword(event.target.value)} />
        
        <TextField type="email" label='email' variant='outlined' value={email} onChange={(event) => setEmail(event.target.value)} />

        <Button type='submit' variant="contained">Enviar</Button>
        </Container>
      </form>

    
    </>
  );
}
