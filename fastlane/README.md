fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew cask install fastlane`

# Available Actions
## iOS
### ios beta
```
fastlane ios beta
```
Push a new beta build to TestFlight
### ios install_signing
```
fastlane ios install_signing
```
Install all certificates and provisioning profiles
### ios generate_app_icons
```
fastlane ios generate_app_icons
```
Generate AppIcons for ios
### ios update_build_number
```
fastlane ios update_build_number
```
Update and tag the version/build

----

## Android
### android prepare_build
```
fastlane android prepare_build
```
Prepare dependencies for building app
### android build
```
fastlane android build
```
Build app
### android beta
```
fastlane android beta
```
Submit a new Beta Build to Google Play
### android deploy
```
fastlane android deploy
```
Deploy a new version to Google Play
### android encrypt_key
```
fastlane android encrypt_key
```
Encrypt sensitive key
### android decrypt_key
```
fastlane android decrypt_key
```
Decrypt sensitive key

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
