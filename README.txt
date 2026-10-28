화면 속 작은 전시장

index.html: div와 img로 배경, 카드, 사람을 배치합니다.
style.css: 위치, 앞뒤 순서, 왕복 움직임, 사람의 등장 효과를 설정합니다.
script.js: mouseenter에서 is-paused를 붙이고 mouseleave에서 제거합니다.

jQuery는 사진 속 예제처럼 code.jquery.com에서 불러옵니다.
따라서 실행할 때 인터넷 연결이 필요합니다. 별도 jquery.min.js는 사용하지 않습니다.

사진 속 예제와 같은 position, top, left, width, z-index,
keyframes, translate, opacity, transition, animation-play-state를 사용합니다.
화면 크기에 맞추기 위한 비율과 % 좌표는 유지했습니다.

카드와 사람은 하나의 .card 안에 있습니다.
.card의 display: contents는 그룹 자체의 상자를 없애는 속성입니다.
그래야 모든 사람의 z-index가 모든 작품보다 낮게 유지됩니다.
작품과 사람에 같은 애니메이션을 적용해 함께 이동하고 멈춥니다.
작품의 투명한 빈 공간이 다른 카드를 가로채지 않도록 clip-path를 유지했습니다.

A 10초, B 약 8.89초, C 약 10.83초로 왕복합니다.
마우스를 올리면 해당 그룹만 멈추고 사람이 0.6초 동안 나타납니다.
마우스를 떼면 사람이 사라지고 멈춘 지점부터 다시 이동합니다.
