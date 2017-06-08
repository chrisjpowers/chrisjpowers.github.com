---
layout: default
title: "Chris Powers"
body_id: home
---

<section class="talks-top">
  <div class="inner">
    <aside>
      <h2>Talks</h2>
      <p>I'm passionate about seeing teams and individuals thrive in their organizations. My talks are tailored to encourage and to challenge, giving each person practical steps for moving forward. Please let me know how I can contribute to your conference or corporate event.</p>
      <a class="book-me button" href="mailto:chrisjpowers@gmail.com">Book Me</a>
    </aside>
    <div class="video-box">
      <h6>Featured Talk</h6>
      <a href="https://cleancoders.com/episode/clean-code-in-the-browser-episode-2-p1/show" target="_blank">
        <img src="/images/episode-2-part-1.jpg" />
      </a>
      <h4>
        <a href="https://cleancoders.com/episode/clean-code-in-the-browser-episode-2-p1/show" target="_blank">
          Single Responsibility Principle (Part 1)
        </a>
      </h4>
    </div>
  </div>
</section>

<section id="talks" class="talks-list">
  <div class="inner">
    <h4 class="heading">More Talks</h4>
    <ul>
      <li>
        <a href="https://cleancoders.com/episode/clean-code-in-the-browser-episode-2-p2/show" target="_blank">
          <img src="/images/talk-thumbs/episode-2-part-2.jpg">
          <h4>Single Responsibility Principle (Part 2)</h4>
        </a>
      </li>
      <li>
        <a href="/blog/lies-damned-lies-statistics">
          <img src="/images/talk-thumbs/lies-damned-lies-statistics.jpg">
          <h4>Lies, Damned Lies, and Statistics</h4>
        </a>
      </li>
      <li>
        <a href="https://cleancoders.com/episode/clean-code-in-the-browser-episode-1/show" target="_blank">
          <img src="/images/talk-thumbs/clean-code-band.jpg">
          <h4>Clean Code in the Browser</h4>
        </a>
      </li>
      <li>
        <a href="/blog/js-refactoring-masterclass">
          <img src="/images/talk-thumbs/js-refactoring-masterclass.jpg">
          <h4>Javascript Refactoring Masterclass</h4>
        </a>
      </li>
      <li>
        <a href="/blog/the-truth-about-ab-experimentation">
          <img src="/images/talk-thumbs/the-truth-about-ab-experimentation.jpg">
          <h4>The Truth About A/B Experimentation</h4>
        </a>
      </li>
      <li>
        <a href="/blog/promote-your-project">
          <img src="/images/talk-thumbs/promote-your-project.jpg">
          <h4>Promote Your Project!</h4>
        </a>
      </li>
      <li>
        <a href="/blog/developer-to-manager">
          <img src="/images/talk-thumbs/developer-to-manager.jpg">
          <h4>Developer to Manager</h4>
        </a>
      </li>
      <li>
        <a href="/blog/creating-healthy-conflict">
          <img src="/images/talk-thumbs/creating-healthy-conflict.jpg">
          <h4>Create Healthy Conflict</h4>
        </a>
      </li>
      <li>
        <a href="/blog/encouragement">
          <img src="/images/talk-thumbs/encouragement.jpg">
          <h4>Encouragement</h4>
        </a>
      </li>
      <li>
        <a href="/blog/silence">
          <img src="/images/talk-thumbs/silence.jpg">
          <h4>Silence</h4>
        </a>
      </li>
      <li>
        <a href="/blog/customer-service-for-developers">
          <img src="/images/talk-thumbs/customer-service-for-developers.jpg">
          <h4>Customer Service for Developers</h4>
        </a>
      </li>
      <li>
        <a href="/blog/whats-wrong-with-being-right">
          <img src="/images/talk-thumbs/whats-wrong-with-being-right.jpg">
          <h4>What's Wrong with Being Right?!</h4>
        </a>
      </li>
      <li>
      <a href="/blog/making-html-email-fun">
          <img src="/images/talk-thumbs/making-html-email-fun.jpg">
          <h4>Making HTML Email Fun</h4>
        </a>
      </li>
      <li>
      <a href="/blog/look-ma-im-on-tv">
          <img src="/images/talk-thumbs/look-ma-im-on-tv.jpg">
          <h4>Look Ma, I'm on TV!</h4>
        </a>
      </li>
      <li>
      <a href="/blog/tracking-all-the-things">
          <img src="/images/talk-thumbs/tracking-all-the-things.jpg">
          <h4>Tracking All the Things</h4>
        </a>
      </li>
    </ul>
  </div>
</section>

<section id="blog" class="blog">
  <div class="inner">
    <h3 class="heading">Recent Blog Posts</h3>
      {% for post in site.categories["article"] limit:2 %}
      <article class="{% if forloop.index == 1 %}first{% else %}second{% endif %}">
        <header>
          <p class="entry-date">{% include post/date.html %}{{ time }}</p>
          <h2>
            <a rel="full-article" href="{{ root_url }}{{ post.url }}">{{ post.title }} {{ index }}</a>
          </h2>
        </header>
        {{ post.excerpt }}
        {% if post.excerpt != post.content %}
          <a rel="full-article" href="{{ root_url }}{{ post.url }}" class="more">Read More</a>
        {% endif %}
      </article>
      {% endfor %}
    <a class="button" href="/blog/categories/article">See All Posts</a>
  </div>
</section>

<section id="open-source" class="open-source">
  <div class="inner">
    <h3 class="heading">Open Source</h3>
    <ul class="projects">
      <li>
        <a href="http://greenscreen.io" target="_blank">
          <h4>Greenscreen</h4>
          <p>Digital signage solution for Google Chromecast.</p>
        </a>
      </li>
      <li>
        <a href="https://github.com/groupon/gleemail" target="_blank">
          <h4>Gleemail</h4>
          <p>Making HTML email development fun... sort of.</p>
        </a>
      </li>
      <li>
        <a href="https://github.com/chrisjpowers/business-rules" target="_blank">
          <h4>Business Rules</h4>
          <p>A business rule engine in JavaScript, implemented as a jQuery plugin.</p>
        </a>
      </li>
    </ul>
    <aside>
      <div class="text">
        <p>Contributing to Open Source is important -- I've benefitted significantly from open source software, so this is how I try to give back to that community.</p>
      </div>
      <a href="https://github.com/chrisjpowers" target="_blank" class="button">GitHub</a>
    </aside>
  </div>
</section>
