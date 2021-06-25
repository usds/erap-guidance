---
layout: default-one-col
permalink: /faqs/
section: faqs
sidenav: programs
title: FAQs
---

The Department of the Treasury (Treasury) is providing these frequently asked questions (FAQs) as guidance regarding the requirements of the Emergency Rental Assistance program (ERA1) established by section 501 of Division N of the Consolidated Appropriations Act, 2021, Pub. L. No. 116-260 (Dec. 27, 2020) and the Emergency Rental Assistance program (ERA2) established by section 3201 of the American Rescue Plan Act of 2021, Pub. L. No. 117-2 (March 11, 2021).

These FAQs apply to both ERA1 and ERA2, except where differences are specifically noted. References in these FAQs to “the ERA” apply to both ERA1 and ERA2. These FAQs will be supplemented by additional guidance. <a href="changes/">Additions and changes to FAQs are tracked in a change log</a>. 

{% for faq in site.faqs %}
<div class="era-guidance-faq">
  <h3 class="era-guidance-faq__title" id="{{faq.number}}">{{faq.number}}. {{ faq.title }}</h3>
  <p>{{ faq.content | markdownify }}</p>
</div>
{% endfor %}
