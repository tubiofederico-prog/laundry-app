import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, Clock, ChevronRight, Sparkles } from 'lucide-react'

function Home() {
  const navigate = useNavigate()
  const [lastOrder] = useState({
    id: '#12345',
    status: 'Entregado',
    date: '5 de Mayo',
    items: 5,
  })

  return (
    <div className="h-screen w-full bg-gradient-to-b from-white to-gray-50 overflow-y-auto pb-24">
      <div className="px-6 pt-8">
        <div className="mb-8">
          <p className="text-gray-600">Hola,</p>
          <h1 className="text-3xl font-bold text-gray-900">Carolina</h1>
        </div>

        <button
          onClick={() => navigate('/service')}
          className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-6 px-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-between group"
        >
          <div className="text-left">
            <p className="text-sm opacity-90">Solicitar</p>
            <p className="text-2xl">Servicio</p>
          </div>
          <Sparkles size={32} className="group-hover:rotate-12 transition-transform" />
        </button>
      </div>

      <div className="px-6 mt-12">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Último pedido</h2>

        <div className="card cursor-pointer hover:shadow-lg transition-all" onClick={() => navigate('/tracking')}>
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-gray-600">Pedido {lastOrder.id}</p>
              <p className="text-gray-900 font-semibold mt-1">{lastOrder.status}</p>
            </div>
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
              {lastOrder.status}
            </span>
          </div>

          <div className="space-y-2 pt-4 border-t border-gray-100">
            <div className="flex items-center text-gray-600 text-sm">
              <Clock size={16} className="mr-2" />
              {lastOrder.date} • {lastOrder.items} prendas
            </div>
          </div>

          <button className="w-full mt-4 py-2 px-4 bg-purple-50 text-purple-600 font-semibold rounded-lg hover:bg-purple-100 transition-colors text-sm">
            Ver detalles
          </button>
        </div>
      </div>

      <div className="px-6 mt-12">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Accesos rápidos</h2>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => navigate('/service')}
            className="card cursor-pointer text-center py-6 hover:shadow-lg transition-all"
          >
            <p className="text-2xl mb-2">🏃</p>
            <p className="font-semibold text-gray-900 text-sm">Pedido Rápido</p>
          </button>

          <button
            onClick={() => navigate('/history')}
            className="card cursor-pointer text-center py-6 hover:shadow-lg transition-all"
          >
            <p className="text-2xl mb-2">📋</p>
            <p className="font-semibold text-gray-900 text-sm">Historial</p>
          </button>

          <button className="card cursor-pointer text-center py-6 hover:shadow-lg transition-all">
            <p className="text-2xl mb-2">🎁</p>
            <p className="font-semibold text-gray-900 text-sm">Promociones</p>
          </button>

          <button className="card cursor-pointer text-center py-6 hover:shadow-lg transition-all">
            <p className="text-2xl mb-2">❓</p>
            <p className="font-semibold text-gray-900 text-sm">Soporte</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
