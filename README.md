# 🐾 PetsMSB API – Proyecto Final Backend III

> 💡 Sistema backend para la gestión de usuarios, mascotas y adopciones con MongoDB, Express.js, JWT, Zod, Winston, Swagger y pruebas automatizadas.

---

## 📌 Índice

- [🐾 PetsMSB API – Proyecto Final Backend III](#-petsmsb-api--proyecto-final-backend-iii)
  - [📌 Índice](#-índice)
  - [📘 Sobre el Proyecto](#-sobre-el-proyecto)
  - [⚙️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)
  - [✨ Características Principales](#-características-principales)
  - [🛣️ Endpoints Disponibles](#️-endpoints-disponibles)
    - [Auth](#auth)
    - [Users](#users)
    - [Pets](#pets)
    - [Adoptions](#adoptions)
  - [📊 Uso de la API](#-uso-de-la-api)
  - [📄 Documentación con Swagger](#-documentación-con-swagger)
  - [🧱 Manejo de Errores](#-manejo-de-errores)
  - [🎲 Mocks de Datos](#-mocks-de-datos)
  - [📁 Estructura del Proyecto](#-estructura-del-proyecto)

---

## 📘 Sobre el Proyecto

**PetsMSB API** es un sistema backend desarrollado como parte del curso de **Backend III**, orientado a gestionar entidades como Usuarios, Mascotas y Adopciones. Está construido siguiendo buenas prácticas de desarrollo, incluyendo autenticación segura, validación de datos, logging avanzado, documentación interactiva y testing integral.


## ⚙️ Tecnologías Utilizadas

| Tecnología        | Uso Principal                                  |
|------------------|------------------------------------------------|
| Node.js + Express | Servidor web y manejo de rutas                 |
| MongoDB + Mongoose | Base de datos NoSQL y ODM                     |
| JWT               | Autenticación y generación de tokens           |
| Zod               | Validación de esquemas en tiempo de ejecución  |
| Swagger-jsdoc     | Documentación dinámica                         |
| Winston           | Logging avanzado                               |
| Bcrypt.js         | Encriptación de contraseñas                    |
| Faker.js          | Generación de datos ficticios                  |
| Mocha & Chai      | Pruebas unitarias e integración                |

---

## ✨ Características Principales

✅ CRUDs completos (`Users`, `Pets`, `Adoptions`)  
✅ Autenticación segura (`register`, `login`)  
✅ Tokens JWT con expiración automática  
✅ Validaciones robustas con Zod  
✅ Logs detallados (info, error, warn, debug)  
✅ Documentación interactiva con Swagger  
✅ Mocks de datos para desarrollo rápido  
✅ Centralización de errores personalizados  
✅ Tests unitarios e integración  

---

## 🛣️ Endpoints Disponibles

### Auth
| Método | Ruta             | Acción                   |
|--------|------------------|--------------------------|
| POST   | `/api/auth/register` | Registrar usuario       |
| POST   | `/api/auth/login`    | Iniciar sesión          |

### Users
| Método | Ruta              | Acción                      |
|--------|-------------------|-----------------------------|
| GET    | `/api/users`      | Listar todos los usuarios   |
| GET    | `/api/users/:id`  | Ver detalles de un usuario  |
| PUT    | `/api/users/:id`  | Actualizar un usuario       |
| DELETE | `/api/users/:id`  | Eliminar un usuario         |

### Pets
| Método | Ruta              | Acción                      |
|--------|-------------------|-----------------------------|
| GET    | `/api/pets`       | Listar todas las mascotas   |
| GET    | `/api/pets/:id`   | Ver detalles de una mascota |
| POST   | `/api/pets`       | Crear nueva mascota         |
| PUT    | `/api/pets/:id`   | Actualizar mascota          |
| DELETE | `/api/pets/:id`   | Eliminar mascota            |
| GET    | `/api/pets/mocks/:amount` | Generar mascotas ficticias |

### Adoptions
| Método | Ruta                 | Acción                  |
|--------|----------------------|-------------------------|
| GET    | `/api/adoptions`     | Listar todas las adopciones |
| POST   | `/api/adoptions`     | Registrar una adopción  |

---

## 📊 Uso de la API

Disponible desde `/api`. Por ejemplo:
- Listar usuarios: `GET http://localhost:8080/api/users`
- Registrar usuario: `POST http://localhost:8080/api/auth/register`

## 📄 Documentación con Swagger
La documentación completa está disponible en:
```
http://localhost:8080/api-docs
```
_Con ejemplos de peticiones y respuestas, modelos definidos y validaciones incluidas._

## 🧱 Manejo de Errores
Errores personalizados como:
- **NotFoundError**: 404
- **UnauthorizedError**: 401
- **ForbiddenError**: 403
- **BadRequestError**: 400

_Manejo global con middleware customError._

## 🎲 Mocks de Datos

Se pueden crear mascotas de prueba:
```
GET /api/pets/mocks/5
```
_Genera 5 mascotas ficticias usando Faker.js._

## 📁 Estructura del Proyecto
```
src/
├── app.js                # Punto de entrada
├── config/               # Configuración de entornos y base de datos
├── common/               # Middlewares, errores, utils (loggers, schemas)
├── modules/              # Funcionalidades divididas por módulos
│   ├── users/
│   ├── pets/
│   ├── auth/
│   └── adoptions/
├── docs/                 # Especificaciones OpenAPI/Swagger
└── mock/                 # Datos ficticios para pruebas
```
_Con ejemplos de peticiones y respuestas, modelos definidos y validaciones incluidas._

**Repositorio del Proyecto**:

```bash
   https://github.com/MateoSB1/Proyecto-Final-BkndN03
```

---

_🧑‍💻 **Autor: Mateo Brancato – LinkedIn:** https://www.linkedin.com/in/mateobrancatosb1/ **– GitHub:** https://github.com/MateoSB1_

_🎉 ¡Gracias por usar PetsMSB API! Esta solución te brinda todo lo necesario para construir aplicaciones escalables con Node.js moderno._