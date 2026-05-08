import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Home, Clock, MapPin, Settings } from 'lucide-react'

function Navigation() {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path)

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-100 px-4 py-3 flex justify-around items-center shadow-lg">
      <button
        onClick={() => navigate('/home')}
        className={`flex flex-col items-center justify-center py-2 px-6 rounded-xl transition-all ${
          isActive('/home')
            ? 'bg-purple-100 text-purple-600'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        <Home size={24} />
        <span className="text-xs mt-1 font-medium">Inicio</span>
      </button>

      <button
        onClick={() => navigate('/history')}
        className={`flex flex-col items-center justify-center py-2 px-6 rounded-xl transition-all ${
          isActive('/history')
            ? 'bg-purple-100 text-purple-600'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        <Clock size={24} />
        <span className="text-xs mt-1 font-medium">Historial</span>
      </button>

      <button
        onClick={() => navigate('/tracking')}
        className={`flex flex-col items-center justify-center py-2 px-6 rounded-xl transition-all ${
          isActive('/tracking')
            ? 'bg-purple-100 text-purple-600'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        <MapPin size={24} />
        <span className="text-xs mt-1 font-medium">Rastreo</span>
      </button>

      <button
        onClick={() => navigate('/profile')}
        className={`flex flex-col items-center justify-center py-2 px-6 rounded-xl transition-all ${
          isActive('/profile')
            ? 'bg-purple-100 text-purple-600'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        <Settings size={24} />
        <span className="text-xs mt-1 font-medium">Perfil</span>
      </button>
    </nav>
  )
}

export default Navigation
