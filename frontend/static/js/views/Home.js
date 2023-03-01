import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    // 부모 객체의 함수 호출할 때 사용. (this 호출하기 전에 써야한다.)
    super();
    this.setTitle("Home");
  }

  async getHtml() {
    return `<div class="content">
      <p class="content-title">안녕하세요. 우리집 고양이를 소개하는 홈페이지입니다. </p>
      <p class="content-info">Vanilla JavaScript 로 SPA 를 구현했습니다. </p>
      </div>
    `;
  }
}
