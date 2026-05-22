
* **Subtítulo:** Una solución Full-Stack para pastelería artesanal

* **Acción en pantalla:** Mostrar la portada del proyecto con una imagen de macarons de fondo y el logotipo o nombre del proyecto en grande.

### 🎙️ Discurso del orador:
> "Buenos días a todos. Mi nombre es Lilianne y hoy tengo el placer de presentarles **L'Héritage d'Antoine**, una aplicación web interactiva y full-stack diseñada específicamente para una pastelería gourmet de macarons de lujo en el corazón de Valencia. 
> 
> Este proyecto no nace simplemente como una página web informativa, sino como una herramienta tecnológica para resolver un problema crítico en la gestión de la pastelería artesanal: la concordancia en tiempo real entre lo que se produce en el obrador y lo que el cliente ve disponible en la web. A lo largo de esta presentación de 12 minutos, recorreremos la experiencia del cliente, el panel de administración, y analizaremos las decisiones técnicas detrás de la arquitectura y su despliegue."

---

## DIAPOSITIVA 2: El Problema de la Pastelería Artesanal
* **Título sugerido:** El Desafío del Stock Perecedero
* **Tiempo acumulado:** `01:00 - 01:30` (30 segundos)
* **Acción en pantalla:** Esquema sencillo con dos columnas: "Problema" (Clientes frustrados por falta de stock, obrador incomunicado) vs. "Solución" (Vitrina sincronizada, control administrativo simplificado).

### 🎙️ Discurso del orador:
> "Las pastelerías gourmet se enfrentan a un desafío diario: el inventario de productos frescos como los macarons cambia por horas. Si un sabor popular como el *Macaron de Pistacho de Sicilia* se agota a las 11 de la mañana y la página web sigue listándolo como disponible, los clientes se frustran al llegar a la tienda física. 
>
> Por el contrario, ocultar un sabor por completo impide que el cliente conozca nuestra oferta. La solución planteada en este proyecto es una **Vitrina en Vivo** conectada directamente a un panel administrativo donde el maestro pastelero puede marcar la disponibilidad con un solo click."

---

## DIAPOSITIVA 3: Storytelling y Dirección de Diseño (Branding)
* **Título sugerido:** Identidad Visual y Storytelling Gourmet
* **Tiempo acumulado:** `01:30 - 03:00` (1 minuto y 30 segundos)
* **Acción en pantalla:** Captura de la sección 'Historia' de la web cliente, destacando la tipografía de Google Fonts (*Playfair Display* y *Outfit*) y la paleta de colores en tonos rosa y oro.

### 🎙️ Discurso del orador:
> "Para un producto premium, el diseño y la historia lo son todo. Hemos dotado a la web cliente de una fuerte identidad de marca. El storytelling nos narra los inicios de Antoine en un humilde garaje en Valencia, luchando contra la humedad del clima mediterráneo para conseguir la cáscara perfecta del macaron, la famosa *croûte*.
>
> A nivel estético, hemos huido de las plantillas genéricas. Se diseñó una interfaz con tonos pastel suaves, blanco roto, rosa palo y toques dorados que transmiten exclusividad. La tipografía combina la elegancia clásica de *Playfair Display* para títulos con la modernidad limpia de *Outfit* para lectura. Además, implementamos navegación con efectos de desenfoque de fondo (*glassmorphic navbar*) y transiciones dinámicas que hacen que la página se sienta premium desde el primer segundo."

---

## DIAPOSITIVA 4: La Experiencia del Cliente — Interfaz Pública
* **Título sugerido:** La Vitrina Virtual en Vivo
* **Tiempo acumulado:** `03:00 - 04:30` (1 minuto y 30 segundos)
* **Acción en pantalla:** Mostrar la sección **#vitrina** en vivo en el navegador. Explicar qué ocurre cuando un elemento está agotado.

### 🎙️ Discurso del orador:
> "Pasemos a ver el comportamiento de la aplicación. En la sección principal de la web del cliente encontramos nuestra **Vitrina en Vivo**. 
>
> Al cargar la página, el frontend realiza una petición asíncrona a nuestra API REST. Si el servidor responde correctamente, se cargan las tarjetas de cada macaron de forma dinámica. Si un sabor no está disponible hoy, la web no lo oculta, sino que lo renderiza de manera elegante con una opacidad reducida del 55%, un sutil filtro de escala de grises y una etiqueta de *'Agotado hoy'*. Esto mantiene el deseo del cliente por el sabor para su próxima visita, a la vez que gestiona sus expectativas reales.
>
> Como medida de robustez, si el servidor Express no está disponible o el cliente pierde la conexión, la web cuenta con un catálogo de respaldo offline autoejecutable para asegurar que la página nunca aparezca rota."

