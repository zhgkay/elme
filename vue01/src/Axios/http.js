import Axios from "axios"

Axios.defaults.withCredentials = true;
const TIME_OUT_MS = 60 * 1000;


export default {
  /*
  封装axios的get请求
  @param url 请求的地址
  @param response 请求成功的回调
  @param exception 请求异常的回调
  */
  get(url, response, exception) {
    Axios({
      method: "get",//请求方式
      url: "https://elm.cangdu.org" + url,//请求地址
      timeout: TIME_OUT_MS,//请求超时的时间
    }).then(result => {
      response(result.data);
    }).catch(error => {
      if (exception) {
        exception(error);
      } else {
        console.log(error);
      }
    });
  },
  /*
   封装axios的post请求
   @param url 请求的地址
   @param data 请求的参数
   @param response 请求成功的回调
   @param exception 请求异常的回调
*/
  post(url, data, response, exception) {
    Axios({
      method: "post",
      url: "https://elm.cangdu.org" + url,
      data: data,
      timeout: TIME_OUT_MS,
    }).then(result => {
      response(result.data);
    }).then(error => {
      if (exception) {
        exception(error);
      } else {
        console.log(error);
      }
    });
  }
}
