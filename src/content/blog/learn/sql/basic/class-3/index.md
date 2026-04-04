---
title: "SQL básico - Clase 3"
summary: "En esta clase se aprende a filtrar información dentro de una tabla utilizando la cláusula WHERE. Esto permite seleccionar únicamente los registros que cumplen ciertas condiciones.

También se introducen operadores de comparación como:

igual (=)

mayor que (>)

menor que (<)

Este tema es fundamental para realizar consultas útiles dentro de una base de datos."
date: "March 5 2026"
draft: false
tags:
  - SQL
  - Base de datos
---

## Clase 3 — Filtrar datos con WHERE

### Qué es WHERE

La cláusula WHERE permite filtrar datos.  
Es decir, seleccionar solo los registros que cumplen una condición.

### Ejemplo

Dada la tabla:

| nombre | edad | ciudad |
| ------ | ---- | ------ |
| Ana    | 20   | CDMX   |
| Luis   | 22   | Puebla |
| Marta  | 21   | CDMX   |

**Consulta:**

```sql
SELECT nombre
FROM users
WHERE ciudad = 'CDMX';
```

**Resultado:**

| nombre |
| ------ |
| Ana    |
| Marta  |

### Operadores comunes

| operador | significado   |
| -------- | ------------- |
| =        | igual         |
| >        | mayor que     |
| <        | menor que     |
| >=       | mayor o igual |
| <=       | menor o igual |

**Ejercicios**

1. Mostrar personas que viven en Puebla.

2. Mostrar personas mayores de 21.

3. Mostrar personas con edad menor a 21.
