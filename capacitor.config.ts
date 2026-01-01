import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.readarcana.app',
  appName: 'ReadArcana',
  webDir: 'www',

  // Hybrid mode: load remote URL instead of local files
  server: {
    url: 'https://www.readarcana.com',
    cleartext: false,
    // Allow navigation to Stripe for payments
    allowNavigation: [
      'stripe.com',
      '*.stripe.com',
      'checkout.stripe.com',
      'js.stripe.com',
    ],
  },

  // Background color matching the app theme
  backgroundColor: '#0f0a19',

  // iOS specific configuration
  ios: {
    backgroundColor: '#0f0a19',
    contentInset: 'automatic',
    preferredContentMode: 'mobile',
    scheme: 'ReadArcana',
  },

  // Android specific configuration
  android: {
    backgroundColor: '#0f0a19',
    allowMixedContent: false,
    captureInput: true,
    webContentsDebuggingEnabled: false,
  },

  // Plugins configuration
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: '#0f0a19',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#0f0a19',
    },
  },
};

export default config;
