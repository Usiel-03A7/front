# Tienda de Computadoras - Assessment
## Hecho por: [Usiel Sebastian Solano Silva]
## Para el puesto de Front end

Una tienda en línea especializada en la venta de computadoras con opciones de financiamiento a meses sin intereses.

## Características Principales

- 🖥️ Catálogo de productos con imágenes y especificaciones
- 🛒 Carrito de compras funcional
- 💳 Opciones de pago a 6 y 12 meses sin intereses
- 🔐 Autenticación de usuarios
- 📱 Diseño completamente responsive

## Tecnologías Utilizadas

- Frontend:
  - React.js
  - Vite
  - React Router
  - Context API
- Estilos:
  - CSS Modules
  - Diseño responsive con Flexbox/Grid

## Estructura del Proyecto (MVC)

## Requisitos del Sistema

- Node.js v16+
- npm v8+

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tienda-computadoras.git
   cd tienda-computadoras
npm install
npm run dev
npm run build

## Criterios del Assessment Cumplidos

### 1. Catálogo de Productos ✅
- Implementado en `Catalogo.jsx` y `ProductoDetalle.jsx`
- Muestra 2 productos con imágenes reales (gamer.png, mac.png)
- Especificaciones técnicas detalladas (RAM, CPU, almacenamiento)

### 2. Pago Diferido (6 y 12 MSI) ✅
- Implementado en:
  - `ProductoDetalle.jsx` (selección de meses)
  - `Carrito.jsx` (visualización en carrito)
  - `Checkout.jsx` (confirmación de pago)
- Cálculo automático de pagos mensuales:
##estrectura del proyecto (Modelo MVC)
src/
├── assets/
│   └── images/
│       ├── gamer.png
│       └── mac.png
├── components/
│   ├── Footer.jsx
│   ├── Header.jsx
│   └── PrivateRoute.jsx
├── context/
│   ├── AuthContext.jsx
│   └── CartContext.jsx
├── controllers/
│   ├── AuthController.js
│   ├── CartController.js
│   ├── OrderController.js
│   └── ProductController.js
├── models/
│   ├── Card.js
│   ├── Order.js
│   ├── Product.js
│   └── User.js
├── styles/
│   ├── Auth.css
│   ├── Carrito.css
│   ├── Catalogo.css
│   ├── Checkout.css
│   ├── Footer.css
│   ├── global.css
│   ├── Header.css
│   ├── ProductoDetalle.css
│   └── UserPanel.css
├── views/
│   ├── auth/
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── Carrito.jsx
│   ├── Catalogo.jsx
│   ├── Checkout.jsx
│   ├── Home.jsx
│   ├── ProductoDetalle.jsx
│   └── UserPanel.jsx
├── App.jsx
└── main.jsx
