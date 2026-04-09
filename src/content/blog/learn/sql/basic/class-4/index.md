---
title: "SQL básico - Clase 4"
summary: "Esta clase explica cómo combinar varias condiciones dentro de una consulta utilizando operadores lógicos como AND y OR. Esto permite construir consultas más específicas y complejas.

También se introduce el operador != para buscar valores diferentes a uno determinado.

Los estudiantes comienzan a entender cómo construir consultas más precisas para responder preguntas específicas sobre los datos."
date: "March 5 2026"
draft: false
lang: "es"
tags:
  - SQL
  - Base de datos
---

## Clase 4 — Múltiples condiciones

Podemos usar varias condiciones al mismo tiempo.

### AND

Significa que todas las condiciones deben cumplirse.

```sql
SELECT *
FROM users
WHERE ciudad = 'CDMX'
AND edad > 20;
```

### OR

Significa que al menos una condición debe cumplirse.

```sql
SELECT *
FROM users
WHERE ciudad = 'CDMX'
OR ciudad = 'Puebla';
```

### Diferente de

```sql
SELECT *
FROM users
WHERE ciudad != 'CDMX';
```

### Ejercicios

Dada la tabla:

| nombre | edad | ciudad |
| ------ | ---- | ------ |
| Ana    | 20   | CDMX   |
| Luis   | 22   | Puebla |
| Marta  | 21   | CDMX   |

1. Personas de CDMX mayores de 21.

2. Personas de Puebla o Guadalajara.

3. Personas que no viven en CDMX.
