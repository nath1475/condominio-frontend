import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Login from './pages/login';
import CadastrarMorador from './pages/cadastrarmorador';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrarmorador" element={<CadastrarMorador />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;