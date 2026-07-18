# SoundVerse — Arquitectura de información y navegación

## 1. Propósito de la arquitectura

SoundVerse debe sentirse primero como un espacio personal e íntimo y después como una red social. La música es el lenguaje mediante el cual el usuario registra emociones, conserva recuerdos, descubre canciones y se conecta con otras personas.

La arquitectura debe cumplir cuatro principios:

1. **La persona está antes que el contenido.** La entrada principal no pregunta qué desea escuchar, sino cómo se siente.
2. **El diario musical es el centro.** El valor del producto debe existir incluso cuando el usuario no sigue a nadie.
3. **Lo social acompaña, no invade.** Las publicaciones de otros aparecen en la experiencia, pero no dominan la pantalla principal.
4. **La música mantiene el protagonismo visual.** Las portadas, canciones y emociones estructuran el contenido.

---

## 2. Modelo mental del producto

SoundVerse se organiza alrededor de cinco acciones principales:

- **Sentir:** registrar el estado emocional actual.
- **Expresar:** asociar una canción, una nota y una privacidad.
- **Recordar:** consultar la propia línea del tiempo musical.
- **Descubrir:** encontrar canciones, emociones y personas afines.
- **Conectar:** reaccionar, comentar o seguir a otras personas.

El flujo principal será:

```text
¿Cómo te sientes?
        ↓
Seleccionar emoción
        ↓
Asociar una canción
        ↓
Añadir una reflexión opcional
        ↓
Elegir privacidad
        ↓
Guardar como recuerdo o publicar
```

---

## 3. Navegación principal del MVP

### Escritorio

Usar una barra lateral izquierda compacta y persistente.

1. **Inicio**
2. **Explorar**
3. **Mi diario**
4. **Biblioteca**
5. **Perfil**

En la parte inferior de la barra:

- Ajustes.
- Cambiar tema.
- Avatar del usuario.

### Móvil

Usar navegación inferior con cinco accesos:

1. Inicio.
2. Explorar.
3. Crear, como acción central destacada.
4. Mi diario.
5. Perfil.

La Biblioteca se puede acceder desde el perfil o desde una sección secundaria mientras se valida su importancia real.

---

## 4. Pantallas principales

## 4.1 Inicio — “Tu espacio de hoy”

### Objetivo

Recibir al usuario, reflejar su estado actual y facilitar que registre un momento musical sin convertir la pantalla en un feed tradicional.

### Jerarquía

1. Saludo contextual.
2. Pregunta principal: **“¿Cómo te sientes hoy?”**
3. Selector breve de emociones.
4. Tarjeta de escucha o canción destacada.
5. Acción: **“Guardar este momento”**.
6. Módulo de recuerdos recientes del usuario.
7. Módulo social reducido: **“Personas que sigues”**.
8. Recomendaciones por estado emocional.

### Regla de contenido

El contenido personal debe ocupar aproximadamente el 70 % de la experiencia visible inicial y el contenido social el 30 %.

### Estados del inicio

- Sin emoción seleccionada.
- Emoción seleccionada, sin canción.
- Momento en proceso de creación.
- Momento guardado.
- Usuario nuevo sin recuerdos.

---

## 4.2 Crear momento musical

No debe presentarse como un formulario frío ni llamarse “Crear publicación”.

### Paso 1 — Emoción

Pregunta: **“¿Qué estás sintiendo?”**

Mostrar entre seis y ocho emociones iniciales, con opción de ver más.

Emociones sugeridas para el prototipo:

- Alegría.
- Calma.
- Nostalgia.
- Amor.
- Tristeza.
- Energía.
- Esperanza.
- Confusión.

### Paso 2 — Canción

- Buscador simulado.
- Resultados con portada, título y artista.
- Reproducción simulada o enlace externo en etapas posteriores.

### Paso 3 — Reflexión

Campo opcional con lenguaje íntimo:

> “¿Qué significa esta canción para ti hoy?”

### Paso 4 — Privacidad

- Solo yo.
- Personas que sigo o amigos, en versiones futuras.
- Público.

Para el prototipo pueden mostrarse las tres opciones, aunque solo se simule el comportamiento.

### Paso 5 — Confirmación

Botón principal: **“Guardar momento”**.

Si es público, mostrar una nota secundaria: “También aparecerá en tu perfil y podrá compartirse”.

---

## 4.3 Mi diario

### Objetivo

Convertir publicaciones y canciones en una línea del tiempo personal y emocional.

### Estructura

- Encabezado con resumen del mes.
- Filtros por emoción, fecha y privacidad.
- Línea del tiempo vertical.
- Agrupación por mes o año.

Cada entrada muestra:

- Fecha.
- Emoción.
- Canción y artista.
- Reflexión.
- Privacidad.
- Acción para editar o eliminar.

