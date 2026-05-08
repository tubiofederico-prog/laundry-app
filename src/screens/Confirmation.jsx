import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, MapPin, Clock, CheckCircle } from 'lucide-react'

function Confirmation({ setCurrentOrder }) {
  const navigate = useNavigate()
  const [promoCode, setPromoCode] = useState('')

  const order = {
    service: 'Lavado Completo',
    address: 'Calle Principal 123, Apt 4B',
    date: 'Hoy',
    time: '09:00',
    basePrice: 12.99,
    delivery: 2.00,
    discount: 0,
  }

  const total = order.basePrice + order.delivery - order.discount

  const handlePayment = () => {
    setCurrentOrder({
      id: '#12346',
      service: order.service,
      total,
      date: new Date().toLocaleDateString(),
      status: 'Procesando pago...',
    })
    navigate('/payment')
  }

  return (
    <div className="h-screen w-full bg-white overflow-y-auto pb-24">
      <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center gap-4">
        <button
          onClick={() => navigate('/address')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft size={24} className="text-gray-900" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Resumen pedido</h1>
      </div>

      <div className="px-6 py-8 space-y-6">
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-purple-700 font-semibold">Servicio</p>
              <p className="text-2xl font-bold text-purple-900 mt-1">{order.service}</p>
            </div>
            <CheckCircle size={28} className="text-purple-600" />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center text-gray-700">
            <MapPin size={20} className="mr-3 text-gray-400" />
            <div>
              <p className="text-sm text-gray-600">Recogida</p>
              <p className="font-semibold">{order.address}</p>
            </div>
          </div>

          <div className="flex items-center text-gray-700">
            <Clock size={20} className="mr-3 text-gray-400" />
            <div>
              <p className="text-sm text-gray-600">Fecha y hora</p>
              <p className="font-semibold">{order.date} a las {order.time}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 space-y-3 border border-gray-200">
          <div className="flex justify-between">
            <p className="text-gray-600">Servicio</p>
            <p className="font-semibold text-gray-900">${order.basePrice.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600">Envío y recogida</p>
            <p className="font-semibold text-gray-900">${order.delivery.toFixed(2)}</p>
          </div>
          <div className="border-t border-gray-200 pt-3 flex justify-between">
            <p className="font-bold text-gray-900">Total</p>
            <p className="text-2xl font-bold text-purple-600">${total.toFixed(2)}</p>
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-900">
            Código promocional (opcional)
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="PROMO2024"
              className="input-field flex-1"
            />
            <button className="px-4 py-3 bg-gray-200 text-gray-900 font-semibold rounded-xl hover:bg-gray-300 transition-colors">
              Aplicar
            </button>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="text-sm text-green-900 font-semibold">✓ Cobertura garantizada</p>
          <p className="text-xs text-green-800 mt-1">
            Tu ropa llegará limpia y en perfecto estado o te devolvemos el dinero
          </p>
        </div>
      </div>

      <div className="fixed bottom-20 left-0 right-0 max-w-md mx-auto px-6 pb-4">
        <button
          onClick={handlePayment}
          className="btn-primary"
        >
          Confirmar y pagar
        </button>
      </div>
    </div>
  )
}

export default Confirmation
