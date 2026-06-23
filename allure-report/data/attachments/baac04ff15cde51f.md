# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/searchProductApiTests.spec.ts >> @api @search Search Product API - /searchProduct >> @regression POST /searchProduct with whitespace for search term "  top" returns empty list
- Location: tests/api/searchProductApiTests.spec.ts:123:13

# Error details

```
Error: apiRequestContext.post: Max redirect count exceeded
Call log:
  - → POST https://automationexercise.com/api/searchProduct
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 20
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:58 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=sx7oAh2P9sMk7O0WuDAYU8xuvQXMNtHx0ohc10Y4idVXAF3pO4EPzwYe%2FCdcwG4phFW7vPn%2Bne9qRzvJ6u9IMrpCAwecieK1UyQ2NjFQ0yAZ9SMW%2BXYOIpUmAIP37AQRx6bSvhjN%2F5tJ"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b6225d38d7f1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:59 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=qBBq1NwG6tc8jnFDq7jr5WKEdyry4lX1KNA8rgiBMkqUtWgKuxgi6CZj9SsPvqNaAYT22tckCfBqR9fpzUVww7BH7zqtwIt2CNufq9Iq%2FSD4rOzEsEQYxGXYwE4wyA1vvXBGRTM209Gw"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b624bf0d7aad-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:59 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=m61eHMtF2aNRR7N5c6xosw2HF8a0wF3JXZa9%2BAmNZwXodg%2FJBfssnc0OGwxQCkLkdLbmehx7WW470cWZ8afoFeDU80cVibw1CjBceO5RpVc%2FEDSLl2rUWmlACKTa1S%2B51QflCj5fUpdl"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b6271a4afc38-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:51:00 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=JbmOjIISGtXtwjZvfnwssVaGN3Uw1%2F1t30VYeLq%2F%2B5C3XJc0J8kZmg%2BzEeI9QlsJgxtewWCDk1Eja4ckdbJ4MtUqdSZSlx25ROrMzgw9WnhOeKDIMscKjQYUKk6f80BpmrHoq0Bklts3"}]}
    - cf-ray: a106b6297e48a0b6-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:51:00 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=AuulCTNogArwx2WkctSztYuiCGiUbdeXp4QJHGNGNPnfFGuOwu215ovCz2HI25FxSLoUip92TGAtT9r1Uz3XNztf2vIy4M8Hc8XcoLfDakvgwKMNRyy2C6tx07KUcA%2B9gWgmZ24CzuEY"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b62bd9f0000a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:51:00 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=iMCzlQqgpO9HWqMo4xayPtUHwzKMl%2BhEJ5LHcjZ7nern4ge6AU7CfFDbZan7wVFi0iFjaIpSP0gnlms3CRCPN4G8iCHMJgxCfxa5zQ3TdUuoO1lG1zjp9jmNApMWfBE8Qjn%2BkJOv6Cd0"}]}
    - cf-ray: a106b62e2c14eae7-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:51:01 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ytFaeP4H3CUeSJVKr5r7QQ3olL%2FQP47m%2BaMYzYnqXtDyhxdhwOAcDgMfd%2Bh9h%2FKQG2YZEMCk1QhUACJ0CEbaJmTPWzYDuinLokfFnt0iGTuZgw71d6tER%2FNrb0TqcLQhUyIW2TAwrSqB"}]}
    - cf-ray: a106b630996c1cf4-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:51:01 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=65U6vjLurbJGvtHGfv8w8gI0g%2FBKclhqvPW49has8liKIauJy9RIJIn6ys9dpaHY7MjaS2Wc%2BS4ftdBOM8sTYWsuozPMsUfBy5Y1cICuNMHN5JUUYLNvNmvBXsbXuMeM2BGG8p%2FRB%2FdV"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b632fdf67815-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:51:02 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=XAKS1S%2BVajfNwVmdVjVf6umuc6BKUIg1PRW9uTJ2KxA3G5P%2BGHcraij6djzoMcJWYxIWw55c1A8M2EZFOTQUKWk5SfIhhivMDu%2BvnhRI6lOhvn1z%2BcVZjaH3%2BUmPXxPUkkDSMV0c0Tjf"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b6355837acac-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:51:02 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=SCU1GannMKSDApMOK96G%2FZ%2B1KsN4KS2PideKfrWwLLlfNH%2FWOimoht2UNkVbAFO6iZf2pG6aE11JnqqA9g8WJuvkvlataLjYRQWr4M0TvA9QLXlfc%2FT%2BqnkN6AtT43o7gChco7%2FjciRw"}]}
    - cf-ray: a106b637ceae7514-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:51:02 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=DBydHiAnhb84mVo9abvRiIobZRnmLjmbxrPlqvD18i8k%2F7wJWNA7c2SD8e8elXLFd04zPOLU%2B51Np9fI3WXWHXGlLn9tMC2Yg6stxjDcJ%2BfhlhOfa5rdBPSgtEeu7UugFRQ7o6D7Aagh"}]}
    - cf-ray: a106b63a4df1c93a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:51:03 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=IzCrEa36hIDx6TaPQtq%2BVBykFHrcfd0AVgreqxdZqzK1WL%2Fnl6EgEfHL5hTt8kpGO9Oaxuhm99BY6i%2BxgYQYg3jVyhNj%2BxykeogjXIC2ffqGbxyI97jeO0I15KOHGFcopanRUwkM9u5b"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b63caf56edc5-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:51:03 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=lXL0LADFG3EpTH%2BI%2F%2BdcTslthWiYIHV2LQkjHlh7Y3zVoES5MEdkADkrT3x8pj5zhSDaoAgGoYK08CkrtMJLf%2BqjUfvp%2Fb4K1s98qanvGKr3gs7gLSGk%2FGkmZSbG8ZnJFbWYb%2BbxMsmG"}]}
    - cf-ray: a106b63f2a6b634a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:51:03 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=izfnAR15sBiKL3o2H9yrf1LYZigNcvdD%2Fdc1lpjLXDj3cUtdeRlLT0UQ9z6zAQDI24bcFUeK%2FFNAr4ymtjaM9YviLmD%2FBLRZrQXQ2jULei3StCoS%2FWMB7nSWGT%2FmI5%2BAiX2N%2BzmUbevY"}]}
    - cf-ray: a106b6419af3e8fb-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:51:04 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=raJ394GawPznIp30MjERkXykPT7kUK%2BRLgOQdoJ1tmJl4AC8eBNZt8CjgG5cQw0Qg80B0K9JQe3rzxuuCoSfEP2pMzAvfQGexbyrRPIfyeulf68VTvbpKly7M3SK7WuAJdteUWLhh0kx"}]}
    - cf-ray: a106b643eb3deb68-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:51:04 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=oWHd9bioG07RgCl%2FlGIWqlH1YFk6ob%2BrTe%2B7ZQ%2BLd4C1b7hm0BdwqnB7XiQDVenC%2Fsvaj%2Fle%2F38pFvkBUocV%2FniSSCG93LsM0z9kJMt5n%2BleJ5DXzCGxy4vO7iGr4JOrXoYDmwEhKDlh"}]}
    - cf-ray: a106b6464e9822e6-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:51:05 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=lSXdH%2FdF23PK%2BHCSDCgH5ZRX9Gr4wrUYwK%2FogwlkLlarCA9d2PB9QLTwAIPOYjxYo89r3Ry0EyLmZxwHHs5RNYnLSNRBxkPjv%2Fx7hn%2Bwu2fCEUVl2omFIk4zXwxhKigKvYjVJ25IIUFO"}]}
    - cf-ray: a106b648bf2f02c0-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:51:05 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Xs%2BZ8yHcMnCsqOWXIPHoPsp46JqGkUAcAP5jqFjSW23wBGJdtZ4tny2pqGrymKYd9HAFVP5eLMeZ9%2Fnd19GCFzjtyByuK2daevlBr5imgQ9PDVlV6JF864agGzWsOGaFIjoTujwKZuU2"}]}
    - cf-ray: a106b64b1d36fc38-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:51:05 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ptReGmL4httJ%2FRRI1kFfiwW4X%2BF8JtzTFt8xQQtBQldrT9EOMmTu3563DvarC9L2inHYSCut2g%2BCIsqxP6lltgGNOVYRN1BToIfiuvWOG4EZWvxHLubrcC1quF%2Fc7GvX0n%2FWsCXVQY9W"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b64d6a220bf0-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:51:06 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=70qzkU3l7yJc%2FUtqr2JJwobYVlfXXULRpuy%2BWWFrBEViiOE7h3YAtJCjnELbiJ7ChxA9lpQhDnl8Ht4wPUVT3PHfbVLOqRi0ZSEBoAjRww7H5YAkLQWwWroOTbCGzqtdQ0NRI%2BGMn4sV"}]}
    - cf-ray: a106b64fcba77b1b-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:51:06 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=V0Mf8ocNdfIeNSQDjm9C%2Fq5%2BMAJCW8vju6JoHMTgs%2FONx8wLLnWRPn6v%2BQ8md8ZdtBlUsrxp%2B8%2FM2D7TjClZv2qlSWgU%2BvaskGWJpQLMQnJNZiR4ZNPIhTkedXz39k5OAhVTgEGGZDhS"}]}
    - cf-ray: a106b65229f61238-ORD
    - alt-svc: h3=":443"; ma=86400

```

