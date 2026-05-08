import React, { useState, useEffect } from 'react'
import { ArrowLeft, MapPin, Phone, MessageCircle, CheckCircle, Clock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Tracking({ order }) {
  const navigate = useNavigate()
  const [status, setStatus] = useState(0)
  const [deliveryPerson] = useState({
    name: 'Juan García',
    rating: 4.9,
    vehicle: 'Toyota Yaris Plateado',
    phone: '+34 666 123 456',
  })

  const statuses = [
    { label: 'Confirmado', icon: '✓' },
    { label: 'En camino a recoger', icon: '🚗' },
    { label: 'Recogiendo', icon: '📦' },
    { label: 'En proceso', icon: '🌀' },
    { label: 'En camino a entregar', icon: '🚚' },
    { label: 'Entregado', icon: '✓' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus((prev) => Math.min(prev + 1, statuses.length - 1))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-screen w-full bg-white overflow-y-auto pb-24">
      <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center gap-4">
        <button
          onClick={() => navigate('/home')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft size={24} className="text-gray-900" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Rastreo en vivo</h1>
      </div>

      <div className="px-6 py-8 space-y-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-blue-900">Tu ropa está</h2>
            <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
              {statuses[status].label}
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center text-blue-900">
              <MapPin size={18} className="mr-2" />
              <p className="text-sm">A 2.3 km de tu hogar</p>
            </div>
            <div className="flex items-center text-blue-900">
              <Clock size={18} className="mr-2" />
              <p className="text-sm">Llegará en ~8 minutos</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {statuses.map((s, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                    index <= status
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {index <= status ? '✓' : index + 1}
                </div>
                {index < statuses.length - 1 && (
                  <div
                    className={`w-1 h-12 mt-2 ${
                      index < status ? 'bg-purple-600' : 'bg-gray-200'
                    }`}
                  ></div>
                )}
              </div>
              <div className="flex-1 pt-2">
                <p
                  className={`font-semibold ${
                    index <= status ? 'text-gray-900' : 'text-gray-400'
                  }`}
                >
                  {s.label}
                </p>
                {index === status && (
                  <p className="text-xs text-purple-600 font-semibold mt-1">
                    En progreso...
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
          <h3 className="font-bold text-gray-900">Conductor</h3>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
              JG
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">{deliveryPerson.name}</p>
              <p className="text-sm text-gray-600">
                ⭐ {deliveryPerson.rating} • {deliveryPerson.vehicle}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 py-2 px-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Phone size={16} className="text-purple-600" />
              <span className="text-sm font-semibold">Llamar</span>
            </button>

            <button className="flex items-center justify-center gap-2 py-2 px-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <MessageCircle size={16} />
              <span className="text-sm font-semibold">Chat</span>
            </button>
          </div>
        </div>

        {status === statuses.length - 1 && (
          <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-6 text-center space-y-4">
            <div className="text-5xl">🎉</div>
            <h3 className="font-bold text-green-900 text-lg">¡Tu ropa llegó!</h3>
            <p className="text-sm text-green-800">
              Perfectamente lavada, secada y planchada
            </p>
            <button
              onClick={() => navigate('/home')}
              className="btn-primary"
            >
              Volver al inicio
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Tracking
