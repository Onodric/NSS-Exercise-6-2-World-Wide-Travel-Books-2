# Wide World Travel Guides

#### Part 2: Adding a factory

## Prerequisite

This project builds off of [first Wide World Travel](./MF_WIDE_WORLD_TRAVEL.md).

## Instructions

1. Separate the database interactions from the DOM interactions, and make your guidebook data available to your controller (and other, future controllers) by moving the http call for `guides.json` from `bookCtrl.js` into `guideFactory.js`
1. Inject your factory into `bookCtrl.js` as a dependency
