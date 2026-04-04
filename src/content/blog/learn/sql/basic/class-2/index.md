---
title: "SQL básico - Clase 2"
summary: "En esta clase se introduce SQL (Structured Query Language), el lenguaje utilizado para consultar bases de datos. Se presenta la instrucción SELECT, que permite obtener información almacenada en una tabla.

El estudiante aprende a seleccionar columnas específicas o todas las columnas de una tabla utilizando SELECT y FROM. Este es el primer paso para comenzar a interactuar con una base de datos."
date: "March 5 2026"
draft: false
tags:
  - SQL
  - Base de datos
---

## Clase 2 — Introducción a SQL

### ¿Qué es SQL?

SQL significa **Structured Query Language**.

Es el lenguaje que usamos para consultar y manipular bases de datos.

Con SQL podemos:

- consultar información
- filtrar datos
- ordenar datos
- agrupar información

### Primera consulta: SELECT

La instrucción más importante es SELECT.

Sirve para **ver información de una tabla.**

Estructura básica:

```sql
SELECT columnas
FROM tabla;
```

### Ejemplos

| id  | nombre | edad | ciudad |
| --- | ------ | ---- | ------ |
| 1   | Ana    | 20   | CDMX   |
| 2   | Luis   | 22   | Puebla |
| 3   | Marta  | 21   | CDMX   |

Mostrar todos los nombres:

```sql
SELECT nombre
FROM users;
```

Mostrar nombre y edad:

```sql
SELECT nombre, edad
FROM users;
```

Mostrar todas las columnas:

```sql
SELECT *
FROM users;
```

**\*** significa todas las columnas.

### Ejercicios

Dada la tabla

| id  | nombre | edad | ciudad |
| --- | ------ | ---- | ------ |
| 1   | Ana    | 20   | CDMX   |
| 2   | Luis   | 22   | Puebla |
| 3   | Marta  | 21   | CDMX   |

1. Mostrar solo los nombres.

2. Mostrar nombre y ciudad.

3. Mostrar todas las columnas.
