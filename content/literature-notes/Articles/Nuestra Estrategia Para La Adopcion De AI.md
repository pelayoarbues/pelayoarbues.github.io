---
author: "[[Félix López]]"
title: 'Nuestra Estrategia Para La Adopción De AI'
date: "2026-01-14"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://substackcdn.com/image/fetch/$s_!51Lq!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F77238ea1-0863-4281-a51c-a001ddfdfbfc_1390x672.png)

## Metadata
- Author: [[Félix López]]
- Full Title: Nuestra Estrategia Para La Adopción De AI
- URL: https://flopezluis.substack.com/p/nuestra-estrategia-para-la-adopcion

## Highlights
- Inspirado por el post de [Lethain](https://lethain.com/company-ai-adoption/) sobre la estrategia para fomentar la adopción de AI que han desarrollado en su empresa he decidido contar cómo lo estamos haciendo nosotros. ([View Highlight](https://read.readwise.io/read/01kexztnj8s5fmb3bjeag871td))
- Como está pasando en casi todas las empresas, desde la dirección teníamos miedo de estar quedándonos atrás, de no sacar todo el partido a lo que está ocurriendo con la AI. Por eso teníamos claro que debíamos ir hacia ser una empresa [“AI First”](https://es.wired.com/articulos/ai-first-como-el-enfoque-que-pone-la-inteligencia-artificial-en-el-centro-esta-cambiando-las-empresas-y-el-trabajo). Decidí encargarme yo mismo de definir la estrategia y los procesos, principalmente porque creo que en el mundo del software es donde más y más rápido se está notando el cambio. Cada día tenemos una herramienta nueva. Así que tenía claro que cualquier estrategia tenía que pasar por permitir probar herramientas muy fácilmente y que además se pudiera adoptar rápidamente en una organización grande (la mía tiene más de 100 personas). ([View Highlight](https://read.readwise.io/read/01kexztqncpdsby2da1svnm0yx))
- El mayor reto que teníamos por delante era cómo conseguir eso con las restricciones que tenemos debido al mundo en el que nuestro software opera; nuestros productos se usan a diario para tomar [decisiones](https://www.cpuc.ca.gov/psps/) que pueden costar la bancarrota de eléctricas, indemnizaciones millonarias e incluso vidas, motivo por el cual tenemos fuertes restricciones para que no haya código en producción producido por una AI sin supervisión humana. También tenemos muchas restricciones con los datos de nuestros clientes, por ejemplo nunca deben pasar por un LLM ni pueden moverse geográficamente (si un cliente es canadiense, sus datos se quedan en Canadá). ([View Highlight](https://read.readwise.io/read/01kexztvb89x330hmw0wae826y))
- Por cierto, también nos limitan el uso de LLMs como funcionalidad dentro de nuestros productos, de ahí que la estrategia y los procesos tuvieran que tener en cuenta cómo desarrollar funcionalidades que involucren el uso de LLMs.
  Como podéis imaginar es complicado crear procesos livianos con estas restricciones. De forma muy simplista lo que hice fue dividir el problema. Por una parte estaba que la gente pudiera probar herramientas rápido y por otra su adopción dentro de la empresa. ([View Highlight](https://read.readwise.io/read/01kexzv2qejrz6n6rn7xm3xr9v))
- Se puede decir que el proceso para probar herramientas nuevas es tan simple como:
  • Para probar una herramienta tiene que quedar registrado quién, para qué y qué herramienta es.
  • Solo es necesario la aprobación de tu manager siempre que la prueba siga ciertas reglas/directrices.
  • Se crea un budget especial para fomentar la experimentación, $200 por empleado. Si se necesita más budget también es posible pero implica crear un business case.
  • Las pruebas están limitadas a 4 semanas para evitar que alguna prueba acabe convirtiéndose en una herramienta usada sin control. 
  Después de esas 4 semanas, si la gente de verdad quiere usar la herramienta en su día a día, tiene que ir a un proceso más complejo que implica a legal, finanzas y seguridad. Lo explicaré más adelante.
  • Además, después de terminar un POC hay que documentar los aprendizajes.
  Os copio los principios que nos guían tal y como aparecen en el documento:
  [![](https://substackcdn.com/image/fetch/$s_!51Lq!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F77238ea1-0863-4281-a51c-a001ddfdfbfc_1390x672.png)](https://substackcdn.com/image/fetch/$s_!51Lq!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F77238ea1-0863-4281-a51c-a001ddfdfbfc_1390x672.png) ([View Highlight](https://read.readwise.io/read/01kexzvfmgg1zyrt7xvz3m20qz))
- Y aquí podéis ver las reglas/guardrails que la gente tiene que seguir para hacer una prueba.
  [![](https://substackcdn.com/image/fetch/$s_!o93i!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F83c04bac-b0ef-4b3f-b704-7b8129e1567a_1428x1076.png)](https://substackcdn.com/image/fetch/$s_!o93i!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F83c04bac-b0ef-4b3f-b704-7b8129e1567a_1428x1076.png) ([View Highlight](https://read.readwise.io/read/01kexzvn246vx2sa3mg0sjv4kr))
- Además, creamos un formulario en notion, que no lleva ni 3 minutos, para que la gente pudiera registrar las pruebas. Básicamente tienes que poner:
  • El nombre de la herramienta
  • El caso de uso
  • Confirmar que tienes el approval de tu manager
  • Si es de pago o no. (Si lo es tenemos una automatización en notion que avisa a IT para que compre la licencia con tu budget)
  • Un recordatorio de los guardrails.
  Pero eso es solo una pequeña parte, esto facilita que la gente pruebe nuevas herramientas pero no garantiza ni la adopción real, ni mejora la productividad por sí misma. De hecho, ni siquiera garantiza que la gente pruebe nuevas herramientas. ([View Highlight](https://read.readwise.io/read/01kexzvyfvzhz3vhyakgwhj6ax))
- Por eso dimos con la idea de tener **Champions**, personas que son entusiastas por naturaleza y que suelen ser los primeros en probar nuevas herramientas. Aquí hay un punto clave que merece destacarse y es que la adopción de la IA es muy diferente entre equipos: lo que tiene sentido para Ingeniería puede ser completamente distinto para Legal o Finanzas. De ahí que tengamos Champions por Departamento. Tenemos varios en ingeniería, varios en ciencia, en customer success, en legal, en recursos humanos, etc. La idea es **federar la responsabilidad de la adopción de la IA**, empoderando a cada departamento para que sean ellos mismos los responsables de decidir cómo encaja la IA en su trabajo.
  [![](https://substackcdn.com/image/fetch/$s_!p4GW!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F360dd784-0c3d-4f85-a4be-4177c0b773c5_2048x1117.png)](https://substackcdn.com/image/fetch/$s_!p4GW!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F360dd784-0c3d-4f85-a4be-4177c0b773c5_2048x1117.png) ([View Highlight](https://read.readwise.io/read/01kexzw4q1fjjdt7qp0bftrh7f))
- Esto es exactamente lo que pone en el documento de Estrategia.
  [![](https://substackcdn.com/image/fetch/$s_!AdDS!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6bc4f434-e8d5-4a15-990f-4345bc690475_1210x1570.png)](https://substackcdn.com/image/fetch/$s_!AdDS!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6bc4f434-e8d5-4a15-990f-4345bc690475_1210x1570.png) ([View Highlight](https://read.readwise.io/read/01kexzwg1b6z9nvss780g0r43v))
- Mas allá de experimentar
  Hasta aquí cubrimos como fomentar que la gente experimente, pero para que sea una realidad ser AI First quedan muchas piezas. Por ejemplo, ¿cómo pasa una herramienta de ser un POC que solo puede usar una persona con las restricciones mencionadas a un herramienta que puede usar todo el mundo en su día a día sin restricciones?
  La respuesta es otro formulario, algo más complejo que el anterior ya que este paso requiere una review de Legal, de Seguridad y de Finanzas en el caso de que el budget actual de ese área/equipo no cubriera ese gasto.
  Como con el resto, mejor copio lo que dice el documento de estrategia
  [![](https://substackcdn.com/image/fetch/$s_!8J0o!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9240385b-5d0d-45a3-bf1b-632df27d0db1_1166x1876.png)](https://substackcdn.com/image/fetch/$s_!8J0o!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9240385b-5d0d-45a3-bf1b-632df27d0db1_1166x1876.png) ([View Highlight](https://read.readwise.io/read/01kexzwpmyv235renfc11fdpgq))
- Como podéis ver hemos incluido un **SLA de 2 semanas** para las revisiones que tienen que hacerse, de esa forma intentamos que el proceso también sea rápido. Todo está automatizado y en cuanto alguien añade una herramienta para review, cada departamento recibe una petición que se trackea.
  Pero como con todo proceso, hay una pregunta relevante, **¿cómo te aseguras de que el proceso se cumple?**
  Para eso hemos creado un “AI Board”, su trabajo principal es asegurarse de que el proceso es útil, rápido, poco burocrático y que cumple con su función principal: Adopción. ([View Highlight](https://read.readwise.io/read/01kexzx5cw66qw61w4gt1z7681))
- Para ello hemos creado una herramienta en Notion, un dashboard que nos muestra:
  • POCs que han pasado de las 4 semanas
  • Herramientas esperando por review y qué review está pendiente (Legal, Finance, Security)
  • El uso de herramientas por departamentos (esto nos muestra si hay departamentos que no están adoptando AI)
  • Peticiones de usar LLMs dentro de nuestros productos
  Nos reunimos cada mes para revisar el dashboard entre otras cosas, por ejemplo también revisamos el gasto que tenemos en herramientas de AI VS su uso. Esto no está totalmente automatizado y es algo más complejo pero queremos evitar tener licencias muertas o herramientas que nadie usa. 
  Otro ejemplo, legal nos pone al día de nuevas restricciones, de lo que aparece en contratos, etc.
  Está compuesto por un representante de Legal, It, Finance, Engineering, Ciencia, Product y Customer Success. ([View Highlight](https://read.readwise.io/read/01kexzxk6azbrt67s7ac01qv0r))
- Por último, como nuestro objetivo es la adopción también somos responsables de promover el aprendizaje, ya sea mediante workshops, trainings, o lo que sea. De hecho, mensualmente enviamos una newsletter con todo lo que ha sucedido.
  Os muestro una captura de la herramienta
  [![](https://substackcdn.com/image/fetch/$s_!RFb4!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffe91f14f-a136-4c9d-b952-e4d012010067_2048x1168.png)](https://substackcdn.com/image/fetch/$s_!RFb4!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffe91f14f-a136-4c9d-b952-e4d012010067_2048x1168.png) ([View Highlight](https://read.readwise.io/read/01kexzxq1hgx1p09cwj0dec20w))
- Tenemos en notion un HUB con todo lo que respecta a AI, puedes encontrar:
  • Lista de herramientas aprobadas. En estas herramientas solo necesitas pedir una licencia a IT para poder usarlas
  • Prompts database. La idea es que puedas aprender trucos de otra gente.
  • Uses cases. Algo más complejo que los prompts, esto puede incluir el uso de MCPs, de herramientas más complejas como N8N, integraciones, etc
  • Links a todas las herramientas
  • Formulario para empezar un POC
  • Formulario para pedir la aprobación de una herramienta
  • Formulario para uso de LLMs
  • El proceso en sí mismo ([View Highlight](https://read.readwise.io/read/01kexzxx135nv2wjfmbqvadqrq))
- • Tenemos varios canales de slack:
  • Uno para compartir nuevas herramientas, nuevos descubrimientos, usos de AI, etc
  • Los champions tienen otro dónde reciben una notificación con cada POC o herramienta aprobada para que sepan lo que está pasando. Además de usarlo para compartir conocimiento e inquietudes.
  • Por último, el board tiene otro dónde recibe notificaciones de petición de approval de nuevas herramientas, aunque el sistema ya crea el ticket para cada review de forma automática. Es más que nada por dar visibilidad. ([View Highlight](https://read.readwise.io/read/01kexzxz9nrhykxxa223q6dtnx))
- • Estamos creando un dashboard con métricas para poder evaluar el éxito del proceso más fácilmente:
  • # of AI POCs completed over time
  • % of pilots that scale to production
  • # AVG Weeks to Approve an AI tool
  • % of Departments using AI Tools ([View Highlight](https://read.readwise.io/read/01kexzy18am862y4s5cnymcf83))
