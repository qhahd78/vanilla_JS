import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    // 부모 객체의 함수 호출할 때 사용. (this 호출하기 전에 써야한다.)
    super();
    this.setTitle("Bom");
  }

  async getHtml() {
    return `<div class="content">
    <p class="content-title">하 봄 (9세) </p>
    <p class="content-info">언니 껌딱지에요. 괴롭히면 화내는 게 귀엽습니다.</p>
    <img class="content-img" src="/static/img/bom.jpg" alt="bom" />
    </div>
  `;
  }
}
