// 根据页面尺寸，等比例缩放页面
function setRem() {
  const baseSize = 16 // 基准大小，取16px
  const width = document.documentElement.clientWidth // 当前页面宽度
  let scale = 1 // 缩放比例
  let currentDevice = 'lg' // 当前设备是哪个尺寸
  const deviceMap = {
    lg: width >= 1024,
    md: width >= 768 && width < 1024,
    sm: width < 375,
  }
  for (const key in deviceMap) {
    if (deviceMap[key]) {
      currentDevice = key
    }
  }
  const DeviceEnum = {
    lg: 1024,
    md: 768,
    sm: 375,
  }
  scale = width / DeviceEnum[currentDevice]
  document.documentElement.style.fontSize = baseSize * scale + 'px'
}
setRem()
window.onresize = setRem