# Test source

```ts
  28  |                 validateProduct(product);
  29  |             }
  30  |         });
  31  |     }
  32  | 
  33  |     test('@regression POST /searchProduct without searchTerm returns 400 error', async ({ request }) => {
  34  |         test.info().annotations.push({ type: "tag", description: "api" });
  35  |         test.info().annotations.push({ type: "feature", description: "search" });
  36  |         test.info().annotations.push({ type: "tag", description: "regression" });
  37  | 
  38  |         const response = await request.post(searchProductApiEndpoint, {
  39  |             form: {}
  40  |         });
  41  | 
  42  |         expect(response.status()).toBe(200);
  43  | 
  44  |         const body = await response.json();
  45  |         expect(body).toHaveProperty('responseCode');
  46  |         expect(body).toHaveProperty('message');
  47  | 
  48  |         expect(body.responseCode).toBe(400);
  49  |         expect(body.message).toBe('Bad request, search_product parameter is missing in POST request.');
  50  |     });
  51  | 
  52  |     test('@regression POST /searchProduct with non-existing search term returns empty product list', async ({ request }) => {
  53  |         test.info().annotations.push({ type: "tag", description: "api" });
  54  |         test.info().annotations.push({ type: "feature", description: "search" });
  55  |         test.info().annotations.push({ type: "tag", description: "regression" });
  56  | 
  57  |         const response = await request.post(searchProductApiEndpoint, {
  58  |             form: { search_product: 'notexistingproduct' }
  59  |         });
  60  | 
  61  |         expect(response.status()).toBe(200);
  62  | 
  63  |         const body = await response.json();
  64  | 
  65  |         expect(body).toHaveProperty('responseCode');
  66  |         expect(body).toHaveProperty('products');
  67  | 
  68  |         expect(body.responseCode).toBe(200);
  69  |         expect(Array.isArray(body.products)).toBe(true);
  70  |         expect(body.products).toHaveLength(0);
  71  |     });
  72  | 
  73  |     test('@regression POST /searchProduct with empty search term returns all products', async ({ request }) => {
  74  |         test.info().annotations.push({ type: "tag", description: "api" });
  75  |         test.info().annotations.push({ type: "feature", description: "search" });
  76  |         test.info().annotations.push({ type: "tag", description: "regression" });
  77  | 
  78  |         const response = await request.post(searchProductApiEndpoint, {
  79  |             form: { search_product: '' }
  80  |         });
  81  | 
  82  |         expect(response.status()).toBe(200);
  83  | 
  84  |         const body = await response.json();
  85  |         expect(body.responseCode).toBe(200);
  86  |         expect(body.products.length).toBeGreaterThan(0);
  87  | 
  88  |         for (const product of body.products) {
  89  |             validateProduct(product);
  90  |         }
  91  |     });
  92  | 
  93  |     const mixedCaseTerms = ['Top', 'TOP', 'tOp'];
  94  | 
  95  |     for (const term of mixedCaseTerms) {
  96  |         test(`@regression POST /searchProduct is case-insensitive for term "${term}"`, async ({ request }) => {
  97  |             test.info().annotations.push({ type: "tag", description: "api" });
  98  |             test.info().annotations.push({ type: "feature", description: "search" });
  99  |             test.info().annotations.push({ type: "tag", description: "regression" });
  100 | 
  101 |             const response = await request.post(searchProductApiEndpoint, {
  102 |                 form: { search_product: term }
  103 |             });
  104 | 
  105 |             expect(response.status()).toBe(200);
  106 | 
  107 |             const body = await response.json();
  108 |             const searchedProducts = body.products;
  109 |             expect(body.responseCode).toBe(200);
  110 |             expect(searchedProducts.length).toBeGreaterThan(0);
  111 | 
  112 |             for (const product of searchedProducts) {
  113 |                 const searchable = `${product.name} ${product.category.category}`.toLowerCase();
  114 |                 expect(searchable).toContain(term.toLowerCase());
  115 |                 validateProduct(product);
  116 |             }
  117 |         });
  118 |     }
  119 | 
  120 |     const spacedTerms = ['  top', '  jean', 'tshirt  '];
  121 | 
  122 |     for (const term of spacedTerms) {
  123 |         test(`@regression POST /searchProduct with whitespace for search term "${term}" returns empty list`, async ({ request }) => {
  124 |             test.info().annotations.push({ type: "tag", description: "api" });
  125 |             test.info().annotations.push({ type: "feature", description: "search" });
  126 |             test.info().annotations.push({ type: "tag", description: "regression" });
  127 | 
> 128 |             const response = await request.post(searchProductApiEndpoint, {
      |                                            ^ Error: apiRequestContext.post: Max redirect count exceeded
  129 |                 form: { search_product: term }
  130 |             });
  131 | 
  132 |             expect(response.status()).toBe(200);
  133 | 
  134 |             const body = await response.json();
  135 |             expect(body.responseCode).toBe(200);
  136 | 
  137 |             // API does NOT trim whitespace → expected empty result
  138 |             expect(body.products).toHaveLength(0);
  139 |         });
  140 |     }
  141 | 
  142 |     const invalidSymbols = ['@#?', '123', 'топ'];
  143 | 
  144 |     for (const term of invalidSymbols) {
  145 |         test(`@regression POST /searchProduct with invalid symbols "${term}" returns empty list`, async ({ request }) => {
  146 |             test.info().annotations.push({ type: "tag", description: "api" });
  147 |             test.info().annotations.push({ type: "feature", description: "search" });
  148 |             test.info().annotations.push({ type: "tag", description: "regression" });
  149 | 
  150 |             const response = await request.post(searchProductApiEndpoint, {
  151 |                 form: { search_product: term }
  152 |             });
  153 | 
  154 |             expect(response.status()).toBe(200);
  155 | 
  156 |             const body = await response.json();
  157 |             expect(body.responseCode).toBe(200);
  158 |             expect(body.products).toHaveLength(0);
  159 |         });
  160 |     }
  161 |     // stress test to check if API can handle very long search terms without crashing
  162 |     test('@regression POST /searchProduct with very long search term returns empty list and does not crash', async ({ request }) => {
  163 |         test.info().annotations.push({ type: "tag", description: "api" });
  164 |         test.info().annotations.push({ type: "feature", description: "search" });
  165 |         test.info().annotations.push({ type: "tag", description: "regression" });
  166 | 
  167 |         const longSearchTerm = 'a'.repeat(500);
  168 |         const response = await request.post(searchProductApiEndpoint, {
  169 |             form: { search_product: longSearchTerm }
  170 |         });
  171 | 
  172 |         expect(response.status()).toBe(200);
  173 | 
  174 |         const body = await response.json();
  175 |         expect(body.responseCode).toBe(200);
  176 |         expect(body.products).toHaveLength(0);
  177 |     });
  178 | });
```