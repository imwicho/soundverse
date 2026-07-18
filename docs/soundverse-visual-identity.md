# SoundVerse — Identidad visual y sistema de diseño inicial

## 1. Concepto visual

La identidad de SoundVerse debe transmitir cuatro cualidades:

- **Íntima:** se siente como un espacio personal.
- **Vibrante:** la música y las emociones aportan energía.
- **Inmersiva:** el ambiente acompaña al estado del usuario.
- **Serena:** la interfaz no compite con el contenido.

La dirección visual puede resumirse como:

> **Intimidad nocturna con energía emocional.**

SoundVerse no debe parecer una discoteca, una app de streaming genérica ni una red social saturada. Debe sentirse como un diario contemporáneo iluminado por la música.

---

## 2. Personalidad de marca

### Es

- Humana.
- Expresiva.
- Contemporánea.
- Cercana.
- Reflexiva.
- Inclusiva.

### No es

- Infantil.
- Excesivamente dramática.
- Caótica.
- Tecnológica o fría.
- Competitiva.
- Visualmente agresiva.

---

## 3. Paleta principal

El morado será el color de identidad. El naranja funcionará como contrapunto cálido y energético.

## 3.1 Modo oscuro

```css
--background: #0B0910;
--surface-1: #131019;
--surface-2: #1B1723;
--surface-3: #25202F;
--text-primary: #F7F3FC;
--text-secondary: #B8AEC4;
--text-muted: #81778E;
--border-subtle: #2D2737;
--brand-primary: #9B6CFF;
--brand-primary-hover: #AC87FF;
--brand-secondary: #FF8A4C;
--focus-ring: #C4A7FF;
```

## 3.2 Modo claro

```css
--background: #FAF8FC;
--surface-1: #FFFFFF;
--surface-2: #F3EFF7;
--surface-3: #EAE4F0;
--text-primary: #211A29;
--text-secondary: #645A70;
--text-muted: #8B8195;
--border-subtle: #DDD5E5;
--brand-primary: #7546D8;
--brand-primary-hover: #6336C1;
--brand-secondary: #D96528;
--focus-ring: #8E68E8;
```

### Uso de color

- Morado: acción principal, selección, navegación activa y elementos de marca.
- Naranja: celebraciones, energía, descubrimiento y pequeños acentos.
- Colores de portadas: ambiente contextual y fondos difuminados.
- Rojo, verde y amarillo: únicamente para estados funcionales cuando sean necesarios.

No utilizar morado y naranja con la misma intensidad en toda la interfaz. El morado domina; el naranja acentúa.

---

## 4. Sistema emocional de color

Cada emoción puede tener un color ambiental propio, pero nunca reemplazará los colores funcionales ni reducirá el contraste.

```text
Alegría      → ámbar suave
Calma        → azul lavanda
Nostalgia    → violeta grisáceo
Amor         → rosa profundo
Tristeza     → azul nocturno
Energía      → naranja vivo
Esperanza    → verde menta
Confusión    → índigo
```

### Aplicación

El color emocional puede aparecer en:

- halo de la portada;
- fondo degradado muy tenue;
- icono de emoción;
- borde o etiqueta;
- visualización de estadísticas.

No debe colorear bloques completos de texto ni reducir la legibilidad.

---

## 5. Tipografía

### Recomendación principal

- **Inter** para interfaz, texto y navegación.
- **Manrope** o **Plus Jakarta Sans** para títulos de canciones, emociones y encabezados destacados.

Para mantener simple el MVP, se puede comenzar únicamente con **Inter** y utilizar variaciones de peso y tamaño. Una segunda familia se añadirá solo si aporta una diferencia clara.

### Escala sugerida

```text
Display       48/52  700
H1            36/42  700
H2            28/34  650
H3            22/28  650
Title         18/24  600
Body          16/24  400
Body small    14/20  400
Caption       12/16  500
```

### Regla de jerarquía

- Título de canción: peso visual alto.
- Artista: secundario.
- Emoción: visible y reconocible.
- Reflexión: legible y tranquila.
- Métricas sociales: discretas.

---

## 6. Formas y superficies

### Bordes redondeados

```text
Pequeño:   8 px
Medio:    12 px
Grande:   18 px
Portadas: 14–18 px
Píldoras: 999 px
```

### Bordes

Usar bordes de 1 px con bajo contraste. Evitar encerrar todos los elementos; utilizar separación por espacio antes que por líneas.

### Sombras

En modo oscuro, preferir halos, contraste de superficie y brillos sutiles. En modo claro, usar sombras suaves y cortas.

```css
--shadow-card-light: 0 8px 24px rgba(36, 24, 44, 0.08);
--shadow-card-dark: 0 12px 32px rgba(0, 0, 0, 0.28);
```

### Glassmorphism

Puede utilizarse de manera limitada en:

- reproductor o tarjeta flotante;
- modal de creación;
- controles superpuestos a una portada.

No usarlo en todas las tarjetas ni como base de la interfaz.

---

## 7. Espaciado y densidad

Utilizar una escala de 4 px:

