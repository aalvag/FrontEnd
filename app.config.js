import "dotenv/config";

export default {
  expo: {
    name: "find-me",
    slug: "find-me",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.aalvag.find-me",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
      package: "com.aalvag.findme",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      androidClientId: process.env.ANDROID_CLIENT_ID,
      iosClientId: process.env.IOS_CLIENT_ID,
      expoClientId: process.env.EXPO_CLIENT_ID,
      googleApiUrl: process.env.GOOGLE_API_URL,
    },
    scheme: "find-me",
  },
};
