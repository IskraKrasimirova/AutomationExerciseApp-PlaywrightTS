# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/userAccountTests.spec.ts >> @api Update Account API - /updateAccount >> @regression Updating account with invalid email format returns 404
- Location: tests/api/userAccountTests.spec.ts:119:9

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
    - date: Tue, 23 Jun 2026 21:52:31 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=s45u9Y356fR5GTqWjCVvS0ljOTDNmJ42hAV1W6PlBQd2U%2BJ7z%2BNc4LIZcIcUKG%2Bka8a3RDjyxNiXNAxG6gKP0knKA%2Bc0%2BwQDe6qCDNCcP7l8p10QaEGNZWlO177JSkKElK3NT6bLW87q"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b8664e257b1b-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:32 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=4FCMR0IuX62B7DyEDXRdlNl7aXdOULalZL%2B4d2EVO7ou8D5%2BNXa8%2FUkpsEDCVogp5SnBfw3gX7y7m1ku8C9ECrEizmFt%2BoJsWUEwiIoIPgHZkwjeierdovJF6Jug48rq5jzpl3z8t4Cg"}]}
    - cf-ray: a106b868aa7eedc5-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:32 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2FoK8PH8idSXRRBR2qFA4%2Fgc5hPCy6moIUp67nqpVQnFhozxhLAHfrOOL8e6aPcyRaqf8FAVuQqopbcZFVyQ7fzuiAjNJ3O6Cl3nRwgLdQFQVtCe7Te6J4V9406FVUPgYRzccZCPq9EsP"}]}
    - cf-ray: a106b86b0f13222b-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:32 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Fyf5mB7wD9rOfBdEnaD7Oef1xqj7dtJ599glZKJvzEG%2F51m63cfTAwwmvQ3Sz8zuRKBfdXdRBSASBCb2Xvd6Ax5tKaWewdrDdAhriy5GslgaA5S4VnBB1%2F4tTgsZciO4FdcQhKjclflD"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b86d7b55549d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:33 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=R0dSB1pxR6ZkZHJtDvUv44HefBQURo40xWpIrbAsE%2BwXu1HuO7G5CL4aVIg%2B9bzdyHRXb5FWBIlxL2%2BkqLBHh1UgbME1N%2Fz8X6aoRNGDOtdeeqXNOXuAEPRMpUnSWhtTa9Jws7cKWvRT"}]}
    - cf-ray: a106b86fcbce1279-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:33 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=kiFGYMJkFPGH9G9n1d9aQenQv48BzJiuBXm7f4OzEnJoO0UioAweGQnY%2FvIq2jQvaHdzXNmulQyXI2nJfgwdWVPe%2FAbS9iaJTMLel5cBaH1W95d70E6k1jZX3Wbsb7dGAByQwP%2Bk9Wjs"}]}
    - cf-ray: a106b8721e0a771e-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:34 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=VNXhRXL2KO81nPCYA5%2BQo%2BGq1lHjCwLisJMOcyViJC9sCSh%2BMawDNq1lvdgy2HkfoPWy2pDETdPHTsdK9s2hJzgOy2HSRHqFOogm85LJYxhODby8HnMq5Erj19XVoaAh5FqSpdUf4aR3"}]}
    - cf-ray: a106b874883ab4b8-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:34 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=sNib1EZrqNjZ20Tu3cP94BsHo9LbGGWgR7tXGTfI1S%2FYee%2FZgJy44LtA868zwO7dELwCOdx92PyWRgR%2FKXl7L81uBnXRsKvpcDdN6SSUjkufhfjdSUez6DJBYQ24%2BkoQ3owEv62CAXrK"}]}
    - cf-ray: a106b876d9e2c77f-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:34 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=wcBv%2FGGVwuAB8%2BwknTCOhhmj2GLOAS4CFXhs9vjES9vG9qWs3TeQf2339NL9Uqky%2FRf%2BxypJqy%2BSmvc61ZZssh69yhfVnMWtl85nSkIwqrLH%2FTKK7RptorENjmqQv53krwHF2sNlMOIA"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b87939367815-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:35 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=yb6GbhsGw3oKZjU8IYrrGFJgbTTD8vLz667H3hC2mI7z7vG9vTMvd5GqH%2FG5RjN%2FjQFVQ6l79kOugc%2F3eDB1Pzvf4zy%2FXXQRBSR62RdeavFhQOfHYn0OAAEbNYD5j0gu%2FR%2FC7PQQBWt%2F"}]}
    - cf-ray: a106b87b887993b1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:35 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=4XiBxg4BLRF8luo2frkq4ChwR%2BixeUHd8VwEpuffFP%2FscKTpr3YPKVlpQY5ADMYA%2BLx9IhF%2BEOiTOkYTs0JjkrwOO2WPrCckHb0kIs5qMlOgAC3AjTLAPLevOXXu%2F5dC1pVMYXtjMuIH"}]}
    - cf-ray: a106b87ddce4634a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:35 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=1ZCE6vcyUs3jZlyNk6ELEUAF9h%2FKySn%2B3LeIdHiHarJHCOFr%2BuucTD0oeTgDFXb8c8pR54gFPzj1o5%2BBhBmVX7qHqx0DiFA5mIr7qxztVGMiTqih888GNRpAJnfX0wO2j%2BPYGyUShvlJ"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b88039d110af-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:36 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ii6sMYPJUoS4CB%2FuDYPxym1KrTvh%2BxwELV97zH2SwrSPU%2B7Rl38mgnjKbtQMOdv96UaA0%2BGTdwKBWo9mX3feimZ0ADQAfKWr7EZ6G1RCGqusCLUQECHe8OlMFCl6KE%2BL23kpl4hymSn%2F"}]}
    - cf-ray: a106b88288bdeae7-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:36 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=gER6IgK4ukBFjBZy5DsfoI74Sa%2F58%2BGm5pLbtsbWLyeH3AmRUxMxjCv%2BFnKu9PNJqXPNwQRoC1ubQ7fRDNiQpN0%2BdLzYbf2RRzikXNPL2W0mJPAy8%2Fb4%2FDWCTJSL%2BvhTHLSUpymaCWl8"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b884dadd0d35-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:37 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=4LVCTjtxa1%2BkYU1s9pzzr%2FmaJXIdY%2BFu%2Fm%2FLg56tsrTkBG%2B1DBWv7g7fLcX%2BiZ4f9u61BBOOvuWDQaYgl%2BiHH0zeWTbVxZCJQ6g48DaQWTPJIaKuiwX7Rsv5zoeGh%2BOutTYgLaThh1vM"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b8872eb9eaec-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:37 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=sjAvp2c8n8z0SboJikYF%2FhTCn%2FJisHJzbwKvOMuGfqbup5AFEmsFtReyATj1VmS5ic9%2B9iuposPEel28vjQFLU0JjyJeiCwpWkyOMjdeUntDuV4czEoTVdNCgBAqjliQxiNnuDdRQkTX"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b8898afe98c3-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:37 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=dSRx9L2%2BgHHqo2tH4LDNqdwKkMcy4jd5wg%2B%2BS5ArGsh9ZFegygTFSoaFPvnObPq2B1ORRUal3dtz8RyxcAEwEYf6q8ZePm5x5s%2FUgmSVXOHFPgEyDSj1bCs3csE9bZY3rA6TboqmHDk7"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b88bdbef90bd-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:38 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=OXcz%2F6g9svT44Y71KLC8SC3%2F0pEjEn4vUNFNfXW9OF1YDmFpP5IEtBYbrLv%2BJdfhCYkaxbIwk7r1xJDirOEMcnQolDz%2BIcwli0sG3IQ9BfYA%2BA9nOyjfVAqdRgRa2KslA5YhNimzB00R"}]}
    - cf-ray: a106b88e4f27c93a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:38 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=klsnA%2FtHHdBC3X89r8opfOciUkeocWNrDdnpJsAY8U8HSXa8Nh9%2B7ySTFeB%2FVvnM1kiJNBPW7i9%2B0hjYSbyh1aPSuW4T2X0RfiuCirXoZqWuEfSbrOZcv9XUZOyxgQb1oIzMbr9E259j"}]}
    - cf-ray: a106b89099356204-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:38 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=cnXnje5cocvC%2B%2BZFO%2BJRKQgzAelgwzrn95CmLg7SajoQ19uwzI3Ur7gBvH0MnMDaKdIRcuLl5YOex4klWEvgHpxkSO8ZtjoS9FQNK4bMRux37mrxlEF5vHO4v8E5%2BSNBOrvmnLyXAjuO"}]}
    - cf-ray: a106b892fd3210c6-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:39 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=n6rxVBT%2BBeADE7ndcJQuxlu%2BJ4zLlmsSUUTmdWE2XP2tjTTSXXB9OiTS%2FJ38LKrIMupLXatSqwo5RlikPKYllTzD63ZJImhzZphDWlSIqL%2FdfX7rUED6dt%2BcVBGUam6o4ehH6Rn1AIHf"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b8954ea52d03-ORD
    - alt-svc: h3=":443"; ma=86400

