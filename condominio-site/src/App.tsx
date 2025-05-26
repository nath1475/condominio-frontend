import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CadastrarMorador from './pages/cadastrarmorador';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/cadastrarmorador" element={<CadastrarMorador />} />
      </Routes>
    </BrowserRouter>
  );
}