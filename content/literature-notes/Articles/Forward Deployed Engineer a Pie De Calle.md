---
author: "[[javisantana.com]]"
title: 'Forward Deployed Engineer a Pie De Calle'
date: "2026-09-20"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://d34adp677peecb.cloudfront.net/static/images/article0.00998d930354.png)

## Metadata
- Author: [[javisantana.com]]
- Full Title: Forward Deployed Engineer a Pie De Calle
- URL: https://javisantana.com/fde/

## Highlights
- Como últimamente oigo hablar mucho de FDE o “[Forward Deployed Engineer](https://en.wikipedia.org/wiki/Forward_deployed_engineer)” y la mayoría de la gente que lo menciona no sabe ni por dónde le viene el aire, no porque sean tontos, que puede que también, sino porque no han tenido contacto real con el tema. Voy a hacer una aproximación -la mía, claro- a qué significa un equipo de este tipo, porqué se monta, cómo se gestiona, cuándo tiene sentido, cómo se contrata, cómo se entrena y de paso vamos a explicar el porqué la mayoría de tópicos son una gilipollez. ([View Highlight](https://read.readwise.io/read/01m2zxpjw2hcyjjbbq2z9p869m))
- Esto en realidad es para fundadores o gente montando estos equipos, es decir, empresas B2B, que vendan a empresas relativamente grandes (aunque no necesariamente) con productos que requieren cierta integración.
  Pero si quieres o tienes un rol de este tipo creo que puede ser de ayuda entender cómo otros lo hacen. Esto ayuda, da igual de que hablemos. ([View Highlight](https://read.readwise.io/read/01m2zxqd9knya226as1gazcjxy))
- Soy el fundador de una startup B2B (Tinybird, unos 70 kilos de financiación, decenas de M en ARR), desarrollamos un producto técnico, la empresa y el producto lo montamos partiendo de un equipo de FDE (no existía el término, pero da igual) porque era una buena forma de que tus clientes te paguen el research de tu producto a la vez que ellos recibían ayuda. Vamos, lo que son los negocios.
  El equipo sigue activo después de 8 años y no sólo ayuda a clientes en cosas específicas, sino que también forma parte del equipo de soporte. Mejor que contarte yo si lo hacen bien o mal, [que los que reciben ayuda lo hagan por mi](https://x.com/search?q=tinybird%20support&src=typed_query).
  Creo que no hay mucha gente con experiencia real y mucho menos contándolo, así que he ahí la razón de este documento. ([View Highlight](https://read.readwise.io/read/01m2zxqhrwjza1m1jyxk041vf0))
- Para ti, que acabas de leer [B2B](https://en.wikipedia.org/wiki/Business-to-business) y no sabes por donde te vienen, te diré que cuando creas un producto y vendes a empresas relativamente grandes y/o avanzadas, normalmente necesitan ayuda. Algunas de ellas porque son unos paquetes, otras porque políticamente no son capaces de ejecutar con sus equipos y otras, los que más interesan, son los que te necesitan por tus capacidades. Cuando estás en B2C o incluso B2B con ticket pequeño, tú lanzas el producto y allí se las apañen, en B2B con ticket alto, no quieres dejarles solos.
  En este último caso, y no seamos ilusos por amor de Dios, es muy difícil que tu software se acople perfectamente a los requisitos de una empresa, siempre hay recovecos, matices que necesitan ser adaptados. Así que tener un equipo que ayuda no es ninguna deshonra. Obviamente hay casos de empresas que son jodidas leyendas, por ejemplo, Datadog, donde no es necesario, los equipos del cliente ya se pegan ellos solitos para arreglar los problemas, pero aún así siempre tienen gente técnica ayudando. ([View Highlight](https://read.readwise.io/read/01m2zxqsjd9zzcq45cew8xsxag))
- Creo que la mejor explicación -indirecta, eso sí- del tema es este, buenísimo, [artículo de un ex Palantir](https://nabeelqu.co/reflections-on-palantir), que son los amigos que acuñaron el término. Por ser claro, lo puedes llamar FDE o como te dé la gana, pero no deja de ser la definición de alguien que 1) sabe lo que hace 2) mete una pata en el cliente para entender su problema y solucionarlo y 3) se trae el conocimiento que puedes aplicar en tu casa.
  En la consultoría tradicional se hace 1 y 2. Bueno, algunas consultoras hacen poco de 1 y solo lo de la pata de 2. Idealmente un FDE debería tener foco en 3. Un FDE debería poder volver del cliente e implementar lo necesario en tu producto, y esto es relativamente fácil si tu equipo es pequeño, muy complicado en una empresa grande.
  Pero hay una forma mejor de definir el rol: la diferencia entre un consultor tradicional y un FDE (o así es como lo veo yo) es que el FDE tiene “skin in the game”, se queda hasta el final y asume responsabilidad. En Tinybird he visto a gente de mi equipo ponerse a gestionar el proyecto al cliente porque veían que no serían capaces de llegar a producción. ([View Highlight](https://read.readwise.io/read/01m2zxr875z9qsr9he1vnzmdcd))
- La forma en la que yo lo defino es sencilla pero a mi me ha resultado muy efectiva: tu objetivo es poner al cliente en producción lo antes posible.
  He repetido esta frase unas mil veces por semana, pero es importante nunca perderse en otros temas como “facturar más”, “ayudarle técnicamente”… a veces la ayuda es directamente proponerle una solución que significa no usar tu producto.
  Obviamente para hacer eso tienes que entender su problema y para poder entenderlo y resolverlo bien necesitas su contexto. La forma de tener contexto es preguntar, entender y volver a preguntar. Plantear una solución, probar, validar, volver a preguntar… y así continuamente. Da la casualidad que los desarrolladores son expertos en hacer eso. Pero de esto hablamos en el siguiente capítulo.
  Así que si paras de leer aquí ya tienes la clave: no te líes con métricas, con objetivos secundarios absurdos, si tu cliente gana, tú ganas, en facturación, en retención, en relación con el cliente y todo eso son efectos de segundo orden.
  Un detalle que no puede pasar desapercibido: cuando te metes en un cliente a resolver un problema a veces el problema no está bien definido y tienes que definirlo. No hay una forma más efectiva de aprender algo que tener que enfrentarte tú a la situación en primera persona. Es lo mismo que ver como alguien resuelve un problema de matemáticas o resolverlo tú, sabes de lo que hablo. ([View Highlight](https://read.readwise.io/read/01m2zxsammacctgvsck00vfyc8))
- Cualquier cosa que hagas, la clave es el equipo. Ed Catmull ya explicó esto en una frase mucho mejor que yo lo podría hacer:
  > There is an important principle here that may seem obvious, yet— in my experience— is not obvious at all. Getting the right people and the right chemistry is more important than getting the right idea.
  La gente adecuada con la química adecuada, quédate con esto. Eso sí, lo que haces tiene que tener un mínimo de sentido, pero eso Catmull lo dio por hecho, pero somos Españoles, es mejor no confiarse.
  En nuestro caso la premisa era: “la gente está trabajando con los datos como hace 15 años pero hay tecnología y hardware mucho mejor, podemos ayudarles a hacerlo mejor”. Esta premisa, después de 8 años, puedo decir que era acertada. ([View Highlight](https://read.readwise.io/read/01m2zxtb5fztkxpt4yre9q44c9))
