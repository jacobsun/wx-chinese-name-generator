import pinyinjs from 'thepinyin.js'
const app = getApp()
let total = 100

class Chinese {
  constructor() {
    this._source = ['万','川','之','广','山','士','千','云','长','巨','友','中','见','元','方','以','仁','介','允','公','书','本','世','正','训','宁','让','汇','永','石','左','右','业','归','北','仪','白','令','乐','处','半','边','芒','权','存','迈','师','光','同','先','乔','自','任','后','合','企','庄','亦','齐','冲','羊','州','池','防','如','观','纪','远','孝','声','极','束','来','伯','步','希','谷','况','应','辛','启','陆','奉','青','尚','易','和','征','周','京','放','肃','承','孟','始','绍','经','贯','项','城','挺','荣','南','相','柏','树','威','厚','临','览','显','星','宜','矩','适','科','复','重','段','顺','修','信','泉','叙','勉','律','饶','度','庭','姿','音','施','阁','济','洲','恢','举','宣','觉','宪','语','祝','退','既','贺','盈','绘','耕','泰','素','载','起','都','哲','荷','晋','真','桐','索','栗','夏','原','殊','顾','致','柴','恩','积','俯','途','颂','逢','高','席','准','效','离','唐','资','凉','竞','涉','海','阅','益','润','悟','宽','朗','谊','陶','陵','预','通','能','梦','域','基','桑','培','盛','辅','堂','常','野','唯','跃','晚','崇','符','敏','悠','得','悉','猛','康','鹿','章','竟','旋','望','清','渠','添','渐','渔','梁','深','惜','随','隆','隐','绩','维','绪','绵','琴','堪','越','斯','敬','朝','植','椅','惠','紫','雁','雅','敞','遇','景','铸','锐','程','策','筑','筝','傅','储','奥','循','舒','然','阔','善','羡','尊','道','游','寒','裕','谦','疏','絮','登','缘','塘','蓬','蒙','楚','龄','路','照','锡','锦','辞','筹','遥','愈','微','新','韵','意','数','慈','源','溪','滨','谨','静','碧','歌','慕','端','漫','赛','谱','增','影','墨','镇','黎','稼','德','遵','潜','潮','薪','衡','凝','彰','潭','澈','澜','澄','鹤','艾','玄','仲','伦','伊','玖','杉','轩','纬','玫','枢','枫','郁','歧','卓','秉','岳','宛','弥','陌','绅','绎','荔','昭','钦','衍','奕','咨','耘','秦','逊','炫','峻','凌','诺','萧','曼','翎','逸','焕','淳','渊','尉','婉','颇','综','翘','棠','鼎','晰','敦','竣','遂','湘','渤','寓','犀','蒲','楷','睦','稚','魁','靖','溯','缤','赫','蔚','榕','熙','榛','豫','辙','儒','瞻','璧','麟','巍','珍','瑜','瑾','珞','瑶','理','璋','江','河','沐','沛','浦','沪','渝','松','柏','杨','柳','枫','桦','桐','镇','钦','锡','锐','钟','铠','铮','安','谙','昂','悲','贝','备','蓓','标','冰','泊','博','采','彩','参','灿','苍','沧','岑','涔','澶','昌','昶','畅','琛','辰','忱','宸','晨','谌','弛','驰','炽','初','达','岱','典','东','渡','铎','朵','凡','绯','扉','霏','斐','芬','纷','汾','烽','锋','甫','赋','馥','戈','格','功','恭','冠','瑰','炅','过','哈','还','函','晗','涵','汉','菡','翰','憾','瀚','杭','航','豪','濠','好','菏','恨','恒','珩','蘅','弘','泓','虹','洪','鸿','瑚','华','怀','淮','欢','环','桓','寰','幻','涣','浣','湟','煌','辉','徽','玑','己','忌','际','季','迹','寄','寂','霁','加','佳','迦','珈','葭','坚','间','简','荐','剑','涧','鉴','佼','皎','节','杰','结','捷','婕','睫','今','津','槿','进','近','劲','泾','荆','憬','境','镜','炯','九','久','镌','珏','绝','均','钧','隽','浚','凯','恺','勘','阚','珂','柯','可','克','崆','兰','岚','阑','谰','镧','羸','蕾','冷','漓','璃','礼','逦','澧','历','立','励','俪','俐','莉','连','怜','涟','廉','濂','琏','良','晾','辽','琳','遴','霖','凛','蔺','伶','灵','苓','泠','玲','菱','零','琉','泷','珑','芦','庐','泸','潞','璐','露','栾','沦','纶','洛','络','蔓','茫','茂','瑁','枚','湄','镁','昧','谧','渺','缈','邈','玟','名','鸣','溟','茉','沫','莫','漠','默','暮','穆','纳','楠','旎','欧','徘','朋','鹏','澎','膨','翩','缥','飘','品','普','七','柒','期','蹊','奇','淇','琪','琦','绮','浅','缱','茜','倩','蔷','荞','芩','轻','卿','情','晴','秋','绻','染','仞','容','嵘','融','柔','瑞','睿','若','偌','沙','莎','韶','少','升','诗','时','识','实','示','式','守','首','曙','司','丝','思','汜','淞','苏','涑','愫','燧','邰','昙','溏','韬','桃','腾','缇','逖','恬','听','廷','亭','霆','彤','潼','瞳','惋','绾','琬','皖','葳','薇','韦','惟','潍','苇','玮','炜','洧','卫','谓','渭','温','闻','雯','汶','沃','无','吴','五','午','武','舞','夕','汐','奚','稀','曦','习','遐','瑕','暇','纤','贤','娴','向','骁','逍','箫','潇','霄','小','晓','筱','笑','啸','渫','心','芯','忻','昕','欣','歆','兴','休','许','诩','旭','序','煦','萱','喧','暄','漩','璇','泫','绚','眩','铉','渲','镟','雪','旬','寻','荀','峋','洵','浔','徇','涯','亚','娅','胭','嫣','严','言','妍','沿','颜','琰','彦','晏','谚','焰','滟','扬','仰','漾','邀','谣','徭','冶','叶','夜','晔','烨','依','漪','沂','怡','嶷','旖','忆','屹','怿','翊','毅','熠','薏','翼','镱','懿','茵','荫','吟','垠','寅','尹','印','胤','英','莺','瑛','缨','璎','迎','荧','莹','萤','萦','滢','潆','郢','颍','颖','邕','庸','镛','咏','涌','优','攸','忧','尤','莜','猷','有','佑','宥','余','妤','臾','俞','虞','与','予','羽','禹','庾','聿','钰','阈','喻','煜','誉','沅','悦','匀','芸','纭','昀','韫','泽','展','占','湛','漳','丈','嶂','谪','贞','帧','桢','祯','甄','箴','缜','稹','振','震','峥','知','止','芷','徵','至','志','陟','智','忠','衷','众','子','梓','宗']
    this._chars = this._source
    this._filterStr = ''
    this.surname = ''
  }

