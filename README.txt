화면 속 작은 전시장 — jQuery 버전
index.html을 열면 됩니다. jQuery를 폴더에 포함해 인터넷 없이 실행됩니다.

포스터는 position: relative, 카드는 position: absolute입니다.
카드의 위치는 left/top/width로 지정하고, z-index로 앞뒤 순서를 정합니다.
keyframes와 translate로 35도 축을 따라 왕복합니다. A는 -35도,
B와 C는 +35도 축이며 C는 먼저 왼쪽 위로 이동합니다.
이동 주기: A 10초, B 약 8.89초, C 약 10.83초.
ease-in-out infinite로 부드러운 왕복을 반복합니다.

jQuery mouseenter와 mouseleave는 각 카드에서 감지합니다.
mouseenter 시 카드와 그룹에 is-paused를 추가합니다.
그룹의 카드 이동 레이어와 관람객 이동 레이어에
animation-play-state: paused가 적용됩니다.
동시에 관람객에 is-visible을 추가하여 opacity를 0에서 1로
0.6초 동안 전환합니다. mouseleave 시 상태 클래스를 제거하여
관람객은 사라지고 애니메이션은 멈췄던 지점부터 재개됩니다.

카드와 관람객은 같은 card-group 안에 있습니다.
관람객이 모든 카드 뒤에 있도록 그룹에는 display: contents를 사용하고,
두 레이어에 동일한 이동값/시간/정지 상태를 적용했습니다.
배경, 카드 이미지, 관람객에는 pointer-events: none을 적용하여
마우스 이벤트를 가로채지 않도록 합니다. 이벤트를 받는 카드 버튼은
pointer-events: auto입니다. pointer-events: none은 클릭뿐 아니라
마우스 감지도 막으므로 카드 버튼 자체에 적용하지 않습니다.
클릭 기본 동작 방지는 jQuery의 preventDefault()로 처리합니다.
