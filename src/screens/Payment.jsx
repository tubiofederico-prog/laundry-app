import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Check } from 'lucide-react'

function Payment() {
  const navigate = useNavigate()
  const [cardNumber, setCardNumber] = useState('4532 1234 5678 9010')
  const [expiry, setExpiry] = useState('12/26')
  const [cvc, setCvc] = useState('123')
  const [processing, setProcessing] = useState(false)
  const [completed, setCompleted] = useState(false)

  const handlePayment = async (e) => {
    e.preventDefault()
    setProcessing(true)

    setTimeout(() => {
      setProcessing(false)
      setCompleted(true)

      setTimeout(() => {
        navigate('/tracking')
      }, 2000)
    }, 2000)
  }

  return (
    <div className="h-screen w-full bg-white overflow-y-auto pb-20">
      <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center gap-4">
        <button
          onClick={() => navigate('/confirmation')}
          disabled={processing || completed}
          className={`p-2 hover:bg-gray-100 rounded-lg transition-colors ${
            processing || completed ? 'cursor-not-allowed opacity-50' : ''
          }`}
        >
          <ArrowLeft size={24} className="text-gray-900" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Pago</h1>
      </div>

      {!completed && (
        <form onSubmit={handlePayment} className="px-6 py-8 space-y-8">
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 text-white relative overflow-hidden h-48 flex flex-col justify-between">
            <div>
              <p className="text-sm opacity-75 font-semibold">Tarjeta de pago</p>
              <p className="text-2xl font-bold mt-8 tracking-widest">{cardNumber}</p>
            </div>

            <div className="flex justify-between">
              <div>
                <p className="text-xs opacity-75">Expira</p>
                <p className="font-semibold">{expiry}</p>
              </div>
              <div className="text-right">
                <p className="text-xs opacity-75">CVC</p>
                <p className="font-semibold">•••</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Número de tarjeta
              </label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="4532 1234 5678 9010"
                className="input-field"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Vencimiento
                </label>
                <input
                  type="text"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  placeholder="MM/YY"
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  CVC
                </label>
                <input
                  type="text"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  placeholder="123"
                  className="input-field"
                />
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-xs text-blue-900">
              🔒 Tu pago está protegido con encriptación SSL de nivel bancario
            </p>
          </div>

          <button
            type="submit"
            disabled={processing}
            className={`btn-primary ${processing ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {processing ? (
              <span className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Procesando...
              </span>
            ) : (
              'Pagar ahora'
            )}
          </button>
        </form>
      )}

      {completed && (
        <div className="flex flex-col items-center justify-center h-96 space-y-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
            <Check size={40} className="text-green-600" />
          </div>

          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">¡Pagado!</h2>
            <p className="text-gray-600">Tu pedido ha sido confirmado</p>
          </div>

          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 animate-pulse" style={{ width: '100%' }}></div>
          </div>

          <p className="text-sm text-gray-500">
            Redirigiendo al rastreo en tiempo real...
          </p>
        </div>
      )}
    </div>
  )
}

export default Payment
