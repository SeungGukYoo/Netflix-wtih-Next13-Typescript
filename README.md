# Netfilx with Next.js

해당 프로젝트는 Typescript와 Next.js,Tailwind를 바탕으로 만들어진 넷플릭스 클론 코딩입니다.

## 소개

기존에 존재한 프로젝트의 경우 NextJS 12버전으로 이를 13버전으로 바꿔 제작해본 프로젝트입니다.</br>
Next.js에서 Tailwind와 firebase를 학습해보고자 제작해보게 되었습니다. </br>
<b>보안 오류로 인해 배포한 웹페이지에 방문이 되지 않아 GIF를 첨부하였습니다. 양해부탁드립니다.<b>

## 기술 스택

![typescript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=ffffff)
![ReactJS](https://img.shields.io/badge/React-000?style=for-the-badge&logo=react)
![NextJS](https://img.shields.io/badge/Next-444444?style=for-the-badge&logo=Next.js)
![TailwindCss](https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=ffffff)
![recoil](https://img.shields.io/badge/reCoil-412991?style=for-the-badge&logo=recoil&logoColor=ffffff)
![themoviedatabase](https://img.shields.io/badge/themoviedatabase-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=ffffff)
![reacthookform](https://img.shields.io/badge/reacthookform-EC5990?style=for-the-badge&logo=reacthookform&logoColor=ffffff)
![Firebase](https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=ffffff)

## 페이지 구성

### Login

로그인과 회원가입이 가능한 페이지입니다.
React-Hook-form을 통해 만들었으며, Firebase와 연동하여 로그인과 회원가입이 이루어집니다.

![ezgif com-video-to-gif (1)](https://github.com/SeungGukYoo/Netflix-wtih-Next13-Typescript/assets/119836116/eedaa243-816f-48a0-8ce2-f190ebaf5a66)

### Main

베너와 좌우 스크롤이 가능한 리스트들로 이루어진 페이지입니다.
next/Imgaes 컴포넌트를 사용하여 화면에 보여지는 이미지들을 최적화하였으며, 로딩상태에 따라 로딩 스피너가 보여집니다.
TMDB로부터 `getServerSideProps`를 사용하여 데이터를 받아와 화면에 출력하고 있습니다.

![ezgif com-video-to-gif (2)](https://github.com/SeungGukYoo/Netflix-wtih-Next13-Typescript/assets/119836116/c2f81913-095f-4ef1-a1b3-4e9ec9edd021)

## 문제와 해결과정

### 1. 리액트 18버전에서의 타입스크립트

17버전의 리액트에서는 children의 타입을 `React.FC`을 통해 선언하였지만 18버전부터 해당 타입이 제거되었습니다.</br>
그렇기에 18버전부터는 type 혹은 interface를 통해서 `React.ReactNode` 타입을 따로 선언해줘서 사용해줘야 합니다.

### 2. firebase 초기화 작업

firebase를 사용하기 위해서는 초기화 작업이 이루어지게 되는데 9버전부터 사용 방법이 약간 바뀌게 된것을 알게되었고, `getApps`를 사용하여 초기화 유무를 확인하는 방식의 코드로 리팩토링 해보았습니다.<br>
이를 통해 초기화 작업을 계속해서 반복하는 것이 아닌 `getApps()`를 통해 초기화가 진행되었다면 `getApp()`을 통해 이미 초기화된 값을 가져오고, 그렇지 않다면 초기화하는 작업을 실행하게 됩니다.
