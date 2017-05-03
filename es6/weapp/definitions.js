const definitions = [
  {name: 'request', wrapper: 'promisify', group: 'net'},
  {name: 'uploadFile', wrapper: 'promisify', group: 'file'},
  {name: 'downloadFile', wrapper: 'promisify', group: 'file'},
  {name: 'connectSocket', wrapper: 'promisify', group: 'net'},
  {name: 'onSocketOpen', wrapper: 'callback', group: 'net'},
  {name: 'onSocketError', wrapper: 'callback', group: 'net'},
  {name: 'sendSocketMessage', wrapper: 'promisify', group: 'net'},
  {name: 'onSocketMessage', wrapper: 'callback', group: 'net'},
  {name: 'closeSocket', wrapper: 'delegate', group: 'net'},
  {name: 'onSocketClose', wrapper: 'callback', group: 'net'},
  {name: 'chooseImage', wrapper: 'promisify', group: 'media'},
  {name: 'previewImage', wrapper: 'promisify', group: 'media'},
  {name: 'getImageInfo', wrapper: 'promisify', group: 'media'},
  {name: 'startRecord', wrapper: 'promisify', group: 'media'},
  {name: 'stopRecord', wrapper: 'delegate', group: 'media'},
  {name: 'playVoice', wrapper: 'promisify', group: 'media'},
  {name: 'pauseVoice', wrapper: 'delegate', group: 'media'},
  {name: 'stopVoice', wrapper: 'delegate', group: 'media'},
  {name: 'getBackgroundAudioPlayerState', wrapper: 'promisify', group: 'media'},
  {name: 'playBackgroundAudio', wrapper: 'promisify', group: 'media'},
  {name: 'pauseBackgroundAudio', wrapper: 'delegate', group: 'media'},
  {name: 'seekBackgroundAudio', wrapper: 'promisify', group: 'media'},
  {name: 'stopBackgroundAudio', wrapper: 'delegate', group: 'media'},
  {name: 'onBackgroundAudioPlay', wrapper: 'callback', group: 'media'},
  {name: 'onBackgroundAudioPause', wrapper: 'callback', group: 'media'},
  {name: 'onBackgroundAudioStop', wrapper: 'callback', group: 'media'},
  {name: 'createAudioContext', wrapper: 'delegate', group: 'media'},
  {name: 'chooseVideo', wrapper: 'promisify', group: 'media'},
  {name: 'createVideoContext', wrapper: 'delegate', group: 'media'},
  {name: 'saveFile', wrapper: 'promisify', group: 'file'},
  {name: 'getSavedFileList', wrapper: 'promisify', group: 'file'},
  {name: 'getSavedFileInfo', wrapper: 'promisify', group: 'file'},
  {name: 'removeSavedFile', wrapper: 'promisify', group: 'file'},
  {name: 'openDocument', wrapper: 'promisify', group: 'file'},
  {name: 'setStorage', wrapper: 'promisify', group: 'storage'},
  {name: 'getStorage', wrapper: 'promisify', group: 'storage'},
  {name: 'getStorageInfo', wrapper: 'promisify', group: 'storage'},
  {name: 'removeStorage', wrapper: 'promisify', group: 'storage'},
  {name: 'clearStorage', wrapper: 'promisify', group: 'storage'},
  {name: 'setStorageSync', wrapper: 'delegate', group: 'storage'},
  {name: 'getStorageSync', wrapper: 'delegate', group: 'storage'},
  {name: 'getStorageInfoSync', wrapper: 'delegate', group: 'storage'},
  {name: 'removeStorageSync', wrapper: 'delegate', group: 'storage'},
  {name: 'clearStorageSync', wrapper: 'delegate', group: 'storage'},
  {name: 'getLocation', wrapper: 'promisify', group: 'geo'},
  {name: 'chooseLocation', wrapper: 'promisify', group: 'geo'},
  {name: 'openLocation', wrapper: 'promisify', group: 'geo'},
  {name: 'createMapContext', wrapper: 'delegate', group: 'geo'},
  {name: 'getSystemInfo', wrapper: 'promisify', group: 'device'},
  {name: 'getSystemInfoSync', wrapper: 'delegate', group: 'device'},
  {name: 'canIUse', wrapper: 'delegate', group: 'device'},
  {name: 'getNetworkType', wrapper: 'promisify', group: 'device'},
  {name: 'onNetworkStatusChange', wrapper: 'callback', group: 'device'},
  {name: 'onAccelerometerChange', wrapper: 'callback', group: 'device'},
  {name: 'startAccelerometer', wrapper: 'promisify', group: 'device'},
  {name: 'stopAccelerometer', wrapper: 'promisify', group: 'device'},
  {name: 'onCompassChange', wrapper: 'callback', group: 'device'},
  {name: 'startCompass', wrapper: 'promisify', group: 'device'},
  {name: 'stopCompass', wrapper: 'promisify', group: 'device'},
  {name: 'makePhoneCall', wrapper: 'promisify', group: 'device'},
  {name: 'scanCode', wrapper: 'promisify', group: 'device'},
  {name: 'setClipboardData', wrapper: 'promisify', group: 'device'},
  {name: 'getClipboardData', wrapper: 'promisify', group: 'device'},
  {name: 'openBluetoothAdapter', wrapper: 'promisify', group: 'device'},
  {name: 'closeBluetoothAdapter', wrapper: 'promisify', group: 'device'},
  {name: 'getBluetoothAdapterState', wrapper: 'promisify', group: 'device'},
  {name: 'onBluetoothAdapterStateChange', wrapper: 'callback', group: 'device'},
  {name: 'startBluetoothDevicesDiscovery', wrapper: 'promisify', group: 'device'},
  {name: 'stopBluetoothDevicesDiscovery', wrapper: 'promisify', group: 'device'},
  {name: 'getBluetoothDevices', wrapper: 'promisify', group: 'device'},
  {name: 'getConnectedBluetoothDevices', wrapper: 'promisify', group: 'device'},
  {name: 'onBluetoothDeviceFound', wrapper: 'callback', group: 'device'},
  {name: 'createBLEConnection', wrapper: 'promisify', group: 'device'},
  {name: 'closeBLEConnection', wrapper: 'promisify', group: 'device'},
  {name: 'onBLEConnectionStateChange', wrapper: 'callback', group: 'device'},
  {name: 'getBLEDeviceServices', wrapper: 'promisify', group: 'device'},
  {name: 'getBLEDeviceCharacteristics', wrapper: 'promisify', group: 'device'},
  {name: 'readBLECharacteristicValue', wrapper: 'promisify', group: 'device'},
  {name: 'writeBLECharacteristicValue', wrapper: 'promisify', group: 'device'},
  {name: 'notifyBLECharacteristicValueChange', wrapper: 'promisify', group: 'device'},
  {name: 'onBLECharacteristicValueChange', wrapper: 'callback', group: 'device'},
  {name: 'showToast', wrapper: 'promisify', group: 'ui'},
  {name: 'showLoading', wrapper: 'promisify', group: 'ui'},
  {name: 'hideToast', wrapper: 'delegate', group: 'ui'},
  {name: 'hideLoading', wrapper: 'delegate', group: 'ui'},
  {name: 'showModal', wrapper: 'promisify', group: 'ui'},
  {name: 'showActionSheet', wrapper: 'promisify', group: 'ui'},
  {name: 'setNavigationBarTitle', wrapper: 'promisify', group: 'ui'},
  {name: 'showNavigationBarLoading', wrapper: 'delegate', group: 'ui'},
  {name: 'hideNavigationBarLoading', wrapper: 'delegate', group: 'ui'},
  {name: 'navigateTo', wrapper: 'promisify', group: 'ui'},
  {name: 'redirectTo', wrapper: 'promisify', group: 'ui'},
  {name: 'switchTab', wrapper: 'promisify', group: 'ui'},
  {name: 'navigateBack', wrapper: 'delegate', group: 'ui'},
  {name: 'reLaunch', wrapper: 'promisify', group: 'ui'},
  {name: 'createAnimation', wrapper: 'delegate', group: 'ui'},
  {name: 'createCanvasContext', wrapper: 'delegate', group: 'ui'},
  {name: 'createContext', wrapper: 'delegate', group: 'ui'},
  {name: 'drawCanvas', wrapper: 'delegate', group: 'ui'},
  {name: 'canvasToTempFilePath', wrapper: 'promisify', group: 'ui'},
  {name: 'stopPullDownRefresh', wrapper: 'delegate', group: 'ui'},
  {name: 'getExtConfig', wrapper: 'promisify', group: 'thirdparty'},
  {name: 'getExtConfigSync', wrapper: 'delegate', group: 'thirdparty'},
  {name: 'login', wrapper: 'promisify', group: 'auth'},
  {name: 'checkSession', wrapper: 'promisify', group: 'auth'},
  {name: 'getUserInfo', wrapper: 'promisify', group: 'auth'},
  {name: 'requestPayment', wrapper: 'promisify', group: 'payment'},
  {name: 'chooseAddress', wrapper: 'promisify', group: 'setting'},
  {name: 'addCard', wrapper: 'promisify', group: 'setting'},
  {name: 'openCard', wrapper: 'promisify', group: 'setting'},
  {name: 'openSetting', wrapper: 'promisify', group: 'setting'},
  {name: 'arrayBufferToBase64', wrapper: 'delegate', group: 'utils'},
  {name: 'base64ToArrayBuffer', wrapper: 'delegate', group: 'utils'}
]

export default function(grouped){
  if(grouped){
    return definitions.reduce((mem, {group, ...props}) => {
      mem[group] = mem[group] || []
      mem[group].push({...props})
      return mem
    }, {})
  }
  return definitions.map(({name, wrapper}) => ({name, wrapper}))
}
