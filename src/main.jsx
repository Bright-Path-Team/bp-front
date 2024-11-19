import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error/index.jsx'
import Home from './routes/Home/index.jsx'
import GeracaoEnergia from './routes/GeracaoEnergia/index.jsx'
import Login from './routes/Login/index.jsx'
import CriarConta from './routes/CriarConta/index.jsx'
<<<<<<< HEAD
import AreaUsuario from './routes/AreaUsuario/index.jsx'
=======
import Sobre from './routes/Sobre/index.jsx'
>>>>>>> 778d8bfd252780e233377f6886214a5bcf08d739

/*Criando a função createBrowserRouter*/
const router = createBrowserRouter([
  {
    // Criando a rota pai
    path: '/',
    element: <App/>,
    errorElement: <Error/>,

    // Criando as rotas filhas
    children: [
      { path: '/', element: <Home/>},
      { path: '/geracao-energia', element: <GeracaoEnergia/>},
      { path: '/login', element: <Login/>},
      { path: '/criar-conta', element: <CriarConta/>},
<<<<<<< HEAD
      { path: '/area-usuario', element: <AreaUsuario/>},
=======
      { path: '/sobre', element: <Sobre/>},
>>>>>>> 778d8bfd252780e233377f6886214a5bcf08d739
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
