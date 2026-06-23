# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/loginApiTests.spec.ts >> @api @login Login API - /verifyLogin" >> @regression Login with invalid email and valid password returns 404
- Location: tests/api/loginApiTests.spec.ts:78:9

# Error details

```
Error: apiRequestContext.post: Max redirect count exceeded
Call log:
  - → POST https://automationexercise.com/api/createAccount
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 353
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:19 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=3ES4ZSm31rC8WFPHdIVaw3aeiBlWY%2Flyhp2UCPVEwimAlGhdH1%2BNnqbv0bHL2Il%2FqvQpavQuhMuLOBAYTNg1wrGzlfhf3WSkFk1KhhW4%2BkP8hX9uiBamPmJRzsk7JhOq3ALi9YQpZjy7"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b3b1cad250d9-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:19 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=h77jyMxhtux20PnHdgN%2Bcj%2BGk9g3ottldsW7ATJdjos1YJ3dTtLwW%2Fv5mkvU2l5fJ2RJoN9Yr7tTak7urOEVwG22dsqNb%2BTMdXviQEq%2BDNRvBCk9dP%2F0EblwfS1Yvp2yPObSQdiniIEk"}]}
    - cf-ray: a106b3b42b79115d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:19 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=LGASp3m03KHWOx7fB3WXxXF5IbsoFN1cKJSEK4yAU64geej5QRT7tDfq23oU5WH%2F7P0EwEFL31qIXEl%2Bhhub6s%2Bg8iWRIGNvyFvq1EwDyrZIMr2Ak3k1svhQpOIqxfzlmF3Ze2nRXylF"}]}
    - cf-ray: a106b3b68d8e3443-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:20 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=1DG5cSMH0GsN%2B2PEk4MKRFleFjej4jHgMlqIerci6Ba%2FQZJO7GNaR3tSwg0IXqDlSvZHfgTab%2BBBICV5WZgV%2B33k63eSm%2FUOiZjf3XwROzjC1KCy43uzl51PPFFNsM%2FWXHqmPWXur9SH"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b3b90e0f72e5-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:20 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=AOT0Y0%2B1zEs5Ly2pqW10NePPq1BOYbLhRqrFo311KFZB2ihNhzB7BMzRT180nB57jOCPljiW6MTWPYRV%2FaVHF8mYxFIHGztOfra1Tb76TLVbR1nY3%2B6ltiDOmnZtYcQBoxen9R5%2BYACo"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b3bb6c9e93b1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:20 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=7dbv3bGL6FM3Ve4wwgtqazsekbKhzwqUiVBABgRKJE0%2Bs1E5Bsvtvdre1lOwz4%2FakNmWDWx28aU4xdOgGHI2Sbu1ZNnb2b%2BolCPMtMKhXLMKfV%2B00H6A324%2FjevGnpyrCevcmcJfOBch"}]}
    - cf-ray: a106b3bdbdd222fe-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:21 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=aF6ndUyDtC7ZC3GkE2zuQ%2F%2FsIYGyOrmXSK6LzjxAQ%2BgpLfdCKNQ4SKI2VbQ9Piyx5jPJiPwsd0HcuiGDkchiarsI%2FPuCAT48WQQ0nklk6FAU0o28Rcu0u7s252XzSIH0MALlu7krinka"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b3c00d0795c1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:21 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=jHXy2GLgl9UpQfe9asynruhAhpTqTZ0b5xPy91UjPdI0vgjInzJZpxALDBs6f7Gtd9m5X3mad1i84pR1uthwIB9agRF5SU%2FfTStfxIiIPQDiBhGBEEdBKUuEC9v6v%2B5D8s1vB4hMeheQ"}]}
    - cf-ray: a106b3c26927771e-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:22 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=nJPVWuDKzEzijIAjgsApCYl%2BSH%2BHuFoy0pNwLBxlMDAIDJzmJllS4BpivxEn4GAK9%2BVEAKVfc86aIkMfHfVxAOthsVUbOjLyRHB43uKb0TAG9NjIY4D1H%2F2NJchtmwV2UgE75VdzVp8G"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b3c4bdd8eac3-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:22 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=GFcwjiraXr3GicZcYFcSoYdHvaA8bU4kQu2wYH74q1uobT2SEQ6Qkcd%2BAwNzSK8Zy51ZlCUGNRbFeDH6VI%2BgJ8510nQOqKBw2mBC9Q3vdzVKd1c7a7V0CQlB%2Bg7nrrw6hOxOExssvbwf"}]}
    - cf-ray: a106b3c71c5eeaec-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:22 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=BQJE2ZOIVCGK8Bl1nvVzvBARf%2BK%2F70%2BGNRw7bQTP7%2FDUZtu2IR%2B4ZQrggckB7A0UhKQdoHAu8s8%2F19qp4jAcwmXeU58b17YMThshXzIJeuGGHfP0Vz1ie6ODyBxcFip9EyBefp6dVUGj"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b3c96b97eb68-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:23 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=wF15MFUWW9yuj%2F3uQ70Z2IzQMciOaMzORdzSRdTxbP%2FSAdaIKlalZRru8cziBFHiFUORFk8O8%2FEjfRqhj6aYH2EfeHe7qvBIry4jbOGjmHSX%2FCiu%2FYJomUOKm68t%2FwV45%2BOGUpuqnnwp"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b3cbbd9bd7f1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:23 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=9320xhmpwLXL3AxeUvkI29yKmf7L0Hn0ZLqRB1gY3b0H9Y%2FeSKIJwazEk3I4ooo8iheI3D0rHapd%2FoN00OXI7jhLlI3gsTTnFnzlRLsNget7BuOdw%2FEsmp5RJXB1fV7t%2FM%2FOeIedXs4n"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b3ce1b7693b1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:23 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=KUNjnfraWNUPZD8tmi5DMdPYgl6acFZ0phAIGeQTLx15HWn6CQmvc57fvQtSgsbQuRnZy9eOd8dUCiXJpKeBNJS0ow3vHwcIAwDC3GbOi8TC%2BAfQPV3xla7iqWY6oycz8lL32cn2JIn8"}]}
    - cf-ray: a106b3d07934e168-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:24 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Z61xNsJjQ5HW%2B9pYEIosYxTrbJasmjnuUaGqPYXciYAJhYWYrgZUGJU06DmCH9VanIOjnAhOxpQTWSQFPNexe9VaLELOQnZsVeI%2Bdptny9DJHe3ATUElXGoLvg9tTBvx%2BBoc3PLh1lNu"}]}
    - cf-ray: a106b3d2dbb8f571-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:24 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Isq2v%2Bu0GIA8uZFpgPOlAUxQWO6An0CsL5UPRKbgJtzOEg8533QQMj8pwFGFRtCzMfnSKioWIU%2B7vCEgTqxZxv9S4owXHCHtzvkarqRpaNS0%2BfwQjskeM3Bhvwn1tWM2X0gPkwmOaNK1"}]}
    - cf-ray: a106b3d53a444354-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:25 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=sVTFPMezBXy7aEx0DlYoW8eTP4aIPA7mYXaZB24LlpZOSD79AF8G7Abm4lZvQw%2B3UyXDIWlXEVkDAVZDGeOvXaHJPaBFdF8LCGLp0Ua6AJTv6Fkfz3S4c1ZMC7etzSVjx6sQfBX4aMis"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b3d789ee7815-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:25 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=i%2BuV4CcO2zN%2FZc%2Fqm1GDtHVooTvVcBvIBKYx0ABdg%2BlWmE0XM7olhde05D2m%2BqPTWBbf1ZLGSIFdr4fXcnuOJgLLZUMgjrD2a9KwLPMahlrcSM0VLst54PFoyyg499lJhtFcVOWITdwn"}]}
    - cf-ray: a106b3d9ea9db7cd-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:25 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=O%2BDyHnEa93JhHHKA0XTAQKNd2umIAtx2mIm%2BKgZKjM08yiBXB2jFBloVGSccegoOO8Chu0bN9GJ7w%2BP1CoNleQe2oHpWbFzKNKD55VgWPSaJA6XUQGOaujTxYAJl4rmPZKKcx21%2Ft6OK"}]}
    - cf-ray: a106b3dc4bfee23d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:26 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=TsvBhaVCI8C6ueNDjDrhNcW2WnEUgxd%2FvnyuaK4J86R3qrDYzzXoZVFuAnkL8O7zyEEDO6%2FJjBLPjPmmUFpZV2WUeGRmj%2B%2Fm8fG3TyBsMogILYS68BGvvCrdzp5MGYsoN%2BdULzrSOYZw"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b3de9cbc3443-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:26 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=XeJ17bbsTk42b%2FFhg3wj7daeUxzcNbWxBGDQOjPVsXXOsbp7NIjnT7F9yL9QTJS94k6cIem54ghzxFlunctC9k2SRWYVERoMnKhhdxK%2BDhkL52l0PIWcOXw0yB2sanofW9jAlgL9yoS2"}]}
    - cf-ray: a106b3e0f98322fe-ORD
    - alt-svc: h3=":443"; ma=86400

```

