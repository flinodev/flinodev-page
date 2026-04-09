---
title: "Mitre Room"
summary: "This room will discuss the various resources MITRE has made available for the cybersecurity community."
date: "Apr 29 2025"
draft: false
tags:
  - SOC Level 1
  - Cyber Defence Frameworks
  - THM
  - TryHackMe
image: "/images/blog/diamond-model-room.webp"
lang: "en"
---

<a href="https://tryhackme.com/room/mitre" target="_blank" rel="noopener noreferrer" style="text-decoration: none; cursor:pointer">SOC Level 1 > Cyber Defence Frameworks > MITRE

![Imagen de nomenclatura](/images/blog/mitre.webp)

### Task 1

## Introduction

1. **Read the above.**

<blockquote>
No answer needed
</blockquote>

---

### Task 2

## Basic Terminology

1. **Read the above.**

<blockquote>
No answer needed
</blockquote>

---

### Task 3

## ATT&CK® Framework

1. **Besides Blue teamers, who else will use the ATT&CK Matrix? (Red Teamers, Purpe Teamers, SOC Managers?)**  
   _Además de los integrantes del Blue Team, ¿quién más utilizará la Matriz ATT&CK? (¿Red Team, Purple Team, gerentes del SOC?)_

<blockquote>
Red Teamers
</blockquote>

2. **What is the ID for this technique?**  
   ¿Cuál es el ID de esta técnica?

Siguiendo la página de <a href="https://attack.mitre.org/techniques/T1566/" target="_blank" rel="noopener noreferrer">attack.mitre.org para la técnica Phising</a> encontramos que el ID es el T1566
![T1566](/images/blog/t1566.webp)

<blockquote>
T1566
</blockquote>

3. **Based on this technique, what mitigation covers identifying social engineering techniques?**  
   _Según esta técnica, ¿qué mitigación abarca la identificación de técnicas de ingeniería social?_

En la misma <a href="https://attack.mitre.org/techniques/T1566/" target="_blank" rel="noopener noreferrer">página para la técnica Phising</a> en la sección **Mitigations** encontramos la respuesta a esta pregunta
![userTraining](/images/blog/user_training.webp)

<blockquote>
User Training
</blockquote>

4. **What are the data sources for Detection? (format: source1,source2,source3 with no spaces after commas)**  
   _¿Cuáles son las fuentes de datos para la detección? (formato: fuente1,fuente2,fuente3 sin espacios después de las comas)_

En la misma <a href="https://attack.mitre.org/techniques/T1566/" target="_blank" rel="noopener noreferrer">página para la técnica Phising</a> en la sección **Detection** encontramos la respuesta a esta pregunta

<blockquote>
Application Log,File,Network Traffic
</blockquote>

5. **Which are the first two groups to have used spear-phishing in their campaigns? (format: group1,group2)**  
   _¿Cuáles son los dos primeros grupos que utilizaron spear-phishing en sus campañas? (formato: grupo1,grupo2)_

En la misma <a href="https://attack.mitre.org/techniques/T1566/" target="_blank" rel="noopener noreferrer">página para la técnica Phising</a> en la sección **Procedure Examples** encontramos la respuesta a esta pregunta
![procedureExamples](/images/blog/procedureExamples.webp)

<blockquote>
Axiom,Gold SOUTHFIELD
</blockquote>

6. **Based on the information for the first group, what are their associated groups?**  
   _Según la información del primer grupo, ¿cuáles son los grupos asociados a este?_

En la <a href="https://attack.mitre.org/groups/G0001/" target="_blank" rel="noopener noreferrer">página del grupo Axiom</a> en la sección **Associated Group Descriptions** encontramos la respuesta a esta pregunta

<blockquote>
Group 72
</blockquote>

7. **What software is associated with this group that lists phishing as a technique?**  
   _¿Qué software está asociado a este grupo que incluye el phishing como una de sus técnicas?_

En la <a href="https://attack.mitre.org/groups/G0001/" target="_blank" rel="noopener noreferrer">página del grupo Axiom</a> en la sección **Software** encontramos la respuesta a esta pregunta
![softwarePhising](/images/blog/softwarePhising.webp)

