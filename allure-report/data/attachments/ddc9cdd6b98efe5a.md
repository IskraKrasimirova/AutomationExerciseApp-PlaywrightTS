# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/searchProductApiTests.spec.ts >> @api @search Search Product API - /searchProduct >> @regression POST /searchProduct with empty search term returns all products
- Location: tests/api/searchProductApiTests.spec.ts:73:9

# Error details

```
Error: apiRequestContext.post: Max redirect count exceeded
Call log:
  - → POST https://automationexercise.com/api/searchProduct
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 15
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:23 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=X2llmSgrOX%2BSkU71EGjGYuQE41pBNsH22c6jtXUN%2BRsanpLgLx45fYD2U8m5Ul0%2BnGq%2FY0stfPUaiAISU3Tsc0CcfTj3Jj9U7arzs6evUH9%2BxE6z5D%2FzQkbmEz%2Bjp3OoF%2FgsQMzXOX43"}]}
    - cf-ray: a106b5460894e23d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:24 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=lvifq4%2BradxxlKlLWuOXFkXE1IgUnnik6z6X%2BrdN6JSaRjmW6uA7fZUL%2F8PLtcwC0BhY7f6OMe4qQjsIOcvmbE7awjdsLv48JmUdTLBZ1CisXzNefph4SXsuKlJNsKQSUR%2Bsl7GQLgL5"}]}
    - cf-ray: a106b5487fd17514-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:24 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=jRP%2BGJAr9liIbpmugW6PakFXID0avGso76yA%2F%2F8fJ9Jyer6Q9HlrvL0U1FlDDt1OuEjFLOQPYti%2FUSdDup7vwCyEHY7nv52ASmzcR2W1CS%2BOTrHGsCNelhBWpBsXQBC8kXWtzv8oyjLC"}]}
    - cf-ray: a106b54acc706178-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:24 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=zIro53VcrzD2%2Bl79vHqPRTTTxOtHvsnqZPLFr4yIAM8u43eZvyusSO33HGEmzZzP8dWekCK4YY0xT1b4EIdq3ARMJsZcuhKXv%2F%2BZoAoQaq1JtHRFXXyfagkI63CCXdIJXsbX8UlZ38Mm"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b54d2c1eeb05-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:25 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ufwIK6CKIbFHwGFU4R92R8WPmu9Kafq7IQoOExCGQwILJ1HhT7qeegKfU4kfk5A2J0D%2Fj0E2Bgag%2Fc%2ByPpruBHZ%2FR7aHZs%2BvJpIz8tvBDa7dsk0R%2FFrgS5f6er0IFaY3sQmttKsrCBzK"}]}
    - cf-ray: a106b54f9b5a22d5-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:25 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=KdbAJuwAl8ZhtLlS9N0TZSqnZdwsqxGMqqkQQ4wtUMpxO1BoIHbuA7wOYQlEnnh6UBFrmwmpnPHVkbqdAMiFPM1DPvvMHSjn7vuLAIC76Ow08YJZhGFrIrFpA9FUBKlhV5MpympB3uXP"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b551ff362ced-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:26 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Wp2xW9nuWcmUFPiZki61EJw3yahSaf7FRjhtSCwVGbBsWK3Jv6tg0EDQ%2FHIeHdAzIFVyIyialCWAn89VQBbjs5j4lGlwgzM2rvPBUYN7ls4FrKCXT4GDuw8nfmwUtSJowHEthuLdHnfI"}]}
    - cf-ray: a106b5545da922fe-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:26 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=g9jQeI8wd6V%2BQGNZitRgqB9ju18I9aHMTCULc17qtcC7HoCihb8MYOTixsZdTOj%2F%2F6JLzAJRN%2B0bBjMlMOZy5nRk3X73dBUw4tJPWmSO2gywUz4Q%2BkcC24meYT9AFAlyWT2%2BRlvpi5Fh"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b556ac5eeae2-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:26 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=xTyIXuyqfQj1cfssbe0qaTOrcv%2BJlnrUCW6JqIUaguvNUrSEoD4YlrugDafC9iIMKBf4emrWyrRm5zolqRxWB%2BB9vVjZ14ZEzZ79iVpIY9CTTl4e3nt8ItD6K6%2FQQBZ%2F%2FS%2B9Jue9QocN"}]}
    - cf-ray: a106b558fbf322e6-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:27 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=6XQpwNDcACWBrkJHJK1Qb%2BqRPcU73TEH6vJAaT%2FGg4eeV%2BohSmHSogkDGa1nNfQhq3N5oOPRYxqmZATBCKSeCwS0NfGSlt3kwWpgjDqfwIxlrBJyYR244XTtIJgu52SNpGYOjnRsY0Do"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b55b5b167aad-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:27 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=wFvuMp0Zv5OhVE%2FflnrbPhRvVFeSrYowAMKvLwJ4%2BlEjsuiVf1LZbppbdtS3cIhiJZVvWqBqqRY7xInhfiI2q0Q8r1%2B1QGX4hVFNecjJ0r9iBMr3RiHqs4ht5gnIUUqMvCx4dQSfoJ%2BB"}]}
    - cf-ray: a106b55db81a13a5-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:27 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=tPiKyDl%2BUDpNKnbC6AKpo1IgbqJdfKakVCPAs9wrQcGvCztOfHRv%2Fo5lftw%2FF13yKDndL4%2BYErOp0Pc%2ByMveq2V%2BHtkJf0SxPPLmLHcDA7Lk%2FNj%2Bqi1BBHksAsJvk%2FVhRN%2FZn11jna0%2F"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b5602e89634a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:28 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Z7g8%2B%2B3r4AIdiLzQfLwJB0NuyGMUDXNZUttGGc14EjFXKo6tkoEl4PSmEtCrb2ca4Hrr96uURr7MO2OQyit0bQJiVIn0Awjo3GGh%2FNhdromdzL1pZ8N9T0ksVGh%2BR3nzUxBW8sKZ%2BKVC"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b5627f93eae7-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:28 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Fe5MsTx5VJ9g7gCrucgvguIv6n5CJVivJI1OSEyUVo4FOuU7BBYMqHZLeNcOfKE7qrPeDKJHDF%2B6hs7IvcsWRdiXhtYEnVshwL%2BNPsjpngU%2FoMM3IArzZKOPhXCUTwJ2VxtppsHUK9H8"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b564d97e57fd-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:29 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=8BwqCcdeB6Ih9K6SfLUW0vmMPSpKjFERI%2BkcYqPUh%2FOQ85KnSQnFe0wIYP%2BZSOEhctKcLdZkbsD%2BDRFB0O0yoyjQEXyq1rTRq1qJQZP09tPAav4RaSxwzG7ZXP0BZRbSfv%2F5Bkl4y%2BR%2B"}]}
    - cf-ray: a106b5673bddb0fc-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:29 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=kvzazsTbB8BA%2FZ5RfCC543kponEfCddNMB1wVTzyQLE2Pja3mBcy6htkjUO%2BVrYy7x%2BKGnt444byDCpe1eRWMkieMoqXmZRSHZMUH%2BqB7x4mt43Mq%2Fr2lH7chNfmqAr7KS1Vn6NyMYWG"}]}
    - cf-ray: a106b5699d7450d9-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:29 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Akb%2Bm%2BZp66O3qO3SlfxaOctopHUabJjJWb3T9M2zymwaSBWbXvCSU4YcPcZcSgu8j%2Fqic0KRNawkTtcaR26d1Edq9vIUHViWgF3E7A8RdZv5Q9r62q5YRmQzjTHopRZcq9kgQ383bwHd"}]}
    - cf-ray: a106b56c0a311cf4-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:30 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=QQiTeGT8FmAzHPhONtnbkLQNqi35%2F1pnVqgfV%2FXkQ7O7luafUcY1AAvppB1QqxUMHKVLx2ojLo5nLvCxv8VKpK1wkJ2qcT4P8MlutPoKuXmfSoh8f9su4o90sP0%2FvgNTuaMwGgLKHyJQ"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b56e6e9fab71-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:30 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=9Ke5kV2%2FSYXZz67acATb6IXRRjX5C5sQsxbxJapQkVrruZTMju8eFoIdEdhG2yHNuEX%2B0ykNKttJPZ6rKYYtwD8B1L%2FlNqRsnTGplWxB3Wf0QadjuDgY%2BOw7ToFwAct6Rnt8AQpWUyKR"}]}
    - cf-ray: a106b570da6a6178-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:30 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=JjVwJcXwNjNhYa0g0jWjpmGcL6jrZ4mnwkmA1Ed8EOJThd2KyBk1lFrZpMKQiH0cAhZXfvS%2FrrlJ9rLEngarnyoigIiyaISLkBvNN2cWXxyAnj1ig%2FeXMrSdJWyR4Empq%2F4OO8ew0VGq"}]}
    - cf-ray: a106b5733ec9000a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:31 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Q5%2FshHIc4GFAHpx4luDaCtJj0WwjJl0Qa93vub%2BrdfPTwck%2FqbxTG5gty4VV5tPoZ3ofGR5fSeEir9ak02l961EA4VQrx1UfoRYFUpBvV8CnylBg%2B%2FBoaviZOF11sOk76%2Bg5JQW1MEL0"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b5758b79771e-ORD
    - alt-svc: h3=":443"; ma=86400

```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { ApiUrls } from '../../utils/api/apiUrls';
  3   | import { config } from '../../utils/config';
  4   | import { validateProduct } from '../../utils/api/productValidator';
  5   | 
  6   | test.describe('@api @search Search Product API - /searchProduct', () => {
  7   |     const searchProductApiEndpoint = config.api.baseUrl + ApiUrls.searchProduct;
  8   |     const searchTerms = ['top', 'tshirt', 'jean'];
  9   | 
  10  |     for (const term of searchTerms) {
  11  |         test(`@smoke POST /searchProduct with searchTerm "${term}" returns matching products`, async ({ request }) => {
  12  |             test.info().annotations.push({ type: "tag", description: "api" });
  13  |             test.info().annotations.push({ type: "feature", description: "search" });
  14  |             test.info().annotations.push({ type: "tag", description: "smoke" });
  15  | 
  16  |             const requestBody = { search_product: term };
  17  |             const response = await request.post(searchProductApiEndpoint, { form: requestBody });
  18  |             expect(response.status()).toBe(200);
  19  | 
  20  |             const body = await response.json();
  21  |             const searchedProducts = body.products;
  22  |             expect(body.responseCode).toBe(200);
  23  |             expect(searchedProducts.length).toBeGreaterThan(0);
  24  | 
  25  |             for (const product of searchedProducts) {
  26  |                 const searchable = `${product.name} ${product.category.category}`.toLowerCase();
  27  |                 expect(searchable).toContain(term);
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
> 78  |         const response = await request.post(searchProductApiEndpoint, {
      |                                        ^ Error: apiRequestContext.post: Max redirect count exceeded
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
  128 |             const response = await request.post(searchProductApiEndpoint, {
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