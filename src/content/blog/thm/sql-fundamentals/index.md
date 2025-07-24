---
title: "SQL Fundamentals"
summary: "Learn how to perform basic SQL queries to retrieve and manage data in a database."
date: "Jul 24 2025"
draft: false
tags:
  - Cyber Security 101
  - Web Hacking
  - THM
  - TryHackMe
image: "/images/blog/sql-fundamentals.webp"
---

<a href="https://tryhackme.com/room/sqlfundamentals" target="_blank" style="text-decoration: none; cursor:pointer"> Cyber Security 101 > Web Hacking > SQL Fundamentals
</a>

![tcpdump the basics](/images/blog/sql-fundamentals.webp)

### Task 1
## Introduction

1. **Teach me the basics of SQL!**  

<blockquote>
No answer needed
</blockquote>

---

### Task 2
## Databases 101

1. **What type of database should you consider using if the data you're going to be storing will vary greatly in its format?**

<blockquote>
Non-relational database
</blockquote>

2. **What type of database should you consider using if the data you're going to be storing will reliably be in the same structured format?**

<blockquote>
relational database
</blockquote>

3. **In our example, once a record of a book is inserted into our "Books" table, it would be represented as a ___ in that table?**

<blockquote>
row
</blockquote>

4. **Which type of key provides a link from one table to another?**

<blockquote>
foreign key
</blockquote>

5. **which type of key ensures a record is unique within a table?**

<blockquote>
primary key
</blockquote>

---

### Task 3
## SQL

1. **What serves as an interface between a database and an end user?**

<blockquote>
DBMS
</blockquote>

2. **What query language can be used to interact with a relational database?**

<blockquote>
SQL
</blockquote>

---

### Task 4
## Database and Table Statements

1. **Using the statement you've learned to list all databases, it should reveal a database with a flag for a name; what is it?**

Execute this query:

```sql
SHOW DATABASES;
```

<blockquote>
THM{575a947132312f97b30ee5aeebba629b723d30f9}
</blockquote>

2. **In the list of available databases, you should also see the `task_4_db` database. Set this as your active database and list all tables in this database; what is the flag present here?**

Execute this query:

```sql
USE task_4_db;
SHOW TABLES;
```

<blockquote>
THM{692aa7eaec2a2a827f4d1a8bed1f90e5e49d2410}
</blockquote>

---

### Task 5
## CRUD Operations

1. **Using the `tools_db` database, what is the name of the tool in the `hacking_tools` table that can be used to perform man-in-the-middle attacks on wireless networks?**

Execute this query:

```sql
USE tools_db;
SELECT * FROM hacking_tools WHERE description LIKE '%man-in-the-middle%’;
```

<blockquote>
Wi-Fi Pineapple
</blockquote>

2. **Using the tools_db database, what is the shared category for both USB Rubber Ducky and Bash Bunny?**

Execute this query:

```sql
SELECT * FROM hacking_tools WHERE name = 'USB Rubber Ducky' OR name = 'Bash Bunny';
```

<blockquote>
USB attacks
</blockquote>

---

### Task 6
## Clauses

1. **Using the `tools_db` database, what is the total number of distinct `categories` in the `hacking_tools` table?**

Execute this query:

```sql
SELECT DISTINCT category from hacking_tools;
```

<blockquote>
6
</blockquote>

2. **Using the `tools_db` database, what is the first tool (by name) in ascending order from the `hacking_tools` table?**

Execute this query:

```sql
SELECT * FROM hacking_tools ORDER BY name ASC;
```

<blockquote>
Bash Bunny
</blockquote>

3. **Using the `tools_db` database, what is the first tool (by name) in descending order from the `hacking_tools` table?**

Execute this query:

```sql
SELECT * FROM hacking_tools ORDER BY name DESC;
```

<blockquote>
Wi-Fi Pineapple
</blockquote>

---

### Task 7
## Operators

1. **Using the `tools_db` database, which tool falls under the Multi-tool `category` and is useful for pentesters and geeks?**

Execute this query:

```sql
SELECT * FROM hacking_tools WHERE category LIKE '%Multi-tool%';
```

<blockquote>
Flipper Zero
</blockquote>

2. **Using the `tools_db` database, what is the `category` of tools with an amount _greater than_ or _equal_ to _300_?**

Execute this query:

```sql
SELECT * FROM hacking_tools WHERE amount >= 300;
```

<blockquote>
RFID cloning
</blockquote>

3. **Using the `tools_db` database, which tool falls under the Network intelligence `category` with an `amount` _less than 100_?**

Execute this query:

```sql
SELECT * FROM hacking_tools WHERE amount < 100 AND category = 'Network intelligence';
```

<blockquote>
Lan Turtle
</blockquote>

---

### Task 8
## Functions

1. **Using the tools_db database, what is the tool with the longest name based on character length?**

Execute this query:

```sql
SELECT name, MAX(LENGTH(name)) AS ln from hacking_tools GROUP BY name ORDER BY ln DESC;
```

<blockquote>
USB Rubber Ducky
</blockquote>

2. **Using the tools_db database, what is the total sum of all tools?**

Execute this query:

```sql
SELECT SUM(amount) FROM hacking_tools;
```

<blockquote>
1444
</blockquote>

3. **Using the `tools_db` database, what are the tool names where the amount does not end in _0_, and _group_ the tool `names` _concatenated_ by _" & "_.**

Execute this query:

```sql
SELECT GROUP_CONCAT(name SEPARATOR " & ") FROM hacking_tools WHERE SUBSTRING(amount, LENGTH(amount), LENGTH(amount)) != "0";
```

<blockquote>
Flipper Zero & iCopy-XS
</blockquote>

---

### Task 9
## Conclusion

1. **I'm ready to move forward and learn more about web application security.**

<blockquote>
No answer needed
</blockquote>
