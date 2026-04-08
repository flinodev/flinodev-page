---
title: "ORM Injection"
summary: "Learn how to exploit injection vulnerabilities in an ORM-based web app."
date: "Apr 05 2026"
draft: false
tags:
  - Web Application Pentesting
  - Injection Attacks
  - THM
  - TryHackMe
image: "/images/blog/orm_injection.webp"
---

<a href="https://tryhackme.com/room/orminjection" target="_blank" rel="noopener noreferrer" style="text-decoration: none; cursor:pointer">Jr Web Application Pentesting > Injection Attacks > ORM Injection
</a>

![ORM Injection](/images/blog/orm_injection.webp)

### Task 1

## Introduction

1. **I am ready to start the room.**

<blockquote>
No answer needed
</blockquote>

---

### Task 2

## Undestanding ORM

1. **What is the default ORM for Ruby on Rails applications?**

<blockquote>
Active Record
</blockquote>

2. **Which of the following is NOT a feature of ORM?**

a) Reducing boilerplate code  
b) Increasing productivity  
c) Increase attack surface due to direct interface with the database   
d) Ensuring consistency  

<blockquote>
c
</blockquote>

---

### Task 3

## How ORM works

1. What is the method used in our Laravel code snippet to define the structure of the users table?

<blockquote>
up()
</blockquote>

2. **What is the file name usually used to store database credentials in Laravel?**

<blockquote>
.env
</blockquote>

---

### Task 4

## Identify ORM Injection

1. **What is the path in the DOCUMENT_ROOT variable?**
<blockquote>
C:\Users\Administrator\Downloads\orminjection\public
</blockquote>

2. **What is the ORM library for the Spring framework? (The one mentioned in this task)**
<blockquote>
Hibernate
</blockquote>

3. **Once you have reviewed the cookies to identify the ORM, what is the cookie's name that is responsible for maintaining the session in the attached application?**

<blockquote>
laravel_session
</blockquote>

---

### Task 5

## ORM Injection - Weak Implementation

1. **What email is associated with the name Jane Doe?**
<blockquote>
jane@thm.com
</blockquote>

2. **What is the name of the vulnerable Eloquent method that is used in this task?**
<blockquote>
whereRaw()
</blockquote>

3. **What is the flag value after submitting the payload in the secure input field?**
<blockquote>
THM{SECURED_001}
</blockquote>

---

### Task 6

## ORM Injection - Vulnerable Implementation

1. **What is the total number of rows in the users table?**
<blockquote>
5
</blockquote>

2. **What is the password for the email john@thm.com?**
<blockquote>
THM{101}
</blockquote>

---

### Task 7

## Best Practices

1. **Is it a good practice to write raw SQL queries in ORM? (yea/nay)**
<blockquote>
nay
</blockquote>

2. **Which side should input validation be carried out? Write the correct option only.**

a) Client  
b) Server  
c) Both Server and Client  
d) None  

<blockquote>
c
</blockquote>

---

### Task 8

## Conclusion

1. **I have successfully completed the room.**
<blockquote>
No answer needed
</blockquote>