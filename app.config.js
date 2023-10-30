import 'dotenv/config';

export default {
  "expo": {
    "name": "ChatApp",
    "slug": "ChatApp",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    extra: {
  apiKey: "AIzaSyDo4aS8yK1VkOMZjl2Ssd0Jp5CF599LU-s",
  authDomain: "chatapp-a0c29.firebaseapp.com",
  projectId: "chatapp-a0c29",
  storageBucket: "chatapp-a0c29.appspot.com",
  messagingSenderId: "285608557058",
  appId: "1:285608557058:web:0a2a94de36cf3c524e451b"
    }
  }
}