### Diferencia con el perfil

- **Mi diario:** privado, introspectivo, completo.
- **Perfil:** representación pública y curada de la identidad musical.

---

## 4.4 Explorar

### Objetivo

Descubrir música y personas mediante sensaciones, no únicamente mediante géneros.

### Secciones

1. “¿Qué quieres sentir?”
2. Momentos populares por emoción.
3. Canciones que acompañan a otras personas hoy.
4. Perfiles compatibles.
5. Artistas o canciones emergentes.

### Filtros

- Emoción.
- Momento del día.
- Género musical, como filtro secundario.
- Popularidad reciente.

### Regla

La emoción es el criterio principal. El género musical nunca debe definir por sí solo la identidad completa del usuario ni el tema visual de la interfaz.

---

## 4.5 Biblioteca

### Objetivo

Guardar música con significado personal.

### Secciones

- Canciones guardadas.
- Playlists.
- Recuerdos asociados.
- Canciones pendientes por escuchar.

### Diferenciador

Una canción puede tener varias asociaciones emocionales a lo largo del tiempo. No se le asignará una emoción fija y universal.

---

## 4.6 Perfil

### Objetivo

Representar la identidad musical pública del usuario sin reducirla a un único género.

### Estructura

1. Avatar, nombre y biografía breve.
2. Frase musical o canción representativa.
3. Resumen emocional reciente.
4. Artistas y canciones significativas.
5. Colecciones públicas.
6. Momentos públicos.
7. Estadísticas compartibles.

### Identidad multidimensional

El perfil no mostrará una sola etiqueta como “fan del rock”. Mostrará varias dimensiones:

- emociones frecuentes;
- artistas significativos;
- géneros escuchados;
- momentos del día;
- descubrimiento frente a repetición;
- canciones con mayor significado.

Esto permite que una persona pueda escuchar K-pop, banda, rock o jazz sin que la plataforma intente encerrarla en una categoría.

---

## 5. Arquitectura del contenido social

Las publicaciones se llamarán **momentos musicales**.

Cada momento contiene:

- usuario;
- canción;
- emoción seleccionada;
- reflexión opcional;
- fecha;
- privacidad;
- reacciones;
- comentarios;
- opción de guardar.

### Presentación

La canción y la emoción son los elementos principales. La cantidad de likes o comentarios debe tener menor peso visual para evitar que la experiencia íntima se convierta en una competencia de popularidad.

### Reacciones sugeridas

En lugar de un único “Me gusta”:

- Me acompañó.
- Lo sentí.
- Me identifico.
- Guardar canción.

Para el MVP visual puede utilizarse una sola reacción principal y dejar el resto documentado como evolución futura.

---

## 6. Comportamiento reactivo de la plataforma

La aplicación puede adaptarse al contexto emocional sin cambiar completamente su estructura.

### Elementos que sí pueden reaccionar

- Color ambiental de fondo.
- Brillo o halo alrededor de la portada.
- Mensaje de bienvenida.
- Recomendaciones.
- Ilustraciones o partículas muy sutiles.
- Microanimaciones.

### Elementos que no deben cambiar

- Posición de navegación.
- Jerarquía de botones.
- Tipografía base.
- Contraste mínimo.
- Significado de los colores funcionales.

La personalización debe sentirse como ambiente, no como una interfaz distinta cada vez.

---

## 7. Alcance del prototipo visual

### Incluir

- Navegación principal.
- Inicio interactivo con datos simulados.
- Selector visual de emociones.
- Flujo de creación de un momento musical.
- Tarjeta de momento musical.
- Explorar.
- Mi diario.
- Biblioteca simulada.
- Perfil simulado.
- Modo oscuro y modo claro.
- Diseño responsive.

### Posponer

- Reproductor musical completo.
- Integración real con Spotify.
- Autenticación.
- Mensajería privada.
- Compatibilidad tipo Tinder.
- Estadísticas reales.
- Algoritmos de recomendación.
- Chat en tiempo real.
- Inteligencia artificial.

---

## 8. Ruta recomendada de implementación

1. Crear el layout general y la navegación.
2. Diseñar la página de Inicio con contenido simulado.
3. Crear el componente reutilizable `MoodSelector`.
4. Crear el componente `MusicMomentCard`.
5. Implementar el flujo visual para guardar un momento.
6. Crear Mi diario.
7. Crear Explorar.
8. Crear Perfil y Biblioteca.
9. Añadir modo claro y responsive.
10. Revisar accesibilidad, estados vacíos y consistencia.

---

## 9. Criterio de éxito

Una persona que vea el prototipo durante menos de un minuto debe comprender que SoundVerse es:

> Un diario musical personal que permite expresar emociones, conservar recuerdos y conectar con otras personas mediante canciones.
