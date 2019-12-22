class FileUpload extends HTMLElement {
  constructor() {
    super();

    let shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <div id="formData">
        <p>formData格式：</p>
        <input type="file" class="file">
        <button class="upload">上传</button>
        <div class="msg">上传结果：</div>
      </div>
    `;

    this.file = shadowRoot.querySelector('.file');
    this.msg = shadowRoot.querySelector('.msg');

    let upload = shadowRoot.querySelector('.upload');
    upload.addEventListener('click', this.upload.bind(this));
  }

  upload() {
    var formData = new FormData();
    formData.append('file', this.file.files[0]);

    fetchData('/file/uploadFile', formData, {
      method: 'POST'
    })
    .then(res => {
      this.msg.innerHTML = `上传结果：${res.msg}`;
    });
  }
}

customElements.define('file-upload', FileUpload);
