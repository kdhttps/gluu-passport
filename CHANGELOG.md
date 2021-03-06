# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [4.5.0](https://github.com/GluuFederation/gluu-passport/compare/v4.4.0...v4.5.0) (2021-03-30)


### Features

* **config:** ensure sameSite exists and value is lax in default ([aeff791](https://github.com/GluuFederation/gluu-passport/commit/aeff791b6d68add2e33da13d204592c28f903cc5))
* **config:** ensure sameSite exists in production ([3ee1504](https://github.com/GluuFederation/gluu-passport/commit/3ee1504c2fd4aa1079ea5de99440d0576e8e38e9))
* **config:** ensure secure exists in production ([e3d41c3](https://github.com/GluuFederation/gluu-passport/commit/e3d41c37d0e6ae4da26e5aab303c2a2b6040b647))
* **config:** ensure secure is true in production ([5747cba](https://github.com/GluuFederation/gluu-passport/commit/5747cbaf9497d99363cda519705e82b5281d67dd))
* **config:** ensure secure value is false in default ([9709ab9](https://github.com/GluuFederation/gluu-passport/commit/9709ab9a7c398bea4ae6e8ce21aa04cbc3a65121))
* **session** make separate file for session config ([5092baf](https://github.com/GluuFederation/gluu-passport/commit/5092bafe75a6240f095c1aff5d84f4521383a084)), closes [#242](https://github.com/GluuFederation/gluu-passport/issues/242)


### Bug Fixes

* **config.test.js:** update cookie config keys title ([72646a5](https://github.com/GluuFederation/gluu-passport/commit/72646a5600a68e3229f6faba60f126e776f6b597)), closes [#242](https://github.com/GluuFederation/gluu-passport/issues/242)
* **session:** ensure cookies settings are correct ([7c24b83](https://github.com/GluuFederation/gluu-passport/commit/7c24b835c0580aa3a09c16486edb9045d88eca36))
* package.json & package-lock.json to reduce vulnerabilities ([218b7ce](https://github.com/GluuFederation/gluu-passport/commit/218b7cef7f8b2cf465d0b059246fabc3da4458e4))

## [4.4.0](https://github.com/GluuFederation/gluu-passport/compare/v4.3.6...v4.4.0) (2021-02-22)


### Features

* **app-factory.js:** added rate-limiting facility ([51b6ba3](https://github.com/GluuFederation/gluu-passport/commit/51b6ba3c5da71a955ecef232d4e6c2cfa8c3c2e5)), closes [#139](https://github.com/GluuFederation/gluu-passport/issues/139)


### Bug Fixes

* **app:** add csrf middleware ([ef71ec4](https://github.com/GluuFederation/gluu-passport/commit/ef71ec434c54a5ce32a3aea87a83558e13bbdfb0)), closes [#140](https://github.com/GluuFederation/gluu-passport/issues/140)
* **app:** generate random secret for session middleware ([c6202ad](https://github.com/GluuFederation/gluu-passport/commit/c6202ad464f2f1b311c965d28b5db49b5078ac49)), closes [#144](https://github.com/GluuFederation/gluu-passport/issues/144)
* **app-factory.js:** add missing parenthesis to randomSecret() ([2ff8a29](https://github.com/GluuFederation/gluu-passport/commit/2ff8a29f35382eedb1560d324f8306fed8effd27))
* **app-factory.js:** fix location undefine and req.flash function problem ([6d10f9b](https://github.com/GluuFederation/gluu-passport/commit/6d10f9ba8be788ef4265c550b82996bfd0872000)), closes [#170](https://github.com/GluuFederation/gluu-passport/issues/170) [#173](https://github.com/GluuFederation/gluu-passport/issues/173)
* **app-factory.js:** remove undeeded csurf middleware ([2b2152f](https://github.com/GluuFederation/gluu-passport/commit/2b2152f6483121dbb46b4dbda022e05de4aeb4e7)), closes [#169](https://github.com/GluuFederation/gluu-passport/issues/169)
* **husky:** add missing .huskyrc.json ([990ce91](https://github.com/GluuFederation/gluu-passport/commit/990ce911bb442c4c9fdfdc5aaec4fc42e1851a45))
* **logging.js:** add propper code for assigning empty string to msg ([9846f23](https://github.com/GluuFederation/gluu-passport/commit/9846f2314592463ceeae23a8b6bf45dc647df6bd))
* **routes.js:** remove metadata input name on outgoing request ([1738306](https://github.com/GluuFederation/gluu-passport/commit/1738306ec44daf5e3e5a0b31852a68149f63071e)), closes [#137](https://github.com/GluuFederation/gluu-passport/issues/137)
* **routes.js:** remove provider name from error message to avoid cross script ([577daaa](https://github.com/GluuFederation/gluu-passport/commit/577daaacefbb10075fbdd2b5753c7e76f90b418c)), closes [#137](https://github.com/GluuFederation/gluu-passport/issues/137)
* **routes.js:** remove received input from error output msg ([4c7f204](https://github.com/GluuFederation/gluu-passport/commit/4c7f2044afbb7a61ada9b17ded9baad80c24ccbe)), closes [#137](https://github.com/GluuFederation/gluu-passport/issues/137)
* **uma.js:** fixed form data send problem ([478b452](https://github.com/GluuFederation/gluu-passport/commit/478b4528ed793f22b87371b985d7a9f448269101)), closes [#205](https://github.com/GluuFederation/gluu-passport/issues/205)

### [4.3.8](https://github.com/GluuFederation/gluu-passport/compare/v4.3.7...v4.3.8) (2020-12-10)


### Bug Fixes

* **app-factory.js:** fix location undefine and req.flash function problem ([6d10f9b](https://github.com/GluuFederation/gluu-passport/commit/6d10f9ba8be788ef4265c550b82996bfd0872000)), closes [#170](https://github.com/GluuFederation/gluu-passport/issues/170) [#173](https://github.com/GluuFederation/gluu-passport/issues/173)
* **app-factory.js:** remove undeeded csurf middleware ([2b2152f](https://github.com/GluuFederation/gluu-passport/commit/2b2152f6483121dbb46b4dbda022e05de4aeb4e7)), closes [#169](https://github.com/GluuFederation/gluu-passport/issues/169)

### [4.3.7](https://github.com/GluuFederation/gluu-passport/compare/v4.3.6...v4.3.7) (2020-11-25)


### Bug Fixes

* **app:** add csrf middleware ([ef71ec4](https://github.com/GluuFederation/gluu-passport/commit/ef71ec434c54a5ce32a3aea87a83558e13bbdfb0)), closes [#140](https://github.com/GluuFederation/gluu-passport/issues/140)
* **app:** generate random secret for session middleware ([c6202ad](https://github.com/GluuFederation/gluu-passport/commit/c6202ad464f2f1b311c965d28b5db49b5078ac49)), closes [#144](https://github.com/GluuFederation/gluu-passport/issues/144)
* **app-factory.js:** add missing parenthesis to randomSecret() ([2ff8a29](https://github.com/GluuFederation/gluu-passport/commit/2ff8a29f35382eedb1560d324f8306fed8effd27))
* **husky:** add missing .huskyrc.json ([990ce91](https://github.com/GluuFederation/gluu-passport/commit/990ce911bb442c4c9fdfdc5aaec4fc42e1851a45))
* **logging.js:** add propper code for assigning empty string to msg ([9846f23](https://github.com/GluuFederation/gluu-passport/commit/9846f2314592463ceeae23a8b6bf45dc647df6bd))
* **routes.js:** remove metadata input name on outgoing request ([1738306](https://github.com/GluuFederation/gluu-passport/commit/1738306ec44daf5e3e5a0b31852a68149f63071e)), closes [#137](https://github.com/GluuFederation/gluu-passport/issues/137)
* **routes.js:** remove provider name from error message to avoid cross script ([577daaa](https://github.com/GluuFederation/gluu-passport/commit/577daaacefbb10075fbdd2b5753c7e76f90b418c)), closes [#137](https://github.com/GluuFederation/gluu-passport/issues/137)
* **routes.js:** remove received input from error output msg ([4c7f204](https://github.com/GluuFederation/gluu-passport/commit/4c7f2044afbb7a61ada9b17ded9baad80c24ccbe)), closes [#137](https://github.com/GluuFederation/gluu-passport/issues/137)

### [4.3.6](https://github.com/GluuFederation/gluu-passport/compare/v4.3.5...v4.3.6) (2020-10-31)

### Bug Fixes

* **routes.js:** add extended option to urlencode function call ([74ae36c](https://github.com/GluuFederation/gluu-passport/commit/74ae36ca692423130bab5adccc7222c7fd8dc2b1)), closes [#126](https://github.com/GluuFederation/gluu-passport/issues/126)
* solved the provider update strategy problem [#119](https://github.com/GluuFederation/gluu-passport/issues/119) ([3c4f725](https://github.com/GluuFederation/gluu-passport/commit/3c4f725003d2bfec1f8677b51b19b6ff01b512a5))