```

```
Error: apiRequestContext.delete: Max redirect count exceeded
Call log:
  - → DELETE https://automationexercise.com/api/deleteAccount
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:39 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=a%2BO33JpopTAN09pq2cR3dUCwctNVIcpoPe9YQsboarrYVSH3t%2B5PGAslLpWj7jK3EQ3aTSUQT9D3u5%2FoG6a7VzfET4zMD7wXIGUkETwvRMe1mFrvTG8RbEnyo2mTAWlUeQLrUsYxMqcr"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b8982fa3b0fc-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:40 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=MoP2fAYfPx0rEWDl6azBJ%2BqcBN%2B3VO8QV5qHJMw%2FESRnjg4ThkdWDo2FbIgcLfGK1Nq4j%2FAx85lkAUabgQhP3x%2FSN7p%2FwH%2FDzqld3zUk9SSne3B027uH3zmm%2FlICiP1QZxZzNSBv%2BFL1"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b89a7ff5edc5-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:40 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=hjHsFhL8ADRIMUkBWNpPD9vhdkE5IKqwsSam0cWzgzwcrter%2BV%2FdKBetmpvQvCJUcnb6zeDGpiWMDXGYfwvhE2huXZItO0snJEKzK5bdl11gWh0v9dKed9DBBZQtlXM9jc8XVhUX0scq"}]}
    - cf-ray: a106b89cdcd80f1d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:40 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=IMr1Dc4TAPyuU6qqM4VhXIzt2klf%2F%2FGO6hchnKFCvqpiIkyhA0lGWkgFZAFHSZOlCFjd08wg4HkW%2F5R%2BDHanfvm7t7o8JGDlyRO72QumN47rIvfdFNN054BFcub2t4VBTWzUZP%2BQm5TZ"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b89f496bb834-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:41 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=SfCv3r4Q%2F5vtMasiUP0sNTNQ4pi%2Bb3VyQnucA%2FI1t1gW6qwIbQ1pBXxGj25Lp59utbFoL7RhmUC7I713lqYqTssR0vxZW6vcZbSYRvIPJisz5mGKr2B8ovdvwHDBLQRsrIwQkDaFxZLC"}]}
    - cf-ray: a106b8a19a9ee802-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:41 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=WBjxF0ugihsJ6mBEgAWXXdlc%2B3t%2B4k4vvsPjjhjM4jFcnZUO%2BBErZKCB9nrucqB4ULDETIKfUXmjYt%2B5vJyKKMi61VdPpEWsJm7UwvYZNOVtN%2FlJCTt8PwKWVZwQnIIRjoBcczXPc3D2"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b8a3fdecfc38-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:42 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=OYXkPeYxfHvChFd02MScCNCleY%2F6P%2F1YsqoDKd2vOlzE%2Fe%2BvVLJptERFGFrGY3eb05ZytPor%2BhBcR2w9R%2BWAg1bMNjqChWO%2BoNPUcNeqE4ik%2FFXxt9Nq0R71apFuQ1aUi5o79u7DHEhc"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b8a6490de8fb-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:42 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=IOAA6aB0R2HgCX%2B2Rospf%2FpoLAiqcqbvWktOfeHvZ9b9pajkuyVsUG4Xge8TUGohddOh0ftTsgV91EpzT15aG0Blw0FrBbHappbw3BhYM2oQdwVl0VglafWRbw3kMCimOcrIrVGYkr1R"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b8a89c483443-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:42 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=8rFH9nVERubwZv6QyRq%2FYrgKonsXHrjlC73gZqxF53k7FnnDR11%2Fu8q0A3%2F%2F5uuiONa0%2FeksyUfkTdGRUBot%2FNpci7pYirNtbAYRodq3EGw5MGB2dokrqjYZIWt997eJBn78wvc7eE9w"}]}
    - cf-ray: a106b8aafff610af-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:43 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=i5J7BTKYfp7oik9P%2FwmRHQUjiJ8%2B99LQ5fpAg75JfKLsO2s7nulU5pCl08tqXrxpfRqvvrk5c2z%2FVL8TYmy4cxC6v5eK%2FF7KVqx9ED%2FItX9fnznFoyYryN2IN4uMsG9tHNcpua7%2B1Cy2"}]}
    - cf-ray: a106b8ad5d92ef0a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:43 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=cwtF5lpFMJDzDlSsV1UQSGN4TA51dB9tt0%2BDf%2B4CeZ8azYIrCFFn%2B9k1ySG8BvjqUn8e6LDuN9zgDgGX%2BfYaTtPtOUxCTTIRiidKhOF7wUke4WrjourgV1cO2m1tSJXto4l3FXvh1fGx"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b8afbe753445-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:43 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=E3HpbqfoYfLYSBcuBaL3BXB2OOHDNWhAPDSGFh6z4yauEItBfQpFRTQysOBC8Z9MolxnJ0JynNpgBGNxC5BVPbIzR6e%2FDMfgIlgGjVIJ5Ce1GVRTMOnNVzq00j0sKCXZGyC2NRDrSIXy"}]}
    - cf-ray: a106b8b22e3ceb09-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:44 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=kaPn4JrC8rmJIjXu45tNfVatnX%2BiCSYnKqpInrAgmo3s0r1g90TAREjTftaVg9lwVPRLiwOv%2FGIb2Bok9eaDBu76U8Y0U8FCOjOn2u54qRDXZ2NHWP3XAkw7hO4Kyj4r%2FIW4C4VqPg5j"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b8b478772ced-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:44 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=vVAFZgZeBDgmd%2FpRarFGvOF7KsP8DxC1C%2BuEyqPa%2FEufwz1Lma%2Fc3ZAvQGI7ZB4yZJNhfZD77wNqkVAPO3Merl17olBpkMH%2BAj923KY%2FGK9HCDEePwXQr4LAocTjt6VITaaPQLfL1vtu"}]}
    - cf-ray: a106b8b6dbf70012-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:45 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=FRgliKf0TJH50naP0wVjTqrj0Go0leBVl9%2Fr1R1MZGec9VECLnCGk1WsRkB1MN9oa2IdAwALW2vCtKKszBYoLaegdxYHF33TpvnZXirzsMv9nR3qms4n0Qz2UcW8boZL2pf0mEQVhpPu"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b8b92eca6204-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:45 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=e2g67mr5i%2B%2BMl2a5%2FxBu6zHPAiLPMOBiwkA3ofQZncXzBSgrYaG7a0aaSzKU5KGC620iJn9FzzlJ2Bs7bxCRArFCEUgiaMxDydA9a%2BYjriQ9Lkv4o58Joq4W4VqdFkuaC%2Fy1CuURzWzY"}]}
    - cf-ray: a106b8bb8d2f549d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:45 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=8fxHH0sZvQEYsGhBOfNgmr%2BvchWJeXcTHLm5Nwfm%2B7WQ7u68KZBGt4tEzODwKjrMUuuocDQtLnddtiROv%2BR3vXIE%2BSqDpDSc4BCuNR3jY7nvsY5TuKCL2Ekkl5S3PG%2FARQOT4j4dP8sR"}]}
    - cf-ray: a106b8bde85d1238-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:46 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=T6k5B%2FL652O2AnFzLXUyVy0XyEAfCyW4d%2Brw8LgmvvYQZcPJ4qjFxrbaURONqEbNlCmDW9krB0fLy7XjH7I0AdIJQYtrClYI2dmZCkVQS8JhaZFjUZIkePEMrQGE552Z4ID8h7zB2oDX"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b8c04b737073-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:46 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=I%2Fle3ah2TUxw18ZnguGwbPIZJUSxp%2Fhy2LT8aiyD7%2FyV%2F0qtC%2FSBIlIDdaTHnJke26RrxwZAWDGMV2AClBd%2FTuecPyxpQorWdeYKslvRDALzK46p4Lc8CplOsKW8%2FTwkyhPkfXtMwKIk"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b8c2ba497815-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:46 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=fuUTW2MplVYis1ZxQL2qvdx%2F%2FVHnkbw1HDarg7KSeqAj1cFoXifOGAAQquibzLQrl7X1A3UloIdIkQSSiXECM4LTcKV3L7IhVqzinXJE86RN7gMgUcK9WGjQ1Tdt84utLSlxUjEamm9D"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b8c51a81b834-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:52:47 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Iwq%2BWEhqgOCIIWCi5PbiIv2h6w0Cz5Vlvf83hS76bV8rTM77T%2BDRk%2BBxyrZm7t8s3LSZKs%2B1kQONqVOl6JpyiRQrVo0SQQjaeObxDnVtK9NhqRwE%2FsUU0%2B8GJhFRpTAdVLjrpjoEPau7"}]}
    - cf-ray: a106b8c75ab602c0-ORD
    - alt-svc: h3=":443"; ma=86400

