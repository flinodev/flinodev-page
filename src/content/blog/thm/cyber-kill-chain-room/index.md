---
title: "Cyber Kill Chain Room"
summary: "The Cyber Kill Chain framework is designed for identification and prevention of the network intrusions. You will learn what the adversaries need to do in order to achieve their goals."
date: "Apr 24 2025"
draft: false
tags:
  - SOC Level 1
  - Cyber Defence Frameworks
  - THM
  - TryHackMe
image: "/images/blog/cyber-kill-chain.webp"
---

<a href="https://tryhackme.com/room/cyberkillchainzmt" target="_blank" rel="noopener noreferrer" style="text-decoration: none; cursor:pointer">SOC Level 1 > Cyber Defence Frameworks > Cyber Kill Chain</a>

![Imagen de nomenclatura](/images/blog/cyber-kill-chain.webp)

### Task 1
## Introduction

1. **Read the above.**

<blockquote>
No answer needed
</blockquote>

***

### Task 2
## Reconnaissance

1. **What is the name of the Intel Gathering Tool that is a web-based interface to the common tools and resources for open-source intelligence?** 
_¿Cuál es el nombre de la herramienta de recopilación de inteligencia que ofrece una interfaz web para acceder a las herramientas y recursos comunes de inteligencia de fuentes abiertas?_

<blockquote>
  OSINT Framework
</blockquote>

2. **What is the definition for the email gathering process during the stage of reconnaissance?**  
_¿Cuál es la definición del proceso de recopilación de correo electrónico durante la etapa de reconocimiento?_
<blockquote>
  Email harvesting
</blockquote>

***

### Task 3
## Weaponization

1. **This term is referred to as a group of commands that perform a specific task. You can think of them as subroutines or functions that contain the code that most users use to automate routine tasks. But malicious actors tend to use them for malicious purposes and include them in Microsoft Office documents. Can you provide the term for it?**  
_Este término se refiere a un conjunto de comandos que ejecutan una tarea específica. Puedes pensar en ellos como subrutinas o funciones que contienen el código que la mayoría de los usuarios utiliza para automatizar tareas rutinarias. Sin embargo, los actores maliciosos tienden a usarlos con fines maliciosos e incluirlos en documentos de Microsoft Office. ¿Puedes decir cuál es ese término?_

<blockquote>
  Macro
</blockquote>

***

### Task 4
## Delivery

1. **What is the name of the attack when it is performed against a specific group of people, and the attacker seeks to infect the website that the mentioned group of people is constantly visiting.**  
_¿Cuál es el nombre del ataque que se lleva a cabo contra un grupo específico de personas, en el que el atacante busca infectar el sitio web que dicho grupo visita constantemente?_
<blockquote>
  Watering hole attack
</blockquote>

***

### Task 5
## Exploitation

1. **Can you provide the name for a cyberattack targeting a software vulnerability that is unknown to the antivirus or software vendors?**  
_¿Puede proporcionar el nombre de un ciberataque dirigido a una vulnerabilidad de software que es desconocida para los proveedores de antivirus o software?_
<blockquote>
  Zero-day
</blockquote>

***

### Task 6
## Installation

1. **Can you provide the technique used to modify file time attributes to hide new or changes to existing files?**  
_¿Puedes proporcionar la técnica utilizada para modificar los atributos de tiempo de los archivos para ocultar archivos nuevos o cambios en archivos existentes?_

<blockquote>
  Timestomping
</blockquote>

2. **Can you name the malicious script planted by an attacker on the webserver to maintain access to the compromised system and enables the webserver to be accessed remotely?**  
_Puedes nombrar el script malicioso colocado por un atacante en el servidor web para mantener el acceso al sistema comprometido y que permite acceder remotamente al servidor web?_

<blockquote>
  Web Shell
</blockquote>

***

### Task 7
## Command & Control

1. **What is the C2 communication where the victim makes regular DNS requests to a DNS server and domain which belong to an attacker.**  
_¿Cuál es la comunicación C2 en la que la víctima realiza solicitudes DNS regulares a un servidor DNS y dominio que pertenecen a un atacante?_

<blockquote>
  DNS Tunneling
</blockquote>

***

### Task 8
## Actions on Objetives (Exfiltration)

1. **Can you provide a technology included in Microsoft Windows that can create backup copies or snapshots of files or volumes on the computer, even when they are in use?**  
_¿Puedes mencionar una tecnología incluida en Microsoft Windows que puede crear copias de seguridad o instantáneas de archivos o volúmenes en la computadora, incluso cuando están en uso?_

<blockquote>
  Shadow Copy
</blockquote>

***

### Task 9
## Practice Analysis

1. **What is the flag after you complete the static site?**  
_¿Cuál es la bandera después de completar el sitio estático?_

![Imagen de nomenclatura](/images/blog/cyber-kill-chain-practical.webp)

Asociamos cada elemento con su respectiva etapa, quedando de la siguiente manera:

- **Weaponization**: _powershell_

- **Delivery**: _spearphishing attachment_

- **Exploitation**: _exploit public-facing application_

- **Installation**: _dynamic linker hijacking_

- **Command & Control**: _fallback channels_

- **Actions on Objectives**: _data from local system_

Una vez realizada la asociación de cada elemento con cada una las etapas del Kill Chain, obtenemos la siguiente bandera

<blockquote>
  THM{7HR347_1N73L_12_4w35om3}
</blockquote>

***

### Task 10
## Conclusion

1. **Read the above.**  
<blockquote>
  No answer needed
</blockquote>