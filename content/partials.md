---
title: "Partials"
description: "A better world is where we all have access to endless information and opportunities."
date: 2018-09-14T21:00:00-05:00
updated: 2021-02-20T14:40:00-06:00
draft: false
extra:
  author:
---

### Header & Footer

The header and footer are also created from markdown files in the content directory. In /content/header/\_index.md, each header item is bulleted. If a header item has a row beneath it, the row will be displayed as a sub-menu on click. Otherwise, if header item is a link, it will simply navigate to the linked page.

The footer, likewise, is structured using the row shortcode. However the left section with page summary is built in. To edit the site destcription, one should edit the description (in the yaml header) of the footer md file. To edit the social links, simply add the social outlets name and your link into the socialLinks dictionary attribute on the yaml header of the footer/\_index.md. If a social icon exists for the social outlet, the link wiill be automatically rendered within the icon, displayed in the footer.
