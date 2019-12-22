function getDom(selector) {
  return document.querySelector(selector);
}

function fetchData(url, data, {
  method = "GET", 
  dataType = ''
} = {}) {
  var headers = {};
  // post: 默认 'application/x-www-form-url-encoded';
  // formDate 不需要手动设置，会自动设置的
  // json 格式设置请求头
  if (dataType === 'json') {
    headers['Content-Type'] = 'application/json; charset=utf-8';
  }
  return fetch(url, {
    body: data, 
    method,
    headers: headers
  })
  .then(res => res.json());
}
