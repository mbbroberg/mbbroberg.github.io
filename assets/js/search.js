(function () {
  var overlay = document.getElementById("searchOverlay");
  var input = document.getElementById("searchInput");
  var resultsEl = document.getElementById("searchResults");
  var emptyEl = document.getElementById("searchEmpty");
  var fuse = null;
  var activeIndex = -1;
  var currentResults = [];

  function buildFuse(data) {
    return new Fuse(data, {
      keys: [
        { name: "title", weight: 2 },
        { name: "summary", weight: 1 },
        { name: "tags", weight: 1 },
        { name: "content", weight: 0.4 },
      ],
      includeScore: true,
      threshold: 0.35,
      ignoreLocation: true,
    });
  }

  function loadIndex() {
    if (fuse) return Promise.resolve(fuse);
    return fetch(window.SEARCH_INDEX_URL)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        fuse = buildFuse(data);
        return fuse;
      });
  }

  function stateEmoji(state) {
    if (state === "rhizome") return "🫚";
    if (state === "sprout") return "🌿";
    if (state === "seed") return "🌱";
    return "";
  }

  function render(query) {
    if (!query) {
      resultsEl.innerHTML = "";
      emptyEl.hidden = true;
      currentResults = [];
      return;
    }
    var matches = fuse.search(query, { limit: 10 });
    currentResults = matches.map(function (m) {
      return m.item;
    });
    activeIndex = currentResults.length ? 0 : -1;
    resultsEl.innerHTML = currentResults
      .map(function (item, i) {
        var badge = item.state
          ? '<span class="result-state ' + item.state + '">' + stateEmoji(item.state) + "</span>"
          : '<span class="result-state">' + item.section + "</span>";
        return (
          '<li class="search-result' + (i === activeIndex ? " is-active" : "") + '" data-href="' + item.href + '">' +
          badge +
          '<div class="result-body"><div class="result-title">' + item.title + "</div>" +
          (item.summary ? '<div class="result-summary">' + item.summary + "</div>" : "") +
          "</div></li>"
        );
      })
      .join("");
    emptyEl.hidden = currentResults.length > 0;

    Array.prototype.forEach.call(resultsEl.querySelectorAll(".search-result"), function (el) {
      el.addEventListener("mouseenter", function () {
        setActive(Array.prototype.indexOf.call(resultsEl.children, el));
      });
      el.addEventListener("click", function () {
        window.location.href = el.getAttribute("data-href");
      });
    });
  }

  function setActive(i) {
    var items = resultsEl.children;
    if (!items.length) return;
    activeIndex = Math.max(0, Math.min(i, items.length - 1));
    Array.prototype.forEach.call(items, function (el, j) {
      el.classList.toggle("is-active", j === activeIndex);
    });
    items[activeIndex].scrollIntoView({ block: "nearest" });
  }

  function open() {
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    input.value = "";
    render("");
    input.focus();
    loadIndex();
  }

  function close() {
    overlay.hidden = true;
    document.body.style.overflow = "";
  }

  document.addEventListener("DOMContentLoaded", function () {
    Array.prototype.forEach.call(document.querySelectorAll("[data-search-trigger]"), function (btn) {
      btn.addEventListener("click", open);
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-search-close]"), function (el) {
      el.addEventListener("click", close);
    });

    document.addEventListener("keydown", function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        overlay.hidden ? open() : close();
        return;
      }
      if (overlay.hidden) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive(activeIndex + 1);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive(activeIndex - 1);
      }
      if (e.key === "Enter" && activeIndex >= 0 && currentResults[activeIndex]) {
        window.location.href = currentResults[activeIndex].href;
      }
    });

    var debounceTimer = null;
    input.addEventListener("input", function () {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function () {
        render(input.value.trim());
      }, 120);
    });
  });
})();
