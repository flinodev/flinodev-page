---
title: "Eviction Room"
summary: "Unearth the monster from under your bed."
date: "May 07 2025"
draft: false
tags:
  - SOC Level 1
  - Cyber Defence Frameworks
  - THM
  - TryHackMe
image: "/images/blog/eviction.webp"
---

<a href="https://tryhackme.com/room/eviction" target="_blank" rel="noopener noreferrer" style="text-decoration: none; cursor:pointer">SOC Level 1 > Cyber Defence Frameworks > Eviction</a>

![Eviction](/images/blog/eviction.webp)

### Task 1
## Understand the adversary

Sunny is a SOC analyst at E-corp, which manufactures rare earth metals for government and non-government clients. She receives a classified intelligence report that informs her that an APT group (APT28) might be trying to attack organizations similar to E-corp. To act on this intelligence, she must use the MITRE ATT&CK Navigator to identify the TTPs used by the APT group, to ensure it has not already intruded into the network, and to stop it if it has.

Please visit <a href="https://static-labs.tryhackme.cloud/sites/eviction/" target="_blank" rel="noopener noreferrer">this link</a> to check out the MITRE ATT&CK Navigator layer for the APT group and answer the questions below.

1. **What is a technique used by the APT to both perform recon and gain initial access?**  
_¿Cuál es una técnica utilizada por el APT para realizar reconocimiento y obtener acceso inicial?_  

<blockquote>
Spearphishing link
</blockquote>

2. **Sunny identified that the APT might have moved forward from the recon phase. Which accounts might the APT compromise while developing resources?**  
_Sunny identificó que el APT podría haber avanzado desde la fase de reconocimiento. ¿Qué cuentas podría comprometer el APT mientras desarrolla recursos?_  

<blockquote>
Email accounts
</blockquote>

3. **E-corp has found that the APT might have gained initial access using social engineering to make the user execute code for the threat actor. Sunny wants to identify if the APT was also successful in execution. What two techniques of user execution should Sunny look out for? (Answer format: <technique 1> and <technique 2>)**  
_E-corp ha descubierto que el APT podría haber obtenido acceso inicial utilizando ingeniería social para que el usuario ejecutara código para el actor de amenazas. Sunny quiere identificar si el APT también tuvo éxito en la ejecución. ¿Qué dos técnicas de ejecución por parte del usuario debería buscar Sunny? (Formato de respuesta: <técnica 1> y <técnica 2>)_  

<blockquote>
Malicious file and malicious link
</blockquote>

4. **If the above technique was successful, which scripting interpreters should Sunny search for to identify successful execution? (Answer format: <technique 1> and <technique 2>)**  
_Si la técnica anterior tuvo éxito, ¿qué intérpretes de scripts debería buscar Sunny para identificar una ejecución exitosa? (Formato de respuesta: <técnica 1> y <técnica 2>)_  

<blockquote>
Powershell and Windows Command shell
</blockquote>

5. **While looking at the scripting interpreters identified in Q4, Sunny found some obfuscated scripts that changed the registry. Assuming these changes are for maintaining persistence, which registry keys should Sunny observe to track these changes?**  
_Mientras examinaba los intérpretes de scripts identificados en la pregunta 4, Sunny encontró algunos scripts ofuscados que modificaban el registro. Suponiendo que estos cambios son para mantener la persistencia, ¿qué claves del registro debería observar Sunny para rastrear estos cambios?_  

<blockquote>
Registry run keys
</blockquote>

6. **Sunny identified that the APT executes system binaries to evade defences. Which system binary's execution should Sunny scrutinize for proxy execution?**  
_Sunny identificó que el APT ejecuta binarios del sistema para evadir las defensas. ¿Qué ejecución de binario del sistema debería examinar Sunny para detectar ejecución por proxy?_  

<blockquote>
Rundll32
</blockquote>

7. **Sunny identified tcpdump on one of the compromised hosts. Assuming this was placed there by the threat actor, which technique might the APT be using here for discovery?**  
_Sunny identificó tcpdump en uno de los hosts comprometidos. Suponiendo que fue colocado allí por el actor de amenazas, ¿qué técnica podría estar utilizando el APT aquí para reconocimiento?_  

<blockquote>
Network sniffing
</blockquote>

8. **It looks like the APT achieved lateral movement by exploiting remote services. Which remote services should Sunny observe to identify APT activity traces?**  
_Parece que el APT logró moverse lateralmente explotando servicios remotos. ¿Qué servicios remotos debería observar Sunny para identificar rastros de actividad del APT?_  

<blockquote>
SMB/Windows Admin shares
</blockquote>

9. **It looked like the primary goal of the APT was to steal intellectual property from E-corp's information repositories. Which information repository can be the likely target of the APT?**  
_Parece que el objetivo principal del APT era robar propiedad intelectual de los repositorios de información de E-corp. ¿Qué repositorio de información podría ser el objetivo probable del APT?_  

<blockquote>
Sharepoint
</blockquote>

10. **Although the APT had collected the data, it could not connect to the C2 for data exfiltration. To thwart any attempts to do that, what types of proxy might the APT use? (Answer format: <technique 1> and <technique 2>)**  
_Aunque el APT había recopilado los datos, no pudo conectarse al C2 para la exfiltración de datos. Para frustrar cualquier intento de hacerlo, ¿qué tipos de proxy podría usar el APT? (Formato de respuesta: <técnica 1> y <técnica 2>)_  

<blockquote>
external proxy and multi-hop proxy
</blockquote>

11. **Congratulations! You have helped Sunny successfully thwart the APT's nefarious designs by stopping it from achieving its goal of stealing the IP of E-corp.**  
_Gracias! Me alegra saber que ayudamos a Sunny a frustrar los planes del APT y proteger la propiedad intelectual de E-corp. ¡Gran trabajo en equipo! Si necesitas más ayuda en el futuro, no dudes en preguntar. ¡Que sigan las victorias en la ciberseguridad!_  

<blockquote>
No answer needed
</blockquote>

***