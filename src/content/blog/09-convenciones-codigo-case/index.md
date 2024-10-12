---
title: "Convenciones de Nomenclatura en Programación: Camel Case, Pascal Case y más"
summary: "Una buena convención de nomeclatura hace que el código sea más legible y mantenible."
date: "Oct 08 2024"
draft: false
tags:
  - Camel Case
  - Pascal Case
  - Snake Case
---

La nomenclatura de variables, funciones, y métodos es una parte importante del desarrollo de software. Una buena convención de nomeclatura hace que el código sea más legible y mantenible. A lo largo del tiempo, se han establecido diversas convenciones que ayudan a mejorar la claridad y consistencia en el código.

A continuación, repasaremos algunas de las convenciones más populares como Camel Case, Pascal Case, Snake Case, entre otras, junto con ejemplos de código.

### 1. Camel Case

En Camel Case, el nombre comienza en minúscula y cada palabra subsiguiente inicia con mayúscula, sin espacios o guiones entre las palabras. Esta convención es común para nombrar variables y funciones en muchos lenguajes como JavaScript, Java, y Python.

#### Ejemplo en código:

```js
let firstName = "John";
function calculateTotalPrice() {
  // lógica de la función
}
```

- firstName: Variable con el primer carácter en minúscula y la segunda palabra con mayúscula.
- calculateTotalPrice: Función donde cada palabra adicional comienza con mayúscula.

Uso típico: Variables, funciones y métodos.

### 2. Pascal Case

En Pascal Case, al igual que Camel Case, cada palabra comienza con mayúscula, pero en este caso, la primera palabra también comienza con mayúscula. Esta convención es común para nombrar clases en lenguajes como C#, Java, y TypeScript.

#### Ejemplo en código:

```csharp
class UserAccount {
    // Definición de la clase
}
public void GenerateInvoice() {
    // lógica del método
}
```

- UserAccount: Nombre de la clase donde ambas palabras comienzan con mayúscula.
- GenerateInvoice: Método con todas las palabras iniciando en mayúscula.

Uso típico: Nombres de clases, constructores y estructuras.

### 3. Snake Case

En Snake Case, las palabras están en minúsculas y separadas por un guion bajo (\_). Es común en lenguajes como Python y C para variables y constantes.

#### Ejemplo en código:

```python
user_name = 'JohnDoe'
total_price = 50.99
```

- user_name: Variable separada por guion bajo.
- total_price: Otra variable con la misma convención.

Uso típico: Variables, especialmente en Python, y a veces para constantes.

### 4. Kebab Case (Dash Case)

En Kebab Case (también llamado Dash Case), las palabras están en minúsculas y separadas por guiones (-). Aunque no es común en muchos lenguajes de programación tradicionales, es popular en el nombramiento de archivos y URLs en desarrollo web.

#### Ejemplo en código:

```html
<!-- Nombre de archivo CSS -->
<link rel="stylesheet" href="main-style.css" />

<!-- Uso en HTML -->
<div class="header-container"></div>
```

- main-style.css: Archivo con palabras separadas por guiones.
- header-container: Clases CSS o atributos de HTML.

Uso típico: Nombres de archivos, clases CSS, rutas URL.

### 5. Upper Snake Case (Screaming Snake Case)

Upper Snake Case es una variación de Snake Case, pero con todas las letras en mayúsculas. Se utiliza principalmente para constantes.

#### Ejemplo en código:

```js
const MAX_ATTEMPTS = 5;
const API_BASE_URL = "https://api.example.com";
```

- MAX_ATTEMPTS: Constante escrita en mayúsculas y separada por guiones bajos.
- API_BASE_URL: Otra constante con palabras separadas por \*.

Uso típico: Constantes globales o valores inmutables.

### 6. Hungarian Notation

La notación húngara es un poco menos común hoy en día, pero aún se usa en algunos entornos más antiguos. Esta convención añade un prefijo que indica el tipo o propósito de la variable.

#### Ejemplo en código:

```csharp
int iCount = 0;
string strName = "John";
```

- iCount: El prefijo i indica que la variable es un entero.
- strName: El prefijo str indica que la variable es una cadena.

Uso típico: En entornos más antiguos o lenguajes donde no existe una tipificación fuerte.

### 7. Notación de Constantes (All Upper Case)

Esta convención es una mezcla de la mayúscula total y Snake Case, y es ampliamente utilizada para definir constantes.

#### Ejemplo en código:

```java
public static final int MAX_USERS = 100;
```

- MAX_USERS: Constante definida en mayúsculas.

Uso típico: Definir constantes inmutables en lenguajes como Java o C++.

## Comparación entre convenciones

| Convención             | Ejemplo         | Uso típico                               |
| :--------------------- | :-------------- | :--------------------------------------- |
| Camel Case             | firstName       | Variables, funciones, métodos            |
| Pascal Case            | UserAccount     | Clases, constructores                    |
| Snake Case             | total_price     | Variables en Python, nombres de archivos |
| Kebab Case             | main-style.css  | Clases CSS, nombres de archivos          |
| Upper Snake Case       | MAX_ATTEMPTS    | Constantes                               |
| Hungarian Notation     | strName, iCount | Variables con prefijos de tipo           |
| Notación de Constantes | MAX_USERS       | Constantes                               |

### Conclusión

El uso adecuado de las convenciones de nomenclatura es crucial para escribir código limpio y fácil de mantener. Cada convención tiene su propósito y es importante elegir la que mejor se adapte a tu proyecto o seguir las convenciones que el equipo o la comunidad de desarrollo utiliza.

Siguiendo estas convenciones, se puede lograr un código más legible y organizado, lo que facilita su mantenimiento y colaboración. ¡Elige la convención adecuada para cada situación y mantén tu código consistente!