---

## DIAPOSITIVA 5: Navegación y Conversión
* **Título sugerido:** Packs Gourmet, Slider Expositivo y Reservas
* **Tiempo acumulado:** `04:30 - 06:00` (1 minuto y 30 segundos)
* **Acción en pantalla:** Desplazarse por el acordeón de categorías de la web, el carrusel de fotos que rota automáticamente cada 4 segundos, y abrir el modal de 'Contacto Rápido'.

### 🎙️ Discurso del orador:
> "Para fomentar la venta, la web ofrece diferentes secciones interactivas. Por un lado, tenemos un menú interactivo con nuestros **Packs Gourmet**, desde el pack individual básico hasta el pack de lujo en caja de arce.
>
> También contamos con un **acordeón colapsable** que organiza los sabores por familias —Exóticos, Clásicos e Históricos— optimizando el espacio en pantalla. 
> 
> Justo debajo, un **carrusel animado de imágenes** expone las variedades destacadas con micro-animaciones. Finalmente, implementamos un modal de **'Contacto Rápido'** que promueve llamadas telefónicas directas con promociones especiales de mostrador, y un formulario de contacto asíncrono. Cuando el cliente envía el formulario, el sistema no recarga la página, sino que procesa los datos y lanza una alerta flotante personalizada que saluda al usuario por su nombre, manteniendo una navegación fluida."

---

## DIAPOSITIVA 6: El Panel de Administración (Backoffice)
* **Título sugerido:** Panel de Control del Obrador
* **Tiempo acumulado:** `06:00 - 07:30` (1 minuto y 30 segundos)
* **Acción en pantalla:** Mostrar la interfaz de `admin.html`. Señalar el avatar de la chef pastelería Marie Laurent y la sección superior de KPIs.

### 🎙️ Discurso del orador:
> "Ahora nos ponemos en la piel del personal de cocina. Accediendo a la ruta segura, entramos al Panel de Control de los empleados. Aquí la interfaz cambia a un diseño enfocado a la productividad.
>
> En primer lugar, vemos el perfil de la sesión: en este caso, la Chef Pastelera *Marie Laurent*. 
>
> En la parte superior, el sistema calcula de forma dinámica y muestra mediante **tarjetas KPI** las estadísticas del día en tiempo real: número total de sabores en la carta, cuántos de ellos están actualmente expuestos en vitrina y cuántos están temporalmente agotados. A su lado, un indicador visual de color verde nos confirma si el panel está sincronizado y conectado con el servidor backend."

---

## DIAPOSITIVA 7: Gestión de Inventario Dinámica
* **Título sugerido:** Edición en Caliente e interactividad
* **Tiempo acumulado:** `07:30 - 09:00` (1 minuto y 30 segundos)
* **Acción en pantalla:** Hacer una demostración en el panel de administración. Escribir una búsqueda en el buscador, filtrar por "Agotados", abrir el panel de nuevo sabor, y cambiar el switch de disponibilidad de un macaron.

### 🎙️ Discurso del orador:
> "El panel cuenta con herramientas avanzadas para agilizar el trabajo en un obrador con alta actividad. Dispone de un **buscador instantáneo** que filtra las tarjetas por el nombre del sabor a medida que escribimos y de pestañas de filtro rápido para ver solo lo que está disponible o agotado.
>
> Además, los empleados pueden dar de alta nuevos sabores de temporada rellenando un formulario desplegable. 
>
> Pero la característica más potente es la **edición directa o en caliente**. No hay complicadas tablas ni formularios de edición secundarios. Si el precio del azúcar sube, la chef puede hacer click directamente sobre el campo de precio de la tarjeta, editarlo y el sistema registrará los cambios. Si el último macaron de Red Velvet se vende en el mostrador, basta con pulsar el interruptor deslizante (*switch toggle*) y la tarjeta se actualiza visualmente al instante, enviando los datos al servidor para actualizar la web pública."

---

