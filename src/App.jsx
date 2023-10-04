import UserContextProvider from './context/UserContext';

import PostContextProvider from './context/PostContext';

import UserTable from './components/UsersTable'
import { UserEnter } from './components/UsersEnter';

import PostTable from './components/PostsTable';
import { PostEnter } from './components/PostsEnter';

import { Card } from '@material-ui/core';

function App() {
  return (
    <>
    <UserContextProvider>

    <Card variant="outlined">
<UserEnter />
<UserTable />
</Card>

</UserContextProvider>

<PostContextProvider>

<Card variant="outlined">
<PostEnter/>
<PostTable />
</Card>


</PostContextProvider>
    </>
    
  )
}

export default App