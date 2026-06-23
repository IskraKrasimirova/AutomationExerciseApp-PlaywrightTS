# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/userFlows.spec.ts >> @ui @api @e2e User Login & Deletion Flow (API → UI) >> Login fails with empty fields (UI validation) @regression
- Location: tests/ui/userFlows.spec.ts:89:9

# Error details

```
Error: apiRequestContext.post: Max redirect count exceeded
Call log:
  - → POST https://automationexercise.com/api/createAccount
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 319
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:06:43 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=5MqKKNoUfUypc5YV5Z%2BVj%2BBjlWzZaBg%2BV%2BxCx4LsEOooEjpDhp2ESwC%2BB5KtqYn6%2FXdECD%2Bd9MV6ga2OVB%2F72tGIqeX67Lhpl3e%2FlT78f7PlXVZvc7w9am8nC%2FF2MLAvZXKkJyE0bPxQ"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cd30da37928a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:06:43 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ickwFEBxwHueh2qXPQbH8ZnkjzvtMUdjs0y9j%2FiJE67utuv1po0%2B8cjoAGRpz9pHuK3XSMY2a4dtR8X3B5tlkwowEVyFNAZE2dZylpjFC%2Bc8Xj32192tQ8A6U9CcOKUtOpqHprH%2Fi856"}]}
    - cf-ray: a106cd334aaae80c-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:06:44 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=eQtvVnW2iCERH7l6GqcgzHUhoLPtJmDhv6A1GbLVzuu9jhBZGuheCTmatAaVrhzgMvEEcxS5BEcco84zV81Jv%2BJVzkeUWtdPwRJpZws2H%2F%2FXVBWBG6OQuEeuYsMwnrY8j35myLk1oXRK"}]}
    - cf-ray: a106cd35ac9d549d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:06:44 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=OSD1WPlmgpASsKQgE%2BVDC59fnYG7WsjMgR3CnH1gkLZ5WcNE%2F9jNKghLuh9IHfXGJba7P8PvrZf4vh3qFJ5y9vjniuoLrLOvGro2VoN6Y7gR483w%2Fdf12ulEtzMgVqulOxEbD94U1PEE"}]}
    - cf-ray: a106cd3808e193b1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:06:44 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=VrqPyUakET%2B71Q2qhhUMF9pTEXn2H038sVKUMlQx7%2FqmPMkZZ8B3Xj3eiZl0ndXG4NoXA6TpMtJOBhFuv1jZMU0QHTINPw1rv0ZXCoUdVvVqcKWENjVIybQ%2BdlJrCsPtdxl0ZFsyrcow"}]}
    - cf-ray: a106cd3a5cf3000a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:06:45 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=YoL0LZEcRFuRf%2BnDjr4s9wBuhWFk5VIt2fvOg2FYDf3Xyh9bWTgwUAyN4j6%2FWapZ7sFP2GqC5oWRdlor6HcgqJW1NFGsNRA3wrxDLVG37YbzLRKwZv04UgCZsuWioO9O8bvKIc37wXqq"}]}
    - cf-ray: a106cd3cbc9ceada-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:06:45 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Q0YdyG%2F4EwoBZlCjBe164bGanY6SQgVvDjwfJgfxlgT1gc%2B1gKDgrZXgvoqDU9XYfqYvzNSQUZ%2FOIhuXk4YKcI%2BQPiHUGNQQlbU%2FnMmmoIWhdas7Y%2B%2BtSeEiPolq7yx84zuSAzV%2FWOs5"}]}
    - cf-ray: a106cd3f0bb8aa8f-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:06:46 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=3%2B%2FRZt0iqY8AQZRJyj64tLRPMvNq%2Fp20gJYFlVYxrA2Y4L0Dpbl672aCwsE%2FtYvnDuF4eKH%2BnFXuIZBa8hW%2BsEFa1yShir4tiW53itXzkKwZmJAEgWE57nn6FxSCCeYM51ANhXYgsw46"}]}
    - cf-ray: a106cd416e68eac0-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:06:46 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Gd074AXRrKrdjjHpR5UfKJpgYgyH68x171bud1RM%2BG0B%2BBPNkivqSa2adop3%2BfGO7%2BsK95Mda5l04K6MkEylYe0%2BkrIuB335tZ7Rz0AfsaMvvpOTw6b%2BNBfaFThuZwtJSLEpBlojsoPi"}]}
    - cf-ray: a106cd43ccd5253f-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:06:46 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=M%2FxVAo5rL%2FkefwE0osslIQsSDYHWGA3agsKyq4duRd3Czvrkpc70a2JcypZR%2BJ%2F0EJ8OUoOpLVY%2Bgx0X3xs09sYAl4dHbI94nUTbYTA2gizwLCDqw6k7nhL3rnuMUbqlbuQTXN4CRj8l"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cd471bf67073-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:06:47 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=wqEYcr7RyqNjCsfBceUxwpQdnD4HRcXsp0WLJni%2BlTt7EuwP26DgVmMF4gq5DjewJIfGE2qHjkSesdduG%2BMdd0JdmvN8bGe6hGjv%2BuegT3pzxa1Fgj4eHUdZOX7HeEm6VvrugPX0V8KG"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cd497935b834-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:06:47 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=qABWd5C%2B9p0C46EPMTsjImOTwflQBA9ezscaraPgNc3A5MtFxjcHorQJIvsagVzWmbJWHtcZhQsjxGcrjefyG6gqAVvjeP7QcQr3Iq0IU6R4szNUvpyJa98Xl0Q3btwYDwFxVW88NFkX"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cd4bce2595c1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:06:48 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=DMb8Q7kl%2BqxANxuZGM%2FObUNg65o6Ddlns0kOZSSu8E65xskEwP%2F86pQ8mhed57roEgoBcHTQ7tzOwFDeQ5AN3kKTcCNEbcpysi77BYJ%2B8k8sXr%2BcqHvFG5Bo9AYlGTCfnpcKNm45Pk1L"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cd4e2c9f2321-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:06:48 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=8fP5t8mS0ukPhMN9DNDNlk8FJanwqP5ZpQYdbHo1Ed1gVcwleeWXCqW2bmGRGkK49ll5j9vUHat2PtxNBAxewBU4vDuc9W3%2FcB6GLPlzSQEIALo8U8HEWRsq6q%2FYV5bHBqJ%2FnO6pymAA"}]}
    - cf-ray: a106cd508daeeb05-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:06:48 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=WolUXkedKH2p12hZWr1tQfl0Wl%2FMW5RwanoMPtlENQE4i82oLo%2F6Fw%2FJToCzO8GVAD1iVNojivoAe1mFyhU1vDf78m5if8ZYjZj7LH5qsHpophaS2rNKx16sGK2qLHSOLljBtgfGxxKY"}]}
    - cf-ray: a106cd52ea913426-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:06:49 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=TEgcYf%2FzJ%2B7AeGFvdgXgnYhUaVUVPP25DJPAclWRDvy8nwdTxSB77KaMM7HwhLXQ9DNCXOFFLNJeT3QSm3dAst%2BL49q2Rds%2FAA%2FnGVS5qbSRiZO%2BDO9BggtNeCXfLN6%2F%2FF2aUbHbCeey"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cd553e8790bd-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:06:49 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=px%2FhMp3m2T%2FxQ3hwE68lyx3DGWMhzms9IboCyZlYHozJKVBYeGZhyLHznTyWz2f%2B0rMlaoHZcK11knKGDeam2zP9AnJGdBebV3wsvHDeJ%2Fciwhz7L9AmObcy%2BXHc4GfOPKhoLI7%2FzqnH"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cd57983e2d03-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:06:49 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=W9gfOmah9K1tGHXhxhO983zQx7ig%2BYe%2BX7azezOi%2BFvrDg8YleVb00HbdBAkxP%2FV1zKVzLdhXv3umQdemfA39iJLFMtJe4CxgAvhXUF%2F7TlYYKwMyg8hXNYSX%2Fgm6Zk3iumF6zs1k7DR"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cd59fe04e80c-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:06:50 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=4kDiyr3CNFzAj61YzxpKqRqCve7EGZALv4BJkOX2kPiWcTFVVsEiSl35mdDoRwajPo2IWkzXF2T4qAW1lWh%2BYKMoOGuhgFHrhCyEzywOsXz%2B1%2F4OnNYlBGSwzlvW98kRsuFTFf8zQgdU"}]}
    - cf-ray: a106cd5c4ae6549d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:06:50 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=QUji%2F%2Fu5wsDjto07tjoMqRdw2IVfiDvGJ2SL2RevU5IORkUw91jbXIdU2m8G%2BtBusCNE6S9W12IRivzXa417K79dn76t4h9LgMCJzY3103%2BllOhWHXjGZ2KfW%2BDfAeCKk%2BDznKDfxflY"}]}
    - cf-ray: a106cd5ea88a93b1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:06:51 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=2RZh3TssztZZDh7LWN%2BeM%2FngzgdxhjlRVLATmg3uGzaoe7NIaE4EjDtQb3CXIv1Lkf0SdkU5Lvj%2FBuvmOqRVWASgi7J%2BS%2Bi708mlYg4a84fxeJ04L%2BmJpFUHkDHJjuRkQzZ%2FKo%2BQui3y"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cd610951e801-ORD
    - alt-svc: h3=":443"; ma=86400

```

