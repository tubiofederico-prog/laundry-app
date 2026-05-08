import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, Phone, ArrowLeft } from 'lucide-react'

function Login({ onLogin }) {
  const navigate = useNavigate()
  const [loginType, setLoginType] = useState(null)
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [step, setStep] = useState('choose')

  const handlePhoneSubmit = (e) => {
    e.preventDefault()
    if (phone.length >= 10) {
      setStep('verify')
    }
  }

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    if (email.includes('@')) {
      setStep('verify')
    }
  }

  const handleVerify = (e) => {
    e.preventDefault()
    if (code.length === 4) {
      onLogin()
      navigate('/home')
    }
  }

  return (
    <div className="h-screen w-full bg-white flex flex-col pb-20">
      {step !== 'choose' && (
        <button
          onClick={() => setStep('choose')}
          className="p-4 hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft size={24} className="text-gray-900" />
        </button>
      )}

      <div className="flex-1 flex flex-col items-center justify-center px-6 space-y-8">
        {step === 'choose' && (
          <>
            <h1 className="text-3xl font-bold text-gray-900">Bienvenido</h1>

            <div className="w-full space-y-3 pt-4">
              <button
                onClick={() => {
                  setLoginType('phone')
                  setStep('enter')
                }}
                className="card cursor-pointer w-full flex items-center space-x-4 py-4 px-5"
              >
                <Phone className="text-purple-600" size={28} />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Teléfono</p>
                  <p className="text-sm text-gray-500">Código de 4 dígitos</p>
                </div>
              </button>

              <button
                onClick={() => {
                  setLoginType('email')
                  setStep('enter')
                }}
                className="card cursor-pointer w-full flex items-center space-x-4 py-4 px-5"
              >
                <Mail className="text-purple-600" size={28} />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Correo</p>
                  <p className="text-sm text-gray-500">Acceso rápido</p>
                </div>
              </button>
            </div>
          </>
        )}

        {step === 'enter' && loginType === 'phone' && (
          <form onSubmit={handlePhoneSubmit} className="w-full space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Número de teléfono
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+34 600 000 000"
                className="input-field"
              />
            </div>
            <button type="submit" className="btn-primary">
              Continuar
            </button>
          </form>
        )}

        {step === 'enter' && loginType === 'email' && (
          <form onSubmit={handleEmailSubmit} className="w-full space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="input-field"
              />
            </div>
            <button type="submit" className="btn-primary">
              Continuar
            </button>
          </form>
        )}

        {step === 'verify' && (
          <form onSubmit={handleVerify} className="w-full space-y-6">
            <div className="text-center space-y-2">
              <p className="text-gray-600">
                Hemos enviado un código a{' '}
                <span className="font-semibold text-gray-900">
                  {loginType === 'phone' ? phone : email}
                </span>
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Código de verificación
              </label>
              <input
                type="text"
                maxLength="4"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="0000"
                className="input-field text-center text-2xl tracking-widest font-bold"
              />
            </div>

            <button type="submit" className="btn-primary">
              Verificar
            </button>

            <button
              type="button"
              onClick={() => setStep('enter')}
              className="btn-ghost w-full"
            >
              Cambiar contacto
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Login
