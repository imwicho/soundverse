# SoundVerse — Stack tecnológico

## Principios de selección

El stack se eligió considerando:

1. costo inicial cercano a cero;
2. valor para el portafolio;
3. demanda profesional;
4. capacidad de crecimiento;
5. aprendizaje de desarrollo full stack;
6. posibilidad de reemplazar proveedores en el futuro.

## Frontend

### Tecnologías

- Next.js.
- React.
- TypeScript.
- Tailwind CSS.
- shadcn/ui de manera selectiva.
- TanStack Query.
- React Hook Form.
- Zod.
- Zustand solo cuando exista una necesidad clara.

### Responsabilidades

- Interfaz.
- Navegación.
- Formularios.
- consumo de la API.
- manejo visual de sesiones.
- estados de carga y error.
- experiencia responsive.

## Backend

### Tecnologías

- Python.
- FastAPI.
- Pydantic.
- SQLAlchemy.
- Alembic.

### Responsabilidades

- lógica de negocio;
- validación;
- autorización;
- acceso a datos;
- integración con proveedores;
- manejo de errores;
- endpoints REST.

## Base de datos

- PostgreSQL.
- Supabase como proveedor inicial.

### Uso de Supabase

- alojamiento de PostgreSQL;
- autenticación;
- almacenamiento inicial.

La lógica principal del negocio permanecerá en FastAPI.

## Autenticación

- Supabase Auth.
- Tokens verificados por el backend.
- Inicio con correo y contraseña.
- OAuth en etapas posteriores.

## Datos musicales

- Spotify Web API como primer proveedor.
- La aplicación guardará metadatos y referencias, no archivos de audio.

### Datos esperados

- proveedor;
- identificador externo;
- título;
- artista;
- álbum;
- portada;
- duración;
- enlace externo.

## Almacenamiento

### Inicial

- Supabase Storage.

### Futuro

- Cloudflare R2 si se requiere más capacidad.

## Despliegue

- Frontend: Vercel.
- Backend: Koyeb o una alternativa equivalente.
- Base de datos: Supabase.
- Repositorio: GitHub.
- Automatización: GitHub Actions.

## Pruebas

### Frontend

- Vitest.
- React Testing Library.
- Playwright.

### Backend

- Pytest.

## Calidad

### Frontend

- ESLint.
- Prettier.
- TypeScript estricto.

### Backend

- Ruff.
- MyPy progresivamente.

## Contenedores

Docker se añadirá después de comprender el funcionamiento local de frontend, backend y base de datos.

## Tecnologías pospuestas

- aplicación móvil nativa;
- microservicios;
- Kubernetes;
- GraphQL;
- Redis;
- Elasticsearch;
- pagos;
- subida de audio;
- chat en tiempo real;
- inteligencia artificial generativa;
- reproductor musical completo.

## Arquitectura general

```text
Next.js + TypeScript
        |
        | HTTPS / JSON
        v
FastAPI + Python
        |
        +---- PostgreSQL / Supabase
        |
        +---- Spotify Web API
        |
        +---- Supabase Auth
```

## Costo inicial esperado

El desarrollo local y la primera versión pública deben poder funcionar con planes gratuitos. El primer gasto recomendable será un dominio propio cuando exista un MVP estable.
