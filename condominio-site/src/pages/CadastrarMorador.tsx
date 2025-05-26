import React from 'react'
import { Button } from '../components/ui/button'

export default function CadastrarMorador() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Cadastrar Morador</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Nome completo" className="w-full p-2 border rounded" />
        <input type="email" placeholder="E-mail" className="w-full p-2 border rounded" />
        <input type="text" placeholder="Apartamento" className="w-full p-2 border rounded" />
        <Button>Cadastrar</Button>
      </form>
    </div>
  )
}