```
TypeError: Cannot read properties of undefined (reading 'email')
```

# Test source

```ts
  1   | import { test, expect } from "@playwright/test";
  2   | import { config } from "../../utils/config";
  3   | import { ApiUrls } from "../../utils/api/apiUrls";
  4   | import { ApiUserModel } from "../../models/apiUserModel";
  5   | import { UserApiHelper } from "./helpers/userApiHelper";
  6   | 
  7   | test.describe('@api @login Login API - /verifyLogin"', () => {
  8   |     const verifyLoginApiEndpoint = config.api.baseUrl + ApiUrls.verifyLogin;
  9   |     let userApiHelper: UserApiHelper;
  10  |     let testUser: ApiUserModel;
  11  | 
  12  |     test.beforeEach(async ({ request }) => {
  13  |         test.info().annotations.push({ type: "tag", description: "api" });
  14  |         test.info().annotations.push({ type: "feature", description: "login" });
  15  |         // Create user via API to ensure we have a valid user for login tests
  16  |         userApiHelper = new UserApiHelper(request);
  17  |         testUser = await userApiHelper.createUser();
  18  |     });
  19  | 
  20  |     test.afterEach(async () => {
  21  |         // Clean up - delete the user created for the test
> 22  |         await userApiHelper.deleteUser(testUser.email, testUser.password);
      |                                                 ^ TypeError: Cannot read properties of undefined (reading 'email')
  23  |     });
  24  | 
  25  |     test('@smoke User can login successfully with valid credentials', async ({ request }) => {
  26  |         test.info().annotations.push({ type: "tag", description: "smoke" });
  27  | 
  28  |         const response = await request.post(verifyLoginApiEndpoint, {
  29  |             form: {
  30  |                 email: testUser.email,
  31  |                 password: testUser.password
  32  |             }
  33  |         });
  34  | 
  35  |         expect(response.status()).toBe(200);
  36  | 
  37  |         const body = await response.json();
  38  |         expect(body.responseCode).toBe(200);
  39  |         expect(body.message).toContain("User exists");
  40  |     });
  41  | 
  42  |     test("@regression Login with missing email returns 400", async ({ request }) => {
  43  |         test.info().annotations.push({ type: "tag", description: "regression" });
  44  | 
  45  |         const response = await request.post(verifyLoginApiEndpoint, {
  46  |             form: {
  47  |                 password: testUser.password
  48  |             }
  49  |         });
  50  | 
  51  |         expect(response.status()).toBe(200);
  52  | 
  53  |         const body = await response.json();
  54  |         expect(body.responseCode).toBe(400);
  55  |         expect(body.message).toBe(
  56  |             "Bad request, email or password parameter is missing in POST request."
  57  |         );
  58  |     });
  59  | 
  60  |     test("@regression Login with missing password returns 400", async ({ request }) => {
  61  |         test.info().annotations.push({ type: "tag", description: "regression" });
  62  |         
  63  |         const response = await request.post(verifyLoginApiEndpoint, {
  64  |             form: {
  65  |                 email: testUser.email
  66  |             }
  67  |         });
  68  | 
  69  |         expect(response.status()).toBe(200);
  70  | 
  71  |         const body = await response.json();
  72  |         expect(body.responseCode).toBe(400);
  73  |         expect(body.message).toBe(
  74  |             "Bad request, email or password parameter is missing in POST request."
  75  |         );
  76  |     });
  77  | 
  78  |     test("@regression Login with invalid email and valid password returns 404", async ({ request }) => {
  79  |         test.info().annotations.push({ type: "tag", description: "regression" });
  80  | 
  81  |         const response = await request.post(verifyLoginApiEndpoint, {
  82  |             form: {
  83  |                 email: "invalid@email.com",
  84  |                 password: testUser.password
  85  |             }
  86  |         });
  87  | 
  88  |         expect(response.status()).toBe(200);
  89  | 
  90  |         const body = await response.json();
  91  |         expect(body.responseCode).toBe(404);
  92  |         expect(body.message).toBe("User not found!");
  93  |     });
  94  | 
  95  |     test("@regression Login with valid email and invalid password returns 404", async ({ request }) => {
  96  |         test.info().annotations.push({ type: "tag", description: "regression" });
  97  | 
  98  |         const response = await request.post(verifyLoginApiEndpoint, {
  99  |             form: {
  100 |                 email: testUser.email,
  101 |                 password: "wrongpassword"
  102 |             }
  103 |         });
  104 | 
  105 |         expect(response.status()).toBe(200);
  106 | 
  107 |         const body = await response.json();
  108 |         expect(body.responseCode).toBe(404);
  109 |         expect(body.message).toBe("User not found!");
  110 |     });
  111 | 
  112 |     test("@regression Login with both invalid email and password returns 404", async ({ request }) => {
  113 |         test.info().annotations.push({ type: "tag", description: "regression" });
  114 | 
  115 |         const response = await request.post(verifyLoginApiEndpoint, {
  116 |             form: {
  117 |                 email: "invalidemail@test.com",
  118 |                 password: "wrongpassword"
  119 |             }
  120 |         });
  121 | 
  122 |         expect(response.status()).toBe(200);
```