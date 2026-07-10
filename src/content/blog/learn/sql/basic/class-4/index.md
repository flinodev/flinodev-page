---
title: "SQL básico - Clase 4"
summary: "Consultas con múltiples condiciones: operadores lógicos AND y OR, y el operador de desigualdad !=."
date: "March 5 2026"
draft: false
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
