---
title: "Linux Privilege Escalation"
summary: "Learn the fundamentals of Linux privilege escalation. From enumeration to exploitation, get hands-on with over 8 different privilege escalation techniques."
date: "Jun 27 2025"
draft: false
tags:
  - Jr Penetration Tester
  - Privilege Escalation
  - THM
  - TryHackMe
image: "/images/blog/linux-privilege-escalation.webp"
lang: "en"
---

<a href="https://tryhackme.com/room/linprivesc" target="_blank" rel="noopener noreferrer" style="text-decoration: none; cursor:pointer">Jr Penetration Tester > Privilege Escalation > Linux Privilege Escalation
</a>

![Linux Privilege Escalation](/images/blog/linux-privilege-escalation.webp)

### Task 1

## Introduction

1. **Read the above.**

<blockquote>
No answer needed
</blockquote>

---

### Task 2

## What is Privilege Escalation?

1. **Read the above.**

<blockquote>
No answer needed
</blockquote>

---

### Task 3

## Enumeration

1. **What is the hostname of the target system?**  
   _¿Cuál es el nombre de host del sistema objetivo?_

<blockquote>
wade7363
</blockquote>

2. **What is the Linux kernel version of the target system?**  
   _¿Cuál es la versión del kernel de Linux del sistema objetivo?_

<blockquote>
3.13.0-24-generic
</blockquote>

3. **What Linux is this?**  
   _¿Qué distribución de Linux es esta?_

<blockquote>
Ubuntu 14.04 LTS
</blockquote>

4. **What version of the Python language is installed on the system?**  
   _¿Qué versión del lenguaje Python está instalada en el sistema?_

<blockquote>
2.7.6
</blockquote>

5. **What vulnerability seem to affect the kernel of the target system? (Enter a CVE number)**  
   _¿Qué vulnerabilidad parece afectar al kernel del sistema objetivo? (Ingresa un número de CVE)_

<blockquote>
CVE-2015-1328
</blockquote>

---

### Task 4

## Automated Enumeration Tools

1. **Install and try a few automated enumeration tools on your local Linux distribution**  
   _Instala y prueba algunas herramientas automatizadas de enumeración en tu distribución local de Linux._

<blockquote>
No answer needed
</blockquote>

---

### Task 5

## Privilege Escalation: Kernel Exploits

1. **find and use the appropriate kernel exploit to gain root privileges on the target system.**

<blockquote>
No answer needed
</blockquote>

2. **What is the content of the flag1.txt file?**  
   _¿Cuál es el contenido del archivo flag1.txt?_

<blockquote>
THM-28392872729920
</blockquote>

---

### Task 6

## Privilege Escalation: Sudo

1. **How many programs can the user "karen" run on the target system with sudo rights?**  
   _¿Cuántos programas puede ejecutar el usuario "karen" en el sistema objetivo con privilegios de sudo?_

<blockquote>
3
</blockquote>

2. **What is the content of the flag2.txt file?**  
   _¿Cuál es el contenido del archivo flag2.txt?_

<blockquote>
THM-402028394
</blockquote>

3. **How would you use Nmap to spawn a root shell if your user had sudo rights on nmap?**  
   _¿Cómo usarías Nmap para obtener una shell como root si tu usuario tuviera privilegios de sudo sobre Nmap?_

<blockquote>
sudo nmap --interactive
</blockquote>

4. **What is the hash of frank's password?**  
   _¿Cuál es el hash de la contraseña de frank?_

<blockquote>
$6$2.sUUDsOLIpXKxcr$eImtgFExyr2ls4jsghdD3DHLHHP9X50Iv.jNmwo/BJpphrPRJWjelWEz2HH.joV14aDEwW1c3CahzB1uaqeLR1
</blockquote>

---

### Task 7

## Privilege Escalation: SUID

1. **Which user shares the name of a great comic book writer?**  
   _¿Qué usuario comparte el nombre de un gran escritor de cómics?_

<blockquote>
gerryconway
</blockquote>

2. **What is the password of user2?**  
   _¿Cuál es la contraseña del usuario2?_

<blockquote>
Password1
</blockquote>

3. **What is the content of the flag3.txt file?**  
   _¿Cuál es el contenido del archivo flag3.txt?_

<blockquote>
THM-3847834
</blockquote>

---

### Task 8

## Privilege Escalation: Capabilities

1. **Complete the task described above on the target system**

<blockquote>
No answer needed
</blockquote>

2. **How many binaries have set capabilities?**  
_¿Cuántos binarios tienen capacidades establecidas?_
<blockquote>
6
</blockquote>

3. **What other binary can be used through its capabilities?**  
   _¿Qué otro binario puede utilizarse a través de sus capacidades?_

<blockquote>
view
</blockquote>

4. **What is the content of the flag4.txt file?**  
   _¿Cuál es el contenido del archivo flag4.txt?_

<blockquote>
THM-9349843
</blockquote>

---

### Task 9

## Privilege Escalation: Cron Jobs

1. **How many user-defined cron jobs can you see on the target system?**  
   _¿Cuántos trabajos cron definidos por el usuario puedes ver en el sistema objetivo?_

<blockquote>
4
</blockquote>

2. **What is the content of the flag5.txt file?**  
   _¿Cuál es el contenido del archivo flag5.txt?_

<blockquote>
THM-383000283
</blockquote>

3. **What is Matt's password?**  
   _¿Cuál es la contraseña de Matt?_

<blockquote>
123456
</blockquote>

---

### Task 10

## Privilege Escalation: PATH

1. **What is the odd folder you have write access for?**  
   _¿Cuál es la carpeta extraña para la que tienes permisos de escritura?_

<blockquote>
/home/murdoch
</blockquote>

2. **Exploit the $PATH vulnerability to read the content of the flag6.txt file.**

<blockquote>
No answer needed
</blockquote>

3. **What is the content of the flag6.txt file?**  
   _¿Cuál es el contenido del archivo flag6.txt?_

<blockquote>
THM-736628929
</blockquote>

---

### Task 11

## Privilege Escalation: NFS

1. **How many mountable shares can you identify on the target system?**  
   _¿Cuántos recursos compartidos montables puedes identificar en el sistema objetivo?_

<blockquote>
3
</blockquote>

2. **How many shares have the "no_root_squash" option enabled?**  
   _¿Cuántos recursos compartidos tienen habilitada la opción "no_root_squash"?_

<blockquote>
3
</blockquote>

3. **Gain a root shell on the target system**

<blockquote>
No answer needed
</blockquote>

4. **What is the content of the flag7.txt file?**  
   _¿Cuál es el contenido del archivo flag7.txt?_

<blockquote>
THM-89384012
</blockquote>

---

### Task 12

## Capstone Challenge

1. **What is the content of the flag1.txt file?**  
   _¿Cuál es el contenido del archivo flag1.txt?_

<blockquote>
THM-42828719920544
</blockquote>

2. **What is the content of the flag2.txt file?**  
   _¿Cuál es el contenido del archivo flag2.txt?_

<blockquote>
THM-168824782390238
</blockquote>

---
