import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Sparkles } from 'lucide-react'

function Onboarding() {
  const navigate = useNavigate()

  return (
    <div className="h-screen w-full bg-gradient-to-b from-white to-gray-50 flex flex-col items-center justify-center px-6 pb-20">
      <div className="text-center space-y-8">
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
            <Sparkles size={48} className="text-white" />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Lavamos tu ropa
          </h1>
          <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            en 3 horas
          </p>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed max-w-sm">
          Sin que te muevas de tu casa. Recogemos, lavamos y entregamos con la máxima calidad.
        </p>

        <div className="space-y-4 pt-12">
          <button
            onClick={() => navigate('/login')}
            className="btn-primary"
          >
            Empezar ahora
          </button>

          <button
            onClick={() => navigate('/login')}
            className="btn-secondary"
          >
            Ver más
          </button>
        </div>

        <p className="text-xs text-gray-500 pt-8">
          Disponible en tu zona • Sin compromiso
        </p>
      </div>
    </div>
  )
}

export default Onboarding
