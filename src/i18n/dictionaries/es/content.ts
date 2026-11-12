import type { ContentDictionary } from "../../types";

const content: ContentDictionary = {
  categories: {
    "image-tools": {
      name: "Herramientas de imagen",
      shortName: "Imagen",
      tagline: "Comprimir y redimensionar",
      description:
        "Herramientas de imagen gratis que funcionan en tu navegador. Tus fotos se procesan en tu propio dispositivo y nunca se suben a un servidor.",
    },
    "pdf-tools": {
      name: "Herramientas PDF",
      shortName: "PDF",
      tagline: "Unir y convertir",
      description:
        "Trabaja con archivos PDF sin instalar ningún programa. Los archivos se quedan en tu dispositivo, así que tus documentos privados siguen siendo privados.",
    },
    calculators: {
      name: "Calculadoras",
      shortName: "Calculadoras",
      tagline: "Cálculos al instante",
      description:
        "Calculadoras rápidas y precisas para préstamos, finanzas y cálculos del día a día, con el desglose completo de cada resultado.",
    },
    "text-tools": {
      name: "Herramientas de texto",
      shortName: "Texto",
      tagline: "Editar y formatear texto",
      description:
        "Cuenta, limpia y transforma texto al instante. Ideal para estudiantes, redactores, blogueros y cualquiera que tenga un límite de palabras.",
    },
    "developer-tools": {
      name: "Herramientas para desarrolladores",
      shortName: "Desarrollo",
      tagline: "JSON y codificación",
      description:
        "Utilidades para el día a día de los desarrolladores: formatea, valida y convierte datos sin pegarlos en un servidor remoto.",
    },
    "seo-tools": {
      name: "Herramientas SEO",
      shortName: "SEO",
      tagline: "Palabras clave y snippets",
      description:
        "Encuentra ideas de palabras clave y comprueba cómo se ven tus páginas en los resultados de búsqueda, con herramientas pensadas para blogueros y dueños de webs.",
    },
  },

  tools: {
    "image-compressor": {
      name: "Comprimir imagen",
      summary: "Reduce el tamaño de tus JPG, PNG y WebP sin perder calidad visible.",
      seoTitle: "Comprimir imagen online gratis – JPG, PNG y WebP",
      seoDescription:
        "Comprime imágenes JPG, PNG y WebP online y gratis. Reduce el tamaño y el peso de tus fotos, redimensiónalas y conviértelas sin subirlas a ningún servidor.",
      keywords: [
        "comprimir imagen",
        "reducir tamaño de imagen",
        "comprimir imagen online",
        "reducir peso de imagen",
        "compresor de imágenes",
        "comprimir jpg",
        "comprimir png",
        "reducir tamaño de foto",
      ],
      howTo: [
        "Haz clic en “Elige imágenes” o arrastra tus archivos JPG, PNG o WebP al recuadro. Puedes añadir varios a la vez.",
        "Mueve el control de calidad. Un 70 % es un buen punto de partida para fotos, y el nuevo tamaño del archivo se actualiza automáticamente.",
        "Si quieres, elige otro formato de salida o define un ancho máximo para reducir las fotos grandes.",
        "Descarga cada imagen por separado o haz clic en “Descargar todas”.",
      ],
      content: [
        { h2: "¿Por qué comprimir imágenes?" },
        {
          p: "Una foto recién hecha con la cámara del teléfono suele pesar entre 3 y 5 MB. Es mucho más de lo que necesitas para una web, un adjunto de correo o un formulario online, donde normalmente bastan 100–300 KB. Las imágenes más ligeras se suben antes, cargan más rápido para tus visitantes y te ayudan a no superar los límites de tamaño de los trámites administrativos online, las solicitudes de becas y los portales de empleo.",
        },
        { h2: "¿Qué formato de salida elegir?" },
        {
          ul: [
            "**JPG** funciona en todas partes y es la mejor opción para fotografías.",
            "**WebP** es un formato moderno que suele ocupar un 25–35 % menos que JPG con la misma calidad visual. Todos los navegadores modernos lo admiten, pero algunas aplicaciones antiguas y formularios de subida no.",
            "**PNG** es un formato sin pérdida. Úsalo para capturas de pantalla, logotipos y gráficos con transparencia. Con fotos genera archivos mucho más pesados.",
          ],
        },
        { h2: "Privacidad desde el diseño" },
        {
          p: "Muchos compresores online suben tus fotos a sus servidores. Este no. Usa el motor de imágenes integrado en tu navegador, así que tus archivos nunca salen de tu dispositivo y, una vez cargada la página, la herramienta sigue funcionando incluso con una conexión lenta.",
        },
      ],
      faqs: [
        {
          q: "¿Comprimir una imagen reduce su calidad?",
          a: "La compresión JPG y WebP es con pérdida: se elimina algo de detalle para ahorrar espacio. Con una calidad del 60–80 %, la diferencia suele ser invisible en pantalla. Tu archivo original nunca se modifica, así que siempre puedes volver a intentarlo con una calidad más alta.",
        },
        {
          q: "¿Cómo comprimo una imagen a 100 KB o 200 KB?",
          a: "Baja el control de calidad y observa cómo se actualiza el nuevo tamaño. Si la imagen sigue siendo demasiado grande, define un ancho máximo, por ejemplo 1200 píxeles. Las fotos grandes del teléfono suelen quedar por debajo de 200 KB al redimensionarlas a unos 1200–1600 píxeles de ancho.",
        },
        {
          q: "¿Se suben mis imágenes a un servidor?",
          a: "No. Toda la compresión se hace en tu navegador, en tu propio dispositivo. Tus imágenes nunca se envían a nosotros ni a nadie más, por lo que la herramienta es segura para documentos de identidad, escaneos y fotos personales.",
        },
        {
          q: "¿Por qué mi archivo PNG casi no reduce su tamaño?",
          a: "PNG es un formato sin pérdida, así que el ajuste de calidad no le afecta. Para que un PNG ocupe mucho menos, conviértelo a WebP o JPG, o reduce su ancho. Reserva PNG para logotipos, iconos y capturas de pantalla que necesiten bordes nítidos o transparencia.",
        },
        {
          q: "¿Hay un límite de imágenes que pueda comprimir?",
          a: "No ponemos ningún límite. Puedes añadir todas las imágenes que quieras. Las imágenes muy grandes (de más de 50 megapíxeles) pueden ir lentas en teléfonos antiguos, porque todo el trabajo se hace en tu dispositivo.",
        },
      ],
    },

    "merge-pdf": {
      name: "Unir PDF",
      summary: "Junta varios PDF en un solo documento, en el orden que quieras.",
      seoTitle: "Unir PDF online gratis – Juntar archivos PDF en uno",
      seoDescription:
        "Une varios archivos PDF en uno en segundos y ordénalos antes de combinarlos. Gratis, sin registro y sin que tus PDF salgan nunca de tu dispositivo.",
      keywords: [
        "unir pdf",
        "juntar pdf",
        "combinar pdf",
        "unir archivos pdf",
        "unir pdf online",
        "unir pdf gratis",
        "juntar archivos pdf en uno",
        "fusionar pdf",
      ],
      howTo: [
        "Haz clic en “Elige archivos PDF” o arrastra dos o más PDF al recuadro.",
        "Ordena los archivos como quieras con las flechas hacia arriba y hacia abajo.",
        "Haz clic en “Unir y descargar”. El archivo combinado se guarda como merged.pdf.",
      ],
      content: [
        { h2: "¿Cuándo es útil unir PDF?" },
        {
          ul: [
            "Para subir varios documentos (documento de identidad, certificados, títulos) a una plataforma o formulario online que solo admite un archivo.",
            "Para combinar páginas escaneadas en un único documento.",
            "Para enviar a quien lleva tu contabilidad un único archivo ordenado con facturas o recibos.",
            "Para juntar capítulos o informes en un solo PDF y leerlos o imprimirlos con más comodidad.",
          ],
        },
        { h2: "¿Qué se conserva en el archivo unido?" },
        {
          p: "El contenido, el tamaño y la orientación de cada página se copian exactamente. Los elementos interactivos de los archivos originales, como los campos de formulario, los marcadores y el índice, pueden no conservarse en el documento final.",
        },
        { h2: "Privacidad desde el diseño" },
        {
          p: "La mayoría de las webs de PDF suben tus documentos a sus servidores para procesarlos. Esta herramienta usa la biblioteca de código abierto pdf-lib para hacer el trabajo en tu navegador, así que tus archivos nunca salen de tu dispositivo.",
        },
      ],
      faqs: [
        {
          q: "¿Hay un límite de número o de tamaño de los PDF?",
          a: "No ponemos ningún límite. Como la unión se hace en tu dispositivo, el límite práctico depende de su memoria. Los documentos de cientos de páginas se unen sin problemas en la mayoría de los equipos y teléfonos actuales.",
        },
        {
          q: "¿Puedo unir PDF protegidos con contraseña?",
          a: "No. Los PDF cifrados no se pueden combinar hasta quitarles la protección. Abre el archivo con su contraseña en un lector de PDF, guarda una copia sin protección y une esa copia.",
        },
        {
          q: "¿Unir PDF reduce la calidad?",
          a: "No. Las páginas se copian tal cual, sin volver a comprimir textos ni imágenes, así que el PDF unido se ve idéntico a los originales.",
        },
        {
          q: "¿Puedo unir PDF desde el móvil (celular)?",
          a: "Sí. La herramienta funciona en Chrome, Safari, Firefox y otros navegadores móviles modernos. Elige los archivos del almacenamiento de tu teléfono, ordénalos y toca “Unir y descargar”.",
        },
        {
          q: "¿Se suben mis archivos PDF a algún sitio?",
          a: "No. Tus PDF se leen y se combinan dentro de tu navegador y nunca se suben a un servidor. Así mantienes en privado documentos sensibles como tu documento de identidad, contratos o extractos bancarios.",
        },
      ],
    },

    "emi-calculator": {
      name: "Calculadora de préstamos",
      summary: "Calcula tu cuota mensual, los intereses y la tabla de amortización.",
      seoTitle: "Calculadora de préstamos e hipotecas – Cuota mensual",
      seoDescription:
        "Calcula al instante la cuota mensual de tu préstamo, los intereses y el total a pagar, con tabla de amortización anual. Para hipotecas y préstamos personales.",
      keywords: [
        "calculadora de préstamos",
        "simulador de préstamos",
        "calculadora de hipoteca",
        "simulador de hipoteca",
        "calcular cuota de préstamo",
        "calculadora de cuotas",
        "tabla de amortización",
        "calculadora préstamo personal",
      ],
      howTo: [
        "Escribe el importe del préstamo y elige la moneda.",
        "Escribe el interés anual que te ofrece tu banco o entidad financiera.",
        "Indica el plazo del préstamo en años o en meses.",
        "La cuota mensual, los intereses totales y el total a pagar se actualizan al instante, junto con una tabla de amortización año por año.",
      ],
      content: [
        { h2: "¿Qué es la cuota mensual de un préstamo?" },
        {
          p: "La **cuota mensual** es la cantidad fija que pagas a tu banco cada mes hasta devolver el préstamo por completo. Es el llamado **sistema de amortización francés**, el más habitual en hipotecas y préstamos personales. Cada cuota tiene dos partes: los intereses sobre el capital pendiente y una parte de devolución del capital (amortización). En los primeros años, la mayor parte de la cuota son intereses; en los últimos, casi todo es capital.",
        },
        { h2: "La fórmula de la cuota mensual" },
        {
          p: "**Cuota = P × r × (1 + r)ⁿ ÷ ((1 + r)ⁿ − 1)**, donde P es el importe del préstamo, r es el interés mensual (interés anual ÷ 12 ÷ 100) y n es el número de cuotas mensuales.",
        },
        {
          p: "Por ejemplo, un préstamo de 200.000 € al 3,5 % anual a 25 años da r = 0,00292 y n = 300, así que la cuota mensual es de unos **1.001 €**. En 25 años devolverías unos 300.374 €, de los cuales unos 100.374 € son intereses.",
        },
        { h2: "Cómo pagar menos intereses" },
        {
          ul: [
            "**Elige un plazo más corto si te lo puedes permitir.** Un plazo más largo baja la cuota, pero aumenta mucho los intereses totales.",
            "**Haz pagos anticipados cuando puedas.** Incluso los pagos extra ocasionales al principio del préstamo reducen bastante los intereses totales.",
            "**Compara entidades.** Una diferencia de solo 0,5 puntos en el interés se traduce en mucho dinero en una hipoteca a largo plazo.",
            "**Da una entrada o pago inicial mayor** para reducir la cantidad que pides prestada.",
          ],
        },
        {
          p: "**Nota:** los resultados son estimaciones orientativas. Las cifras exactas de tu banco pueden variar ligeramente por comisiones, redondeos y cambios en el interés. Esto no es asesoramiento financiero.",
        },
      ],
      faqs: [
        {
          q: "¿Sirve para hipotecas, préstamos personales y préstamos para vehículos?",
          a: "Sí. La calculadora funciona con cualquier préstamo que cobre intereses sobre el capital pendiente, lo que incluye casi todas las hipotecas, préstamos personales, préstamos para vehículos y préstamos para estudios.",
        },
        {
          q: "¿Funciona con un interés variable?",
          a: "El cálculo supone que el interés se mantiene igual durante todo el plazo. Si tienes un préstamo a interés variable, vuelve a calcular con el nuevo interés cada vez que tu banco lo revise.",
        },
        {
          q: "¿La cuota incluye comisiones de apertura o seguros?",
          a: "No. El resultado solo incluye capital e intereses. Las comisiones de apertura, los seguros del préstamo y otros gastos van aparte y dependen de tu entidad.",
        },
        {
          q: "¿Qué pasa si adelanto el pago de una parte del préstamo?",
          a: "Un pago anticipado reduce el capital pendiente, así que a partir de entonces pagas menos intereses. La mayoría de los bancos te permiten elegir entre reducir el plazo o reducir la cuota. Comprueba si tu banco cobra una comisión por pago anticipado.",
        },
        {
          q: "¿Por qué al principio la mayor parte de la cuota son intereses?",
          a: "Los intereses se calculan sobre el capital pendiente, que es más alto al principio del préstamo. A medida que devuelves capital, la parte de intereses de cada cuota disminuye y la de capital aumenta. Puedes verlo en la tabla anual de arriba.",
        },
      ],
    },

    "word-counter": {
      name: "Contador de palabras",
      summary: "Cuenta palabras, caracteres, frases y tiempo de lectura al instante.",
      seoTitle: "Contador de palabras y caracteres online gratis",
      seoDescription:
        "Contador de palabras online gratis. Cuenta palabras, caracteres, frases y párrafos y calcula el tiempo de lectura. Funciona en español y en cualquier idioma.",
      keywords: [
        "contador de palabras",
        "contador de caracteres",
        "contar palabras",
        "contador de letras",
        "contar caracteres",
        "contador de palabras online",
        "contador de caracteres con espacios",
        "calcular tiempo de lectura",
      ],
      howTo: [
        "Escribe en el recuadro o pega tu texto.",
        "Los recuentos de palabras, caracteres, frases y párrafos se actualizan al instante mientras escribes.",
        "Consulta el tiempo estimado de lectura y en voz alta, y mira qué palabras clave repites más.",
        "Usa “Copiar texto” para copiar lo que has escrito o “Borrar” para empezar de nuevo.",
      ],
      content: [
        { h2: "Qué mide este contador de palabras" },
        {
          ul: [
            "**Palabras y caracteres**, con y sin espacios.",
            "**Frases y párrafos**: cada línea que no esté vacía cuenta como un párrafo.",
            "**Tiempo de lectura y en voz alta**, útil para artículos de blog, discursos y presentaciones.",
            "**Densidad de palabras clave**, que muestra cuántas veces repites las palabras importantes para que no abuses de ellas.",
          ],
        },
        { h2: "Límites habituales de palabras y caracteres" },
        {
          ul: [
            "Publicación en X (Twitter): 280 caracteres",
            "Meta description para SEO: unos 155–160 caracteres",
            "Pie de foto en Instagram: 2.200 caracteres",
            "Publicación en LinkedIn: 3.000 caracteres",
            "Resumen (abstract) de un artículo científico o una tesis: unas 250–300 palabras",
          ],
        },
        { h2: "Pensado para cualquier idioma" },
        {
          p: "Muchos contadores de palabras sencillos solo separan el texto por los espacios, lo que da resultados erróneos en muchos idiomas. Esta herramienta usa la segmentación de texto adaptada a cada idioma que incluyen los navegadores modernos, así que el recuento es preciso tanto si escribes en español como en inglés, chino, japonés o árabe.",
        },
      ],
      faqs: [
        {
          q: "¿Cómo cuenta las palabras el contador?",
          a: "Usa la segmentación de texto integrada en tu navegador, adaptada a cada idioma: la misma tecnología que permite seleccionar una palabra con doble clic. Los números cuentan como palabras. Las palabras unidas por guion, como “teórico-práctico”, cuentan como dos, igual que en la mayoría de los procesadores de texto.",
        },
        {
          q: "¿Los espacios cuentan como caracteres?",
          a: "La cifra principal de Caracteres incluye espacios y saltos de línea. Debajo del cuadro de texto verás el recuento sin espacios, que piden algunos formularios y trabajos.",
        },
        {
          q: "¿Cómo se calcula el tiempo de lectura?",
          a: "El tiempo de lectura se basa en una velocidad media de lectura en silencio de 238 palabras por minuto para adultos. El tiempo en voz alta se basa en un ritmo cómodo de presentación de 140 palabras por minuto.",
        },
        {
          q: "¿Se guarda o se envía mi texto a algún sitio?",
          a: "No. Tu texto se queda en tu navegador y nunca se sube. Tampoco se guarda, así que al recargar la página se borra. Copia lo que quieras conservar.",
        },
        {
          q: "¿Funciona en otros idiomas además del español?",
          a: "Sí. Como usa una segmentación adaptada a cada idioma, cuenta correctamente palabras y caracteres en español, inglés, portugués, francés, árabe, ruso y muchos otros idiomas, e incluso en idiomas que se escriben sin espacios, como el chino y el japonés.",
        },
      ],
    },

    "json-formatter": {
      name: "Formateador JSON",
      summary: "Formatea, valida y minifica JSON y localiza los errores al instante.",
      seoTitle: "Formateador JSON online – Formatear y validar JSON gratis",
      seoDescription:
        "Formatea, embellece, valida y minifica JSON online. Encuentra errores de sintaxis por línea y columna y ordena las claves. Tus datos no salen de tu navegador.",
      keywords: [
        "formateador json",
        "formatear json",
        "formatear json online",
        "validar json",
        "validador json",
        "minificar json",
        "json formatter",
        "json beautifier",
      ],
      howTo: [
        "Pega tu JSON en el cuadro de entrada o haz clic en “Ejemplo” para probar con uno.",
        "La herramienta revisa tu JSON mientras escribes y muestra la línea y la columna exactas de cualquier error.",
        "Haz clic en “Formatear” para embellecerlo (elige 2 espacios, 4 espacios o tabuladores y, si quieres, ordena las claves) o en “Minificar” para comprimirlo.",
        "Copia el resultado o descárgalo como archivo .json.",
      ],
      content: [
        { h2: "¿Qué es un formateador JSON?" },
        {
          p: "JSON (JavaScript Object Notation) es el formato más habitual para intercambiar datos entre aplicaciones y API. Para ahorrar espacio, suele enviarse en una sola línea muy larga, difícil de leer. Un formateador JSON añade sangría y saltos de línea para que la estructura se vea clara, y un validador comprueba que la sintaxis sea correcta.",
        },
        { h2: "Errores comunes en JSON y cómo corregirlos" },
        {
          ul: [
            "**Comas finales:** quita la coma que va después del último elemento de un objeto o array.",
            "**Comillas simples:** cambia `'text'` por `\"text\"`.",
            "**Claves sin comillas:** escribe `{\"name\": 1}`, no `{name: 1}`.",
            "**Comentarios:** JSON no admite comentarios `//` ni `/* */`.",
            "**Comas que faltan** entre elementos, a menudo después de copiar y pegar.",
          ],
        },
        { h2: "Tus datos siguen siendo privados" },
        {
          p: "Las respuestas de API y los archivos de configuración suelen contener tokens de acceso, direcciones de correo u otros datos sensibles. Muchos formateadores online envían lo que pegas a un servidor. Este nunca lo hace: todo el procesamiento ocurre en tu navegador.",
        },
      ],
      faqs: [
        {
          q: "¿Qué diferencia hay entre formatear y minificar JSON?",
          a: "Formatear (también llamado embellecer o pretty print) añade saltos de línea y sangría para que el JSON sea fácil de leer. Minificar elimina todos los espacios innecesarios para que los datos ocupen lo mínimo al enviarlos por la red.",
        },
        {
          q: "¿Por qué mi JSON no es válido si funciona en JavaScript?",
          a: "Los literales de objeto de JavaScript son más flexibles que JSON. JSON exige comillas dobles alrededor de cada clave y de cada cadena, y no permite comas finales, comentarios, comillas simples ni valores como undefined o NaN.",
        },
        {
          q: "¿Puede manejar archivos JSON grandes?",
          a: "Sí. Los archivos de varios megabytes se formatean en mucho menos de un segundo en un equipo normal, porque todo se ejecuta localmente en tu navegador, sin tiempo de subida.",
        },
        {
          q: "¿Se conservan exactamente los números muy grandes?",
          a: "Los enteros mayores que 9.007.199.254.740.991 no se pueden representar con exactitud en JavaScript, así que pueden redondearse al formatearlos. Si trabajas con ID muy grandes, guárdalos como cadenas en tu JSON.",
        },
        {
          q: "¿Se envía mi JSON a un servidor?",
          a: "No. El análisis, la validación y el formateo se hacen en tu navegador. Por eso es seguro pegar respuestas de API que contengan tokens, claves o datos personales.",
        },
      ],
    },

    "meta-tag-checker": {
      name: "Comprobador de meta title y description",
      summary: "Vista previa del snippet y longitud del meta title y description.",
      seoTitle: "Comprobador de meta title y description – Vista previa SERP",
      seoDescription:
        "Comprueba la longitud de tu meta title y meta description en caracteres y píxeles, mira cómo se verá tu página en Google y copia las etiquetas HTML.",
      keywords: [
        "comprobador de meta title",
        "longitud meta title",
        "longitud meta description",
        "comprobar meta description",
        "vista previa serp",
        "simulador serp",
        "simulador de snippet",
        "meta title seo",
      ],
      howTo: [
        "Escribe o pega el título de tu página en el campo Meta title.",
        "Añade tu meta description y, si quieres, la URL de la página.",
        "Fíjate en el recuento de caracteres y píxeles y en la vista previa en directo. Intenta conseguir “Longitud correcta” en ambos.",
        "Haz clic en “Copiar código” y pega las etiquetas en la sección <head> de tu página.",
      ],
      content: [
        { h2: "Por qué importa el ancho en píxeles" },
        {
          p: "Los buscadores recortan los títulos y las descripciones según el ancho que ocupan en pantalla, no según el número de caracteres. Por eso este comprobador mide ambas cosas: unos 580 píxeles para los títulos (normalmente 50–60 caracteres) y unos 920 píxeles para las descripciones en escritorio (normalmente 150–160 caracteres).",
        },
        { h2: "Consejos para escribir un buen meta title" },
        {
          ul: [
            "Pon tu palabra clave principal cerca del principio.",
            "Da a cada página un título único que responda a lo que buscan los usuarios.",
            "Añade el nombre de tu marca al final, separado por un guion o una barra vertical.",
            "Evita escribir TODO EN MAYÚSCULAS y repetir palabras clave sin necesidad.",
          ],
        },
        { h2: "Consejos para escribir una buena meta description" },
        {
          ul: [
            "Resume el valor de la página en una o dos frases.",
            "Incluye tu palabra clave de forma natural. Los buscadores suelen resaltar las palabras que coinciden con la búsqueda.",
            "Termina con una llamada a la acción clara, como “Pruébalo gratis” o “Consulta la guía completa”.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Cuál es la longitud ideal del meta title?",
          a: "Intenta que tenga entre 50 y 60 caracteres, o menos de unos 580 píxeles de ancho. Los títulos más largos suelen cortarse con puntos suspensivos en los resultados de búsqueda en escritorio.",
        },
        {
          q: "¿Cuál es la longitud ideal de la meta description?",
          a: "Entre 120 y 160 caracteres funciona bien. Las descripciones más cortas pueden no explicar bien la página, y las más largas suelen recortarse.",
        },
        {
          q: "¿La meta description influye en el posicionamiento?",
          a: "Google ha dicho que la meta description no es un factor de posicionamiento directo. Aun así, importa, porque una descripción clara y relevante puede convencer a más personas de hacer clic en tu resultado.",
        },
        {
          q: "¿Por qué Google muestra un título o una descripción distintos de los míos?",
          a: "Los buscadores a veces reescriben los títulos y las descripciones para que encajen mejor con la búsqueda del usuario, usando otro texto de tu página. Si escribes etiquetas precisas y específicas, es más probable que se usen las tuyas.",
        },
        {
          q: "¿Por qué medir píxeles en lugar de caracteres?",
          a: "Los resultados de búsqueda se recortan según el espacio que ocupa el texto, no según cuántas letras tiene. Un título lleno de letras anchas como la W y la M se corta antes que uno con letras estrechas como la i y la l.",
        },
      ],
    },

    "keyword-generator": {
      name: "Generador de palabras clave",
      summary: "Cientos de ideas de palabras clave para SEO, agrupadas por intención.",
      seoTitle: "Generador de palabras clave gratis – Ideas de keywords SEO",
      seoDescription:
        "Genera cientos de ideas de palabras clave a partir de una sola: preguntas, long tail, keywords de compra y comparativas, en 7 idiomas. Gratis y sin registro.",
      keywords: [
        "generador de palabras clave",
        "generador de keywords",
        "ideas de palabras clave",
        "palabras clave seo",
        "buscador de palabras clave",
        "herramienta de palabras clave",
        "palabras clave long tail",
        "investigación de palabras clave",
      ],
      howTo: [
        "Escribe una palabra clave o un tema, como “hipoteca” o “contador de palabras”. Separa varias palabras clave con comas.",
        "Elige el idioma en el que quieres las ideas.",
        "Explora las ideas, agrupadas en preguntas, frases populares, ideas long tail, palabras clave de compra y comparativas.",
        "Filtra la lista, copia un grupo o descárgalo todo en un archivo CSV para tu hoja de cálculo.",
      ],
      content: [
        { h2: "¿Qué es un generador de palabras clave?" },
        {
          p: "Un generador de palabras clave convierte una palabra semilla en muchas frases de búsqueda relacionadas. Te ayuda a descubrir lo que la gente podría escribir en Google, para que planifiques artículos, páginas de producto y preguntas frecuentes en torno a dudas reales en lugar de hacer suposiciones.",
        },
        { h2: "Entender la intención de búsqueda" },
        {
          ul: [
            "**Informativa:** el usuario quiere aprender algo, p. ej. “cómo funciona una hipoteca”. Responde a estas búsquedas con guías y preguntas frecuentes.",
            "**Comercial:** el usuario está comparando opciones, p. ej. “mejor hipoteca” o “alternativas a la hipoteca”. Responde con reseñas y comparativas.",
            "**Transaccional:** el usuario está listo para actuar, p. ej. “contratar hipoteca” o “comprar”. Responde con páginas de producto, de precios o de registro.",
          ],
        },
        { h2: "Cómo elegir las palabras clave adecuadas" },
        {
          ul: [
            "**Empieza por las ideas long tail.** Las frases más largas y específicas tienen menos competencia y es más fácil posicionarse con ellas cuando la web es nueva.",
            "**Comprueba el volumen de búsqueda** de tus ideas favoritas en el Planificador de palabras clave de Google (gratis con una cuenta de Google Ads) o en Google Search Console cuando tu web ya tenga tráfico.",
            "**Mira los resultados actuales** de Google para cada palabra clave. Si la primera página está llena de grandes marcas, elige una frase más específica.",
            "**Escribe una página por cada tema principal** y usa palabras clave muy relacionadas de forma natural en sus títulos y en el texto.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Esta herramienta muestra el volumen de búsqueda?",
          a: "No. Genera ideas de palabras clave a partir de patrones de búsqueda probados, pero los datos de volumen proceden de bases de datos de pago. Comprueba gratis el volumen de tus mejores ideas en el Planificador de palabras clave de Google o en Google Search Console.",
        },
        {
          q: "¿En qué se diferencia de Ahrefs o Semrush?",
          a: "Las herramientas de pago como Ahrefs y Semrush combinan ideas de palabras clave con sus propios datos de volumen de búsqueda y dificultad. Esta herramienta se centra en generar ideas de forma rápida y gratuita, que es el primer paso de cualquier investigación de palabras clave.",
        },
        {
          q: "¿Puedo generar palabras clave en otros idiomas?",
          a: "Sí. Elige un idioma y las ideas se construyen con frases naturales en español, inglés, alemán, francés, portugués, italiano o neerlandés.",
        },
        {
          q: "¿Qué son las palabras clave long tail?",
          a: "Las palabras clave long tail (o de cola larga) son frases más largas y específicas, como “contador de palabras para estudiantes”. Cada una se busca menos, pero es más fácil posicionarse con ellas y suelen atraer a visitantes que saben exactamente lo que quieren.",
        },
        {
          q: "¿Es gratis?",
          a: "Sí. El generador de palabras clave es totalmente gratis, no necesita cuenta y no tiene límites diarios. Funciona en tu navegador, así que tus palabras clave no se envían a ningún servidor.",
        },
      ],
    },
  },

  keywordTemplates: {
    questions: [
      "qué es {k}",
      "para qué sirve {k}",
      "cómo funciona {k}",
      "cómo usar {k}",
      "cómo elegir {k}",
      "cuánto cuesta {k}",
      "por qué usar {k}",
      "{k} es gratis",
      "es seguro usar {k}",
      "vale la pena {k}",
      "qué {k} elegir",
      "qué {k} es mejor",
      "dónde encontrar {k}",
      "cuándo usar {k}",
      "quién necesita {k}",
      "cómo conseguir {k} gratis",
    ],
    modifiers: [
      "mejor {k}",
      "mejor {k} gratis",
      "{k} gratis",
      "{k} online",
      "{k} online gratis",
      "{k} en línea",
      "{k} en español",
      "{k} fácil",
      "{k} profesional",
      "herramienta para {k}",
      "app de {k}",
      "programa para {k}",
      "web para {k}",
      "{k} {year}",
    ],
    longTail: [
      "{k} para principiantes",
      "{k} para estudiantes",
      "{k} para pymes",
      "{k} para profesionales",
      "{k} para mac",
      "{k} para windows",
      "{k} para android",
      "{k} para iphone",
      "{k} sin registro",
      "{k} sin descargar",
      "consejos para {k}",
      "tutorial de {k}",
      "ejemplos de {k}",
      "guía de {k}",
      "{k} paso a paso",
      "checklist de {k}",
    ],
    commercial: [
      "comprar {k}",
      "dónde comprar {k}",
      "contratar {k}",
      "precio de {k}",
      "{k} precio",
      "tarifas de {k}",
      "{k} al mejor precio",
      "ofertas de {k}",
      "descuento en {k}",
      "prueba gratuita de {k}",
      "suscripción a {k}",
      "{k} opiniones",
      "{k} cerca de mí",
    ],
    comparisons: [
      "alternativas a {k}",
      "mejores alternativas a {k}",
      "alternativas gratis a {k}",
      "comparativa de {k}",
      "comparar {k}",
      "{k} ventajas y desventajas",
      "{k} gratis o de pago",
      "competidores de {k}",
      "top 10 {k}",
      "análisis de {k} {year}",
      "ranking de {k}",
    ],
  },
};

export default content;
