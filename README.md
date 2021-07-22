## OverView
사진을 업로드 하면 사진을 만화의 한 장면처럼 바꿔서 보여주는 서비스

- 기술스택: React.js, Styled-Components, Redux
- 작업기간: 2021.07.17~2021.07.22
- 컴포넌트 구조: Atomic Design Pattern
```
    ├─components
    │  ├─atoms
    │  ├─molecules
    │  └─organisms
    ├─images
    ├─lib
    │  ├─api
    │  ├─auth
    │  └─styles
    ├─modules
    └─pages
        ├─Login
        ├─Mypage
        ├─MypageDetail
        ├─Service
        └─Signup
```
        
## 서비스 (메인)
실행 시 최초로 로딩 되는 페이지

![](https://images.velog.io/images/songbetter/post/2b99a3cf-a4c7-4acc-a7bc-429a4e013617/image.png)
- 상단에 이미지, 하단에 주문하기 / 신청하기 버튼이 존재합니다.
- 로그인을 하지 않은 사용자의 경우 "주문하기" 버튼이 보이며, 로그인을 한 사용자의 경우 "신청하기" 버튼이 보입니다.
- "주문하기" 버튼 클릭 시 "로그인이 필요한 서비스입니다"라는 Alert이 발생하고, 로그인 페이지로 이동합니다.
- "신청하기" 버튼 클릭 시 "주문이 완료되었습니다"라는 Alert이 발생하고, 새로고침이 됩니다.
## 반응형 메뉴 (Header)

### 공통
- 로그인 여부에 따라 서비스, 회원가입, 로그인 혹은 서비스, 마이페이지, 로그아웃 3가지 메뉴가 노출됩니다.
- 메뉴 클릭 시 해당 페이지로 이동하며, 선택된 메뉴의 경우 색이 변경됩니다.
- 로그아웃 클릭 시 LocalStorage에 저장되어 있던 토큰을 삭제하고, 서비스 페이지(메인 페이지)로 이동합니다.

### PC 
가로 414px 초과 디바이스에서 보이는 메뉴

![](https://images.velog.io/images/songbetter/post/55b5a13f-5239-42f4-8f0c-7cbd30286c3b/image.png)
- 좌측에는 서비스 로고, 우측에는 메뉴 네비게이션이 존재합니다

### Mobile
가로 414px 이하 디바이스에서 보이는 메뉴

![](https://images.velog.io/images/songbetter/post/c8a806e2-d6da-4634-809f-c699e5fad1a0/image.png)
- 좌측에는 서비스 로고, 우측에는 햄버거 버튼이 존재합니다.
- 햄버거 버튼 클릭 시 3가지 메뉴를 선택할 수 있는 모달창이 최상위로 노출됩니다.
- 모달창의 X 버튼 클릭 시 모달창이 닫힙니다.

## 회원가입
회원가입 페이지

![](https://images.velog.io/images/songbetter/post/96683927-a6bf-4d72-ae69-854e47125bc5/image.png)
- 이메일, 비밀번호, 비밀번호 확인, 핸드폰 번호를 입력받습니다.
- 올바른 이메일 형식이 아닐 경우, focus가 넘어갈 때 Input 테두리가 붉게 표시됩니다.
- 비밀번호는 문자와 숫자로 구성된 8~15자를 입력하지 않을 경우, 입력할 때 Input 테두리가 붉게 표시됩니다.
- 가입하기 버튼 클릭 시 값이 입력되지 않거나 잘못 입력된 경우, Alert이 발생한 후 각 필드로 cursor가 이동합니다.
- 유효성 검증이 완료되어 회원가입 성공 시, 받아온 토큰 값을 LocalStorage에 저장하고 서비스 페이지(메인 페이지)로 이동합니다.

## 로그인
로그인 페이지

![](https://images.velog.io/images/songbetter/post/25b6fb64-a3fb-427a-92eb-41e65541ba21/image.png)
- 이메일과 비밀번호를 입력받습니다.
- 로그인 실패 시(비밀번호를 8글자 미만으로 입력한 경우), 비밀번호를 확인해 달라는 Alert이 발생합니다.
- 로그인 성공 시, 받아온 토큰 값을 LocalStorage에 저장하고 서비스 페이지(메인 페이지)로 이동합니다.
- 회원이 아닌 경우 회원가입 페이지로 이동할 수 있도록 안내 문구를 표시하였습니다.

## 마이페이지
주문 목록을 보기 위한 페이지

![](https://images.velog.io/images/songbetter/post/56854130-68ca-428d-9d2b-3edae55d4066/image.png)
- 주문 목록은 기본적으로 10개씩 노출됩니다.
- 페이지 버튼을 클릭하면 해당 페이지 버튼이 활성화되고 페이지 별 목록을 10개씩 불러옵니다.
- 목록을 불러오는 동안 로더가 노출됩니다.

## 마이 페이지(상세)
 주문 아이템 상세 내용을 보기 위한 페이지
 
![](https://images.velog.io/images/songbetter/post/8ff5d3e9-b742-4ad2-96f5-c08a80fa55f7/image.png)
- 마이페이지에서 주문 아이템을 클릭하면 상세 페이지로 이동하고, 주문 상세 내용을 가져옵니다.
- "뒤로가기" 버튼을 누르면 아이템을 클릭하기 전 마이페이지로 이동합니다.
