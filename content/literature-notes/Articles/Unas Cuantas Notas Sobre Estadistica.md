---
author: "[[Carlos J. Gil Bellosta]]"
title: 'Unas Cuantas Notas Sobre Estadística'
date: "2025-11-02"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article4.6bc1851654a0.png)

## Metadata
- Author: [[Carlos J. Gil Bellosta]]
- Full Title: Unas Cuantas Notas Sobre Estadística
- URL: https://datanalytics.com/2025/10/16/cortos-estadiistica/

## Highlights
- Uno de los *metaprincipios* de la construcción de modelos estadísticos es que la calidad de los modelos es función de la cantidad de información que hay en los datos de entrenamiento. No existe el *bootstrap* en el sentido etimológico del término: no puede uno levantarse en el aire tirando hacia arriba de los cordones de los zapatos. Pero al hilo de una noticia reciente, [Gelman discute si añadir ruido a los datos permite reducir el sobreajuste](https://statmodeling.stat.columbia.edu/2025/10/03/adding-noise-to-the-data-to-reduce-overfitting-how-does-that-work/). Además, en la discusión al respecto, alguien cita el artículo de 1995 [*Training with Noise is Equivalent to Tikhonov Regularization*](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/bishop-tikhonov-nc-95.pdf), una especie de penalización en el tamaño de los coeficientes al modo de la regresión *ridge*. ([View Highlight](https://read.readwise.io/read/01k90tp4v3fdf4ckyre3j4f9zg))
- A una entrada de ya hace bastante tiempo de Gelman, [*No vehicles in the park*](https://statmodeling.stat.columbia.edu/2025/04/14/no-vehicles-in-the-park-a-multilevel-model-computing-saga/), se le puede sacar punta de muchas maneras. Por un lado, Gelman realiza un análisis completo de unos datos que, aparte de curiosos por su misma naturaleza, tienen algunas peculiaridades estadísticas interesantes. Luego, el texto detalla todas las idas y venidas estadísticas, todos los trucos que Gelman va incorporando a su análisis, todas las resistencias que estos le ofrecen y todas las contramedidas que toma para irlas solventando. Finalmente, produce cierto desasosiego: parte de los problemas a los que se enfrenta tienen un origen y una solución enteramente extraestadística y, hasta cierto punto, computacional. Nos recuerda cómo podemos estar haciendo todo correctamente desde el punto de vista estadístico y, aun así, metiendo la pata por una *minucia* sintáctica. Bueno, realmente no es tal minucia: apunta a un problema que ocurre con cierta frecuencia y que no debería sorprender demasiado a quienes tienen experiencia en esos asuntos. Pero que nos invita a recordar que las herramientas estadísticas actuales no nos permiten desacoplarnos del nivel computacional inmediatamente inferior (como tal vez la medicina no puede desacoplarse de la biología y esta, a su vez, de la química). ([View Highlight](https://read.readwise.io/read/01k90trxmn99yve7p0c7kw6ka8))
- [*7 reasons to use Bayesian inference!*](https://statmodeling.stat.columbia.edu/2025/10/11/7-reasons-to-use-bayesian-inference/), algunas de las cuales no son las habituales, como la posibilidad de ajustar modelos mucho más sofisticados de los que permite la estadística frecuentista de manera natural. ([View Highlight](https://read.readwise.io/read/01k90ttccg2dwra01z8gjs1rcg))
- [*Bayesian Thinking*](https://hbiostat.org/talks/bthink.html) contiene las diapositivas de una charla de Frank Harrell sobre (las partes más relevantes de) la historia y los fundamentos de la estadística bayesiana. ([View Highlight](https://read.readwise.io/read/01k90ttf7r3jvvtwz1dmyyf650))
- [*It’s a JAX, JAX, JAX, JAX World*](https://statmodeling.stat.columbia.edu/2025/10/03/its-a-jax-jax-jax-jax-world/) trata sobre cómo construir lenguajes probabilísticos sobre plataformas que no sean JAX es nadar contracorriente. NumPyro se va a comer a Stan irremisiblemente. ([View Highlight](https://read.readwise.io/read/01k90ttgvnf7xcqr7anjgn6j6b))
- Escribe Frank Harrell, en su libro *Regression Modeling Strategies*:
  > Las relaciones entre las variables casi nunca son lineales […]. Muchos de los que no han estudiado en profundidad los problemas del sesgo y la eficiencia creen que la presencia de relaciones no lineales se remedia tramificando las variables continuas en intervalos. Es lo más desastroso que pudiere hacerse. ([View Highlight](https://read.readwise.io/read/01k90tt1djkkn2dkvfkjbteq9a))
