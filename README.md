# Habbits

<p align="center">
  <img alt="HabbitLogo" title="HabbitLogo" src="./src/images/readme/habbitIcon.png" width="auto" height="200px">
</p>
<p align="center">
  <strong>Build Good Habbits Today.</strong>
</p>

## Introduction

It's hard to build good habits, we've all been there. Habbits is a mobile app that is designed to gently force good habbits on to you.

We like the hard way: We want you to go offline before you sleep. We need you to press a button at 6am, 5 days in a row. We ask you to write a short journal entry, 30 days in a row, every single day.

This is habbits and our mission: Help you building a habbit through gently forcing it on to you. Our current features include:

- Good Sleep module: Go offline for 7h
- Early Morning module: Press a button between 5:45am - 6:00am, 5 days in a row
- Daily Journal module: Answer 3 short questions every day for 30 days to become more thoughtful.

We hope you'll enjoy building habbits with us and succeed!

![Habbits](./src/images/readme/readme.png)

---

### For Developers:

## Prerequisite:

You need to have xCode command line tools installed, if you haven't read [this article](http://railsapps.github.io/xcode-command-line-tools.html).

Then, Please follow these lines in this order:

1. Confirm that Xcode and command line tools are installed.
   ```
   xcode-select --version
   ```

2) Install homebrew
   ```
   /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
   ```
3) Install watchman, flow, and create-react-app

   ```
   brew install watchman
   brew install flow
   npm install -g create-react-native-app
   ```

4) Install react native debugger

   ```
   brew update && brew cask install react-native-debugger
   ```

## Developement:

You basically use yarn iOS or yarn android to run the respective emulator. Please check out package.json to find more useful scrips.

    // open your app in development mode

    yarn dev

    // open ios simulater

    yarn ios
    yarn iosPlus
    yarn iosX

    // open ios simulater

    yarn android

    // on the running emmulater
    // To show the developmer menu
    // enable live reloading, or hot reloading

    Command+D

    // if you run into problems, try those commands:

    yarn clear
    yarn clearIos
    yarn clearAndroid
    yarn clearNode

## Created By:

- Tsuyoshi [GitHub](https://github.com/Akitsuyoshi)
- Michael [GitHub](https://github.com/MAkzent)
- Hiro [GitHub](https://github.com/m0m0i)
- Nour [GitHub](https://github.com/nourbalaha)
