---
title: "Summit Room"
summary: "Can you chase a simulated adversary up the Pyramid of Pain until they finally back down?"
date: "May 08 2025"
draft: false
tags:
  - SOC Level 1
  - Cyber Defence Frameworks
  - THM
  - TryHackMe
image: "/images/blog/cyber-kill-chain.webp"
lang: "en"
---

### Task 1

## Challenge

1. **What is the first flag you receive after successfully detecting sample1.exe?**  
   _¿Cuál es la primera bandera que recibes después de detectar exitosamente sample1.exe?_

**Paso 1**: Después de analizar el **sample1.exe** con ayuda de **Malware SandBox** copiamos el hash SHA256

![Imagen de nomenclatura](/images/blog/summit_2.webp)

**Paso 2**: Una vez identificado el hash lo agregamos a la lista de bloqueo.

![Imagen de nomenclatura](/images/blog/summit_1.webp)

<blockquote>
THM{f3cbf08151a11a6a331db9c6cf5f4fe4}
</blockquote>

---

2. **What is the second flag you receive after successfully detecting sample2.exe?**  
   _¿Cuál es la segunda bandera que recibes después de detectar exitosamente sample2.exe?_

**Paso 1**: Con ayuda de **Malware SandBox** analizamos el **sample2.exe**

![Imagen de nomenclatura](/images/blog/summit_3.webp)

**Paso 2**: Identificamos en la actividad de la red del malware que hace peticiones a una IP sospechosa.

![Imagen de nomenclatura](/images/blog/summit_4.webp)

**Paso 3**: Agregamos una regla de firewall de deniegue las solicitudes a la IP sospechosa.

![Imagen de nomenclatura](/images/blog/summit_5.webp)

<blockquote>
THM{2ff48a3421a938b388418be273f4806d}
</blockquote>

---

3.  **What is the third flag you receive after successfully detecting sample3.exe?**  
    _¿Cuál es la tercera bandera que recibes después de detectar exitosamente sample3.exe?_

**Paso 1**: Después de analizar el reporte generado por **Malware SandBox** para el malware **sample3.exe** notamos como este hace peticiones a IP's de un dominio en particular.

![Imagen de nomenclatura](/images/blog/summit_7.webp)

**Paso 2**: Agregamos una regla DNS que deniegue las peticiones a cualquier IP de dicho dominio

![Imagen de nomenclatura](/images/blog/summit_9.webp)

<blockquote>
THM{4eca9e2f61a19ecd5df34c788e7dce16}
</blockquote>

---

4. **What is the fourth flag you receive after successfully detecting sample4.exe?**  
   _¿Cuál es la cuarta bandera que recibes después de detectar exitosamente sample4.exe?_

**Paso 1**: Después de analizar el reporte generado por **Malware SandBox** para el malware **sample4.exe** notamos que hace modificaciones al registro deshabilitando la monitoreo en tiempo real

![Imagen de nomenclatura](/images/blog/summit_11.webp)

**Paso 2**: Agregamos una regla que detecte las modificaciones a dicho registro.
![Imagen de nomenclatura](/images/blog/summit_12.webp)

<blockquote>
THM{c956f455fc076aea829799c0876ee399}
</blockquote>

---

5. **What is the fifth flag you receive after successfully detecting sample5.exe?**  
   _¿Cuál es la primera bandera que recibes después de detectar exitosamente sample5.exe?_

**Paso 1**: Después de analizar el log adjunto en el correo, podemos notar un patrón en las peticiones hechas por el equipo infectado.

![Imagen de nomenclatura](/images/blog/summit_15.webp)

**Paso 2**: Agregamos una regla que detecte las conexiones que cumplan con dicho patrón.
![Imagen de nomenclatura](/images/blog/summit_17.webp)

<blockquote>
THM{46b21c4410e47dc5729ceadef0fc722e}
</blockquote>

---

6. **What is the final flag you receive from Sphinx?**  
   _¿Cuál es la bandera final que recibes de Sphinx?_

**Paso 1**: Después de analizar el log adjunto en el correo, podemos notar que el malware ejecuta cierto comandos cuya salida redirige al archivo _exfiltr8.log_.

![Imagen de nomenclatura](/images/blog/summit_20.webp)

**Paso 2**: Agregamos una regla que detecte las ejecuciones del cmd que contengan la palabra _exfiltr8.log_.

![Imagen de nomenclatura](/images/blog/summit_22.webp)

<blockquote>
THM{c8951b2ad24bbcbac60c16cf2c83d92c}
</blockquote>
