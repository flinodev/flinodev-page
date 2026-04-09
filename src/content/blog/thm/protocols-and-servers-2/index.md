---
title: "Protocols and Servers 2"
summary: "Learn about attacks against passwords and cleartext traffic; explore options for mitigation via SSH and SSL/TLS."
date: "Jun 22 2025"
draft: false
tags:
  - Jr Penetration Tester
  - Network Security
  - THM
  - TryHackMe
image: "/images/blog/protocols-servers-2.webp"
lang: "en"
---

<a href="https://tryhackme.com/room/protocolsandservers2" target="_blank" rel="noopener noreferrer" style="text-decoration: none; cursor:pointer">Jr Penetration Tester > Network Security > Protocols and Servers 2
</a>

![Protocols and Servers 2](/images/blog/protocols-servers-2.webp)

### Task 1

## Introduction

1. **We suggest that you start the AttackBox and the virtual machine as you proceed to tackle the following tasks. You can connect to the different services over Telnet or Netcat for better practice and learning experience.**

<blockquote>
No answer needed
</blockquote>

---

### Task 2

## Sniffing Attack

1. **What do you need to add to the command `sudo tcpdump` to capture only Telnet traffic?**  
_¿Qué necesitas agregar al comando `sudo tcpdump` para capturar solo el tráfico Telnet?_
<blockquote>
port 23
</blockquote>

2. **What is the simplest display filter you can use with Wireshark to show only IMAP traffic?**  
   _¿Cuál es el filtro de visualización más simple que puedes usar en Wireshark para mostrar solo el tráfico IMAP?_

<blockquote>
imap
</blockquote>

---

### Task 3

## Man-in-the-Middle (MITM) Attack

1. **How many different interfaces does Ettercap offer?**  
   _¿Cuántas interfaces diferentes ofrece Ettercap?_

<blockquote>
3
</blockquote>

2. **In how many ways can you invoke Bettercap?**  
   _¿De cuántas formas puedes invocar Bettercap?_

<blockquote>
3
</blockquote>

---

### Task 4

## Transport Layer Security (TLS)

1. **DNS can also be secured using TLS. What is the three-letter acronym of the DNS protocol that uses TLS?**  
   _El DNS también puede asegurarse usando TLS. ¿Cuál es el acrónimo de tres letras del protocolo DNS que usa TLS?_

<blockquote>
DoT
</blockquote>

### Task 5

## Secure Shell (SSH)

1. **Use SSH to connect to MACHINE_IP as `mark` with the password `XBtc49AB`. Using `uname -r`, find the Kernel release?**  
   _Usa SSH para conectarte a MACHINE_IP como el usuario `mark` con la contraseña `XBtc49AB`. Usando el comando `uname -r`, ¿cuál es la versión del Kernel?_

<blockquote>
5.15.0-119-generic
</blockquote>

2. **Use SSH to download the file `book.txt` from the remote system. How many KBs did `scp` display as download size?**  
_Usa SSH para descargar el archivo `book.txt` desde el sistema remoto. ¿Cuántos KB mostró `scp` como tamaño de descarga?_
<blockquote>
415
</blockquote>

---

### Task 6

## Password Attack

1. **We learned that one of the email accounts is `lazie`. What is the password used to access the IMAP service on MACHINE_IP?**  
   _Sabemos que una de las cuentas de correo es `lazie`. ¿Cuál es la contraseña utilizada para acceder al servicio IMAP en MACHINE_IP?_

<blockquote>
butterfly
</blockquote>

### Task 7

## Summary

1. **By now, you have completed the eighth room of the Network Security module. Please proceed to the final room of this module to test your skills.**

<blockquote>
No answer needed
</blockquote>
