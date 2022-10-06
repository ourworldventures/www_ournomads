---
title: "OurWorld"
description: "A better world is where we all have access to endless information and opportunities."
date: 2018-09-14T21:00:00-05:00
updated: 2021-02-20T14:40:00-06:00
draft: false
extra:
  author:
---

{% row() %}

# Shortcodes

To give website creators freedom in styling without necessitating getting outside of the /content directory and in to the html files, the template has a few features.

|||

{% end %}

{% row() %}

### **row**

<br>

Markdown only goes vertical, but this shortcode allows one to add horizontal elements to their web pages.

|||

### **button**

<br>

A simple button shortcode that takes a body and displays it inside a button that is animated on hover. The button also is entirely clickable, and navigates to the first of if any children link elements.

|||

### **mermaid**

<br>

Simple mermaid shorcode that can be used to create mermaid diagrams in markdown. Also supported in row shortcode.

[Mermaid]("https://mermaid-js.github.io/mermaid/#/")

|||

### **admonition**

<br>

Simple annotation shorcode that can be used to create annotation objects in markdown.

|||

### **space**

<br>

The space shortcode allows for some space. The size can be small, medium, and large.

{% end %}

{{ space(size="small") }}

## Row

Simply use the `{% row() %} {% end %}` syntax and place your content in between. You can create columns in your row by using three vertical bars. ( `|||` ) You can fill in your columns with regular markdown, but they can also be empty. For instance, in the top of this page, the title and description of shortcodes is in the left column while the right column is empty.

The row shortcode can also take a bgPath parameter if you want your row to have a background. (see /content/careers/index.html)

{{ space(size="small") }}

{% row(bgColor="#ed991c") %}

_Rows can also be colorful and full width!_

{% end %}

{{space()}}

## Admonition

{% admonition() %}

!!! note

Did you know these could also be expandable?

{% end %}

{% admonition() %}

!!! warning

inline and inline end qualifiers do not work

{% end %}

{% admonition() %}

!!! bug

Markdown styling support _buggy_

{% end %}

You can learn more about using admonitions here:
[Admonitions]("https://squidfunk.github.io/mkdocs-material/reference/admonitions/")

{{space(size="small")}}

## Mermaid

<br>

I wanted to use mermaid in this project, and it looks like this

{{space(size="small")}}

{% mermaid() %}

classDiagram
Animal <|-- Duck
Animal <|-- Fish
Animal <|-- Zebra
Animal : +int age
Animal : +String gender
Animal: +isMammal()
Animal: +mate()
class Duck{
+String beakColor
+swim()
+quack()
}
class Fish{
-int sizeInFeet
-canEat()
}
class Zebra{
+bool is_wild
+run()
}

{% end %}
{{space()}}
