
import { RouterProvider } from 'react-router'
import './App.css'
import router from './Routes/Router'
import { use } from 'react'
import AuthContext from './Context/AuthContext'
import Loader from './Pages/Loader/Loader'

function App() {
const{loading}=use(AuthContext);

if(loading){
  return <Loader></Loader>
}

return <RouterProvider router={router}></RouterProvider>
         
  
  
}

export default App
