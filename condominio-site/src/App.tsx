import React from 'react'
import { Button } from './components/ui/button'
import CadastrarMorador from './pages/CadastrarMorador'

export default function App() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold mb-6">Condomínio</h1>
        <nav className="space-y-4">
          <a href="#" className="block hover:underline">Dashboard</a>
          <a href="#" className="block hover:underline">Moradores</a>
          <a href="#" className="block hover:underline">Financeiro</a>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">
        <CadastrarMorador />
      </main>
    </div>
  )
}
