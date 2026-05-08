import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, MapPin, Clock } from 'lucide-react'

function AddressSchedule() {
  const navigate = useNavigate()
  const [address, setAddress] = useState('Calle Principal 123, Apt 4B, Madrid')
  const [time, setTime] = useState('09:00')
  const [selectedDate, setSelectedDate] = useState('today')

  const dates = [
    { id: 'today', label: 'Hoy', value: 'Hoy' },
    { id: 'tomorrow', label: 'Mañana', value: 'Mañana' },
    { id: 'next', label: 'Próximos días', value: 'Próximos' },
  ]

  const times = ['08:00', '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00']

  return (
    <div className="h-screen w-full bg-white overflow-y-auto pb-24">
      <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center gap-4">
        <button
          onClick={() => navigate('/service')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft size={24} className="text-gray-900" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Dirección y hora</h1>
      </div>

      <div className="px-6 py-8 space-y-8">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            <MapPin size={18} className="inline mr-2" />
            Dirección de recogida
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="input-field"
          />
          <p className="text-xs text-gray-500 mt-2">Recogida gratuita en tu domicilio</p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            <Calendar size={18} className="inline mr-2" />
            Fecha de recogida
          </label>
          <div className="grid grid-cols-3 gap-2">
            {dates.map((date) => (
              <button
                key={date.id}
                onClick={() => setSelectedDate(date.id)}
                className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                  selectedDate === date.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {date.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            <Clock size={18} className="inline mr-2" />
            Hora preferida
          </label>
          <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
            {times.map((t) => (
              <button
                key={t}
                onClick={() => setTime(t)}
                className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                  time === t
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-sm text-blue-900 font-semibold">✓ Recogida confirmada</p>
          <p className="text-xs text-blue-800 mt-1">
            Llegaremos a recoger tu ropa en la franja horaria seleccionada
          </p>
        </div>
      </div>

      <div className="fixed bottom-20 left-0 right-0 max-w-md mx-auto px-6 pb-4">
        <button
          onClick={() => navigate('/confirmation')}
          className="btn-primary"
        >
          Continuar
        </button>
      </div>
    </div>
  )
}

function Calendar() {
  return <MapPin size={18} />
}

export default AddressSchedule