```text
4, 8, 12, 16, 20, 24, 32, 40, 48, 64
```

### Principios

- Las publicaciones deben respirar.
- Separación entre tarjetas: mínimo 20–24 px.
- Padding de tarjeta: 16 px móvil, 20–24 px escritorio.
- Ancho máximo del contenido principal: aproximadamente 760–840 px.
- Las líneas de texto reflexivo no deben ser demasiado largas.

---

## 8. Componentes visuales principales

## 8.1 Selector de emoción

- Botones tipo píldora o tarjetas compactas.
- Icono más etiqueta.
- Estado seleccionado con halo y borde de marca.
- No depender solo del color.
- Navegable por teclado.

## 8.2 Tarjeta de momento musical

Jerarquía:

1. Usuario y fecha.
2. Emoción.
3. Portada.
4. Título de canción y artista.
5. Reflexión.
6. Acciones sociales discretas.

La portada puede ocupar entre el 30 % y el 40 % de la tarjeta en escritorio. En móvil puede usar una composición horizontal compacta o una portada superior, según el contexto.

## 8.3 Tarjeta de recuerdo personal

Debe sentirse más íntima que una publicación pública:

- menor presencia de métricas;
- fecha más visible;
- privacidad clara;
- énfasis en la reflexión;
- acciones de editar y recordar.

## 8.4 Botón principal

- Fondo morado.
- Texto de alto contraste.
- Altura mínima de 44 px.
- Radio de 12 px o píldora según contexto.
- Etiquetas humanas: “Guardar momento”, “Compartir canción”, “Explorar sensaciones”.

---

## 9. Imágenes y portadas

Las portadas de álbumes aportan diversidad visual. Para mantener coherencia:

- respetar su proporción cuadrada;
- no colocar texto importante directamente encima sin una capa de contraste;
- extraer o simular uno o dos colores dominantes para el ambiente;
- aplicar desenfoque únicamente al fondo, no a la portada principal;
- usar degradados oscuros o claros para preservar legibilidad.

---

## 10. Movimiento y microinteracciones

La interfaz debe reaccionar con suavidad, no llamar la atención sobre la animación.

### Duraciones

```text
Rápida:   120–160 ms
Normal:   180–240 ms
Ambiental: 400–700 ms
```

### Interacciones

- Hover de tarjeta: elevar 2–4 px y aumentar ligeramente el brillo.
- Selección de emoción: escala breve y aparición del halo.
- Guardar momento: confirmación visual y transición hacia el diario.
- Like o reacción: animación pequeña, sin explosiones excesivas.
- Cambio de canción: fundido entre colores ambientales.
- Carga: skeletons, no spinners dominantes.

### Accesibilidad

Respetar `prefers-reduced-motion` y ofrecer una experiencia completa sin animaciones.

---

## 11. Voz y microcopy

El lenguaje debe ser cercano, breve y no clínico.

### Usar

- “¿Cómo te sientes hoy?”
- “Guarda este momento”.
- “¿Qué significa esta canción para ti?”
- “Una canción para acompañarte”.
- “Vuelve a un recuerdo”.

### Evitar

- “Crear post”.
- “Insertar estado emocional”.
- “Publicar contenido”.
- “Completa los campos”.
- Mensajes que diagnostiquen o interpreten emocionalmente al usuario.

SoundVerse acompaña; no pretende actuar como terapeuta.

---

## 12. Modo claro y modo oscuro

Ambos modos son productos de primera clase.

### Modo oscuro

- Más inmersivo y nocturno.
- Superficies profundas con contraste gradual.
- Halos y colores ambientales visibles.

### Modo claro

- Cálido, no blanco clínico.
- Fondos con matiz lavanda muy tenue.
- Sombras y bordes más importantes que los halos.
- Colores emocionales ligeramente más oscuros para conservar contraste.

La elección del tema será manual. En el futuro puede respetarse el tema del sistema como valor inicial.

---

## 13. Accesibilidad mínima

- Contraste WCAG AA para texto normal.
- Objetivos táctiles de al menos 44 × 44 px.
- Estados de foco visibles.
- No comunicar emociones únicamente mediante color.
- Texto alternativo para portadas.
- Navegación completa con teclado.
- Soporte para reducción de movimiento.
- Tamaño de texto base de 16 px.

---

## 14. Restricciones para Codex

Codex debe:

- implementar primero los tokens mediante variables CSS;
- evitar colores escritos directamente en múltiples componentes;
- crear componentes reutilizables solo cuando exista repetición real;
- no instalar librerías de animación durante la primera iteración;
- usar transiciones CSS simples;
- conservar datos simulados separados de los componentes;
- implementar primero modo oscuro y después validar modo claro;
- evitar copiar visualmente Spotify, Instagram o Tinder;
- mantener el contenido social como elemento secundario en Inicio.

---

## 15. Criterio visual de éxito

SoundVerse debe reconocerse como una aplicación musical, pero sentirse más personal que un servicio de streaming y más tranquila que una red social tradicional.

La experiencia ideal comunica:

> “Este espacio cambia conmigo, pero sigue sintiéndose mío.”
