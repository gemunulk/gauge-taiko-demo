# gauge-taiko-demo
This is an example project, illustrating how to automate the Chrome Browser using Taiko and Gauge test automation framework in JavaScript. Originally cloned from [Gauge Examples](https://github.com/getgauge-examples/js-taiko) and then modifed for the AUT [Demoaut](http://newtours.demoaut.com/)

# What’s Gauge?
Gauge is a free and open source test runner for writing readable and reusable acceptance tests. It is easy to install and well integrated with Taiko.

# What’s Taiko?
Taiko is a free and open source browser automation tool built by the team behind [Gauge](https://gauge.org/) from [ThoughtWorks](https://www.thoughtworks.com/). Taiko is a node library with a clear and concise API to automate the chrome browser. Tests written in Taiko are highly readable and maintainable. 

With Taiko it’s easy to

* Get Started
* Record/Write/Run tests

Taiko’s smart selectors make tests reliable by adapting to changes in the structure of your web application. With Taiko there’s no need for id/css/xpath selectors or adding explicit waits (for XHR requests) in test scripts.

## Features
Taiko is built ground up to test modern web applications. Here’s a list of a few unique features that sets it apart from other browser automation tools. 

* Easy Installation
* Interactive Recorder
* Smart Selectors
* Handle XHR and dynamic content
* Request/Response stubbing and mocking

# Getting Started

## Gauge Installation
* [Install Gauge](https://docs.gauge.org/latest/installation.html)

## Taiko Installation

Taiko works on Windows, MacOS and Linux. You only need to have [Node.js](https://nodejs.org/en/) installed in your system to start writing Taiko scripts in JavaScript. After you’ve installed Node.js open a terminal application (or powershell in the case of Windows) and install Taiko using [npm](https://www.npmjs.com/) with the command

    $ npm install -g taiko

This installs Taiko and the latest version of Chromium browser.


## Seting up the project
    $ cd gauge-taiko-demo
    $ npm install
    $ npm test

## Documentation
* [Gauge](https://docs.gauge.org)
* [API](http://taiko.gauge.org)

## Inspired by
* [Helium](https://heliumhq.com/)
* [Puppeteer](https://github.com/GoogleChrome/puppeteer)
