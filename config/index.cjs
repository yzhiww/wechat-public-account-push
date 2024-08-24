/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
"APP_ID": "wxde3fc3dd6d16688c",
    "APP_SECRET": "849a0458f4f7cfa3aac0bf1188583808",
    "IS_SHOW_COLOR": true,
    "CALLBACK_TEMPLATE_ID": "",
    "CALLBACK_USERS": [
        {
            "name": "自己",
            "id": "o_tmx6ZwvIe0sbBaLVgvyV5Q9FD4"
        }
    ],
    "USERS": [
        {
            "name": "Henry",
            "id": "o_tmx6ZwvIe0sbBaLVgvyV5Q9FD4",
            "useTemplateId": "xtgyvPwgN-AXYHcYT2o8rCUeWxf_3NTZH0I3cP9YaMY",
            "province": "广西",
            "city": "南宁",
            "horoscopeDate": "09-14",
            "horoscopeDateType": "今日",
            "openUrl": "https://shuangxunian.github.io/",
            "festivals": [
                {
                    "type": "生日",
                    "name": "bir",
                    "date": "09-14",
                    "year": "1999"
                }
            ],
            "customizedDateList": []
        }
    ],
    "SWITCH": {
        "weather": true,
        "holidaytts": true,
        "CIBA": true,
        "oneTalk": true,
        "earthyLoveWords": false,
        "momentCopyrighting": false,
        "poisonChickenSoup": false,
        "poetry": true,
        "horoscope": false,
        "birthdayMessage": true
    },


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o_tmx6ZwvIe0sbBaLVgvyV5Q9FD4',
    }
  ],

}

module.exports = USER_CONFIG

