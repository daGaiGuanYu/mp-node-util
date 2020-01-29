const axios = require('axios')
axios = axios.create({}) // 不影响其他 axios 的使用

module.exports = class WxLogin {
  constructor(appid, secret){
    this.appid = appid
    this.secret = secret
  }
  getOpenidByCode(code){
    return axios(`https://api.weixin.qq.com/sns/jscode2session?appid=${this.appid}&secret=${this.secret}&js_code=${code}&grant_type=authorization_code`)
  }
}
