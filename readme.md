# Wee Weather Wear app

* To install: `npm i`
* To develop: `npm start` then open [localhost:1234](http://localhost:1234)
* To test: `npm test`
* To view: [ijmccallum.github.io/weatherApp](https://ijmccallum.github.io/weatherApp/)

Some notes on the tech:

* API calls are not made from the client, given they have a recommended limit of 1 call every 10 mins and the data is one point every 3 hours my reaction is to schedule some kind of CI server to run every 3 hours to grab the data, build the app, and commit to github (handy for a static site hosted on gh-pages, and free as it's open source!)
* Dev & Build compilation is run with [parceljs](https://parceljs.org/) (a first for me, took this opportunity to try it out, really enjoyed it! Will use again.)
* JS is just vanilla, it's a small demo app so I thought I'd keep it light - if you wish to see it in react I'd be happy to port it over.
* Testing is run with [Jest](https://facebook.github.io/jest/), this could do with more test cases.
* Styles are using [Tachyons](http://tachyons.io), if this style of styling is new I'd recommend checking out [this talk on youtube](https://www.youtube.com/watch?v=y2j6r5V67bY) which incidently introduces [another tool that looks amazing](https://amzn.github.io/style-dictionary/) which I'll be hopefully be looking into over the next few days.

Problems - let me know! If it helps I'm running node 9.6.1 & npm 5.8.0

I think that's it! I rather enjoyed building this, hope you enjoy looking it over!
