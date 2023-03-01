import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    // 부모 객체의 함수 호출할 때 사용. (this 호출하기 전에 써야한다.)
    super();
    this.setTitle("Ong");
  }

  async getHtml() {
    return `<div class="content">
    <p class="content-title">하 옹 (9세)</p>
    <p class="content-info">엄마 껌딱지에요. 식탐이 많아서 간식을 주면 그릉거립니다.</p>
    <img class="content-img" src="/static/img/ong.jpg" alt="ong" />
    </div>
  `;
  }
}
