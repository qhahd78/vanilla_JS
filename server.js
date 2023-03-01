// require : 다른 패키지를 불러올 때 사용.

// 특정 path 지정이 안 되어있으면 (ex ./fronted/index.html)
// 기본적으로 node_modules 폴더에서 express 라는 모듈을 찾는다.
// 따라서 node_modules 에 있는 express 를 호출했다.
const express = require("express");

// express 를 호출한 것과 마찬가지로 특정 경로가 지정되지 않았으므로
// node_modules 에서 path 라는 모듈을 찾아 호출했다.
const path = require("path");

// 새로운 express 애플리케이션 생성
const app = express();

// 정적파일 제공 (CSS, JS 처리)
app.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "static"))
);

// 라우팅 설정 (GET 리퀘스트 정의)
// param1 : URL 정의
// param2 : 해당 URL에서 수행할 작업과 응답 정의
// req : 요청 (요청 정보) , res : 응답 (응답 정보 송신)
app.get("/*", (req, res) => {
  // sendFile : 해당 경로의 파일을 읽고 내용을 클라이언트로 전송
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

// express 서버 실행시 포트 정의, 서버 실행 시 callback 함수
// param1 : 포트번호 지정 (process.env 는 환경 변수를 가져올 때 사용)
// 환경 변수가 없으면 포트번호를 5000으로 지정한다.
// param2 : 콜백함수
// 서버가 구축 되면 "Server Running !" 을 콘솔에 띄운다.
app.listen(process.env.PORT || 5000, () => console.log("Server Running !"));
