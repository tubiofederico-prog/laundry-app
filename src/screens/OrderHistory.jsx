import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MoreVertical, RotateCcw, Download } from 'lucide-react'

function OrderHistory() {
  const navigate = useNavigate()
  const [orders] = useState([
    {
      id: '#12345',
      service: 'Lavado Completo',
      status: 'Entregado',
      date: '5 de Mayo',
      items: 5,
      price: '12.99',
      statusColor: 'green',
    },
    {
      id: '#12344',
      service: 'Lavado Exprés',
      status: 'Entregado',
      date: '3 de Mayo',
      items: 3,
      price: '8.99',
      statusColor: 'green',
    },
    {
      id: '#12343',
      service: 'Servicio Premium',
      status: 'Entregado',
      date: '1 de Mayo',
      items: 8,
      price: '19.99',
      statusColor: 'green',
    },
    {
      id: '#12342',
      service: 'Planchado',
      status: 'Entregado',
      date: '28 de Abril',
      items: 4,
      price: '4.99',
      statusColor: 'green',
    },
    {
      id: '#12341',
      service: 'Lavado Deportivo',
      status: 'Cancelado',
      date: '25 de Abril',
      items: 6,
      price: '10.99',
      statusColor: 'red',
    },
  ])

  const getStatusBgColor = (color) => {
    switch (color) {
      case 'green':
        return 'bg-green-100 text-green-700'
      case 'red':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="h-screen w-full bg-white overflow-y-auto pb-24">
      <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Historial</h1>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <MoreVertical size={24} className="text-gray-900" />
        </button>
      </div>

      <div className="px-6 py-8 space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="card cursor-pointer hover:shadow-lg transition-all group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <p className="text-sm text-gray-600 font-medium">Pedido {order.id}</p>
                <p className="text-gray-900 font-bold mt-1">{order.service}</p>
              </div>
              <span
                className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${getStatusBgColor(
                  order.statusColor
                )}`}
              >
                {order.status}
              </span>
            </div>

            <div className="space-y-2 py-3 border-t border-gray-100">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{order.items} prendas</span>
                <span>{order.date}</span>
              </div>
              <p className="font-bold text-purple-600">${order.price}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-3 border-t border-gray-100">
              <button className="flex items-center justify-center gap-2 py-2 px-3 bg-purple-50 text-purple-600 font-semibold rounded-lg hover:bg-purple-100 transition-colors text-sm group-hover:shadow-md">
                <RotateCcw size={14} />
                Repetir
              </button>

              <button className="flex items-center justify-center gap-2 py-2 px-3 bg-gray-50 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm group-hover:shadow-md">
                <Download size={14} />
                Recibo
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-20 left-0 right-0 max-w-md mx-auto px-6 pb-4">
        <button
          onClick={() => navigate('/home')}
          className="w-full py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors"
        >
          Nuevo pedido
        </button>
      </div>
    </div>
  )
}

export default OrderHistory
