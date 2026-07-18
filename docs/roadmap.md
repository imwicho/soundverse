# SoundVerse — Roadmap

## Objetivo general

Construir SoundVerse por etapas pequeñas, utilizables y demostrables. Cada fase debe producir una versión funcional antes de añadir nueva complejidad.

---

## Fase 0 — Preparación del proyecto

### Objetivo

Crear una base de trabajo clara y versionada.

### Entregables

- Repositorio Git.
- Proyecto abierto en Visual Studio Code.
- Carpeta `docs`.
- Documentación inicial.
- Archivo `README.md`.
- Archivo `.gitignore`.
- Primer commit.

### Criterio de finalización

El repositorio puede clonarse, abrirse y comprenderse leyendo su documentación.

---

## Fase 1 — Prototipo visual

### Objetivo

Crear una versión navegable de SoundVerse con datos simulados.

### Funcionalidades

- Página de inicio.
- Navegación principal.
- Módulo social secundario de momentos musicales
- Tarjeta de publicación.
- Selector visual de emoción.
- Página de explorar.
- Biblioteca simulada.
- Perfil simulado.
- Diseño responsive.

### Conceptos por aprender

- React.
- Next.js.
- TypeScript.
- Componentes.
- Props.
- Renderizado de listas.
- Rutas.
- Tailwind CSS.
- Diseño responsive.

### Criterio de finalización

Un visitante puede navegar por las pantallas principales y entender el concepto del producto sin que exista backend.

---

## Fase 2 — Backend inicial

### Objetivo

Crear una API independiente para sustituir gradualmente los datos simulados.

### Funcionalidades

- Proyecto FastAPI.
- Endpoint de estado.
- Endpoints de publicaciones.
- Validación con Pydantic.
- Manejo básico de errores.
- Documentación automática de la API.

### Conceptos por aprender

- HTTP.
- REST.
- JSON.
- Métodos HTTP.
- Códigos de estado.
- FastAPI.
- Pydantic.

### Criterio de finalización

El frontend puede obtener publicaciones desde la API.

---

## Fase 3 — Base de datos

### Objetivo

Persistir usuarios, canciones y publicaciones.

### Funcionalidades

- PostgreSQL.
- SQLAlchemy.
- Alembic.
- Tablas iniciales.
- Relaciones.
- Datos de prueba.

### Entidades iniciales

- User.
- Song.
- Post.
- Mood.
- Like.
- Comment.
- Follow.
- Playlist.
- PlaylistSong.

### Criterio de finalización

Los datos sobreviven al reinicio del backend y pueden consultarse mediante la API.

---

## Fase 4 — Autenticación

### Objetivo

Permitir que cada usuario tenga una cuenta y administre sus propios datos.

### Funcionalidades

- Registro.
- Inicio de sesión.
- Cierre de sesión.
- Recuperación de contraseña.
- Sesiones.
- Rutas protegidas.
- Verificación de permisos.

### Criterio de finalización

Un usuario autenticado puede crear, editar y eliminar únicamente sus propias publicaciones.

---

## Fase 5 — Integración musical

### Objetivo

Permitir búsquedas y publicaciones basadas en canciones reales.

### Funcionalidades

- Integración con Spotify Web API.
- Búsqueda de canciones.
- Selección de canción.
- Portada, artista y álbum.
- Enlace externo.
- Identificador del proveedor.

### Criterio de finalización

Un usuario puede buscar una canción real y crear una publicación asociada a ella.

---

## Fase 6 — Funciones sociales

### Objetivo

Convertir el producto individual en una experiencia comunitaria.

### Funcionalidades

- Seguir usuarios.
- Feed de seguidos.
- Likes.
- Comentarios.
- Guardar publicaciones.
- Perfiles públicos.
- Explorar publicaciones.

### Criterio de finalización

Dos usuarios pueden interactuar entre sí dentro de la plataforma.

---

## Fase 7 — Biblioteca personal

### Objetivo

Crear valor incluso para un usuario que no utilice las funciones sociales.

### Funcionalidades

- Canciones guardadas.
- Playlists.
- Notas personales.
- Emociones asociadas.
- Historial.
- Filtros.

### Criterio de finalización

Un usuario puede utilizar SoundVerse como biblioteca y diario musical personal.

---

## Fase 8 — Calidad y despliegue

### Objetivo

Publicar una versión profesional para portafolio.

### Funcionalidades

- Pruebas.
- Accesibilidad.
- Manejo de errores.
- Estados vacíos.
- Estados de carga.
- CI/CD.
- Despliegue.
- Documentación.
- Datos de demostración.

### Criterio de finalización

SoundVerse está disponible públicamente y puede mostrarse en entrevistas.

---

## Fase 9 — Recomendaciones

### Objetivo

Ayudar al usuario a descubrir música según emociones e intereses.

### Primera versión

Recomendaciones por reglas:

- emociones compartidas;
- artistas relacionados;
- actividad de personas seguidas;
- publicaciones guardadas;
- popularidad reciente.

### Versiones futuras

- recomendaciones semánticas;
- playlists automáticas;
- resúmenes mensuales;
- inteligencia artificial con límites de uso.

---

## Regla de alcance

No se inicia una fase nueva hasta que la anterior tenga:

- una funcionalidad demostrable;
- código entendido por el desarrollador;
- documentación mínima;
- cambios guardados en Git;
- una revisión de lo aprendido.
