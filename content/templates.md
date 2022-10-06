---
title: "OurWorld"
description: "A better world is where we all have access to endless information and opportunities."
date: 2018-09-14T21:00:00-05:00
updated: 2021-02-20T14:40:00-06:00
draft: false
extra:
  author:
---

### Section Templates

#### Blog.html

The blog page is created by default if there is a blog folder in the content directory. The blog page consists of a featured post row, a paginated grid of posts sorted by recency, and a side nav of post categories and featured posts.

Blog posts can have categories, and can be filtered by said categries. To add a new category simply define the posts category in the yaml header of the blog's index.md file. See /content/blog/2019/01/post-3/index.md for example. The side navigation and category based listing will be automatically updated.

To make a blog post featured, simply add an isFeatured attribute to the yaml header of the blog post. The most recent featured blog post wiil be displayed on the heading row of the blog page, and the rest will be displayed under featured posts in the side nav. See /content/blog/2019/03/post-5/index.md for implementation.

#### Section.html

The default section template, displays section body without styling (except for margins), and displays subpages of the section below. The subpages of the page are displayed as small summaries of pages with title, description, and categories, as rendered by partials/pageBox.html. The subpages are grouped by the taxonomy name passed in as the "group_pages_by" extra attribute, defined in the section's yaml header.

### Creating custom pages

To create your own page, simply create a markdown file following the examples provided above.
By default, the markdown file will be displayed plainly as it is.

#### Page templates

If you wish to display your markdown files in a specific page template, simply define the template you would like to use in the yaml header of your markdown file. For instance, the blogPage.html template displays blog posts with author info, date, side margins, and a hero image on top of the post. See any blog page in /content for implementation.
