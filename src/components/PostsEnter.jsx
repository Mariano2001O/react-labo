import { useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

export const PostEnter = () => {

  const [descripcion, setDescripcion] = useState('');
  const [fecha, setFecha] = useState('');
  const [imagen, setImagen] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [userId, setUserId] = useState('');


  const handleSubmit2 = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/api/posts', { descripcion, fecha, imagen, ubicacion, userId })
      .then((resp) => {
        alert('Los posteos fueron cargados correctamente');
        console.log(resp);
      })
      .catch((error) => {
        alert('No anda el carga posteos');
        console.log(error);
      })
  }


  return (
    <>
  
      <h1>Add Posteos</h1>
      <form action="" onSubmit={handleSubmit2}>
        <Container >

        <TextField type="text" label='descripcion' variant='outlined' value={descripcion} onChange={(event) => setDescripcion(event.target.value)} />
        
        <TextField type="text" label='fecha' variant='outlined' value={fecha} onChange={(event) => setFecha(event.target.value)} />
       
        <TextField type="text" label='imagen' variant='outlined' value={imagen} onChange={event => setImagen(event.target.value)} />
        
        <TextField type="text" label='ubicacion' variant='outlined' value={ubicacion} onChange={event => setUbicacion(event.target.value)} />
       
        <TextField type="number" label='userId' variant='outlined' value={userId} onChange={event => setUserId(event.target.value)} />
        
        <Button type='submit' variant="contained">Enviar</Button>

        </Container>

      </form>
    </>
  );
}
