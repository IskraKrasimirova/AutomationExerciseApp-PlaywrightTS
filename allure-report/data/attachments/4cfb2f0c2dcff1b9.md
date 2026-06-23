# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/searchProductApiTests.spec.ts >> @api @search Search Product API - /searchProduct >> @regression POST /searchProduct with whitespace for search term "tshirt  " returns empty list
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
    - content-length: 23
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:51 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=O7WfQdPd01aIs9gBczgniIkk4tal0qjZzI3srHR6yW2NUBavltdVPhhwq2n74463x9hugFWSVwArh11lR2RXCz6SFvqUpOHqpAVHcu5BkgdoCALaSYVWrZQDiFAlnzmn4lIgjyFdGsV8"}]}
    - cf-ray: a106b5f33bbb10c6-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:51 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=p12shf02NAhYZ%2FkEY53xAQ1QD%2FAHt7LKyidSrf83JA9HNYWsxgbqTzaMAa%2Fs4qg5UDc4LyVAS1UqK%2FREWuysnU0aPcTDIWHFlUOYljL6DP8HatsgDKb8VLKo7khGheib54AgbPM5lNdf"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b5f5ae85b266-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:52 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Zcfwj9rfztjzljgrDOi56dfcdm%2B6AJYDfKStglL4ixnbBevAdHfzoMgcDRZzXXKOGTk3%2F%2FmkiVZA2ml2W3qXYdFrYqzYhYb4LMo1aeCOERWxZsm7DyNGPbPtiffQcNL928flQTx3Ji3A"}]}
    - cf-ray: a106b5f7fc09eb05-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:52 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=GjQZtpivNxkNr0qm8UCat0KOO8RCBzwtSC6OOXBv5aSNY%2B45G6XHgZnTB%2Bew1C9L8D%2B5x3yztKMNjNSK0a2pEqYbX%2B4bTd6jlnuhpUiuIV7tyMXLk7XkM7apq3BcmKuFqCKDHf8%2FgxHu"}]}
    - cf-ray: a106b5fa5916e801-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:52 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=mMUeOkXUrHABZ3a2nkJZ5MlMnTL1RDTrhKeOifNnpMESOnmkMHASrpC9o9PW1PllWKq4zbRoh7EBvVhj2y14D19FkQaNp0CXYDfUmGGIGt8j0hICl0GPqFliFTRmhfHVVYoxltiWaFIp"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b5fcb8487aad-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:53 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=oaa%2Bdhzoul6y0w043GjtKVM7QGHmKSAuBsI7uSvDhNgnGRa3SNS3Z4rALoPlWGnX9v2Jx9srS5kOvGs9ItdvHsBsT9%2FRFq%2BY%2BWacjkl967On84CVYralBxb%2FgstoqOHqSb%2Bx09Dms3th"}]}
    - cf-ray: a106b5ff19c9f571-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:53 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=KpJjQ6atqaSUZo84Ac7TSYmeC9TsJ5k2qOh4XfFEEdCqQ6IosGi8q2BOTJxTIDS0TeaoH7Sw%2FsiLkXlDlCzU0IZN6cQekxLBaTJlC7k20Uait2eT4f7%2FIwEk58mpxLFPXxrAN8CqEQOi"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b6016f3a0bcd-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:54 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=DmXJcda3jfLtKPH6cx8Ihjy72rtXISCmxjJCWOccrqUvfoFfjKeHi4mmtJld4i0fHKFiRfuzB92VpoW%2BE28lpN8kfv%2Bw3AIWuNpTwVEDUTkqh8n6EQL%2BHFUh8p2Poc571luNYOleRABh"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b603bef1e802-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:54 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2FQsXDj7ogGKdpOQOm%2F7E7N1hkBLsJbyzxEP3tOnqyQydv8tiXvl%2FgiZcohMkOOlBezo%2FDUfFmzFicSpgugucmpp84wGI2Or7B%2BInqKjd0CdVO%2BEiyo%2FYBp%2B4xMYlhfU9gXOAariO0W%2FZ"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b6061fff15b6-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:54 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=VXy0ZFxwqXVy5RA5Xa5GPq42xsFZY%2Bv9PwrTouTjm54aNn5IhNQzbZCccL1s8WzC5oh%2Busk7BMVbXDlcrGhZZSexpdeb5O1RPmyfcamEi74RDVV2BbF%2BZAY%2Fkw8EKcMFGN0hOUkEc9y0"}]}
    - cf-ray: a106b6087ea17815-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:55 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=t6Ov4xDkDW%2Fy6VpY64mJBKl0zD3e8AnDdeOEl1DiZQZZt0hCybSLtxkUXu2WFQALAUTZT3zmNaldWcX33Gins7IKdissGA5%2BwTBYE%2F7q0p0UkWnpov%2FFAz%2FXsPrVPW6cQn%2BFbSv8Q0Um"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b60adf85b0fc-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:55 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=vEa%2Fa%2F9ANXgezaJsYNQBssB3iToTZq5sGIV3D9DqMQvcgS3mf1nWhjMowaiOx80%2Fu%2FAXT3%2BbwPlS0JOmYnPJY2Ogvw02TwZLXWryyf4ag9gJ%2BepJ7lakU%2FMVnTBlDoCvIuGeiIbd9Zvf"}]}
    - cf-ray: a106b60d3a9710bf-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:55 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=gNO6TniPEXesxF87GhFpF3pZg5%2B7jARm%2FNLBNDTrp5tdyo3dKebuyiGNGSk5jlPaKG5Ju8OQScG6rq6Jktaz8auAcGhx7yOwAgzjem3WpupwCyhVkWgeX3weOQDwa1CO%2BHuvBfPa0s6j"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b60f8aec7667-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:56 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=R4v3Fps4vJbtgiMa%2FnXWob8MssQhXUFMFnLbX%2B8ET3aEXHf9XdZWsF6CBaYdcLhHq%2BaQDvXINkwpsDxZL082mrXndTrq7wkigGaCr1o3wWbZmhIFFSXpEPe4KFVBC9cJpSUdF3txeAmH"}]}
    - cf-ray: a106b611ecb6edc5-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:56 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=uGktZ64Q%2BxaavDfMHRv26%2F6QNSb6%2FXyrWjwwGf8JfUMeCxP6LTQPiB1s9c4FV3j5yZ9kn7PCWF9LESic9dcUGK5eRjWk5Fa%2FR%2Bn%2FMnYqwzGGUW%2BZtNFnS%2FIAfuHktxSiwDrPhSs9%2Bxh%2B"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b6143dd522d5-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:57 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=OJZquBYhSVw%2BUpwY8pSmxdYqZ%2BUUk7laQgrGnKL9dn6bAeXUBdqO%2F%2FO8r9iYKbC7AdXx4QoIyyYnmgJvr5b2F%2B%2F1B01ynNclHqxnWucBpMl6H12Tcptatn8LGqJ909OYO3bLeIOfBAYk"}]}
    - cf-ray: a106b6169beb50d9-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:57 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=vkbUP8K78E8A7Bo4yKXMMeL3%2BO2CDzGfxQxyqBU%2FjzweLtIUIxusbkZLOWICH0cVqb3BP4L4zVPS492pBfYCKCbe6rALMUlXO2GgFmskJxf9%2BRDowXQehIg3Q3lLPnOzSn9RFfRdHb5X"}]}
    - cf-ray: a106b618ea477073-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:57 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=j11rVGAB5LFOBgVSTdJLBouHCdbAqHU6E2SzRNFyCVeSSSryBIAIY%2BjdNRkvbFueYQqhxzafNkkihGa38kZ5g2Q22adBoRADYMgWgkxlkb2KAfLGZzdj0RKmwDEItrnam1jqn6nyZ6in"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b61b4fb40bf0-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=w3CdjwFquOdCy36RwfY2WbY0zRTYP21hyeTBdfUNfJGgL%2B%2F6IcCMZbuos%2FSZ1ajBs%2BCM1GAcQTlaecSg5TMnxVjFZ1Nkc38BUCO%2BjvJtw9dhgRQ%2FNGpSdwlLW9iA1dIdOA9TK6n3fo3x"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b61d9c79eae2-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=AkOkLw6X0Mm9rpYJLttDBNu6N%2BC9FkICgl2TyiN4N2cDS5I8qF%2FSStOFPFPQn5USeXYDt%2BGjjhsWJdgkeaBar5Ha1Btiq7KnUyCDoeaO0GATeSsyPhTzIzgwwKwV4RsIw5R3nmGnmMV7"}]}
    - cf-ray: a106b6200c90e168-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=I6GznZpdqnjGAcEIVGa4Mb0ewMaYLyD82uct9vksLJ2TpeWkQxoUWpKNg4yRzqk1J02CPtbdT4MQ4Swg7zMTEKApzY0sgUSwFdpgYBnDxF%2FvwPqlvTPxH0VN0IwZ7DLlmW7q1wYB72jU"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b622699ef97d-ORD
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