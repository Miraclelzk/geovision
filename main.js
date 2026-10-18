// 页面没有 JS 也完整可读（产品要点用 <details> 展开，平滑滚动用 CSS）。
// 这里只做一件事：桌面宽度下 5 张产品卡片同在一行，一张展开时整行一起展开，避免高度参差。
(function () {
  var cards = Array.prototype.slice.call(document.querySelectorAll(".product"));
  var wide = window.matchMedia("(min-width: 1021px)");
  cards.forEach(function (card) {
    card.addEventListener("toggle", function () {
      if (!wide.matches) return;
      cards.forEach(function (other) {
        if (other !== card && other.open !== card.open) other.open = card.open;
      });
    });
  });
})();
