---
title: "SQL Básico - Clase 1"
summary: "En esta primera clase se explican los conceptos fundamentales de las bases de datos. Se introduce la idea de datos estructurados y cómo estos se organizan dentro de tablas compuestas por filas y columnas. También se explica qué es un registro y cómo una base de datos permite almacenar información de manera ordenada para poder consultarla posteriormente.

El objetivo de esta clase es que el estudiante entienda que una base de datos funciona de manera similar a una hoja de cálculo, donde cada fila representa un elemento (por ejemplo, una persona o un producto) y cada columna representa un tipo de información."
date: "March 5 2026"
draft: false
tags:
  - SQL
  - Base de datos
image: "/images/blog/main.webp"
---

## Introducción a las bases de datos

### ¿Qué es una base de datos?

Una base de datos es un sistema que permite guardar información organizada para poder consultarla fácilmente.
Ejemplos de sistemas que usan bases de datos:

- bancos
- tiendas en línea
- hospitales
- redes sociales

Por ejemplo, una empresa podría guardar información de sus usuarios como:

| id  | nombre | edad | ciudad |
| --- | ------ | ---- | ------ |
| 1   | Ana    | 20   | CDMX   |
| 2   | Luis   | 22   | Puebla |
| 3   | Marta  | 21   | CDMX   |

---

## Conceptos básicos

### Tabla

Una **tabla** es una estructura donde se guardan datos organizados.
Similar a una **hoja de Excel**.

### Columna

Una columna representa un determinado tipo de información.

Ejemplo:

- nombre
- edad
- ciudad

### Fila o registro

Cada fila representa un elemento real.

Ejemplo:

- una persona
- un producto
- un pedido

### Ejercicio

Observa la tabla:

| id  | nombre | edad | ciudad |
| --- | ------ | ---- | ------ |
| 1   | Ana    | 20   | CDMX   |
| 2   | Luis   | 22   | Puebla |
| 3   | Marta  | 21   | CDMX   |

### Responde:

1. ¿Cuántas columnas hay?

2. ¿Cuántos registros hay?

3. ¿Qué tipo de información contiene la columna ciudad?
