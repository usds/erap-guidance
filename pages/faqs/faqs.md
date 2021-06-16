---
layout: default-one-col
permalink: /faqs/
section: faqs
sidenav: programs
title: FAQs
---

The Department of the Treasury (Treasury) provided these frequently asked questions (FAQs) as guidance regarding the requirements of the Emergency Rental Assistance (ERA) program established by section 501 of Division N of the Consolidated Appropriations Act, 2021, Pub. L. No. 116-260 (Dec. 27, 2020) (the Act).

{% for faq in site.faqs %}
<div class="era-guidance-faq">
  <h3 class="era-guidance-faq__title" id="{{faq.number}}">{{faq.number}}. {{ faq.title }}</h3>
  <p>{{ faq.content | markdownify }}</p>
</div>
{% endfor %}
