import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Check } from 'lucide-react'

function SelectService() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)

  const services = [
    {
      id: 1,
      name: 'Lavado Completo',
      description: 'Incluye lavado, secado y planchado',
      price: '12,99€',
      icon: '👕',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      name: 'Lavado Exprés',
      description: 'Solo lavado y secado',
      price: '8,99€',
      icon: '⚡',
      color: 'from-yellow-500 to-orange-600',
    },
    {
      id: 3,
      name: 'Planchado',
      description: 'Planchado profesional',
      price: '4,99€',
      icon: '🔥',
      color: 'from-red-500 to-red-600',
    },
    {
      id: 4,
      name: 'Lavado Delicado',
      description: 'Para prendas sensibles',
      price: '15,99€',
      icon: '✨',
      color: 'from-purple-500 to-pink-600',
    },
    {
      id: 5,
      name: 'Lavado Deportivo',
      description: 'Especializado en ropa deportiva',
      price: '10,99€',
      icon: '💪',
      color: 'from-green-500 to-teal-600',
    },
    {
      id: 6,
      name: 'Servicio Premium',
      description: 'Incluye todo + aroma premium',
      price: '19,99€',
      icon: '👑',
      color: 'from-amber-500 to-orange-600',
    },
  ]

  const handleContinue = () => {
    if (selected) {
      navigate('/address')
    }
  }

  return (
    <div className="h-screen w-full bg-white overflow-y-auto pb-24">
      <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center gap-4">
        <button
          onClick={() => navigate('/home')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft size={24} className="text-gray-900" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Selecciona servicio</h1>
      </div>

      <div className="px-6 py-8 space-y-4">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => setSelected(service.id)}
            className={`w-full transition-all transform hover:scale-105 ${
              selected === service.id
                ? 'ring-2 ring-purple-600 shadow-lg'
                : 'border border-gray-200 hover:border-gray-300'
            } rounded-2xl p-4 bg-white`}
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-3xl">{service.icon}</span>
              {selected === service.id && (
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <Check size={16} className="text-white" />
                </div>
              )}
            </div>

            <div className="text-left">
              <h3 className="font-bold text-gray-900 text-lg">{service.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{service.description}</p>
              <p className="text-lg font-bold text-purple-600 mt-2">{service.price}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="fixed bottom-20 left-0 right-0 max-w-md mx-auto px-6 pb-4">
        <button
          onClick={handleContinue}
          disabled={!selected}
          className={`btn-primary ${!selected ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Continuar
        </button>
      </div>
    </div>
  )
}

export default SelectService