<blockquote>
Hikit
</blockquote>

8. **What is the description for this software?**  
   _¿Cuál es la descripción de este software?_

En la <a href="https://attack.mitre.org/software/S0009/"  rel="noopener noreferrer">página del software Hikit</a> encontramos la respuesta a esta pregunta

<blockquote>
Hikit is malware that has been used by Axiom for late-stage persistence and exfiltration after the initial compromise.
</blockquote>

9. **This group overlaps (slightly) with which other group?**  
   _¿Con qué otro grupo se superpone (ligeramente) este grupo?_

En la <a href="https://attack.mitre.org/groups/G0001/" target="_blank" rel="noopener noreferrer">página del grupo Axiom</a> encontramos la respuesta a esta pregunta
![WinntiGroup](/images/blog/WinntiGroup.webp)

<blockquote>
Winnti Group
</blockquote>

10. **How many techniques are attributed to this group?**  
    _¿Cuántas técnicas se atribuyen a este grupo?_

En la <a href="https://attack.mitre.org/software/S0009/" target="_blank" rel="noopener noreferrer">página del software Hikit</a> en la sección **Techniques Used** encontramos la respuesta a esta pregunta

<blockquote>
15
</blockquote>

---

### Task 4

## CAR Knowledge Base

1. **What tactic has an ID of TA0003?**  
   _¿Qué táctica tiene el ID TA0003?_

Revisando en primer instancia la <a href="https://car.mitre.org/analytics/CAR-2020-09-001/" target="_blank" rel="noopener noreferrer">página de CAR-2020-09-001: Scheduled Task - FileAccess</a> en la sección **Tactics** encontramos 4 tácticas (Execution, Persistence, Privilege Escalation). Explorando una por una, encontramos que la táctica con el ID **TA0003** es <a href="https://attack.mitre.org/tactics/TA0003/" target="_blank" rel="noopener noreferrer">Persistence</a>
![Persistence](/images/blog/Persistence.webp)

<blockquote>
Persistence
</blockquote>

2. **What is the name of the library that is a collection of Zeek (BRO) scripts?**  
   _¿Cuál es el nombre de la biblioteca que es una colección de scripts de Zeek (BRO)?_

En la <a href="https://car.mitre.org/" target="_blank" rel="noopener noreferrer">página principal</a> en la sección **Analytic Source Code Libraries** encontramos la respuesta a esta pregunta.
![BZAR](/images/blog/BZAR.webp)

<blockquote>
BZAR
</blockquote>

3. **What is the name of the technique for running executables with the same hash and different names?**  
   _¿Cuál es el nombre de la técnica para ejecutar archivos ejecutables con el mismo hash pero con nombres diferentes?_

En la <a href="https://car.mitre.org/analytics/" target="_blank" rel="noopener noreferrer">lista analítica</a> buscamos el término **"hash"** y podremos encontrar la respuesta a esta pregunta.

<blockquote>
Masquerading
</blockquote>

4. **Examine CAR-2013-05-004, besides Implementations, what additional information is provided to analysts to ensure coverage for this technique?**  
   _Examina CAR-2013-05-004; además de las implementaciones, ¿qué información adicional se proporciona a los analistas para garantizar la cobertura de esta técnica?_

En la página del <a href="https://car.mitre.org/analytics/CAR-2013-05-004/" target="_blank" rel="noopener noreferrer">CAR-2013-05-004</a> en la última sección encontramos respuesta a esta pregunta.

<blockquote>
Unit Tests
</blockquote>

---

### Task 5

## MITRE ENGAGE

1. **Under Prepare, what is ID SAC0002?**  
   _En la fase de Preparar (Prepare), ¿cuál es el ID SAC0002?_

En la página <a href="https://engage.mitre.org/matrix/?activity=persona-creation" target="_blank" rel="noopener noreferrer">MITRE Engage</a> en la sección **Prepare** encontramos respuesta a esta pregunta.
![PersonaCreation](/images/blog/PersonaCreation.webp)