  get chars() {
    return this._chars
  }

  get filters() {
    return this._filterStr.split(' ').filter(c => c)
  }

  set filters(filterStr) {
    this._filterStr = filterStr
    this._chars = this._source.filter(c => {
      const py = pinyinjs.py(c, pinyinjs.NOMARK).join('')
      return !this.filters.some(filter => py.includes(filter))
    })
  }

  pickChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }

  gen(len) {
    let ret = this.surname
    while (len-- > 0) {
      ret += this.pickChar()
    }
    return ret
  }
}
const C = new Chinese()

Page({
  data: {
    charCounts: C.chars.length,
    showCloak: true,
    names: [],
    favNames: [],
    showBookmark: false,
    surname: '',
    filters: '',
    animating: '',
  },

  onReady: function () {
    this.setData({ showCloak: false })
    this.loadLocalData()
    this.onSubmit()
  },

  onSubmit(ev) {
    // this should be done in animationend event, but the event couldn't be fired
    this.setData({ animating: '' })
    let names = []
    for (let i = 0; i < total; i++) {
      names.push(C.gen(2))
    }
    this.setData({ names })
  },

  onChangeSurname(ev) {
    let surname = ev.detail.value.trim()
    C.surname = surname
    this.setData({ surname })
    wx.setStorage({
      key: 'surname',
      data: surname,
      success(res) { },
      fail(e) {
        wx.showModal({
          title: '保存姓氏失败',
          content: '本地保存失败, 请重试',
          success(res) { }
        })
      }
    })
  },

  onChangeFiltersStr(ev) {
    let filters = ev.detail.value.trim()
    C.filters = filters
    this.setData({ filters })
    this.setData({ charCounts: C.chars.length })
    wx.setStorage({
      key: 'filters',
      data: filters,
      success(res) { },
      fail(e) {
        wx.showModal({
          title: '保存黑名单失败',
          content: '本地保存失败, 请重试',
          success(res) { }
        })
      }
    })
  },

  bookmarkName(ev) {
    if (ev.target.dataset.name) {
      this.setData({ animating: ev.target.id })
      this.addFavNames(ev.target.dataset.name)
      this.saveFavNames()
      return false
    }
  },

  unbookmarkName(ev) {
    if (ev.target.dataset.favname) {
      this.removeFavNames(ev.target.dataset.favname)
      this.saveFavNames()
      return false
    }
  },

  loadLocalData() {
    try {
      this.setData({ favNames: JSON.parse(wx.getStorageSync('fav') || "[]") })
      let surname = wx.getStorageSync('surname')
      C.surname = surname
      this.setData({ surname })
      let filters = wx.getStorageSync('filters')
      C.filters = filters
      this.setData({ filters })
      this.setData({ charCounts: C.chars.length })
    } catch (error) {
      wx.showModal({
        title: '读取本地数据失败',
        content: error.msg || error.message || '读取本地数据失败',
        success(res) { }
      })
    }
  },

  saveFavNames() {
    wx.setStorage({
      key: 'fav',
      data: JSON.stringify(this.data.favNames),
      success(res) { },
      fail(e) {
        wx.showModal({
          title: '保存失败',
          content: '本地保存失败, 请重试',
          success(res) { }
        })
      }
    })
  },

  toggleBookmark(ev) {
    this.setData({ showBookmark: !this.data.showBookmark })
  },

  addFavNames(name) {
    if (!this.data.favNames.includes(name)) {
      this.setData({ favNames: [...this.data.favNames, name] })
    }
  },

  removeFavNames(name) {
    this.setData({ favNames: this.data.favNames.filter(n => n !== name) })
  }
})
