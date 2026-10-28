// jQuery mouseenter / mouseleave로 카드와 관람객 그룹을 함께 제어합니다.
$(function () {
  const $cards = $('.card');
  let hovered = null;
  let focused = null;
  let pinned = null;

  function render() {
    const active = hovered || focused || pinned;
    $cards.each(function () {
      const $card = $(this);
      const shown = this === active;
      // 카드에도 상태를 표시하고, 같은 그룹의 두 이동 레이어를 동시에 정지합니다.
      $card.toggleClass('is-paused', shown).attr('aria-pressed', String(shown));
      $card.closest('.card-group').toggleClass('is-paused', shown);
      $('#' + $card.attr('aria-controls')).toggleClass('is-visible', shown);
    });
  }

  $cards.on('mouseenter', function () {
    hovered = this;
    render();
  });
  $cards.on('mouseleave', function () {
    if (hovered === this) hovered = null;
    render();
  });

  // 키보드와 터치에서도 같은 관람 동작을 사용할 수 있습니다.
  $cards.on('focus', function () {
    if (this.matches(':focus-visible')) focused = this;
    render();
  });
  $cards.on('blur', function () {
    if (focused === this) focused = null;
    render();
  });
  $cards.on('click', function (event) {
    event.preventDefault();
    const original = event.originalEvent;
    if (original && (original.pointerType === 'touch' || original.detail === 0)) {
      pinned = pinned === this ? null : this;
      render();
    }
  });
  $('.poster').on('pointerdown', function (event) {
    if (!$(event.target).closest('.card').length) {
      pinned = null;
      focused = null;
      render();
    }
  });
  $(document).on('keydown', function (event) {
    if (event.key === 'Escape') {
      pinned = null;
      focused = null;
      document.activeElement?.blur();
      render();
    }
  });
});