<blockquote>
Persona Creation
</blockquote>

2. **What is the name of the resource to aid you with the engagement activity from the previous question?**  
   _¿Cuál es el nombre del recurso que te ayuda con la actividad de involucramiento de la pregunta anterior?_

En las <a href="https://engage.mitre.org/tools/" target="_blank" rel="noopener noreferrer">herramientas</a> buscamos el término "**persona**" y podremos encontrar la respuesta a esta pregunta.

<blockquote>
Persona Profile Worksheet
</blockquote>

3. **Which engagement activity baits a specific response from the adversary?**  
   _¿Qué actividad de involucramiento provoca una respuesta específica por parte del adversario?_

Revisando el <a href="https://engage.mitre.org/wp-content/uploads/2022/04/EngageHandbook-v1.0.pdf" target="_blank" rel="noopener noreferrer">Engage Handbook</a> en la página 21, sección 3.3.4 encontramos la respuesta
![Lures](/images/blog/Lures.webp)

<blockquote>
Lures
</blockquote>

4. **What is the definition of Threat Model?**  
   _¿Cuál es la definición de Modelo de Amenazas (Threat Model)?_

<blockquote>
A risk assessment that models organizational strengths and weaknesses
</blockquote>

---

### Task 6

## MITRE D3FEND

1. **What is the first MITRE ATT&CK technique listed in the ATT&CK Lookup dropdown?**  
   _¿Cuál es la primera técnica de MITRE ATT&CK que aparece en la lista desplegable de búsqueda de ATT&CK (ATT&CK Lookup)?_

En la página <a href="https://d3fend.mitre.org/" target="_blank" rel="noopener noreferrer">D3fend MITRE</a> al hacer click en **ATT&CK Lookup** encontramos la respuesta a la pregunta.
![dataObfuscation](/images/blog/dataObfuscation.webp)

<blockquote>
Data Obfuscation
</blockquote>

2. **In D3FEND Inferred Relationships, what does the ATT&CK technique from the previous question produce?**  
   _En las Relaciones Inferidas de D3FEND, ¿qué produce la técnica de ATT&CK mencionada en la pregunta anterior?_

En el diagrama de la página <a href="https://d3fend.mitre.org/offensive-technique/attack/T1001.003/" target="_blank" rel="noopener noreferrer">Protocol or Service Impersonation - T1001.003</a> encontramos la respuesta.
![InferredRelationships](/images/blog/InferredRelationships.webp)

<blockquote>
Outbound Internet Network Traffic
</blockquote>

---

### Task 7

## ATT&CK® Emulation Plans

1. **In Phase 1 for the APT3 Emulation Plan, what is listed first?**  
   _¿Qué se menciona primero en la Fase 1 del Plan de Emulación de APT3?_

En la página <a href="https://attack.mitre.org/resources/adversary-emulation-plans/" target="_blank" rel="noopener noreferrer">Adversary Emulation Plans</a> en el diagrama **APT 3 Emulation Plan** encontramos la respuesta a esta pregunta

<blockquote>
C2 Setup
</blockquote>

2. **Under Persistence, what binary was replaced with cmd.exe?**  
   _En la categoría de Persistencia, ¿qué binario fue sustituido por cmd.exe?_

En la página 24 sección **3.2.1.3 Persistence** del manual <a href="https://attack.mitre.org/docs/APT3_Adversary_Emulation_Plan.pdf" target="_blank" rel="noopener noreferrer">APT3_Adversary_Emulation_Plan</a> encontramos la respuesta a esta pregunta

<blockquote>
sethc.exe
</blockquote>

3. **Examining APT29, what C2 frameworks are listed in Scenario 1 Infrastructure? (format: tool1,tool2)**  
   _Al examinar APT29, ¿qué frameworks de Comando y Control (C2) se mencionan en la Infraestructura del Escenario 1? (formato: herramienta1,herramienta2)_

En la página <a href="https://github.com/center-for-threat-informed-defense/adversary_emulation_library/blob/master/apt29/Emulation_Plan/Scenario_1/Infrastructure.md#emulation-team-infrastructure" target="_blank" rel="noopener noreferrer">APT29 Emulation Plan Scenario 1</a> en la sección **Emulation Team Infrastructure** encontramos la respuesta a esta pregunta