```
TypeError: Cannot read properties of undefined (reading 'email')
```

# Test source

```ts
  53  |         await test.step('Verify user is deleted via API', async () => {
  54  |             const result = await apiHelper.tryGetUserDetail(user.email);
  55  |             expect(result.responseCode).toBe(404);
  56  |         });
  57  |     });
  58  | 
  59  |     test('Login fails with wrong password @regression', async ({ pages }) => {
  60  |         const { homePage, loginPage } = pages;
  61  | 
  62  |         await homePage.open();
  63  |         await homePage.acceptCookiesIfPresent();
  64  |         await homePage.navBar.goToLoginPage();
  65  | 
  66  |         await loginPage.verifyIsAtLoginPage();
  67  |         await loginPage.login(user.email, 'WRONG_PASSWORD');
  68  | 
  69  |         await loginPage.verifyInvalidCredentialsError();
  70  | 
  71  |         // API → verify user still exists
  72  |         const result = await apiHelper.tryGetUserDetail(user.email);
  73  |         expect(result.responseCode).toBe(200);
  74  |     });
  75  | 
  76  |     test('Login fails with wrong email @regression', async ({ pages }) => {
  77  |         const { homePage, loginPage } = pages;
  78  | 
  79  |         await homePage.open();
  80  |         await homePage.navBar.goToLoginPage();
  81  | 
  82  |         await loginPage.login('wrong_' + user.email, user.password);
  83  |         await loginPage.verifyInvalidCredentialsError();
  84  | 
  85  |         const result = await apiHelper.tryGetUserDetail(user.email);
  86  |         expect(result.responseCode).toBe(200);
  87  |     });
  88  | 
  89  |     test('Login fails with empty fields (UI validation) @regression', async ({ pages }) => {
  90  |         const { homePage, loginPage } = pages;
  91  | 
  92  |         await homePage.open();
  93  |         await homePage.navBar.goToLoginPage();
  94  | 
  95  |         await loginPage.login('', '');
  96  | 
  97  |         // HTML5 validation → email field must show error
  98  |         // expect(await loginPage.getEmailValidationMessage()).toContain('fill'); // Depending on browser, the message may vary
  99  |         expect((await loginPage.getEmailValidationMessage()).length).toBeGreaterThan(0);
  100 | 
  101 |         const result = await apiHelper.tryGetUserDetail(user.email);
  102 |         expect(result.responseCode).toBe(200);
  103 |     });
  104 | 
  105 |     test('Login fails with SQL-like injection attempt (UI validation) @regression', async ({ pages }) => {
  106 |         const { homePage, loginPage } = pages;
  107 | 
  108 |         await homePage.open();
  109 |         await homePage.navBar.goToLoginPage();
  110 | 
  111 |         await loginPage.login(`${user.email} OR 1=1 --`, '123456');
  112 | 
  113 |         const validationMessage = await loginPage.getEmailValidationMessage();
  114 |         //expect(validationMessage).toMatch(/@/i); // Expect HTML5 validation error but it may vary by browser
  115 |         expect(validationMessage.length).toBeGreaterThan(0);
  116 | 
  117 |         const result = await apiHelper.tryGetUserDetail(user.email);
  118 |         expect(result.responseCode).toBe(200);
  119 |     });
  120 | 
  121 |     test('Login fails with uppercase email @regression', async ({ pages }) => {
  122 |         const { homePage, loginPage } = pages;
  123 | 
  124 |         await homePage.open();
  125 |         await homePage.navBar.goToLoginPage();
  126 | 
  127 |         await loginPage.login(user.email.toUpperCase(), user.password);
  128 |         await loginPage.verifyInvalidCredentialsError();
  129 | 
  130 |         const result = await apiHelper.tryGetUserDetail(user.email);
  131 |         expect(result.responseCode).toBe(200);
  132 |     });
  133 | 
  134 |     test('Multiple failed login attempts do not affect account @regression', async ({ pages }) => {
  135 |         const { homePage, loginPage } = pages;
  136 | 
  137 |         await homePage.open();
  138 |         await homePage.navBar.goToLoginPage();
  139 | 
  140 |         for (let i = 0; i < 5; i++) {
  141 |             await loginPage.login(user.email, 'wrongPassword' + i);
  142 |             await loginPage.verifyInvalidCredentialsError();
  143 |             // Reset form
  144 |             await homePage.navBar.goToLoginPage();
  145 |         }
  146 | 
  147 |         const result = await apiHelper.tryGetUserDetail(user.email);
  148 |         expect(result.responseCode).toBe(200);
  149 |     });
  150 | 
  151 |     test.afterEach(async () => {
  152 |         // Cleanup fallback (in case UI deletion fails)
> 153 |         await apiHelper.deleteUser(user.email, user.password);
      |                                         ^ TypeError: Cannot read properties of undefined (reading 'email')
  154 |     });
  155 | });
  156 | 
  157 | test.describe('@ui @api @e2e User Registration Flow (UI → API)', () => {
  158 | 
  159 |     let apiHelper: UserApiHelper;
  160 |     let uiUser: UserModel;
  161 |     let expectedApiUser: ApiUserModel;
  162 | 
  163 |     test.beforeEach(async ({ request }) => {
  164 |         test.info().annotations.push({ type: "tag", description: "e2e" });
  165 |         test.info().annotations.push({ type: "feature", description: "userFlow" });
  166 | 
  167 |         apiHelper = new UserApiHelper(request);
  168 |     });
  169 | 
  170 |     test('User registered via UI exists in API @smoke', async ({ pages }) => {
  171 |         const {
  172 |             homePage,
  173 |             loginPage,
  174 |             signupPage,
  175 |             accountCreatedPage,
  176 |             accountDeletedPage
  177 |         } = pages;
  178 | 
  179 |         // 1) UI → Register user
  180 |         await test.step('Open home page', async () => {
  181 |             await homePage.open();
  182 |             await homePage.acceptCookiesIfPresent();
  183 |         });
  184 | 
  185 |         await test.step('Navigate to login page', async () => {
  186 |             await homePage.navBar.goToLoginPage();
  187 |             await loginPage.verifyIsAtLoginPage();
  188 |         });
  189 | 
  190 |         await test.step('Start signup process', async () => {
  191 |             uiUser = UserFactory.createDefault();
  192 |             await loginPage.signup(uiUser.name, uiUser.email);
  193 |         });
  194 | 
  195 |         await test.step('Register user via UI', async () => {
  196 |             await signupPage.verifyIsAtSignupPage(uiUser.name, uiUser.email);
  197 |             await signupPage.createAccount(uiUser);
  198 |         });
  199 | 
  200 |         await test.step('Verify account created', async () => {
  201 |             await accountCreatedPage.verifyAccountCreated();
  202 |         });
  203 | 
  204 |         // 2) Convert UI model → API model
  205 |         expectedApiUser = UserFactory.convertUiUserToApiUser(uiUser);
  206 | 
  207 |         // 3) API → Verify user exists
  208 |         await test.step('Verify user exists via API', async () => {
  209 |             const apiUser = await apiHelper.getUserDetailByEmail(uiUser.email);
  210 |             // console.log(apiUser);
  211 |             // console.log(expectedApiUser);
  212 | 
  213 |             validateApiUser(apiUser, expectedApiUser);
  214 |         });
  215 | 
  216 |         // 4) UI → Delete account
  217 |         await test.step('Delete account via UI', async () => {
  218 |             await accountCreatedPage.verifyAccountCreated();
  219 |             await accountCreatedPage.clickContinue();
  220 |             await homePage.verifyIsAtHomePage();
  221 |             await homePage.navBar.deleteAccount();
  222 |             await accountDeletedPage.verifyAccountDeleted();
  223 |             await accountDeletedPage.clickContinue();
  224 |             await homePage.verifyIsAtHomePage();
  225 |         });
  226 | 
  227 |         await test.step('Verify user is deleted via API', async () => {
  228 |             const result = await apiHelper.tryGetUserDetail(uiUser.email);
  229 |             expect(result.responseCode).toBe(404);
  230 |         });
  231 |     });
  232 | 
  233 |     test('User cannot register with an existing email @regression', async ({ pages }) => {
  234 |         const {
  235 |             homePage,
  236 |             loginPage
  237 |         } = pages;
  238 | 
  239 |         // 1) API → Create user
  240 |         const existingUser = await apiHelper.createUser();
  241 | 
  242 |         // 2) UI → Navigate to signup
  243 |         await homePage.open();
  244 |         await homePage.acceptCookiesIfPresent();
  245 |         await homePage.navBar.goToLoginPage();
  246 |         await loginPage.verifyIsAtLoginPage();
  247 | 
  248 |         // 3) UI → Attempt signup with existing email
  249 |         await loginPage.signup(existingUser.name, existingUser.email);
  250 | 
  251 |         // 4) UI → Expect "Email already exists" error
  252 |         await loginPage.verifyEmailAlreadyExistsError();
  253 | 
```