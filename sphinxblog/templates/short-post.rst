
.. raw:: html

    <div class="new">
    <h2>
        <a href="{{ post.url }}/">{{ post.title }}</a>
    </h2>

    <div class="post-meta">
        <p><i class="fa fa-calendar"></i> {{ post.date }} <i class="fa fa-user"></i> {{ post.author }}</p>
    </div>

{{ post.abstract }}

.. raw:: html

        <a class="read-more" href="{{ post.url }}/">(read more...)</a>
    </div>
