# Nexfilx with NextJS

## 소개

해당 프로젝트는 Typescript와 NextJS,TailwindCss를 바탕으로 만들어진 넷플릭스 클론 코딩입니다.
기존에 존재한 프로젝트의 경우 NextJS 12버전으로 이를 13버전으로 바꿔 제작해본 프로젝트입니다.

#### <b>5월 18일 기준 보안 오류로 인해 배포한 웹페이지에 방문이 안되고 있습니다. <br>다운로드를 하여 보는 것을 권장드립니다.<b>

```zsh
 git clone https://github.com/SeungGukYoo/Netflix-wtih-Next13-Typescript.git

 npm run dev
```

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

### Main

베너와 좌우 스크롤이 가능한 리스트들로 이루어진 페이지입니다.
next/Imgaes 컴포넌트를 사용하여 화면에 보여지는 이미지들을 최적화하였으며, 로딩상태에 따라 로딩 스피너가 보여집니다.
TMDB로부터 데이터를 받아와 화면에 출력해주며, 해당 데이터는 Recoil을 통해 전역으로 관리되고 있습니다.

### Login

로그인과 회원가입이 가능한 페이지입니다.
React-Hook-form을 통해 만들었으며, Firebase와 연동하여 로그인과 회원가입이 이루어집니다.

## 문제와 해결과정

### 1. 리액트 18버전에서의 타입스크립트

타입스크립트를 사용하며 children을 사용할 경우 이전에는 :React.FC 타입에 모두 담겨있었지만 리액트 18버전에는 children이 제외되었기 때문에 interface 혹은 type을 통해 children의 타입을 명시해줘야 합니다.

### 2.NextJS에서의 firebase 초기화 작업

이전에 firebase를 초기화하기 위해서는 문서에 나온 방식으로 하고 끝냈지만 NextJS의 경우 앱 초기화를 반복하면 계속해서 새로운 파일들이 생성되기 때문에 약간 다른 방식으로 앱을 초기화시켜주어야 합니다. <br>
firebase에서 제공하는 getApp과 getApps를 통해 초기화 작업을 반복하는 것이 아닌 사용중이 firebase앱이 존재한다면 초기화하지 않고 사용중인 데이터를 불러오는 방법에 대해 알게되었습니다.