## DIAPOSITIVA 8: Arquitectura Técnica y Persistencia
* **Título sugerido:** Backend con Node.js, Express y JSON
* **Tiempo acumulado:** `09:00 - 10:00` (1 minuto)
* **Acción en pantalla:** Diagrama de flujo de datos: Frontend (`micafe.html` / `admin.html`) ⇄ REST API (Endpoints GET/POST en `server.js`) ⇄ Persistencia de datos en `macarons.json`.

### 🎙️ Discurso del orador:
> "Detrás del diseño visual se encuentra una arquitectura robusta y sencilla. Hemos desarrollado el backend utilizando **Node.js** con el framework **Express**. 
>
> El servidor expone dos endpoints principales bajo una API REST básica:
> 1. Un método `GET /api/macarons` que lee los datos físicos del archivo JSON y los entrega en formato estructurado a los clientes.
> 2. Un método `POST /api/macarons` que recibe los cambios estructurados del panel de administración, valida que los datos sean correctos para evitar inyecciones o corrupción y los sobrescribe en el disco de manera formateada para facilitar el mantenimiento técnico.
>
> Esta solución evita la sobrecarga de configurar una base de datos pesada para un negocio local, asegurando tiempos de respuesta inferiores a los 50 milisegundos."

---

## DIAPOSITIVA 9: Desafío Técnico de Despliegue en la Nube
* **Título sugerido:** Superando las Limitaciones Serverless
* **Tiempo acumulado:** `10:00 - 11:00` (1 minuto)
* **Acción en pantalla:** Mostrar fragmento del código de `server.js` donde se implementa la lógica de la carpeta temporal `/tmp`.

### 🎙️ Discurso del orador:
> "Durante la fase de despliegue, nos enfrentamos a un reto técnico importante: las plataformas modernas en la nube como Vercel utilizan contenedores serverless con **sistemas de archivos de solo lectura**. Si intentamos guardar el catálogo directamente en el directorio de la aplicación, el servidor se cae al dar un error de escritura.
>
> Para solucionar esto, implementamos una lógica inteligente de entorno en `server.js`. El backend detecta si se está ejecutando en Vercel. Si es así, copia dinámicamente nuestra base de datos plantilla `macarons.json` al directorio temporal `/tmp` del sistema operativo en el arranque y redirige todas las lecturas y escrituras allí. Si se ejecuta en local, sigue utilizando el directorio raíz. Con este workaround, logramos un despliegue gratuito, estable y con capacidad de escritura sin coste de base de datos externa."

---

## DIAPOSITIVA 10: Conclusión y Cierre
* **Título sugerido:** Innovación para el Comercio Local
* **Tiempo acumulado:** `11:00 - 12:00` (1 minuto)
* **Acción en pantalla:** Datos de contacto del obrador, dirección en Calle de la Paz de Valencia, y el texto "Preguntas y Respuestas".

### 🎙️ Discurso del orador:
> "En conclusión, **L'Héritage d'Antoine** demuestra cómo la tecnología puede empoderar al comercio tradicional. Con una pila tecnológica ligera pero muy bien optimizada, hemos creado una solución que:
> - Da autonomía absoluta al obrador para gestionar su vitrina.
> - Evita la frustración del cliente mejorando la transparencia de stock.
> - Y ofrece una experiencia de usuario estética y veloz que está a la altura de una marca de lujo.
>
> Este desarrollo sienta las bases para futuras implementaciones, como la pasarela de pago online para reservas automatizadas.
>
> Muchas gracias por su atención. Quedo a su disposición para cualquier pregunta que deseen realizar sobre el desarrollo o la arquitectura del proyecto."

---

## 💡 Consejos para la Defensa (Para sacar la máxima nota)
1. **Control del Ritmo:** En los minutos dedicados a las demos (`03:00` a `09:00`), no te limites a explicar el código. Interactúa con la web en tiempo real: cambia la disponibilidad de un macaron en el panel de administrador y recarga la web del cliente en otra pestaña para demostrar la magia del tiempo real.
2. **Seguridad y Validación:** Si el tribunal te pregunta por la robustez del método POST, destaca que en `server.js` se valida rigurosamente que la entrada sea un array (`Array.isArray`) antes de escribir en disco, evitando que se corrompa el archivo `macarons.json`.
3. **El Truco de Vercel:** El tribunal de programación suele valorar enormemente que se expliquen los problemas reales y las soluciones aplicadas. Explicar el código de `/tmp` en entornos serverless demuestra que entiendes el entorno de ejecución en la nube.
