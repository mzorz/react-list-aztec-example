## RN RecyclerView list and Aztec integration demo project

## Android: Run the example app

1. First of all make sure you have `react` and `react-native` installed separately in the dependency projects as a result of running the example apps in  `react-native-aztec` and `react-native-recyclerview-list`.

If you get errors, please first run `rm -rf node_modules/` on both the root (`\`) and `/example` folders of each of these 2 projects, i.e.:

```
$ cd react-native-aztec
$ rm -rf node_modules/
$ cd example
$ rm -rf node_modules/

$ cd ../../react-native-recyclerview-list/
$ rm -rf node_modules/
$ cd example
$ rm -rf node_modules/

```


2. Make sure to have an emulator running or an Android device connected, and then:

```
$ yarn clean:install
$ yarn start --reset-cache

$ yarn android #DO THIS ON ANOTHER SHELL WINDOW
```

This will build the Android library (via `gradle`) and example app, then launch the main example activity on your connected device and run the Metro bundler at the same time.

