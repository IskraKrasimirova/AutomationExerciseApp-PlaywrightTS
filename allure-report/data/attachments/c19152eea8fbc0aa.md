# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/loginApiTests.spec.ts >> @api @login Login API - /verifyLogin" >> @regression DELETE method returns 405
- Location: tests/api/loginApiTests.spec.ts:129:9

# Error details

```
Error: apiRequestContext.post: Max redirect count exceeded
Call log:
  - → POST https://automationexercise.com/api/createAccount
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 379
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:30 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=qaXCHIxDX8lryPw4o35HmDtFmkV5reSWxaALr1rBoL381M88nSyt2l9Mk0XUfqjgP35wsJprdn0yOxo%2BZ9r3Way2M6cFh46XdUupEWf9jmbiqlICgcUf0izFC6EOcefiEfuGc48J%2B%2B9r"}]}
    - cf-ray: a106b3f8fb9e2321-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:30 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=bC4LIZaQ4r8%2BpQe%2BZWCiK26Uu1wMDK%2ByZZZrzZ11EqxBvrp0gsfFJfo3vAv31PVWQL1kC0w9r8twBCyhoCBffG6%2FDAK2bSwpa8dvfwANRPCkEj9WTkAUIyWxHd4AA4cC4f74byjn%2FNcf"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b3fb5f327815-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:31 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=fxvVqDo6ly11wCa3IB%2BpD3mRmt1MCA752QP333vAnAg%2Bjle3%2BQexhqsraynj9eoB6m7JpYvSECDJSC%2Fgr8bpzJKCD6jkNe6yclGbuNWuU5jhsM0RZLtGYvaWWGXucZsYI6y8QyPW67Lo"}]}
    - cf-ray: a106b3fdceef0d35-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:31 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=SWusIle1i4kHX0wiCvA49LOmZV7EpEn7bF7PUUe00Ppl0fN5Bov2Fh9BJahWYNVjzf2vIV9SFi8WHaXuVDmBhgRVlYz6MkrnFDnWRvX9l0BnrssMHQ2%2BLiHTVmTZeZzefR4O4eygkgO1"}]}
    - cf-ray: a106b4001f981cf4-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:31 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=bXqIydx1lMkqQMVhe9gHniINFd%2BmRqBQ1c%2BD3rkaqmgWe50UUe0MxpIZVuHpeLn2Ro9%2BOjB6tMvFiGeNewgoAXMT%2F1aNRfTizfitukINLJe2Go%2F%2BJZyPDwUVWPNExqSz5loVxRyV0FWk"}]}
    - cf-ray: a106b4028b97e23d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:32 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=WLCbFqzwTq2Dj%2F1uiZ4xfjELdRKyjwMDYVVdDgcAVHMZUOxKh3qNEavA6q8HP%2Bw0KUPEKVnL2IHtZzQizLDFnQ9n1v3JjbJYF1mCVDKUZQvcW4Gh7ARfJqQLSqq2ZE3ApdZjEI18%2BihD"}]}
    - cf-ray: a106b404e81e771e-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:32 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=BLJdjYbozdtRAzR%2FKaVxkYnfValGJjjIig0OT5TIQgxxuOhthwwXOvNCPCdeiAPJ%2Fm43ux%2B0%2FFc5WNDgTXtz7x33VmCDkjgwW0g7HSX0ovBXMG50BrWAcEDWrOgNpLs%2BbYlNsvMnmHZy"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b4073ac3b266-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:33 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=zdn%2BwL7UfyPUYLzjAOkCM1%2Fxwv53sDqauLVmIcHqKnf7XcHN8I%2FH24Pu3ut8KWdBCLqcBraOFEcOIDiue8%2Fia6OOc4u8N13GoyRId%2B5Uk8IHCzbLba5kAwpAB70zVnnA4GSi91Tbm06N"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b4098dded7f1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:33 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Vz8f%2FTP1vLIsD%2BRkBKpf5iSX%2FmRO3ZUt32AF6RSURTf5ZYG%2FzN0NHyBm0kWlnmf8V4pPMJ2kINYYGaKvv4vs0PRjnINAIctifY0geDgB3bUF9hmtH0wZMaRJZLU1bGyVZepxtaZ2AGw4"}]}
    - cf-ray: a106b40be890115d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:33 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=z2CirBrmXOoasnX8eylm412FVG0X7jSbqhbjLH9CIEHTN%2Frj6c8WTaae3W9ahuExoDguZtC2s2xNUuDYXK%2F7bS8L65yqrWh4MlwYkULemXUceDU8aVq7tuC6Rss1nDc2FO5jhkIrfG%2BR"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b40e48ff93b1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:34 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=bxnqFDl7SltWEUCi9CjFiDniq6JZHtZMS0GNQOIbYRdjOkFV7n%2F7ew5%2FrW9DeQxnpQLFQ%2BcSTRzzgBXLz93bDM0mpBrLA2q95I%2FNjSIqp%2BeuVVGTV8AiZzejkBmqlMKWV7aVYFqXmaPO"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b410adeb7aad-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:34 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=cF95%2BoavGquHOQEeH%2BpvV5S6HRUS9fb3cZ5DnTbD8CzVSgGVw5vVqMi%2FReI9%2B8hkjjMGaTL89xg6lbN3dvk8lByx0dyDkVnhgN%2F5KlU4PhFzzMkCxTaEPqquw3j7pxim4NI7irBL8Gfq"}]}
    - cf-ray: a106b4130e443443-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:35 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=iXTXdn9u5z8QbiINhtxGkv3Jzubgf3PI6fKpy3R%2Bt5Ef0x%2Boj8a1jdVbqu26XKU6ZEay4owTduhzx5SgGVmFoq80%2Bd%2F%2BBdKgO0mqtkF0zSKZuFsWBf%2BvtWXrntq6T7PyrkSL9WprJgHx"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b4156a1dda16-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:35 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=C2%2B2V5lhyHqcqRl0GF4Q1uNlOZJURtmE9VpBZXUDMAH7SbhkCDjqWXQE%2FEXJNtJ%2B%2B8647odGeOV9tcl6NtQTjKeo9k9wAnLKQDxziRwAFYQY3p8OEWX%2BrB3SmB2Of83bEE0De8if0a7R"}]}
    - cf-ray: a106b417cd41b834-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:35 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Eg6652%2Bqt3snhblKKQtIRzn%2BPtlSrK6rMEiuKlJTPksNhmTwfZTLkPNBeZ9kq8MOjcF7r4tcdNq1Zdh%2FGN2ItwVG2cpdZDya%2FWt893LXvE7%2FzGRHrCcZJmyzy3DFNk%2B5PgTC28l0pEqa"}]}
    - cf-ray: a106b41a1c3fe168-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:36 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ZYWQbxuJYsaqKV6FmVZE9MoemyBUzsEASMzabOBOWbaBEaq9A1YDRfWTvx3NsLtDe7%2FT8eMB%2F42NqX1vgkSh%2FvE1L463HCdcgpCwWGk6sNVn06ENG6IQnadG9dgWW2Q7aloJtTF14YI2"}]}
    - cf-ray: a106b41c69a2fe20-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:36 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=AvrubTZplUMx4ZR0rVxrhLcXYXejCfjdCKLc0nT%2Bd%2Br8uKXiaCK8M35nr5O8YKKKw80bTzcSJUddHuPitV4fa4WY3m4zAr0HSnOF99fcsc1n%2BxfqYBqpO9NDk3gzhaL3n0vI257L%2BND%2B"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b41eb83c57b1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:37 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Jx4v0NdL%2F7sdafy9YsPJq9H83EBJofeU0kSGvIFFY2qKvb%2FiUAK0mXKjhFcw8Lgmug1vTkubHI7FPI%2FDNwN%2FhB%2BSK2Ev6vO3j9yn%2B9%2FLV0Bhksgc1BeM5Yjm3T8jrxsYxvRtVfVNEiUY"}]}
    - cf-ray: a106b4226f46fc38-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:37 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=TEk6%2BvxflVEmXS5tM%2FPI7ybgluCVsrCGlzbzw9zjko0QvuGX14sOpjVEvxW41v4xU5Qmtjik4dsZ9HaoavTFP2FrSM%2BxWnvooTx8fZ58GWk6Ebuqr0bt7ycB4tYO%2Fb5FWGicWnP7AVs0"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b424f839edc5-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:37 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Vx%2BM%2FWeQPWw6KnFNuInG91bK7AmhvAqTLGSCz3NrBtpAGXAjIjftYt%2BAtfqg%2Fgi6yM07tRwgXQHHMKJswyiFIcDHDFYf4%2BYPRni0C%2FqyKVTGe2EZCO9JFeFIWMeUKwqLVVDrL6yvSlS1"}]}
    - cf-ray: a106b4274fa350d9-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:49:38 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=L7inEprcEJqGhTn1Hc2k3UoPEZ833sJs9Xhm36l0wDrSYXmu3N6eNWXXxX%2FzJSQZyPH0h4g9J9ulmRyCl5ZkpAk2sLkNerBanlkgbnMaQVIMkrA%2BvbNsI9GtKulPIsHFsQQQBDOM9ik5"}]}
    - cf-ray: a106b4299fa1771e-ORD
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