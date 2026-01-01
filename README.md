# ReadArcana Mobile

Native iOS and Android app for ReadArcana, built with Capacitor.

## Overview

This is a hybrid app that loads the web application from `https://www.readarcana.com`. It provides native capabilities like haptic feedback, share functionality, and proper status bar/splash screen handling.

## Requirements

- Node.js 18+
- For iOS: macOS with Xcode 15+
- For Android: Android Studio with SDK 24+

## Setup

```bash
# Install dependencies
npm install

# Sync native projects
npx cap sync
```

## Development

### iOS

```bash
# Open in Xcode
npx cap open ios

# Or run directly
npx cap run ios
```

### Android

```bash
# Open in Android Studio
npx cap open android

# Or run directly
npx cap run android
```

## Building for Production

### iOS

1. Open in Xcode: `npx cap open ios`
2. Select your team in Signing & Capabilities
3. Archive and submit to App Store Connect

### Android

1. Open in Android Studio: `npx cap open android`
2. Build > Generate Signed Bundle/APK
3. Upload to Google Play Console

## Configuration

The app is configured in `capacitor.config.ts`:

- **Server URL**: `https://www.readarcana.com`
- **App ID**: `com.readarcana.app`
- **Allowed Navigation**: Stripe domains for payments

## Plugins

- `@capacitor/haptics` - Native haptic feedback
- `@capacitor/share` - Native share sheet
- `@capacitor/splash-screen` - Launch screen
- `@capacitor/status-bar` - Status bar customization
