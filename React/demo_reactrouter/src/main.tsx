import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import { PaginaNaoEncontrada } from './components/PaginaNaoEncontrada';
import { PaginaPrincipal } from './components/PaginaPrincipal';
import { PaginaSobre } from './components/PaginaSobre';
import { PaginaUsuarios } from './components/PaginaUsuarios';
import { PaginaDetalhesUsuario } from './components/PaginaDetalhesUsuario';

ReactDOM.createRoot(document.getElementById('root')!).render(
 <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<PaginaPrincipal />} />
          <Route path='sobre' element={<PaginaSobre />} />
          <Route path='usuarios' element={<PaginaUsuarios />} />
          <Route path=':usuarioId' element={<PaginaDetalhesUsuario />} />
        </Route>
        <Route path='*' element={<PaginaNaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
