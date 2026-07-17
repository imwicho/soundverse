# SoundVerse — Registro de decisiones

Este documento registra decisiones importantes para evitar discutir repetidamente los mismos temas y para conservar el razonamiento del proyecto.

---

## ADR-001 — Construir un producto, no un clon

### Estado

Aceptada.

### Decisión

SoundVerse no será un clon de Spotify. Será una red social y biblioteca personal centrada en las emociones provocadas por la música.

### Razón

Un clon aporta poco valor diferencial y no resuelve un problema propio.

---

## ADR-002 — No alojar audio en el MVP

### Estado

Aceptada.

### Decisión

La aplicación guardará metadatos y enlaces a proveedores musicales, pero no archivos de audio.

### Razón

Alojar audio implica licencias, moderación, almacenamiento, ancho de banda y mayor complejidad legal.

---

## ADR-003 — Prototipo visual antes del backend

### Estado

Aceptada.

### Decisión

La primera versión utilizará datos simulados y se enfocará en validar navegación, diseño y experiencia.

### Razón

Permite obtener resultados visibles pronto y evita aprender simultáneamente frontend, backend, base de datos, autenticación y APIs externas.

---

## ADR-004 — Next.js y TypeScript para frontend

### Estado

Aceptada.

### Decisión

El frontend se desarrollará con Next.js, React y TypeScript.

### Razón

Permite aprender un stack moderno, crear rutas públicas, mejorar SEO y desarrollar una aplicación escalable.

---

## ADR-005 — FastAPI como backend independiente

### Estado

Aceptada.

### Decisión

La lógica de negocio se implementará en FastAPI.

### Razón

Permite reforzar Python, aprender APIs REST y separar claramente frontend y backend.

---

## ADR-006 — PostgreSQL como base de datos

### Estado

Aceptada.

### Decisión

Se utilizará PostgreSQL.

### Razón

SoundVerse contiene múltiples relaciones entre usuarios, canciones, publicaciones, emociones, seguidores y playlists.

---

## ADR-007 — Supabase como proveedor inicial

### Estado

Aceptada.

### Decisión

Supabase alojará inicialmente PostgreSQL, autenticación y almacenamiento.

### Razón

Ofrece un plan gratuito razonable y reduce la carga operativa durante el MVP.

---

## ADR-008 — Spotify como primer proveedor musical

### Estado

Aceptada con revisión futura.

### Decisión

La primera integración musical será Spotify Web API.

### Razón

Tiene un catálogo amplio y permite obtener metadatos musicales.

### Restricción

La arquitectura debe evitar depender de un único proveedor y respetar sus políticas de uso.

---

## ADR-009 — Inteligencia artificial fuera del MVP

### Estado

Aceptada.

### Decisión

La primera versión no dependerá de una API de inteligencia artificial.

### Razón

Primero es necesario recopilar datos útiles y evitar costos por interacción.

---

## ADR-010 — Aprendizaje sobre velocidad

### Estado

Aceptada.

### Decisión

No se aceptará código generado automáticamente que el desarrollador no pueda explicar de manera general.

### Razón

El proyecto también tiene como propósito desarrollar competencias profesionales.

---

## Plantilla para nuevas decisiones

```md
## ADR-XXX — Título

### Estado

Propuesta | Aceptada | Rechazada | Reemplazada

### Contexto

¿Qué problema o decisión existe?

### Decisión

¿Qué se decidió?

### Razón

¿Por qué se eligió esta opción?

### Consecuencias

¿Qué ventajas, limitaciones o trabajo futuro genera?
```
