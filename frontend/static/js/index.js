import Home from "./views/Home.js";
import Ong from "./views/Ong.js";
import Bom from "./views/Bom.js";

const navigateTo = (url) => {
  // history.pushState : 페이지를 새로고침 하지 않고 url 만 변경
  // param1 : 넘겨줄 데이터, param2 : 브라우저 제목, param3 : 변경할 브라우저 url
  // 페이지를 넘겨받은 url 로 변경한다.(단, 새로고침은 X)
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: Home },
    { path: "/bom", view: Bom },
    { path: "/ong", view: Ong },
  ];

  // routes 리스트를 map 함수에 넣음
  const potentialMatches = routes.map((route) => {
    return {
      // routes 원소 하나가 route 에 들어감.
      route: route,
      // route 원소 내 path 와 현재 path 를 비교하여 T/F 반환
      isMatch: location.pathname === route.path,
    };
  });

  // true 인 값만 반환하여 match 에 저장.
  // potentailMatch 에 있는 isMatch 값이 true 인 경우만 match 에 저장된다.
  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  // match 되는 경로가 없을 경우 home 으로 이동 (예외처리 코드)
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  const view = new match.route.view();

  document.querySelector("#app").innerHTML = await view.getHtml();
};

// 최상위 객체 window 객체
// popstate : 뒤로가기 버튼을 눌렀을 때 router 함수를 실행,
// 해당 url 에 매칭되는 routes 내의 원소를 찾아준다.
window.addEventListener("popstate", router);

// DOMContentLoaded 이벤트가 발생하면 router 함수를 실행한다.
document.addEventListener("DOMContentLoaded", () => {
  // body 에 click 이벤트가 발생했을 경우
  document.body.addEventListener("click", (e) => {
    // 해당 요소에 data-link가 있는지 확인 후 T/F 반환환
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      // navigateTo 함수에 해당 요소의 href 값을 보낸다.
      navigateTo(e.target.href);
    }
  });

  router();
});
