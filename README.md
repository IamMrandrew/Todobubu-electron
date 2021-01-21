<img src="https://user-images.githubusercontent.com/62586450/105201950-685e1280-5b7c-11eb-8676-f77b2f5dc3e7.png" width="128" height="128">

# Todobubu Desktop

Todobubu Desktop, is built and wrap with [electron](https://github.com/electron/electron). Check out the main web application [Todobubu](https://github.com/IamMrandrew/Todobubu).


## Getting Started

If you are interested in this project, you can run:

### `yarn electron-dev`

Runs the app in the development mode.\

### `yarn electron-pack`

Builds and pack the app for distribution to the `dist` folder.\

It will pack the mac version which contain the dmg. Pay attention that the dmg is unsigned yet and may not be able to distribute for other users due to the security of mac

### `yarn electron-pack-w`

Builds and pack the app for distribution to the `dist` folder.\
It will pack the windows version which contain the exe. It works properly on windows with some tests.

## Issues
- Google authentication is not working

## Contributing
There are some issue with this project. Pull requests are welcome for bugfixing or features.

### Menu Bar on Windows
I struggled on removing the menu bar under the title bar on windows. Tried few config or function inside main.js but it is not working as expected.

### Authentication
Using electron to wrap desktop application, Google does not allow to authenticate on this kind of "browser". My current workaround is giving up the Google authentication and use GitHub account instead. 

However, after packing for distribution, it refuse all authentication as the application is not hosted on "server"?, or not within a browser. For now, I am using the site that I host in netlify as the "source" of this applciation. In order to work for the cloud-based account.
