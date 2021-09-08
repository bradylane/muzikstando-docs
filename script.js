---
layout: blank
---
const posts = []
{% for post in site.posts %}
  posts.push('{{ post.title }}')
{% endfor %}
