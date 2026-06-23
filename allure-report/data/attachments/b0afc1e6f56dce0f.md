# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/userFlows.spec.ts >> @ui @api @e2e User Login & Deletion Flow (API → UI) >> Login fails with uppercase email @regression
- Location: tests/ui/userFlows.spec.ts:121:9

# Error details

```
Error: apiRequestContext.post: Max redirect count exceeded
Call log:
  - → POST https://automationexercise.com/api/createAccount
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 352
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:02 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=lG8zYyVrH6AyqH8TjMUlSG329nhRcaFBzjOtvXiMkax8%2FNZwGgqRNAQUhCZ2r5EbnttZqVrkP9sBTZmIaKSju0jQBTJ5ph3ts6VyuG6KBKbgrO%2FI%2By5T%2BMQ%2BkARYu1m3Kwg%2Ff2KNNTww"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cda9497deada-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:03 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Wkt5njL%2FlwXuHUShhy8c%2B7hlY6l9NqrLoPFG860nIdl0KuXKxNDXPhnzC%2FKKDM2QQLH9AwJJoOCaIpzQTopbagX%2BGz49QQUwTB8nnzNjud9qc8hnVWKNmkgn3EeIqrBADUdkj7einpPv"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cdaba92bb7cd-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:03 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=FfIbZRXf1Pn4wNKmskm4RQZ2hKrg0186%2B7qp8d8%2BQsuwu5mfQvefIXfgvfacVxXbUBNgOnUFd4sGAHkcjJc2zaGhPWrREIGcb1AaKbBF9M9dupxO0jk%2FGaFMZ3m9ldsdiAKoZ58U%2FPes"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cdadfb3e1279-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:04 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=DMKKOvrYn%2F1PS6wG5EH%2FyAf3HHR3RT8gqsM3wRhxF2C6e8sKHaNVi7Mp2wfxBWYX%2BY4C2RopQSQYEi17KLatMvBu7PzsajNr880aKuXDQUbg9%2BY7EzFC9jIVN0S%2FJZReoNJOwrowQxXS"}]}
    - cf-ray: a106cdb12ac793b1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:04 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=3rQx2Tzl%2FSlDQawiB%2FfCwU7uedebqMngzOwG%2B1UkBD6fqzc2G2hSN2kejTSBjabLPHQBDeOFj2mdLFzMD14vn1K320RFa0n5aqegeG3HJZHAyYMYWKCgJt3SLv0SB%2F4CwPDHHsA6fIMw"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cdb46d5ab78e-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:04 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=5M4S%2BAUBq%2FYwG1on4DjgLC231jknF3U4J0Dq5EZ%2F645uHSo0d2uRsolRNdsKRwKNFyJfvXSvzynns5fQBKGLCISmDJwosau7HL6ObFfy3xIyICyJd0ojHAIeX9g%2FpgsOtaY%2BMublBt6%2F"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cdb6ccf1fced-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:05 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=m5wQ2clhBXlj6XU%2FxYzZEqSbXNltmxaWA8yCLJHnZzx7UsfMzuFOy6x6AaepgOxNvk2dZM3eeBSlqY0P6fJpiD3EWPt6vXG%2FFI5JOAaVGJFjn0ifM3IoOqIgFnTkLcEm8jiUgxwck1gs"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cdb93962e80c-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:05 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=X7WggvAsaA10RBgzHJ%2FOj%2FIXmW6UbV3QbHwxSiTzgmYWpWrNFxQFUeAgBsR3JdcctVoF3yCFsmE3NMxViHMJd2bplFp%2Fbt03JhpFjvvTNj0u2sDhFSAqoQ%2B03BCLryeb9o5Ka%2FyiL%2FiQ"}]}
    - cf-ray: a106cdbb8be9b834-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:05 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=sp5KA3EmX5cyfQFCSUlFw4%2FD8o9E8ppVQsL7lDmsl88mOqf5fdCVdztmLcVKukqBi7LFzHhyxa8zf85FCfobSMNUy19rg5y8KoL6MulA6OlAk3KX%2BNt5l3AW4nepA%2BLHCSN6d%2BqtuHPO"}]}
    - cf-ray: a106cdbddaabc77f-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:06 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=4rJKpuQ6Q%2FmYEF6vf7wxVBkvBNrDAfomLK77MEcZID3BvyIRBGEWT5nypXrwOFBb1maxCDOkFg%2F%2FOr3RN9yvxttRe%2Bh%2FbeKpHgt6qmjhVGX0BNUjVim5CFQGPEQIgiPeyJNS%2Fmd0J0ST"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cdc03f8790bd-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:06 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=DIF2WIQF6KV0xPgdmMSfS%2BHexUv2eXO7TmTbLhiMgT%2F%2BvwvmOgQkCHsi6Xs%2F9vRf4ng%2B9xnv6Jw%2BNSbQHrSYY2gRKGlFZPPp8MxCUXW6y5GM5PFhByhUGzIha6nXEqkwvkB8PFYH%2F1u6"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cdc28c75eac0-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:07 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=KukQQCaW0hE31SYkcN7BpOxLCX4itCuO9vwt%2BrqeupxKIUV7XYQwFK2WLOppIjCzEABtoHe%2F6eRA%2FCucCso173ORAtVup2moVfMJ%2BqtX7Kt0PEXqbPsuSAF9dPX9NkwyuCc2hSa0wOZh"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cdc4db48a0b6-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:07 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=BCFNqmtVGc%2FVt0JMZ3Q%2FckfHJFq3mu6uxHsrg7pyAYjrjE7aVVtu2e4hZTOMEvUgKgXtUtgud28P2OnbX%2F9rFmeaIrz4fmNrU4Icxqio3a5e2IfAQO%2Bd6k24QEIdwo6Qo4oixRHK%2FDS3"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cdc738650d35-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:07 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=X1%2F31g2svvaHqeIPByFly%2BS88hHWHniCznBV1xRWFe%2Fr8GLhzaskErP%2BDZ5YZrphZozBt1%2B5zhKEB8aa7gt7DNgP3PxZ8XuhmYcztW6w8JnolRCihYvi4eJADaphWYE3T9rdorND32q9"}]}
    - cf-ray: a106cdc98bbfb33f-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:08 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=KUhWf5husJVnnaxYNzFAqN42wRdgZSNX8Hmf5rokjIGpLh3rlyOQqeJ6cIZaUko9SOZwf3xQrB4ag365wu5G2IR1dZ0uNZ9HCUafy%2FapeunMmFYJtOoJRPpmhnTTgQ5ekCZl0c%2Ff8Joz"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cdcbefeceae2-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:08 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=3OevbT9pnEQRlcqRc%2BZxpzwBotRd64RlePpARlopxsJGEGyGy3Yy9uXK7na0kJkj43W4yE2Vw6LZVCv6PVr72Mgtr8YXdYzuH8RNltAgjdoEMZDO6VkhTYnq8F%2BkTkPK1dUT2QapCoq3"}]}
    - cf-ray: a106cdce4fad41cb-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:09 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=lNnwYmCNTKdIlu9FZtzDjMItoN%2BRfq%2BuIrgxLr6QDHzzjl65t%2FVKisNoHKRZWHCKzif48foU28LKadys7yf1pDDzGKjOVKzn5pc4UsOI7Xg9a3ljYblIwv4mK6fB%2F%2BDlPx6lDkFWki3P"}]}
    - cf-ray: a106cdd0dbf6b7cd-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:09 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=4aedq7Ko9MJwPBX7NaqkxloGxjKwLQuDMmQGFYwoqfVzbaLiW5agpv%2Bxv7CF%2BGDaBJxiECp%2FH4xr3xZLKA0dzZLXe0juDwxqXjbD0Uo9vjGne%2Bq99iTReGfd7mhZA3TzbpWdL0KwHzib"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cdd36a311257-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:09 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=0Zh5Pb57G2sRWfvZvgH03tI0nOHvf1NcYpOY63%2BPBM0YnEv7J%2BtkHFLs9aS4YMbS8hSs49%2BvCELo2IkMjtTg7du9hBfMkp5%2Fery6nObmf4p1LBT1zcRzeaMpleCECJNQs%2BgobSqgxFtQ"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cdd5cca3000a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:10 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Zx%2BOzB5PEDDH6RwazrMNJISaLeYBXKarRq7MJHb0J5nBl4LGOqRG8kgLa%2FWURNC%2FzA1YXjvabY17iyBIZPHca6KksYfzCJATya5r3Gw0FtGNNU021dFDLZYxyyC3ItQaBfu86Z3W19Gi"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cdd81cd37667-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:10 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=nBEHfSHYdSJtJ8qnRcvfVNmGgcDI4xCYV88SSH0JcjOn%2FvMaJwZIBKoFY6Kz%2F5DGjBMNECAImQkWwJrFvrBbWr9xT4DXLW4hqLvOyASC3ga256j2Uu6j7TXFGGmxQKmvk3Lyq1qwinQl"}]}
    - cf-ray: a106cdda8b49ef0a-ORD
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