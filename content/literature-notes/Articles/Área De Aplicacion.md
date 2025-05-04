---
author: "[[José Luis Cañadas Reche]]"
title: 'Área De Aplicación'
date: "2025-05-04"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article0.00998d930354.png)

## Metadata
- Author: [[José Luis Cañadas Reche]]
- Full Title: Área De Aplicación
- URL: https://muestrear-no-es-pecado.es/2025/05/aoa

## Highlights
- Este puente he estado leyendo sobre [AOA (area of applicability)](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.13650) . En el artículo de Hanna Mayer y Edzer Pebesma se centran en él área de aplicación de un modelo cuando se quiere predecir en temas espaciales. ([View Highlight](https://read.readwise.io/read/01jtdgpy5c4mbxzek9x0mh8r0x))
- El concepto es bastante simple. Tienes un modelo de estos modernos de random forest o boosting, que has entrenado con unos datos maravillosos. Y ahora lo quieres utilizar para obtener predicciones en otro conjunto de datos. El área de aplicación lo que te dice es en qué datos de esos nuevos datos el modelo se puede aplicar. La idea es sencilla, simplemente calcula la distancia multivariable entre los puntos del nuevo conjunto de datos y los datos de train. Pero no es lo mismo estar muy lejos en una de las variables más importantes del modelo que en una de las últimas. Por eso lo que hacen es ponderar las distancias por la importancia de las variables en el modelo. ([View Highlight](https://read.readwise.io/read/01jtdgq17t70vgm3j0rv3f6gwp))
- Todo esto tiene que ver con cosas como el concepto de “Data Drift”, en el cual vemos si la distribución multivariable en el espacio de los predictores ha cambiado mucho entre train y test. Si esto es así entonces decimos que algo hay raro con los datos. También tiene que ver con que los modelos de árboles no son muy buenos extrapolando más allá del dominio de la variable que han visto, y esto lo que mira es si los datos a predecir están muy lejos de un “entorno” multivariable de los datos de train. ([View Highlight](https://read.readwise.io/read/01jtdgq7m00cp74t9hh8tk5qn1))
- La librería `waywiser` implementa lo del área de aplicación de forma que se pueda usar con `tidymodels`. ([View Highlight](https://read.readwise.io/read/01jtdgr02ktg923cvjgxy0xymk))
- Hace folds espaciales, de forma que dentro de un fold caigan datos que están cercanos espacialmente ([View Highlight](https://read.readwise.io/read/01jtdgqxw3hvjhaejkmy3g95xy))
- Para hacer la predicción sobre toda España, se puede utilzar la función `predict` de la librería `terra` que puede tomar un objeto `raster` como datos de entrada. ([View Highlight](https://read.readwise.io/read/01jtdgr8k4gqz9wdapvw3rv60h))
- Ahora tomando como imput los datos de train, los de test y la importancia de las variables se calcula el área de aplicación. ([View Highlight](https://read.readwise.io/read/01jtdgrb2bqdeq1a8589teymv0))
- Y vemos que la zona de Sierra Nevada y la Alpujarra están fuera del área de aplicación y por tanto las predicciones que se obtengan ahí hay que tomarlas con cautela. ([View Highlight](https://read.readwise.io/read/01jtdgre5jp4zgprzv71tbg781))
- Esta técnica se puede aplicar a cualquier tipo de datos y constituye un indicador más de la incertidumbre. Me parece una herramienta bastante útil para encontrar conjuntos de datos en los que si se pueda aplicar el modelo. ([View Highlight](https://read.readwise.io/read/01jtdgrhf385j3gc50j1qry3f0))
