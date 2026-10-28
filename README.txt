화면 속 작은 전시장 — 기본 jQuery 버전

index.html을 열면 실행됩니다. jquery.min.js는 jQuery 원본 라이브러리입니다.
직접 수정할 파일은 index.html, style.css, script.js입니다.

HTML: 포스터 안에 A/B/C 그룹을 두고 카드와 관람객 이미지를 넣습니다.
CSS: relative/absolute로 배치하고 z-index로 앞뒤 순서를 정합니다.
카드별 keyframes에 translate 이동값을 직접 적었습니다.
이동 주기는 A 10초, B 약 8.89초, C 약 10.83초입니다.
ease-in-out infinite로 부드럽게 왕복합니다.

JS: document.ready 안에 mouseenter와 mouseleave 이벤트만 둡니다.
this는 마우스를 올린 카드이고, closest는 그 카드의 그룹을 찾습니다.
addClass로 is-paused를 붙이고 removeClass로 지웁니다.
CSS가 이 클래스를 보고 그룹의 카드와 관람객을 함께 멈춥니다.
관람객은 opacity가 0.6초에 걸쳐 변하면서 나타나거나 사라집니다.
애니메이션을 없애지 않고 일시정지하므로 같은 지점부터 이어집니다.

관람객은 모든 카드 뒤에 표시됩니다.
이를 위해 display: contents와 두 이동 레이어를 유지했습니다.
이미지에 pointer-events: none을 주어 마우스 감지를 가로채지 않게 합니다.
이벤트를 받는 카드에는 pointer-events: auto를 적용합니다.
이 버전은 마우스 인터랙션에 맞춰 단순화했습니다.
