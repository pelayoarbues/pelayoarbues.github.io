---
author: "[[Bonilista Archive Feed]]"
title: 'La Bonilista — IA en El Diseño De Productos 🧪'
date: "2025-04-29"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://mcusercontent.com/374c664073e1a1fa3deca53b4/images/ed8ec5f2-15d9-f4dd-6435-6219a28ca1c1.jpg)

## Metadata
- Author: [[Bonilista Archive Feed]]
- Full Title: La Bonilista — IA en El Diseño De Productos 🧪
- URL: https://mailchi.mp/bonillaware/ia-product-design

## Highlights
- El problema es que no todo es tan fácil como nos describen los gurús de Linkedin con *bullet points*, emojis y frases *catchy*. Como siempre, **cuando te pones a construir algo real, te das cuenta de que nada es trivial**, así que he venido yo a contarte mi película: cómo hemos planteado el nuevo diseño de Tinybird, la herramienta definitiva para masajear esos datos que se le atragantan a tu base de datos (qué te voy a decir yo si es lo que me da de comer). ([View Highlight](https://read.readwise.io/read/01jsyckjbrh4kx35rwwv0v2y0n))
- Voy a partir de los principios que aplicamos. Somos bastante *antihype*, así que:
  1. **Usar IA sólo cuando y donde tenga sentido.** Nada de meter un chat donde no toca, por meter algo.
  2. **Si puede ser invisible, mejor.** A nadie le interesa una mierda la tecnología que uses sino el problema que solucionas. Si sois programadores, cuanto antes lo asumáis, mejor. Creedme.
  3. **Que sirva para eliminar tareas tediosas, no para reemplazar a personas.** Por mucho que a los ejecutivos con mentalidad de tiburón se les haga la boca agua con el potencial ahorro de costes, de momento, estamos lejos de poder sustituir el criterio humano. Así que, diseñamos modelos para potenciar a los profesionales no para reemplazarlos. ([View Highlight](https://read.readwise.io/read/01jsycm0g3g2vn8w82yya96ja9))
- En la mayoría de productos, los modelos pueden ayudarnos a:
  1. **Hacer el *onboarding* de nuevos usuarios**. Qué mejor que el usuario te diga lo que quiere en vez de decirle tú lo que tiene que hacer para aprender.
  2. **Simplificar flujos de trabajo**.
  3. **Generar código**. Esto es algo más concreto y no todos los productos generan código, pero el nuestro sí.
  4. **Explorar los datos que el producto tiene disponibles de forma natural**. Aquí es donde el chat con herramientas entra en la ecuación. ([View Highlight](https://read.readwise.io/read/01jsycmywy185tbeekakc4p6d3))
- En general todo esto es sencillo: si usas chatGPT o similar, **en unos minutos puedes tener una herramienta que permitirá a un usuario entender tu producto**. En realidad no necesitas más que coger tu documentación y pedir a un LLM (usamos Gemini por la longitud de su contexto) que lo resuma. Va a ser capaz de resolver el 90 % de las preguntas de un ser humano. Pero claro, no deja de ser una conversación de persona a «no-persona» y, por mucho que la IA pueda interpretar instrucciones… las herramientas necesitan órdenes claras. ([View Highlight](https://read.readwise.io/read/01jsycncs9vta4r97gttxxfn1p))
- No creo que podamos dejar pasar ni un minuto más para usar la IA en nuestros productos y hacer la vida más fácil al usuario.
  Es prácticamente imposible impedir que el sistema los filtre de una manera u otra. La clave está en la orquestación, no tanto en el *prompt*. ([View Highlight](https://read.readwise.io/read/01jsycrdmsmpgecwbafqm2zb1w))
- Otro de los problemas habituales es que **los LLMs la lían parda. Se inventan más cosas que un niño de 6 años**. Es un problema bien conocido, nada nuevo. Hay varias formas de intentar paliarlo. En nuestro caso, usamos dos: ***feedback loop*** y ***self evaluation***. ([View Highlight](https://read.readwise.io/read/01jsycrs9yp74ct9hpb2gmh8km))
- Por un lado, no esperamos que un LLM responda bien a la primera cuando se le pide algo complejo como una consulta optimizada a una base de datos. Por eso, casi siempre, tendremos que meter un *feedback loop*, o pedirle que estime si el entregable que genera consigue el resultado que se solicitó inicialmente ([View Highlight](https://read.readwise.io/read/01jsycs8990dtaz0jye40s3cmz))
- Por otro, validamos lo que generamos. Por ejemplo, si estuviésemos generando una factura podríamos validar que tiene todo (concepto, CIF, cantidad, IVA…). Puedes hacerlo con procesos manuales o automáticos, pero también puedes poner a otro modelo a validarlo. **Un segundo modelo (con otro *prompt* específico) evalúa el entregable y, si falla, genera un error que el primer modelo puede usar para arreglarlo**. No es milagroso, pero si combinas ambos procesos obtienes un sistema relativamente sólido. ([View Highlight](https://read.readwise.io/read/01jsycsnvcvj319be7ks751b0j))
- Usamos otras decenas de cosas, por ejemplo [etiquetas de marcado](https://es.wikipedia.org/wiki/Etiqueta_(lenguaje_de_marcado)) para segmentar la entrada. Especialmente cuando el *prompt* es largo, ayuda mucho darle «mascadito» cada tema. También usamos etiquetas para la salida, de esta forma podemos pedirle diferentes recursos en cada *prompt* (por ejemplo, una factura y el correo para enviar el cliente). ([View Highlight](https://read.readwise.io/read/01jsycsy2r86k1mpe3ckp3882m))
- Otro truco es **encadenar llamadas con diferentes *prompts* para poder enrutar las cosas por donde tocan**. Por ejemplo, en nuestro caso, si hay que generar una gráfica, esto se hace con una herramienta específica que se dispara con una segunda petición específica. Esta técnica se denomina *LLM chaining*, ([View Highlight](https://read.readwise.io/read/01jsyctp5xfp46m0w6yck3yfay))
- Porque esto no tiene tanta «magia» como nos quieren hacer creer. Eso sí, requiere una adaptación «de carne a metal» que no es trivial. El criterio humano aún es necesario en todos los pasos, pero **no creo que podamos dejar pasar ni un minuto más para usar la IA en nuestros productos y hacer la vida más fácil al usuario** ([View Highlight](https://read.readwise.io/read/01jsycv8kxjmpat89gsbmkav3s))
