# 🧺 LaundryHub - On-Demand Laundry Service

Un prototipo frontend **premium**, **minimalista** e **intuitivo** de una aplicación mobile de lavandería bajo demanda, inspirada en Uber, Rappi y Glovo.

## 🎯 Características

### Diseño Premium
- Estética moderna SaaS 2026
- Interfaz minimalista y limpia
- Colores: blanco, gris claro, negro + acentos en violeta y azul
- Tipografía Inter (Sans Serif)
- Bordes redondeados (rounded-2xl)
- Sombras suaves y transiciones fluidas
- Microinteracciones visuales

### Pantallas Implementadas

1. **Onboarding / Bienvenida**
   - Branding limpio
   - Mensaje de valor: "Lavamos tu ropa en 3 horas sin que te muevas de tu casa"
   - CTA principal clara

2. **Login / Registro**
   - Opciones de teléfono y email
   - Flujo de verificación rápido
   - UX sin fricción

3. **Home / Dashboard**
   - Saludo personalizado
   - CTA principal grande
   - Último pedido con estado
   - Accesos rápidos

4. **Selección de Servicio**
   - 6 opciones de servicios
   - Cards modernas con descripción y precio
   - Selección visual clara
   - Animaciones hover

5. **Dirección y Horario**
   - Input de dirección editable
   - Selector de fecha (Hoy, Mañana, Próximos)
   - Selector de hora (8 horas disponibles)
   - Indicador de recogida confirmada

6. **Confirmación de Pedido**
   - Resumen completo del pedido
   - Desglose de precios
   - Campo para código promocional
   - Garantía de cobertura

7. **Pago**
   - Simulación de tarjeta de crédito
   - Vista previa de tarjeta animada
   - Flujo de pago (procesando → completado)
   - Redirección automática a rastreo

8. **Rastreo en Tiempo Real**
   - Progreso del pedido en vivo
   - Timeline interactivo (6 estados)
   - Información del conductor
   - Opciones de llamada y chat
   - Animación de progreso automático

9. **Historial de Pedidos**
   - Lista de pedidos anteriores
   - Estados visuales
   - Opciones "Repetir pedido" y "Descargar recibo"
   - Botón para nuevo pedido

10. **Perfil**
    - Información de usuario
    - Saldo disponible
    - Secciones: Mi Información, Preferencias
    - Botón de cerrar sesión
    - Links: Términos, Privacidad, Contacto

### Navegación

- **Tab Bar inferior** con 4 opciones:
  - 🏠 Inicio
  - ⏰ Historial
  - 📍 Rastreo
  - ⚙️ Perfil

## 🚀 Cómo Usar

### Opción 1: Abrir archivo directamente
```bash
open /Users/federicotubio/laundry-app/index.html
```

### Opción 2: Usar servidor HTTP
```bash
cd /Users/federicotubio/laundry-app
python3 -m http.server 3000
# Luego abrir http://localhost:3000
```

### Opción 3: Script de inicio
```bash
./start.sh
```

## 🎨 Estilo de Diseño

### Colores
- **Primario**: Violeta (`#7C3AED`)
- **Secundario**: Índigo (`#6366F1`)
- **Acento**: Azul (`#3B82F6`)
- **Fondo**: Blanco y gris claro
- **Texto**: Gris 900 (casi negro)

### Componentes Clave
- Botones grandes y claros (py-3, rounded-2xl)
- Inputs con focus rings elegantes
- Cards con hover shadows
- Transiciones smooth (200-300ms)
- Iconografía moderna (emojis por ahora)

## 🔄 Flujo de Usuario

```
Onboarding → Login → Home → (3 flujos posibles)
├── Solicitar Servicio → Seleccionar Servicio → Dirección/Hora → Confirmación → Pago → Rastreo
├── Ver Historial → Repetir Pedido (acelera flujo)
└── Perfil → Ver info/Cerrar sesión
```

## 📱 Responsive

- Optimizado para **iPhone** (320-390px ancho)
- Max-width: 448px (md)
- Navbar fija inferior
- Scroll y overflow handled correctamente

## 🛠️ Stack Técnico

- **React 18** (CDN)
- **Tailwind CSS 4** (CDN)
- **Babel** (transpilación JSX)
- **Vanilla JavaScript** (sin build tools)

## ✨ Detalles de UX

### Microinteracciones
- Hover scales en botones principales
- Loading animado en pago
- Bounce animation en success
- Fade-in en cambios de pantalla
- Progress bar animado en rastreo

### Feedback Visual
- Estados claros (procesando, completado, error)
- Indicadores de progreso
- Confirmaciones visuales
- Mensajes informativos contextuales

### Accesibilidad
- Etiquetas descriptivas
- Contraste suficiente
- Tamaño de targets adecuado (min 44px)
- Navegación intuitiva

## 📊 Datos Demo

La app incluye datos simulados:
- Usuario: Carolina García
- Servicios: 6 opciones variadas ($4.99 - $19.99)
- Horarios: 8-18h cada hora
- Pedidos históricos: 4 pedidos completados
- Conductor: Juan García (4.9⭐)

## 🎯 Caso de Uso

**MVP Premium** listo para presentar a inversores o clientes. Prototipo completamente navegable que demuestra:
- Flujo de usuario intuitivo
- Diseño limpio y premium
- UX rápida y sin fricción
- Capacidad de la tecnología

## 📝 Notas

- **Sin backend**: Toda la navegación es local
- **Datos simulados**: No hay persistencia
- **Prototipo visual**: Enfoque 100% en UX/UI
- **Animaciones**: Progress avanza automáticamente en rastreo
- **Responsive**: Optimizado para mobile-first

---

**Hecho para convertir visitantes en usuarios.** 🚀
