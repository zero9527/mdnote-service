class JsonData extends HTMLElement {
  constructor() {
    super();

    let shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <div id="json">
        <p>json格式：</p>
        <input type="text" placeholder="用户名" class="username">
        <input type="text" placeholder="密码" class="password">
        <button class="login">登录</button>
        <div class="login-msg">登录结果：</div>
      </div>
    `;

    this.username = shadowRoot.querySelector('.username');
    this.password = shadowRoot.querySelector('.password');
    this.result = shadowRoot.querySelector('.login-msg');

    let login = shadowRoot.querySelector('.login');
    login.addEventListener('click', this.login.bind(this));
  }

  login() {
    let name = this.username.value;
    let password = this.password.value;

    let data = JSON.stringify({
      name,
      password
    });
    
    fetchData('/user/login', data, {
      method: 'POST',
      dataType: 'json'
    })
    .then(res => {
      this.result.innerHTML = `登录结果：${res.msg}`;
    });
  }
}

customElements.define('json-type', JsonData);
