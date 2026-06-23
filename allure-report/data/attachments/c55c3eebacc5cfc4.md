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
    - content-length: 357
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:09 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=QZLChfkEQBTWHI7I%2F7XSYwCafr%2B7h6X1zDnQczxzVih7uwPUkaA%2Fm3wuhpVzmUpwrVxIT6g%2FjvULMedfc5Cd3%2B8fVx83SzLWAG4XvvGpoK1ZIQzvL3AEqS5kxQu6jXrlCbZcst3iixg0"}]}
    - cf-ray: a106b376099652ca-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:09 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=q4tBEap9mGzWrJGNP3I5d3QsdFZMU7UbrORZQpanYz7qEVQTkq8CCuTOH4ncK6EMFwzXp7nOOt5xFE8cGMmYaZj6%2B9uJ%2F9EVqtRJdqsk%2F3Kx89A9pm67b59ycYh6AZGQm4tYtkKxLOy8"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b3786f1ab0fc-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:10 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=HrzCDnnQkXqVw8tTdBdCRj9aD%2Bke%2FmOiKzHYG7z3QhkvANoCPzqjGwqcq56NE6DxUcxClRPAzdaZLNqVg0IRuONtlGWH9L89DKPV%2B8z%2BRP8B5Qc%2BrEXo07wYdpRFJMWYDlh3Dbe8Iy%2FY"}]}
    - cf-ray: a106b37abc68d7f1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:10 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=hYTWJKWlSpV5M%2FRd%2BrhaSWuKjBBS3fS%2Fl7Xbn2fb5kyKh0w7Gi%2FvsU6OYv1Tnrgn%2BEL1uIL395BNC67hZBOC2p%2FaVvxnh5PZowZq3iMtuwhxqE3e4lI3QzJr7kPscnY5%2B9blX18yj9fZ"}]}
    - cf-ray: a106b37d1f56e168-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:11 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=P1ZdnttYn6PuhAYtzpBIl81bsz2eNnAIjnKGjtVS1LPkYSzOQ611qz4KJM7tTuQMvbVuzBhgT5ByovKNId0p6UN2vKaZqahbL2A3kgnw1XlKXrBzluGjuGMOHWLdolPNLdKVj5c7UgUE"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b37f791690bd-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:11 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=vUkHEdr3jmEgosEpKJSTjM60NfZwcpgzwvbKHzgzNWCrYPMgiBO5RfBpvB3%2FI7MS7bBZ7T7FJ%2Fzi8NkbvIneKNQhJaGaidAcMVvMmZhmwH0gZnUW4386tZIf6RCVtlwgMsdbg78VSrXC"}]}
    - cf-ray: a106b381cbd81cf4-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:11 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=XPnSxL8WLr8TA845WJZExrYLJdhAbVTNafn5EzK9l8EhK64AnQSx7GxfJw6mtnqKI1fDrRZyvmBsvNvkcEVSTlroLexQY2V7QnSYnNjHLH3PcN54mSuBv6%2FClMsOffcWx6Nb5d6R3EAd"}]}
    - cf-ray: a106b3842b981049-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:12 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=K82Ptnnur5Wo9oqGYkPG4%2BXBZswFyO1Ka0akqlLZv7rUpgeDD5Y9GO75Q4OuCk56l714IBZ6UiiSGdSDp%2FbU4FOciY%2F07GrBTb65XbLQKUyiKGPt7bqfCy6CjUk7ld09A3s5p9HQngR%2B"}]}
    - cf-ray: a106b3867c21b7cd-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:12 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=05TzTuqdKvOT96cgmcPFQfSTNNOE%2FI2wVFTUsAPXhewzJ%2F7wg1ArABu4buQ6t4CvHp%2FHqsXSwTzI0ZuwmnrxP%2BgfOGQeQztoIc0MjZBycFnqIGTuccoI9nPt2kWTTSUCbcE1enZ9bHsW"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b388d9d0eae7-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:12 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=KICbSS%2BnxDcwAGXWLsm7A4cFt9J4L4GmN0rpB%2Bt9Ly6NyFfJmkS%2FvnmynvlIKxzY0rVGwBr0N58qIXB5lgfwxVVHyqVn7nGK%2B2VQ454PYgf%2FIKB6FRA4GyvjRaalVcud5asnNHwTROkK"}]}
    - cf-ray: a106b38b3c8383b9-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:13 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Srl9xqb9lsc7NDmbVBPREvw8cPLwES0PDzzy%2FK%2BttmtZkcptjxInMP%2BEIl36eynHgPJvb%2BA%2B0%2Fzh8a7kE6FWlNGGdZ89Ep%2BxCNPf3cFehV0ok7W4R5LNpwOuSFpyVVN9BsQbd68sc2mi"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b38d9b8d7073-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:13 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=61wSxKzLM0E0F4vZBKlDnD9V4cDzq%2BKTwzC20hltV6J%2FEhVSYxMZmewe8WZcxeIosWBb9Y6qBIaUZVi8hVSkjD6mSdk%2Fmr0MyLjWL0rUxQ2b4lWQRgujtz7iD7vjbeH0SDANq5hAWT50"}]}
    - cf-ray: a106b38fe8851257-ORD
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=5pe7W1BRGoYz8N%2BwoIQzMZIfQJD8kOLeMMxbM2YQ6acwTJqqvMvJuPDKsbLzcFvD4dymIQpt2Rkm51JPjexls4oZZt48sb%2BONGpzXMaE8oUucq4vEyXfNBexvQq19ddqm18fZ4a0HF8k"}]}
    - cf-ray: a106b3923d17e7fc-ORD
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=3Hpyf7eE7WGtc2%2F4F26SeiDcnDl%2B7MHrFlEhqeznkzo%2FkAHZMiQdEg0ydQGjMDEclHny5og%2Bpx97v4%2B3xbqJA%2BPRuhxlYtniwIZgnuHs6mgvYg2OLuHs5cAkzzYLm%2FTBeivDnPRgHFL9"}]}
    - cf-ray: a106b3949d4eedc5-ORD
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=QNOBHu3Wtt7%2B%2FXOXbxHfwL5ubV4eu%2FU55CyE%2Fmw%2BpKgvKctWgk1vv9Xum9vdNz7RPRKV6VVAQq%2F6HsADJ9iWLkMvISATQN6FPCvLrHHVX5oCBoQ0fXFcq5q26e%2Fpj%2B2kHLVmlKnmdNDD"}]}
    - cf-ray: a106b396fc07b266-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=HFR21umhit2vqhsPZT3RUnNfDUJ7d2pwCmJPaMCHQSHht2XzbM1IIegKlVSMBKfmi0lqn75cPl%2FU19GjEtqgq1AQYf1OXbXkxvUgV6fSRBiF06uM7E0jcrg45gm2sMemIDApqkCYHuCj"}]}
    - cf-ray: a106b3994d4cead6-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=zBY8a7Y7NVMDdNxRiYCCRDCmmHQbSvH6VJcMa1Wurt%2FwvKG121p8adzD1WJLw70ftygomDh%2Fp3FxPdtI37qngbz3f8D8eGS1vm7j05j6TLIZc20vwsLIb%2BqjJiSyBNfzIS22%2FiESM%2B1o"}]}
    - cf-ray: a106b39baae83426-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=FTv8Li77ZRWNiCHJ1bRFREk%2B2jTdwpX7JDSS6WdCC%2FD4v4K66GDd6EsTGtyQOlBjlXOkqt2KvFfU1SSsluO4g2Vy09e7sHbAxQJYiWTKiREChHFuUHE%2B5UKTszb7fRWWQ0N%2B4WIrNZ9x"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b39dfc1552ca-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=vT6IOYEKes%2FtDK6L5AqaBDZMdsJF2iY6PSy7kugW5rzC2tXw9Isi5xH3q8ARfDDDc5soY0zM471Q%2FFdkWZhl4rXWOvYxvH%2FP53WHWPXKegLkosyosEw8gdJnfb23R8tfeboBEznxp6h%2F"}]}
    - cf-ray: a106b3a0682e2321-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=YWmlwOEq43HdzmWg9Y1h52pYYKkeMPVLOxzrdusuXwYtiqzDQ8ipAne2TLicV72oeeY7JZw9q45STotMJeExoRpttJtAKTYwwuZjRMFz0wIiuJgawJp4skL0hZbqlPmF3xVQ2Cl%2Bl%2Fqs"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b3a2ba4d90bd-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=6cgMVhlTAtya0a%2B8%2BOfE%2FHxkkcKQT3tMTr6TLT5bCufXnhx0njN0VaLTBZukbK5fAeGeB7ORp22sclWorr7iURNQbQ7d2UBknk4B%2F3Ar6euub5%2BKvlX4JT0Ik%2FVgr0Lg4Q%2BHVq%2BATl24"}]}
    - cf-ray: a106b3a51c94da16-ORD
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