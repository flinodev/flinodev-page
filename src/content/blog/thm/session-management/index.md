---
title: "Session Management"
summary: "Learn about session management and the different attacks that can be performed against insecure implementations."
date: "Jul 02 2025"
draft: false
tags:
  - Web Application Pentesting
  - Authentication
  - THM
  - TryHackMe
image: "/images/blog/session-management.webp"
---

<a href="https://tryhackme.com/room/sessionmanagement" target="_blank" style="text-decoration: none; cursor:pointer"> Web Application Pentesting > Authentication > Session Management
</a>

![Net Sec Challenge](/images/blog/session-management.webp)

Learn about session management and the different attacks that can be performed against insecure implementations.

### Task 1
## Introduction

1. **I am ready to learn about session management!**  

<blockquote>
No answer needed
</blockquote>

---

### Task 2
## What is Session Management?

1. **Which state in the session management lifecycle deals with user's pressing the logout button?**  
_¿Qué estado en el ciclo de vida de la gestión de sesiones se encarga de cuando el usuario presiona el botón de cerrar sesión?_
<blockquote>
Session Termination
</blockquote>

2. **Which state in the session management lifecycle deals with user's providing their credentials?**  
_¿Qué estado en el ciclo de vida de la gestión de sesiones se encarga de cuando el usuario proporciona sus credenciales?_
<blockquote>
Session Creation
</blockquote>

3. **Which state in the session management lifecycle deals with user's actions performed after authentication?**  
_¿Qué estado en el ciclo de vida de la gestión de sesiones se encarga de las acciones del usuario realizadas después de la autenticación?_
<blockquote>
Session Tracking
</blockquote>

4. **Which state in the session management lifecycle deals with user's that forget to log out of the application?**  
_¿Qué estado en el ciclo de vida de la gestión de sesiones se encarga de los usuarios que olvidan cerrar sesión en la aplicación?_
<blockquote>
Session Expiry
</blockquote>

---

### Task 3
## Authentication vs Authorisation

1. **What is the name of the process in the IAAA model that would be responsible for tracking your actions and logging them?**  
_¿Cuál es el nombre del proceso en el modelo IAAA que sería responsable de rastrear tus acciones y registrarlas en logs?_
<blockquote>
Accountability
</blockquote>

2. **What is the name of the process in the IAAA model that would be responsible for granting you a session value?**  
_¿Cuál es el nombre del proceso en el modelo IAAA que sería responsable de otorgarte un valor de sesión?_
<blockquote>
Authentication
</blockquote>

3. **What is the name of the process in the IAAA model that would be responsible for verifying that you have the relevant permissions to perform an action?**  
_¿Cuál es el nombre del proceso en el modelo IAAA que sería responsable de verificar que tienes los permisos necesarios para realizar una acción?_
<blockquote>
Authorisation
</blockquote>

---

### Task 4
## Cookies vs Tokens

1. **What cookie attribute can be used to ensure that the cookie is only transmitted via secure HTTPS channels?**    
_¿Qué atributo de cookie puede usarse para garantizar que la cookie solo se transmita a través de canales HTTPS seguros?_
<blockquote>
secure
</blockquote>

2. **What HTTP header is used in the response to inform the browser that a cookie is being sent?**  
_¿Qué encabezado HTTP se utiliza en la respuesta para informar al navegador que se está enviando una cookie?_
<blockquote>
Set-Cookie
</blockquote>

3. **What HTTP header is often used in requests to indicate the transmission of a JWT?**  
_¿Qué encabezado HTTP se utiliza comúnmente en las solicitudes para indicar la transmisión de un JWT?_
<blockquote>
Authorization: Bearer
</blockquote>

---

### Task 5
## Securing the Session Lifecycle

1. **What phase of the session management lifecycle would be vulnerable if you could predict what the value of a session would be?**  
_¿Qué fase del ciclo de vida de la gestión de sesiones sería vulnerable si pudieras predecir el valor de una sesión?_
<blockquote>
Session Creation
</blockquote>

2. **What phase of the session management lifecycle would be vulnerable if you don't have the ability to flush a threat actor's access to your session?**  
_¿Qué fase del ciclo de vida de la gestión de sesiones sería vulnerable si no tienes la capacidad de eliminar el acceso de un actor malicioso a tu sesión?_
<blockquote>
Session Termination
</blockquote>

3. **What phase of the session management lifecycle would be vulnerable if there wasn't sufficient information to piece together what happened during an incident?**  
_¿Qué fase del ciclo de vida de la gestión de sesiones sería vulnerable si no hubiera suficiente información para reconstruir lo sucedido durante un incidente?_
<blockquote>
Session Tracking
</blockquote>

4. **What phase of the session management lifecycle would be vulnerable if the session value itself was transmitted through an insecure redirect?**  
_¿Qué fase del ciclo de vida de la gestión de sesiones sería vulnerable si el valor de la sesión se transmitiera a través de una redirección insegura?_
<blockquote>
Session Creation
</blockquote>

---

### Task 6
## Exploiting Insecure Session Management

1. **What is the username of the student with the name X?**  
_¿Cuál es el nombre de usuario del estudiante con el nombre X?_
<blockquote>
THM{Got.the.User}
</blockquote>

2. **How many lecturers are registered on the application?**  
_¿Cuántos profesores están registrados en la aplicación?_
<blockquote>
1
</blockquote>

3. **Excluding the unauthenticated user, how many roles does the application have?**  
_Excluyendo al usuario no autenticado, ¿cuántos roles tiene la aplicación?_
<blockquote>
3
</blockquote>

4. **How many test attempts in total have been performed on the application?**  
_¿Cuántos intentos de prueba se han realizado en total en la aplicación?_
<blockquote>
4
</blockquote>

5. **What is the highest score that student1 has achieved on a test?**  
_¿Cuál es la puntuación más alta que ha obtenido el estudiante1 en una prueba?_
<blockquote>
3
</blockquote>

6. **What is the sequence of correct answers for the Database Types test? (Format y=yes and n=no, separated by commas)**  
_¿Cuál es la secuencia de respuestas correctas para la prueba de Tipos de Base de Datos?
(Formato: y=sí y n=no, separados por comas)_
<blockquote>
y,n,n
</blockquote>

---

### Task 7
## Conclusion

1. **I understand the session management lifecycle and how to secure it!**  

<blockquote>
No answer needed
</blockquote>

