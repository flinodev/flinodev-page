---
title: "Unified Kill Chain Room"
summary: "The Unified Kill Chain is a framework which establishes the phases of an attack, and a means of identifying and mitigating risk to IT assets."
date: "Apr 26 2025"
draft: false
tags:
  - SOC Level 1
  - Cyber Defence Frameworks
  - THM
image: "/images/blog/cyber-kill-chain.webp"
---

<a href="https://tryhackme.com/room/unifiedkillchain" target="_blank" style="text-decoration: none; cursor:pointer">SOC Level 1 > Cyber Defence Frameworks > Unified Kill Chain</a>

![Unified Kill Chain](/images/blog/unified_kill_chain.webp)

## Introduction

**Let's proceed with the room!**

<blockquote>
No answer needed
</blockquote>

## What is a "Kill Chain"

Where does the term "Kill Chain" originate from?  
For this answer, you must fill in the blank!: The ********  

_¿De dónde se origina el término "Kill Chain"?_  
_Para esta respuesta, debes completar el espacio en blanco: The ********_

<blockquote>
Military
</blockquote>

## What is "Threat Modelling"

What is the technical term for a piece of software or hardware in IT (Information Technology?)  

_¿Cuál es el término técnico para una pieza de software o hardware en TI (Tecnologías de la Información)?_

<blockquote>
asset
</blockquote>

## Introducing the Unified Kill Chain
In what year was the Unified Kill Chain framework released?  

_¿En qué año se lanzó el marco Unified Kill Chain?_  

<blockquote>
2017
</blockquote>

According to the Unified Kill Chain, how many phases are there to an attack?  

_Según el Unified Kill Chain ¿cuántas fases tiene un ataque?_

<blockquote>
18
</blockquote>

What is the name of the attack phase where an attacker employs techniques to evade detection?  

_¿Cuál es el nombre de la fase del ataque en la que un atacante emplea técnicas para evadir la detección?_  

<blockquote>
Defense Evasion
</blockquote>

What is the name of the attack phase where an attacker employs techniques to remove data from a network?  

_¿Cuál es el nombre de la fase del ataque en la que un atacante emplea técnicas para extraer datos de una red?_

<blockquote>
Exfiltration
</blockquote>

What is the name of the attack phase where an attacker achieves their objectives?  

_¿Cuál es el nombre de la fase del ataque en la que un atacante alcanza sus objetivos?_  

<blockquote>
Objectives
</blockquote>

## Phase: In (Initial Foothold)

What is an example of a tactic to gain a foothold using emails?  

_¿Cuál es un ejemplo de una táctica para establecer una presencia inicial utilizando correos electrónicos?_

<blockquote>
Phising
</blockquote>

Impersonating an employee to request a password reset is a form of what?  

_Hacerse pasar por un empleado para solicitar el restablecimiento de una contraseña es una forma de ¿qué?_ 

<blockquote>
Social Engineering
</blockquote>

An adversary setting up the Command & Control server infrastructure is what phase of the Unified Kill Chain?  

_¿En qué fase de la Unified Kill Chain se encuentra un adversario al configurar la infraestructura del servidor de Comando y Control?_  

<blockquote>
Weaponization
</blockquote>

Exploiting a vulnerability present on a system is what phase of the Unified Kill Chain?  

_Explotar una vulnerabilidad presente en un sistema, ¿en qué fase de la Unified Kill Chain se encuentra?_

<blockquote>
Exploitation
</blockquote>

Moving from one system to another is an example of?  

_Pasar de un sistema a otro es un ejemplo de..._

<blockquote>
Pivoting
</blockquote>

Leaving behind a malicious service that allows the adversary to log back into the target is what?  

_Dejar un servicio malicioso que permite al adversario volver a ingresar al objetivo, ¿qué es?_

<blockquote>
Persistence
</blockquote>

## Phase: Through (Network Propagation)

As a SOC analyst, you pick up numerous alerts pointing to failed login attempts from an administrator account. What stage of the kill chain would an attacker be seeking to achieve?  

_Como analista de SOC, recibes numerosas alertas que indican intentos de inicio de sesión fallidos desde una cuenta de administrador. ¿Qué fase de la kill chain estaría buscando alcanzar un atacante?_  

<blockquote>
Privilege Escalation
</blockquote>

Mimikatz, a known post-exploitation tool, was recently detected running on the IT Manager’s computer. Security logs show that Mimikatz attempted to access memory spaces typically used by Windows to store user authentication secrets. Considering the usual capabilities and purpose of Mimikatz, what is the primary objective of this tool in such an attack scenario?  

_Mimikatz, una herramienta conocida de post-explotación, fue detectada recientemente ejecutándose en la computadora del Gerente de TI. Los registros de seguridad muestran que Mimikatz intentó acceder a los espacios de memoria que normalmente usa Windows para almacenar secretos de autenticación de usuarios. Considerando las capacidades y el propósito usual de Mimikatz, ¿cuál es el objetivo principal de esta herramienta en un escenario de ataque como este?_

<blockquote>
Credential dumping
</blockquote>

## Phase: Out (Action on Objectives)

While monitoring the network as a SOC analyst, you realise that there is a spike in the network activity, and all the traffic is outbound to an unknown IP address. What stage could describe this activity?  

_Mientras monitoreas la red como analista de SOC, te das cuenta de que hay un aumento en la actividad de la red y todo el tráfico es saliente hacia una dirección IP desconocida. ¿Qué fase podría describir esta actividad?_  

<blockquote>
Exfiltration
</blockquote>

Personally identifiable information (PII) has been released to the public by an adversary, and your organisation is facing scrutiny for the breach. What part of the CIA triad would be affected by this action?  

_Información personal identificable (PII) ha sido divulgada al público por un adversario, y tu organización está enfrentando un escrutinio debido a la brecha. ¿Qué parte de la tríada CIA se vería afectada por esta acción?_

<blockquote>
Confidentiality
</blockquote>

## Practical

Match the scenario prompt to the correct phase of the Unified Kill Chain to reveal the flag at the end. What is the flag?  

_Relaciona el escenario presentado con la fase correcta de la Unified Kill Chain para revelar la bandera al final. ¿Cuál es la bandera?_  

<blockquote>
THM{UKC_SCENARIO}
</blockquote>

## Conclusion

Complete this task to finish the room!

<blockquote>
No answer needed
</blockquote>