---
title: "Patrones de diseño en Node.js"
summary: "Patrones de diseño:  soluciones probadas para problemas comunes en el diseño de software que ayudan a estructurar el código de manera eficiente, promoviendo la reutilización y facilitando el mantenimiento a largo plazo."
date: "Oct 09 2024"
draft: false
tags:
  - Node
  - Design Patterns
  - Singleton
  - Factory
  - Observer
---

Cuando desarrollamos aplicaciones en Node.js, un entorno popular para aplicaciones de servidor, es fundamental escribir código limpio, modular y escalable. Para lograr esto, los patrones de diseño son una herramienta poderosa. Estos son soluciones probadas para problemas comunes en el diseño de software que ayudan a estructurar el código de manera eficiente, promoviendo la reutilización y facilitando el mantenimiento a largo plazo.

En esta entrada, exploraremos, de manera breve, los patrones de diseño más utilizados en Node.js, cómo funcionan y cuándo es ideal aplicarlos.

### 1. Patrón Singleton

El Singleton es uno de los patrones más simples y populares en Node.js. Este patrón asegura que una clase tenga solo una instancia y proporciona un único punto de acceso a ella. Es especialmente útil en situaciones en las que necesitas un objeto global compartido a lo largo de toda la aplicación, como la conexión a una base de datos o una configuración compartida.

Ejemplo en Node.js:

```js
class DatabaseConnection {
  constructor() {
    if (!DatabaseConnection.instance) {
      this.connection = this.createConnection();
      DatabaseConnection.instance = this;
    }
    return DatabaseConnection.instance;
  }

  createConnection() {
    console.log("Conexión a la base de datos creada");
    // Simulación de creación de conexión
    return {};
  }
}

const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();

console.log(db1 === db2); // true
```

En este caso, db1 y db2 hacen referencia a la misma instancia, lo que garantiza que solo haya una conexión a la base de datos activa.

### 2. Patrón Factory

El Patrón Factory es ideal cuando tienes que crear objetos que comparten una estructura común, pero requieren de personalizaciones en su comportamiento. En Node.js, se utiliza para evitar la creación manual de instancias de objetos complejos y permitir la creación dinámica de objetos según el contexto o las entradas del usuario.

Ejemplo en Node.js:

```js
class Car {
  constructor(type, cylinders) {
    this.type = type;
    this.cylinders = cylinders;
  }

  start() {
    console.log(`El coche de tipo ${this.type} ha encendido.`);
  }

  info() {
    console.log(`El coche de tipo ${this.type} es de ${this.cylinders} cilíndros.`);
  }
}

class CarFactory {

  createCar(type) {
    switch {
      case 'SUV':
        return new Car(type, 8);
      case 'Sedan':
        return new Car(type, 6);
      case 'Hatchback':
        return new Car(type, 4);
      default:
        return new Error("Unknown type");
    }
  }
}

const factory = new CarFactory();
const car1 = factory.createCar("SUV");
const car2 = factory.createCar("Sedan");

car1.start(); // El coche de tipo SUV ha encendido.
car2.info(); // El coche de tipo Sedan es de 6 cilíndros.
```

Este patrón permite crear instancias de objetos de manera dinámica dependiendo de la entrada, haciendo que el código sea más flexible y escalable.

### 3. Patrón Observer

El Patrón Observer es ideal para sistemas basados en eventos, lo que lo convierte en un ajuste natural para Node.js, que es intrínsecamente orientado a eventos. Este patrón permite que un objeto (el "subject") notifique a otros objetos (los "observers") sobre cambios en su estado sin necesidad de acoplarlos directamente.

Node.js tiene un módulo incorporado para manejar eventos: EventEmitter.

Ejemplo en Node.js empleando el módulo EventEmmiter:

```js
const EventEmitter = require("events");

class NotificationCenter extends EventEmitter {}

const notificationCenter = new NotificationCenter();

notificationCenter.on("message", (msg) => {
  console.log(`Nuevo mensaje recibido: ${msg}`);
});

notificationCenter.emit("message", "¡Has recibido una nueva notificación!");
```

Ejemplo en Node.js desde cero:

