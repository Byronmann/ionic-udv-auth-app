# Aplicación Móvil Híbrida con Ionic + Angular (Standalone)

Este proyecto implementa un **flujo básico de autenticación** utilizando Ionic + Angular (versión standalone), cumpliendo con los requisitos establecidos para el curso de **Desarrollo Móvil – Universidad Da Vinci de Guatemala**.

##  Características principales

###  Autenticación (Login)
- Formulario reactivo con:
  - Correo electrónico
  - Contraseña
- Validaciones de campos
- Única llamada HTTP del proyecto: `POST /auth/login`
- Manejo de errores con mensaje visual
- Al iniciar sesión:
  - Se guarda el token en `localStorage`
  - Se navega al Home protegido

### 🛡 Protección de rutas (AuthGuard)
- `/home` está protegido mediante un guard (`authGuard`)
- Si no hay token → redirige automáticamente a `/login`
- Si hay token → acceso permitido

###  Home Page
- Pantalla de bienvenida
- Botón *Ir a mi Perfil*
- Botón *Cerrar Sesión* (elimina token + redirige al login)

###  Perfil de Usuario (Ruta hija)
- `/home/perfil`
- Formulario reactivo con:
  - Nombre
  - Apellido
  - Correo electrónico
- Validaciones completas
- Al enviar → imprime valores en consola

###  Tecnologías utilizadas
- Ionic Framework
- Angular 17+ (standalone components)
- TypeScript
- Reactive Forms
- Angular Router + Guards
- Node.js (para backend de prueba)
- Express (backend de autenticación simple)

---

##  Estructura del proyecto

```
src/app/
│
├── pages/
│   ├── login/
│   └── perfil/
│
├── home/
├── guards/
│   └── auth.guard.ts
├── services/
│   └── auth.ts
└── app.routes.ts
```

---

##  Cómo ejecutar el proyecto

### 1. Instalar dependencias del frontend
```bash
npm install
```

### 2. Ejecutar la app Ionic
```bash
ionic serve
```

La aplicación se abrirá en:

```
http://localhost:8100
```

---

##  Backend de prueba (Node + Express)

En una carpeta separada:

```bash
npm init -y
npm install express cors
```

Crear `index.js`:

```js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const USER_EMAIL = "brodolfo435@gmail.com";
const USER_PASSWORD = "123456";

app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  if (email === USER_EMAIL && password === USER_PASSWORD) {
    return res.json({ token: "token-de-ejemplo-123" });
  }

  return res.status(401).json({ message: "Credenciales inválidas" });
});

app.listen(PORT, () =>
  console.log(`Backend escuchando en http://localhost:${PORT}`)
);
```

Iniciar backend:

```bash
node index.js
```

---

##  Usuarios de prueba

| Usuario | Contraseña |
|---------|------------|
| brodolfo435@gmail.com | 123456 |

---

##  Autores
Proyecto desarrollado por **Bryon Rodolfo Maldonado Palacios** como parte del curso Desarrollo Móvil – Universidad Da Vinci de Guatemala.

---

##  Repositorio en GitHub
https://github.com/Byronmann/ionic-udv-auth-app.git
