---
title: "XXE Injection"
summary: "Exploiting XML External Entities."
date: "Apr 08 2026"
draft: false
tags:
  - Web Application Pentesting
  - Injection Attacks
  - THM
  - TryHackMe
image: "/images/blog/xxe_injection.webp"
lang: "en"
---

<a href="https://tryhackme.com/room/xxeinjection" target="_blank" rel="noopener noreferrer" style="text-decoration: none; cursor:pointer">Jr Web Application Pentesting > Injection Attacks > XXE Injection
</a>

![ORM Injection](/images/blog/xxe_injection.webp)

### Task 1

## Introduction

1. **Deploy the target VM attached to this task by pressing the green Start Machine button. After obtaining the machine's generated IP address, you can either use the AttackBox or your own VM connected to TryHackMe's VPN.**

**After 3 minutes, visit http://MACHINE_IP to access the machine.**

<blockquote>
No answer needed
</blockquote>

---

### Task 2

## Exploring XML

1. **What is the meaning of the acronym SGML?**

<blockquote>
Standard Generalized Markup Language
</blockquote>

2. **What is the meaning of the acronym DTD?**

<blockquote>
Document Type Definition
</blockquote>

---

### Task 3

## XML Parsing Mechanisms

1. **What XML parser builds the entire XML document into a memory-based tree structure, allowing random access to all parts of the document?**

<blockquote>
DOM Parser
</blockquote>

---

### Task 4

## Exploiting XXE - In-Band

1. **What XXE vulnerability occurs when the server's response is immediately disclosed to the attacker without the use of external channels?**

<blockquote>
In-Band XXE
</blockquote>

2. **What is the content of the file 14232d6db2b5fd937aa92e8b3c48d958.txt in the /opt directory?**

<blockquote>
THM{1N_b4Nd_1$_34sYY}
</blockquote>

---

### Task 5

## Exploiting XXE - Out-of-Band

1. **What kind of XXE vulnerability occurs when the response of the server is not visible to the attacker?**

<blockquote>
Out-of-Band XXE
</blockquote>

---

### Task 6

## SSRF + XXE

1. **What is the flag in the application running internally?**

<blockquote>
THM{0O8_xx3!!}
</blockquote>

2. **What port is the internal application hosted on?**

<blockquote>
81
</blockquote>

---

### Task 7

## Mitigation

1. **Click me to proceed to the next task.**

<blockquote>
No answer needed
</blockquote>

---

### Task 8

## Conclusion

1. **I can now exploit XXE vulnerabilities!**

<blockquote>
No answer needed
</blockquote>