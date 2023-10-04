import { useState, useEffect } from 'react';
import { getUsers } from '../services/api';

export function useUsers() {

const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return users;

}