```

# Test source

```ts
  1   | import { APIRequestContext } from "@playwright/test";
  2   | import { config } from "../../../utils/config";
  3   | import { ApiUrls } from "../../../utils/api/apiUrls";
  4   | import { ApiUserModel } from "../../../models/apiUserModel";
  5   | import { UserFactory } from "../../../factories/userFactory";
  6   | 
  7   | export class UserApiHelper {
  8   |     constructor(private request: APIRequestContext) { }
  9   | 
  10  |     async createUser(): Promise<ApiUserModel> {
  11  |         const createAccountApiEndpoint = config.api.baseUrl + ApiUrls.createAccount;
  12  |         const user = UserFactory.createApiUser();
  13  | 
  14  |         const response = await this.request.post(createAccountApiEndpoint, {
  15  |             form: {
  16  |                 name: user.name,
  17  |                 email: user.email,
  18  |                 password: user.password,
  19  |                 title: user.title,
  20  |                 birth_date: user.dayOfBirth,
  21  |                 birth_month: user.monthOfBirth,
  22  |                 birth_year: user.yearOfBirth,
  23  |                 firstname: user.firstName,
  24  |                 lastname: user.lastName,
  25  |                 company: user.company,
  26  |                 address1: user.address,
  27  |                 address2: user.address2,
  28  |                 country: user.country,
  29  |                 state: user.state,
  30  |                 city: user.city,
  31  |                 zipcode: user.zipcode,
  32  |                 mobile_number: user.mobileNumber
  33  |             }
  34  |         });
  35  | 
  36  |         const data = await response.json();
  37  | 
  38  |         if (data.responseCode !== 201) {
  39  |             throw new Error(`Failed to create user. ResponseCode: ${data.responseCode}, Message: ${data.message}`);
  40  |         }
  41  | 
  42  |         return user;
  43  |     }
  44  | 
  45  |     async deleteUser(email: string, password: string): Promise<void> {
  46  |         const deleteAccountApiEndpoint = config.api.baseUrl + ApiUrls.deleteAccount;
> 47  |         const response = await this.request.delete(deleteAccountApiEndpoint, {
      |                                                   ^ Error: apiRequestContext.delete: Max redirect count exceeded
  48  |             form: { email, password }
  49  |         });
  50  | 
  51  |         const data = await response.json();
  52  | 
  53  |         if (data.responseCode !== 200) {
  54  |             console.warn(
  55  |                 `[WARN] DeleteUser failed. ResponseCode: ${data.responseCode}, Message: ${data.message}`
  56  |             );
  57  |         }
  58  |     }
  59  | 
  60  |     createAccountFormData(user: ApiUserModel): Record<string, any> {
  61  |         return {
  62  |             name: user.name,
  63  |             email: user.email,
  64  |             password: user.password,
  65  |             title: user.title,
  66  |             birth_date: user.dayOfBirth,
  67  |             birth_month: user.monthOfBirth,
  68  |             birth_year: user.yearOfBirth,
  69  |             firstname: user.firstName,
  70  |             lastname: user.lastName,
  71  |             company: user.company,
  72  |             address1: user.address,
  73  |             address2: user.address2,
  74  |             country: user.country,
  75  |             state: user.state,
  76  |             city: user.city,
  77  |             zipcode: user.zipcode,
  78  |             mobile_number: user.mobileNumber
  79  |         };
  80  |     }
  81  | 
  82  |     async getUserDetailByEmail(email: string): Promise<ApiUserModel> {
  83  |         const getUserDetailApiEndpoint = config.api.baseUrl + ApiUrls.userDetailByEmail;
  84  | 
  85  |         const response = await this.request.get(getUserDetailApiEndpoint, {
  86  |             params: { email }
  87  |         });
  88  | 
  89  |         const data = await response.json();
  90  | 
  91  |         if (data.responseCode !== 200) {
  92  |             throw new Error(
  93  |                 `Failed to get user details. ResponseCode: ${data.responseCode}, Message: ${data.message}`
  94  |             );
  95  |         }
  96  | 
  97  |         const apiUserData = data.user;
  98  | 
  99  |         return {
  100 |             name: apiUserData.name,
  101 |             email: apiUserData.email,
  102 |             password: "",
  103 |             title: apiUserData.title,
  104 |             // Birth date fields (snake_case → camelCase)
  105 |             dayOfBirth: apiUserData.birth_date,
  106 |             monthOfBirth: apiUserData.birth_month,
  107 |             yearOfBirth: apiUserData.birth_year,
  108 |             // Personal info
  109 |             firstName: apiUserData.first_name,
  110 |             lastName: apiUserData.last_name,
  111 |             // Company & address
  112 |             company: apiUserData.company,
  113 |             address: apiUserData.address1,
  114 |             address2: apiUserData.address2,
  115 |             country: apiUserData.country,
  116 |             state: apiUserData.state,
  117 |             city: apiUserData.city,
  118 |             zipcode: apiUserData.zipcode,
  119 |             mobileNumber: apiUserData.mobile_number
  120 |         };
  121 |     }
  122 | 
  123 |     async tryGetUserDetail(email: string): Promise<any> {
  124 |         const endpoint = config.api.baseUrl + ApiUrls.userDetailByEmail;
  125 | 
  126 |         const response = await this.request.get(endpoint, {
  127 |             params: { email }
  128 |         });
  129 | 
  130 |         return await response.json(); // returns 200 with user data if found, or 404 with error message if not found
  131 |     }
  132 | }
  133 | 
```