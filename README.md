# adkiller
`adkiller for chrome plugin`

## 用法
1. `git clone`或者下载zip到本地
    - 推荐git clone ，因为这样能很容易更新最新插件

2. 打开chrome,extensions(chrome://extensions/),打开`develop mode`

3. `Load unpacked extension...` and select the path of the plugin

4. vist a website with ads

## 注意
* 目前广告特征并不多，无法覆盖所有网站的广告特征，如果有需要的同学可以自行加入或者在[issues](https://github.com/nbwsc/adkiller/issues/new)中给出url

* 方法：
    - `js/killer.js`中`_AdAttrFeatures`存放的是广告element的字符串属性特征，`_AdClassFeatures`存放的是广告`class`属性列表中出现的特征
