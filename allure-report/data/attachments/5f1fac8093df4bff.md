# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/loginApiTests.spec.ts >> @api @login Login API - /verifyLogin" >> @regression Login with valid email and invalid password returns 404
- Location: tests/api/loginApiTests.spec.ts:95:9

# Error details

```
Error: apiRequestContext.post: Max redirect count exceeded
Call log:
  - → POST https://automationexercise.com/api/createAccount
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 348
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:14 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=z%2BZNcrHESCR2hx5%2B4Kagsgpwl0JJlMRDG4anOWUg804ryQ5hcAQ0g%2BH1NMZqecTr4yiTCoeuZqknIOOXHbuyni8I5Mg2dVz73avq%2FA7Kf7H07APd3nmh0ciH6q3%2FPUEnuRmeq%2BcX9Fg7"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b3959a787317-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:14 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=5eYq%2BshtCwRinus9i2D%2FkLoFy5%2BzcuxfsxW2RepoAogliUUJMWnKuNYO%2FWVH%2FA5xeLuOdWJq%2BheH7Wu%2BPGxMV07xMJqQ2g9EexAhltjhUd3uwgDVaJ8gieeMeeIUB%2Ff%2FR2lvl36hfWLt"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b397fcdaeac3-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:15 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=PDkoC9zSTQNQMMw%2FO5ijkrL6hohQbX1MHSGv9kCiv4bpUPaJ6ynnbMXKLdAnjAlDpw2QBdzmQdZYijqXC4W7B4pzOzLJI9VOAgp3%2BYBMU%2Fl6oFXn6uOjlEH%2Bl3VOLEKy%2Fl5R65m6fjqv"}]}
    - cf-ray: a106b39a49ae000a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:15 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=9Uz5f2VsCwtS1%2FPlNXc1TE21Uwa9hmn56zpLuGIrw1l53BNgl%2BobDaN5I8pAD4d%2B4K0oyHvBguCymQi1CyEUGvpluROISk0gEl9EiKq73aM8am%2FVxVA4V79wkid1MliyeI6AUzIW09N0"}]}
    - cf-ray: a106b39c9b81b834-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:16 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=imtawbewfVWZCRYGq2NlU3W4usBvz%2F7AzRmHbII4N8CTBUUl%2BvWoIMSAOmWlv13q%2Bkl%2BWjgWOkKmAfR0vEem5j5w3rSvQ7xmV7m8eqEH%2BHKo7KtOvGbhj1T0SUEvKyt%2Fq2NIG2OQPBZO"}]}
    - cf-ray: a106b39f0ba0771e-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:16 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=VMplf8t2AI6LVZiyXMijZAUgene1y1Vt0D3gDTwt2UxWlOWVp8%2BQCwio7ebFEkFxRth4ZmdO4%2BTIyKviBsUrE3VjqKamo%2Fcgp4Xms0vDxT1Vfv2wAsidTGPTuv%2BBeief7ZXQIeOR8l%2Bq"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b3a16e28eb68-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:16 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=unVrVDwlYi4NZshs1mS891xf56n%2F77qOVahziJpQW6GPAes4VdetAhHK3n6Y95yqplx0u38nTY%2BTH%2FFYXzAnEzJf7ComWkSZ6HjAQrggWpXkBcnx9uvqOBQOTXvRMdQySP4%2BHjbPiK5w"}]}
    - cf-ray: a106b3a3cd330bf0-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:17 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=cNUFJnwBZ%2B%2BXC4fFgspMtEBweBwmX%2BV9Jx%2FKuyoomMEQX0%2BXoKOsgH5zRbUsfMi8DglfqPB9nA4pXLGvVaBpFYpvxp1R1Foorm%2BamNZ5FwjtARUtkg2THaiwQRwERZwY%2F8i3ZEaL6gwc"}]}
    - cf-ray: a106b3a61bdcf571-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:17 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=IdxFPEqi5vb2jYzvrTbD0qqYfx7304D7WvxRryn0uaUIxlYNDqFfSe6obibMOso40jCqFFApSVgyoIloxH1it0kjiAYzcwcMs9%2BH80oL0hrlpMGvA0XVmmrdHhUBAhSdDjkJ8ynJLJDS"}]}
    - cf-ray: a106b3a87fbc634a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:17 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Q9SqymGFFwzqvRJJW7YJR%2FJGU2%2BfbfgUOeDmEGLDF5PQgDXOLq5lOyl48LU1hMACCTXVyTYC1ak9HLDOen3xRHFFrzDkgX7CjLLzZguDtHMKw92ri9U3K8ZXnQoK6%2FD10c6In09GAGxk"}]}
    - cf-ray: a106b3aadd65eae2-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:18 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=bnW9gjkiU2bt86Gj%2B2RnC%2BE4y5b7B6VMdbu6dFBobMaiJ3PlzkYf%2BGT0OAbkWKW8c8%2Bw%2Bn%2Ff7ZV4cUdz64szwrojl2s7L%2FVauEUA0AI6GDrmggUP6CRK1m6wP1zIHus%2FOSyySCHj4VtL"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b3ad2c474354-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:18 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=OULfdQo0rKz98zLjODMUbcHuDhIPG9zjLWkGnITh4XRAbL3Vbk%2F7n3O%2B2PA%2BF9TnLYmEn4u4n9XPxtcxsdBbqLBCI%2BB8IqE9zN3DNOBXUo8erAQhF1z5n%2BCVIZ7DQRUtE97wu%2BPNDJdu"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b3af892e253a-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=wl6FbcS2ynsYhwxGCuz4ilXBEm13Lg0UGucpSeuVAGYb6svAcTFIwSBJsmHaZ95f3apiAguXg70qCJhu5hbsje2BkHUJUWb%2FWg4Q77qoeWQ%2FyZb6pdxBlza4%2BrrY%2FflEMOwjG2XBRs%2F8"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b3b1eae6eae7-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=rspt4BQfikaeSp%2FjPKhvJ7jzRy4EnRDRq6u1pnsXlrHA%2BEZBf0sWjKyGBZ3WGojXa09NoCXW%2BIYuRxZV1NZTYyPMUfKmtdv4bohKzErPYEEzisvm4CiLwTF5NcNGyHKecIvHzRnZg9dD"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b3b44c429592-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=LBfVfFEHBz4HbhjhG2utd7LkbIJR1KF4m2eFl4Id3U2EHvOWxA%2FTgDen4KNOePhax60DcweUSJI1sX9BICcNIrxORTjORlnynCVLSlNcd0UqJin9gQWUyF2ji7W9cBV2kvot61rHHQUf"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b3b69d317073-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ID4yFhD29n5aTIlh3OUE7xkqgvc5wX8kmrgIqYIAjNDUOsiRH3OVW7rEz9p7%2BWHina6ndA0Jn0iPYGQoGPSI1BvBix3ilHyuILGmWWEmXE1kbQJ%2Ffuzkq99%2ByboV4FX3KnNhFFn9wOiz"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b3b8ffe17e6b-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=qIJTgT4M0wll7%2Bu1eWZfK1%2B3o4DxHMFz4MDGffzOrhUWeVlPhgb2YWYWu5Gg%2FJuNn00R26%2BdQfAB5L06q5n1zAxKQssC7zknKUaTcMl13VKwAwdpz6MUSVGBIcmxbhPr9qhNNCtQ96Tr"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b3bb49162d03-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=OMXmYkqoblWXCjMUVV5VB5KvggwJmeX1DSDa65SlHqtJbkSQFhMXh2ikHXJrMtnTGDODP3x%2FriZormHQNLsJGYJiHaubqh0xqmSv%2BPMtdIF%2BvT1DFFooUPqN97asrG8%2BUc1Em%2FAx6b7y"}]}
    - cf-ray: a106b3bd9a8c7317-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=BH%2FMyY%2F9qBR5DMPvGW9AE6LiOhIPrWZkWiVibnq3Psf4FNMdfdSSYOJPqeig0Vyqyq1WcS6uceGNTNTS9jfoFv0hqfs7l0ycaKN4MMcKwpHOTsdO4513CGZmuylyWH3vDu39E4ux2rcW"}]}
    - cf-ray: a106b3c0dc7383b9-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=HkWosCD2rq7vMOQuV0U7HsYPy6CRfFgMI1alTH2yhsaK2MIO60IKf4H%2FYV6O83alQ%2BXQjTkN4F%2B5H3duL046bTq5tX%2FuUDkkHb%2BZx%2FzSOhWwcuNDM43udPmLw6DPz9XCDA%2FmKt2Dy9r5"}]}
    - cf-ray: a106b3c32a18b266-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=4NBpbBMCvnUbl4Wsin5i4dLnDupPWaiERDLHzenxt6fIiXDvNM%2B46SywCckLwWXJatt0Vnwuebw0VsCsXz9L51aZTm3oSeZFXsQCCt1Ta%2Bu2TvxpgFb2c2Eua%2FZN2ICij6%2FsEV2P77tl"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b3c58855b0fc-ORD
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