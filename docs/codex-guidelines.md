# SoundVerse — Guía de trabajo con Codex

## Rol de Codex

Codex actuará como asistente de implementación, revisión y explicación. No debe tomar decisiones amplias de producto o arquitectura sin indicarlo.

## Reglas generales

1. Leer primero los archivos de `docs`.
2. Revisar la estructura existente antes de modificar archivos.
3. Explicar brevemente el plan antes de ejecutar cambios grandes.
4. No instalar dependencias sin justificar su necesidad.
5. No implementar funcionalidades fuera de la tarea solicitada.
6. No cambiar arquitectura, stack o convenciones sin autorización.
7. Mantener soluciones simples y apropiadas para el nivel actual del proyecto.
8. Ejecutar las comprobaciones disponibles al terminar.
9. Enumerar archivos creados, modificados o eliminados.
10. Explicar los cambios en lenguaje comprensible.
11. Señalar supuestos, riesgos y tareas pendientes.
12. No usar secretos reales ni guardar credenciales en el repositorio.

## Flujo esperado por tarea

1. Leer contexto.
2. Inspeccionar archivos relevantes.
3. Proponer un plan breve.
4. Implementar el cambio mínimo.
5. Ejecutar lint, pruebas o compilación.
6. Mostrar el resultado.
7. Explicar lo aprendido.

## Alcance inicial

Durante la primera fase:

- trabajar únicamente en el frontend;
- usar datos simulados;
- no integrar Spotify;
- no integrar Supabase;
- no crear backend;
- no añadir autenticación;
- no añadir pagos;
- no añadir inteligencia artificial;
- no instalar librerías adicionales salvo solicitud expresa.

## Estilo de código

- nombres descriptivos;
- componentes pequeños;
- evitar abstracciones prematuras;
- TypeScript estricto;
- evitar `any`;
- separar datos simulados de componentes;
- priorizar legibilidad;
- incluir comentarios solo cuando expliquen una decisión no evidente.

## Formato de respuesta esperado

Al terminar una tarea, Codex debe indicar:

- resumen;
- archivos modificados;
- comandos ejecutados;
- comprobaciones realizadas;
- posibles problemas;
- siguiente paso recomendado.

## Comandos mínimos de revisión

Cuando correspondan:

```bash
git status
git diff
npm run lint
npm run build
```

## Principio de aprendizaje

El objetivo no es generar la mayor cantidad de código posible. El objetivo es construir SoundVerse mientras el desarrollador comprende las decisiones y conceptos utilizados.
