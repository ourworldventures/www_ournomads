---
title: "OurWorld"
description: "A better world is where we all have access to endless information and opportunities."
date: 2018-09-14T21:00:00-05:00
updated: 2021-02-20T14:40:00-06:00
draft: false
template: page.html
extra:
  author:
---

{% row(style="moderate") %}

# ThreeFold SSG Template

##### A template for easily making minimal sites from markdown documents

{% end %}

{{space()}}

## How to create pages using this template

- Pages of the website are markdown files in the content directory.
- These pages are then rendered using HTML templates in /templates.
- To get started, simply create a markdown file and start typing, adding images, links etc.
- To style your pages, check shortcodes, which are short snippets of code.
- Shortcodes are added to your markdown content and spice up your pages
- Row is the most powerful shortcode, allowing vertical alignment and horizontal division of content in columns (whereas plain markdown is strictly vertical)

<br>

{% row(style="moderate") %}

### Structure of the content directory

Every index.md file in a content directory corresponds to a page, and the landing page is content/\_index.md.
The path of each page is simply its path relavant to the root of the content directory.

Ex:
content/\_index.md -> yoururl.com/
content/blog/\_index.md -> yoururl.com/blog
content/careers/index.md or content/careers.md -> yoururl.com/careers

|||

### Image sizing with source paths

You can size your markdown images by adding #small, #medium or #large at the end of the images source url.
See /content/\_index.md for implementation.

{% end %}
