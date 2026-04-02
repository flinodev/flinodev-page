---
title: "Tcpdump: The basics"
summary: "Learn how to use Tcpdump to save, filter, and display packets."
date: "Jul 19 2025"
draft: false
tags:
  - Cyber Security 101
  - Networking
  - THM
  - TryHackMe
image: "/images/blog/tcpdump.webp"
---

<a href="https://tryhackme.com/room/tcpdump" target="_blank" rel="noopener noreferrer" style="text-decoration: none; cursor:pointer"> Cyber Security 101 > Networking > Tcpdump: The Basics
</a>

![tcpdump the basics](/images/blog/tcpdump.webp)

### Task 1

## Introduction

1. **What is the name of the library that is associated with tcpdump?**

<blockquote>
libpcap
</blockquote>

---

### Task 2

## Basic Packet Capture

1. **What option can you add to your command to display addresses only in numeric format?**

<blockquote>
-n
</blockquote>

---

### Task 3

## Filtering Expressions

1. **How many packets in traffic.pcap use the ICMP protocol?**

Run this command:

```bash
tcpdump icmp -r traffic.pcap | wc -l
```

<blockquote>
26
</blockquote>

2. **What is the IP address of the host that asked for the MAC address of 192.168.124.137?**

Run this command:

```bash
tcpdump -r traffic.pcap dst 192.168.124.137 and arp
```

<blockquote>
192.168.124.148
</blockquote>

3. **What hostname (subdomain) appears in the first DNS query?**

Run this command:

```bash
tcpdump -r traffic.pcap port 53 -c 1
```

<blockquote>
mirrors.rockylinux.org
</blockquote>

---

### Task 4

## Advanced Filtering

1. **How many packets have only the TCP Reset (RST) flag set?**

Run this command:

```bash
tcpdump -r traffic.pcap "tcp[tcpflags] == tcp-rst" | wc -l
```

<blockquote>
57
</blockquote>

2. **What is the IP address of the host that sent packets larger than 15000 bytes?**

Run this command:

```bash
tcpdump -r traffic.pcap greater 15000 -c 1 -n
```

<blockquote>
185.117.80.53
</blockquote>

---

### Task 5

## Displaying Packets

1. **What is the MAC address of the host that sent an ARP request?**

Run this command:

```bash
tcpdump arp -r traffic.pcap -e
```

<blockquote>
52:54:00:7c:d3:5b
</blockquote>

---

### Task 6

## Conclusion

1. **Ensure you have noted the various Tcpdump options we covered in this room.**

<blockquote>
No answer needed
</blockquote>
