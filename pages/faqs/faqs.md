---
layout: default
permalink: /faqs/
program: local
section: era
sub-section: faqs
sidenav: programs
title: FAQs
---

The Department of the Treasury (Treasury) provided these frequently asked questions (FAQs) as guidance regarding the requirements of the Emergency Rental Assistance (ERA) program established by section 501 of Division N of the Consolidated Appropriations Act, 2021, Pub. L. No. 116-260 (Dec. 27, 2020) (the Act). These FAQs were published on January 19, February 22, and March 16. These FAQs have subsequently been replaced by [full guidance](../) found on this site.

{% for faq in site.faqs %}
<h3 id="{{faq.number}}">{{faq.number}}. {{ faq.title }}</h3>
<p>{{ faq.content | markdownify }}</p>
{% endfor %}