```js
class Topic {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  notify(data) {
    this.observers.forEach((o) => o.update(data));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name} recibió "${data}"`);
  }
}

const tema = new Topic();

const observador1 = new Observer("Observador 1");
const observador2 = new Observer("Observador 2");

tema.subscribe(observador1);
tema.subscribe(observador2);

tema.notify("Hola a todos los observadores");
// Observador 1 recibió "Hola a todos los observadores"
// Observador 2 recibió "Hola a todos los observadores"

tema.unsubscribe(observador2);

tema.notify("Adiós a todos los observadores");
// Observador 1 recibió "Adiós a todos los observadores"

tema.unsubscribe(observador1);
```

El patrón Observer es excelente para implementar características como notificaciones en tiempo real, colas de tareas o sistemas de mensajería dentro de una aplicación Node.js.

### 4. Patrón Decorator

El Patrón Decorator permite añadir funcionalidades a un objeto de manera dinámica sin modificar su estructura original. Esto es especialmente útil en Node.js cuando se trata de ampliar el comportamiento de ciertas funciones o módulos sin cambiar su implementación original.

Este patrón es comúnmente usado con middleware en Express, donde se pueden agregar capas de comportamiento a las peticiones HTTP, como la autenticación o el manejo de errores.

Ejemplo en Node.js con Middleware:

```js
const express = require("express");
const app = express();

const loggerMiddleware = (req, res, next) => {
  console.log(`Petición recibida a ${req.url}`);
  next(); // Llama al siguiente middleware o ruta
};

app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.send("Hola, mundo!");
});

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
```

Aquí, el middleware loggerMiddleware actúa como un "decorador" que agrega funcionalidad de registro a cada solicitud entrante, sin alterar el comportamiento de las rutas.

### 5. Patrón Middleware

El Patrón Middleware es un estándar en aplicaciones Node.js, especialmente al trabajar con frameworks como Express. Es una forma de organizar funciones que se ejecutan en la secuencia de procesamiento de una solicitud HTTP. Cada middleware tiene la posibilidad de modificar la solicitud o respuesta, o incluso terminar el ciclo de solicitud-respuesta.

Ejemplo en Node.js:

```js
const express = require("express");
const app = express();

// Middleware de ejemplo
app.use((req, res, next) => {
  console.log("Ejecutando middleware...");
  next(); // Continúa al siguiente middleware o ruta
});

// Ruta de ejemplo
app.get("/", (req, res) => {
  res.send("Hola desde el servidor Node.js");
});

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
```

Este patrón es increíblemente útil para agregar funcionalidades como autenticación, validación de entradas, manejo de errores y registro de actividades.

### 6. Patrón Dependency Injection (DI)

La Inyección de Dependencias es un patrón muy utilizado en aplicaciones de gran escala para desacoplar componentes y mejorar la mantenibilidad y testabilidad del código. Con DI, puedes proporcionar las dependencias de un objeto en lugar de permitir que el objeto las cree por sí mismo.

Ejemplo en Node.js:

```js
class DatabaseService {
  constructor() {
    this.connection = "Conexión a la base de datos";
  }
}

class UserService {
  constructor(databaseService) {
    this.databaseService = databaseService;
  }

  getUser() {
    console.log(`Obteniendo usuario desde: ${this.databaseService.connection}`);
  }
}

// Inyección de dependencias
const databaseService = new DatabaseService();
const userService = new UserService(databaseService);

userService.getUser();
```

En este ejemplo, UserService depende de DatabaseService, pero no lo crea por sí mismo. Esto facilita realizar pruebas y cambiar las dependencias sin modificar el código del servicio.

### Conclusión

Implementar patrones de diseño en Node.js no solo te ayuda a escribir mejor código, sino que también promueve la escalabilidad, el mantenimiento y la reutilización. Patrones como Singleton, Factory, Observer, Decorator, Middleware, y Dependency Injection son algunos de los más comunes y útiles en este ecosistema. Conocer estos patrones y saber cuándo aplicarlos hará que tus aplicaciones en Node.js sean más robustas y fáciles de manejar a medida que crezcan en complejidad.