<blockquote>
Pupy,Metasploit Framework
</blockquote>

4. **What C2 framework is listed in Scenario 2 Infrastructure?**  
   _¿Qué framework de Comando y Control (C2) se menciona en la Infraestructura del Escenario 2?_

En la página <a href="https://github.com/center-for-threat-informed-defense/adversary_emulation_library/blob/master/apt29/Emulation_Plan/Scenario_2/Infrastructure.md#emulation-team-infrastructure" target="_blank" rel="noopener noreferrer">APT29 Emulation Plan Scenario 2</a> en la sección **Emulation Team Infrastructure** encontramos la respuesta a esta pregunta

<blockquote>
PoshC2
</blockquote>

5. **Examine the emulation plan for Sandworm. What webshell is used for Scenario 1? Check MITRE ATT&CK for the Software ID for the webshell. What is the id? (format: webshell,id)**  
   _Examina el plan de emulación para Sandworm. ¿Qué webshell se utiliza en el Escenario 1? Consulta MITRE ATT&CK para obtener el ID de software del webshell. ¿Cuál es el ID? (formato: webshell,id)_

<blockquote>
P.A.S.,S0598
</blockquote>

---

### Task 8

## ATT&CK® and Threat Intelligence

1. **What is a group that targets your sector who has been in operation since at least 2013?**  
   _¿Cuál es un grupo que apunta a tu sector y ha estado en operación desde al menos 2013?_

En la página <a href="https://attack.mitre.org/groups/" target="_blank" rel="noopener noreferrer">MITRE ACC&CK Groups</a> encontramos la respuesta a la pregunta.
![APT33](/images/blog/APT33.webp)

<blockquote>
APT33
</blockquote>

2. **As your organization is migrating to the cloud, is there anything attributed to this APT group that you should focus on? If so, what is it?**  
   _A medida que tu organización migra a la nube, ¿hay algo atribuido a este grupo APT en lo que deberías enfocarte? Si es así, ¿qué es?_

Examinando las técnicas usadas por este grupo <a href="https://attack.mitre.org/groups/G0064/" target="_blank" rel="noopener noreferrer">G0064</a> encontramos la respuesta a la pregunta.
![cloudAccounts](/images/blog/cloudAccounts.webp)

<blockquote>
Cloud Accounts
</blockquote>

3. **What tool is associated with the technique from the previous question?**  
   _¿Qué herramienta está asociada con la técnica mencionada en la pregunta anterior?_

En la técnica **Cloud Accounts** usadas por este grupo <a href="https://attack.mitre.org/groups/G0064/" target="_blank" rel="noopener noreferrer">G0064</a> encontramos la respuesta a la pregunta.

<blockquote>
Ruler
</blockquote>

4. **Referring to the technique from question 2, what mitigation method suggests using SMS messages as an alternative for its implementation?**  
   _En referencia a la técnica de la pregunta 2, ¿qué método de mitigación sugiere el uso de mensajes SMS como alternativa para su implementación?_

En la técnica <a href="https://attack.mitre.org/techniques/T1078/004/" target="_blank" rel="noopener noreferrer">Cloud Accounts</a> en la sección **Mitigations** encontramos la respuesta a esta pregunta
![multifactor](/images/blog/multifactor.webp)

<blockquote>
Multi-factor Authentication
</blockquote>

5. **What platforms does the technique from question #2 affect?**  
   _¿Qué plataformas se ven afectadas por la técnica mencionada en la pregunta número 2?_

En la técnica <a href="https://attack.mitre.org/techniques/T1078/004/" target="_blank" rel="noopener noreferrer">Cloud Accounts</a> en la sección principal encontramos la respuesta a esta pregunta

<blockquote>
IaaS, Identity Provider, Office Suite, SaaS
</blockquote>

---

### Task 9

## Conclusion

1. **Read the above**

<blockquote>
No answer needed
</blockquote>
