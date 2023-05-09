# Solid Code VSCode Extension starter using Solid JS in webviews

## Features in this project

The webviews folder is built with vite and compiles the solid js code into the out/webviews folder

webpack handles the rest of the extension build and excludes the webviews folder

You can view the webview via triggering the Hello World command.

## Requirements

I've experimented with using yarn 2 in this repo.
Seems faster to me and a good option. It can be installed alongside yarn 1. Make sure your node version is > 16.17.1 and you can enable corepack in node via `corepack enable` as it is disabled by default. This allows you then to install yarn 2.


## Known Issues

I had issues working with image files inside the Solid Js components. Seems like this must be done in the extension code via setting up a webViewUri and then inserting it directly into the html. I didn't find a good way of getting around this so importing images directly in the solid components doesn't work.

## Release Notes

initial release

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
