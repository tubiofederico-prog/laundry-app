import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  User,
  MapPin,
  CreditCard,
  Bell,
  HelpCircle,
  LogOut,
  ChevronRight,
  Settings,
} from 'lucide-react'

function Profile({ onLogout }) {
  const navigate = useNavigate()
  const [profile] = useState({
    name: 'Carolina García',
    email: 'carolina@example.com',
    phone: '+34 600 123 456',
    address: 'Calle Principal 123, Madrid',
    balance: '15.50',
  })

  const handleLogout = () => {
    onLogout()
    navigate('/')
  }

  const MenuItem = ({ icon: Icon, label, value, onClick }) => (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-100"
    >
      <div className="flex items-center gap-3">
        <Icon size={24} className="text-purple-600" />
        <div className="text-left">
          <p className="font-semibold text-gray-900">{label}</p>
          {value && <p className="text-sm text-gray-500">{value}</p>}
        </div>
      </div>
      <ChevronRight size={20} className="text-gray-400" />
    </button>
  )

  return (
    <div className="h-screen w-full bg-white overflow-y-auto pb-24">
      <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white px-6 py-12 space-y-4">
        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
          <User size={32} />
        </div>

        <div>
          <h1 className="text-2xl font-bold">{profile.name}</h1>
          <p className="text-purple-100 mt-1">{profile.email}</p>
        </div>

        <div className="bg-white bg-opacity-10 rounded-lg p-3 backdrop-blur">
          <p className="text-xs text-purple-100">Saldo disponible</p>
          <p className="text-2xl font-bold mt-1">${profile.balance}</p>
        </div>
      </div>

      <div className="mt-8">
        <div className="px-6 py-3 bg-gray-50">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
            Mi Información
          </p>
        </div>

        <MenuItem
          icon={User}
          label="Perfil"
          value={profile.phone}
        />

        <MenuItem
          icon={MapPin}
          label="Direcciones"
          value="3 direcciones"
        />

        <MenuItem
          icon={CreditCard}
          label="Métodos de pago"
          value="2 tarjetas"
        />
      </div>

      <div className="mt-8">
        <div className="px-6 py-3 bg-gray-50">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
            Preferencias
          </p>
        </div>

        <MenuItem
          icon={Bell}
          label="Notificaciones"
          value="Activas"
        />

        <MenuItem
          icon={Settings}
          label="Configuración"
        />

        <MenuItem
          icon={HelpCircle}
          label="Ayuda y soporte"
          value="Contacta con nosotros"
        />
      </div>

      <div className="mt-8 px-6 space-y-2">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-between p-4 text-red-600 hover:bg-red-50 transition-colors rounded-xl border border-red-200"
        >
          <div className="flex items-center gap-3">
            <LogOut size={24} />
            <span className="font-semibold">Cerrar sesión</span>
          </div>
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="px-6 mt-12 pb-8 text-center space-y-2 border-t border-gray-100 pt-8">
        <p className="text-xs text-gray-500">LaundryHub v1.0.0</p>
        <p className="text-xs text-gray-400">
          Hecho con ❤️ por el equipo LaundryHub
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <button className="text-xs text-purple-600 hover:underline">
            Términos
          </button>
          <span className="text-gray-300">•</span>
          <button className="text-xs text-purple-600 hover:underline">
            Privacidad
          </button>
          <span className="text-gray-300">•</span>
          <button className="text-xs text-purple-600 hover:underline">
            Contacto
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
