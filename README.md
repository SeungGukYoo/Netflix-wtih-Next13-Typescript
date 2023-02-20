# Nexfilx with NextJS 
## 소개
해당 프로젝트는 Typescript와 NextJS,TailwindCss를 바탕으로 만들어진 넷플릭스 클론 코딩입니다.
기존에 존재한 프로젝트의 경우 NextJS 12버전으로 이를 13버전으로 바꿔 제작해본 프로젝트입니다. 

[Netflix 바로가기](https://netflix-wtih-next13-typescript-git-main-seunggukyoo.vercel.app/)

## 기술 스택

* React 18
* Typescript
* NextJS 13
* TailwindCss
* Recoil
* TMDB API
* React-Hook-form
* Firebase API


## 페이지 구성
### Main
베너와 좌우 스크롤이 가능한 리스트들로 이루어진 페이지입니다. 
next/Imgaes 컴포넌트를 사용하여 화면에 보여지는 이미지들을 최적화하였으며, 로딩상태에 따라 로딩 스피너가 보여집니다. 
TMDB로부터 데이터를 받아와 화면에 출력해주며, 해당 데이터는 Recoil을 통해 전역으로 관리되고 있습니다.
### Login
로그인과 회원가입이 가능한 페이지입니다. 
React-Hook-form을 통해 만들었으며, Firebase와 연동하여 로그인과 회원가입이 이루어집니다. 


## 학습내용

* 타입스크립트를 사용하며 children을 사용할 경우 이전에는 :React.FC 타입에 모두 담겨있었지만 리액트 18버전에는 children이 제외되었기 때문에 interface 혹은 type을 통해 children의 타입을 명시해줘야 했다. 
*  TailwindCSS를 어떻게 활용하는지에 대해 알게되었으며, 이전보다 tailwind.config.js와 global.css를 활용하여 좀더 가독성이 좋고, 효율적이게 TailwindCss를 사용하게 되었다. 
* Firebase를 사용하면서 이전에는 단순히 사용자를 찾고 초기화하는 작업들을 계속해서 반복했지만 NextJs의 경우 이를 반복하면 계속해서 새로운 파일들이 생성되기 때문에 이를 방지하기 위해 firebase에서 제공하는 getApp과 getApps에 대해 알게되었고, 이를 통해 초기화하는 작업을 반복하는 것이 아닌 사용중이 firebase앱이 존재한다면 초기화하지 않고 사용중인 데이터를 불러오는 방법에 대해 알게되었다.  
