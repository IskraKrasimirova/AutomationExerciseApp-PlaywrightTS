# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/createAccountApiTests.spec.ts >> @api @createAccount Create Account API - /createAccount >> @regression Empty value for 'zipcode' returns 201
- Location: tests/api/createAccountApiTests.spec.ts:82:13

# Error details

```
Error: apiRequestContext.post: Max redirect count exceeded
Call log:
  - → POST https://automationexercise.com/api/createAccount
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 333
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:00 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=kg%2FaiTYX%2ByvA9JwON1mnRKYT25cmYDk7yneUmt2FxdeyV73iJMYIkgAMQbajXqpk27nO8%2Ffl8015SDpfkQLmG5rssBFzy4T8iceE4%2BkTdIYeNU0BhtwvB2Z7w0KuxYDAzHNIU4BV9%2BJ%2F"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106abedc8c0fafa-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:01 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=j0UPjeuvq3RSGVR1uDJ1qBTy8I3VzJb3MV9hIjJZcLuP69HfgungPitGopHD91q7qkFdZEJrV4NB4Sesqa0EicT4ViW2UZNVSCVf1hmj29nZxi8j%2BDBlqxrySgRj7UVxLgDpwiCMSEZ9"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106abf02a90c0b2-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:01 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=CI1GyUmO9hAtVm0S%2F2y7qOkKfICrmjYw3jsxGUAa3iW8u3lYYG1nWHsgIFYVtQJsj%2B70rffK25E5cCRTpVx8UqttLb9TBcLK%2BnvtXLoTSIW27BW2xmtD2owjYoSY9YQ1l5b%2F3AV%2FMleD"}]}
    - cf-ray: a106abf2fe94e80c-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:02 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2BUcdW73nuqzvbezDcIzctirQM2wGBntftEmawgZcHxAHusuUrHZEtZZVPX%2FCTfC14%2BEOmQw1QndEmnx6IGZD7Vmlat8QSIRHC0ghzhAHlbUGqP7BWDtJL3Ehkaq6DwA6y%2F8fWVJD9O7Q"}]}
    - cf-ray: a106abf558b71257-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:02 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=mVvp21S3Xq5lIWlKcVLgylSwvlkGcErQ4ram2UWurZEOOQ%2FgxeXY4ywk2qI1uxN6ASVDYPHBtQs9chktlqcmgiNdGYgmKom9FGdpi7%2FncqWt%2BC1xIFtGXbG5x%2FIPO1C7taei%2BfGhpYQn"}]}
    - cf-ray: a106abf7bcdd222b-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:02 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2Bsphnly4arPYchcIDLfhPGycTF4dAM9ITMGp0c9e8p5KjIzJT6%2FpyD7Pqney88DHfrKtELsO7rHwxN%2FYg%2BqT0s5AXdr%2FlER4KDL4mmPtpW8Tljk%2FO0EdKc4GyjRY3ED6MTbloUUag35K"}]}
    - cf-ray: a106abfa1c0dc5e4-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:03 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2FyPBEjROLbgifoNytEDDr%2B9naI6J1AB14IojFOmDXjYMNuH9qsO2%2F6DKKfWBl04ZR7hqLcSluh%2FmqtsJiFOjqsaibQeb5eK7OVQxYa2Seocwm1U8UOlT81qBvz8mIerJXkFXy4L3gpft"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106abfc6bf82ced-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:03 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=wG%2FytQeHXcf8MpaalBonw3bPBgkEX7WZ1NJeQUTlBEF87ifuaxLdHel6QY9YxcLNnlMz4cPJAqOVB%2BSCLxf%2FuyOmPQDhRIbBKaZ70z4tiVUvfCAY7CYDlFZ5pNS7quf4ce0pN%2BeOgp7k"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106abfede03eada-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:04 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=PHcCh0wZ7s%2FrIb70GGWOzpnuqLzrxSBZe7YObrKNE5qJfS3RYqCql%2FQEquQN%2B0nXVNBq2GCFPDV1aXojVdp3uPBJHG5K1GfMfzvYMzpI%2BP5qnYzxeamOwi2RteHNsBpad%2FEEBYIkU2tF"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ac013bb40012-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:04 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=9nHHuVICoQhX2nLUJJu%2B0fjmyCBNRO5Irr8eg38FTF%2FWXhXaym7jXfWiwAIvwavA7HkwfFY46rXAIcS2nyByhQMYgVN4HoV7ZaQy9nRr7HQFStBRGaTT7FrzIRHxXNRet%2B8TDXU6WaR4"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ac03bfecab71-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:04 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=uGacx9%2BzcVrlXsqDT1z4%2BQSxIuftxMxPxNd4twjJvpldC3Yr03330zQahiD%2FLpvhO2ycN2s267%2FRO03C9LNwy0bDe5YsydfIVsGTFq98hIVMTskpW96n3Uu0R1g5EJTtYiPI%2FT1pGdUx"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ac061e4b7815-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:05 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=TsywGu2%2BoUQMvi7MX2rg3D4om4pp2e0UOM1h9kFQLKU%2B7spsm0A%2BtG8QL2xmNyD%2Bh%2Fzk6TxZNnIb43FyAGm%2BUF6yBJLvougn%2FJfue%2FMVKYzDdxFs%2FDSKBJ216uKVV%2FTj8ppyxGKZwn%2FY"}]}
    - cf-ray: a106ac088871a3d4-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:05 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=BdtktUkcdcEQq8o15sBI1B%2FEki%2FeumGR0MaZXvV%2FabSqIfXt3n%2BoBVilTk0lqSck%2BGtqFmOS6Xt6rizj3b2LfsoqaTdqzIzgasJ9GfXhEcl11UtuiGe8RMkqeXFCUh39igWEelsU00mo"}]}
    - cf-ray: a106ac0ae8a2eb09-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:06 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=cF9CQcfS0e096Vuu57%2BDaXvhd3qvViMhLxndrSM0lDl758DwToxTayqsD%2BGnP%2F68xoKs5A4aL1eYS6NOGmKIsjWHxTOsRX50FDCeygiShX24LByY7G00ZcRgrz51nHK%2FL%2BFCoaqf2y1B"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ac0d4cb150d9-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:06 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=iWTsTyl5ZbpKH9FrTbMIvZluJ0iP9d7sKIK6aioJSfMySIuhwtbWopTU6CdCerE7h05bYIL8jyTx00JuP3ixq08%2BLDI14MvUfGppiAqBQx5cdQ5kROQZxKm520zP5FFHae9JRJgMEgNm"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ac0fc97eb266-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:06 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=S1NReJqfc8y%2Fk7dW0zge8UpHTWZHRx%2B%2Fe7JcrIgFvivMnIColx7xgRju2V7V4BFH1EgaQUhMpok%2B%2Fz5VF6IvZe1Js5GhlWSVuRqgjMcxnJF3nEL68tsY79A5jvQch%2B4jjublJ569qE6s"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ac1249fd928a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:07 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=YgiPHpfRijfet%2Fbl8SnzV%2BGX%2Fx3%2BqS3pcE7Ww48qusGcf0BqQwpI0KVE%2BhP8l8NNSY7xm3LqLUnMVE2c0%2BDSsg3yTrWrUI8%2BpcLbALh53lpNYkwlGxUsYfrGtmiNjk3rW53wgc3XdVUg"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ac14bf137b1b-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:07 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=q3MC8K1Qy6fYwwS3mJR5OiVDC%2FM1QRDtYzGPSva7bjyLlLrFtp19gJKjd7T9CnZEg8i6C%2FipY%2FXjxyKvMh5UbzcuM07sD9dsq8lN66yAqzJQJlGXFwS34vVByQAlpRES0GsECXIInRkx"}]}
    - cf-ray: a106ac171e7a61a1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:07 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=IGucq12oV2McQv5ZXEXywSeZWqEjs4dU%2FLeEivxO0%2BL%2FBH%2BYz5RaH42uEcVQsCchrx1RW4BBIIYK51%2B2nUEzvjUPGouMTl6ESTg%2BcRR1QKitIuliG2GBJwUCR4M6Y%2FDYIoH5c1VIvLrY"}]}
    - cf-ray: a106ac198e05d7f1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:08 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=QCEzAHAUq3OLjDc7bBPv0Ut6EGT56ZVi21P%2FdFvPrq0hFTlipof5cUQDJSQHG%2FcRBDER3k%2BIQdSPuREYWz1WndWpRCEiUEjNc33sazrsGnzKh6d61kq5HtIpUXHM7faefPgbSgfRp0dc"}]}
    - cf-ray: a106ac1bebab22e6-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:08 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=o%2FXeu4WYrDKVlRwZ6nh2ZH2gFq3QlLThkQE%2F33gt4hFLVp8C36B0gDZ4ocVlAnaIs%2FiEzL7Znt%2FBt1wgUV3sLpLm0sKXKSsSeGLfRdizANbLAZcbghOSeTJgPwuE6YAQirMtysI00%2Bz7"}]}
    - cf-ray: a106ac1e5c6f10c6-ORD
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
    - content-length: 61
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:09 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ucyOJTrBIXFr8cDvWwuqnLIJ%2FuDqrCv8fyijzYFTAt3hDvO337aPNPEkXHhAADL9OJn7tSEyVGX85ehOo3FZpz9MeTh8Ny0N%2FPHl2NGL%2FdaUo%2B8fmuXfOFj5vBzbjTVgRcoTfKSjvpI9"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ac213bd341cb-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 61
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:09 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=z%2BC6eXlqhxgY%2BkJuebqxoojZoej1MaKpBm5OyHY%2FbyX2Lr9n%2BunnxFR4%2F3nmGqgYhEtvsvB%2Ffky1HIc00Q6Mlprf5XDGRvSyRv8v0mZRt60xt9kyc%2FNiw%2BjYv1rYOTQgn8%2BDn5eGxL0a"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ac238fa52ced-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 61
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:09 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Fb2jRrRongcTh5aviLPIWgHXo8G8OqTmu%2FRctkvSCbu5FISkRddMtwmzwxAJe%2BtbfZyswP%2FeDjPV6zryZkmlfijh1brkwxin2uEeu%2B592yhMzuK2IftxhE8RPEcJUXxeEpcZwo9mOIJe"}]}
    - cf-ray: a106ac25ec79a068-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 61
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:10 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=bZ7eVyPOiSQX%2Bu%2BKosXAozUbyck4Kq66FPPtuKuYBsiMDuO9I9N8Vdxv%2B0neHb3vWwuupeV6Ptbj6dZij1VNUz3apT9eRgmlBQZ5Zgxs19ljzE6W%2FQKX7tqe%2FG7BQH8pUP8PeKr8TP%2Bl"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ac283d7234ad-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 61
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:10 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=nR0yQHRan1LWvrc8B6hAR7MTG8Tuh48dBJyRlMslmwd3pfbcjxVsLiAVtgkYclJPx3nyGwG7%2Fq4bLmDT6fz78cH0QMlwtjoScDKErZBQ9CfoCqbb2vBUUjoe%2B4Pv10fFSosfEDrDCsap"}]}
    - cf-ray: a106ac2a9a5d1279-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 61
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:11 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=H0ogaiEayTXM8Q5qHv2mXp2kFsAxyi7tXYH%2BoCk8Rdzuhvl%2BevPhbidx8zBVCDJ0D%2FidbpuScTuT8aL9erAjOHPcC4ojHR5HazjOQNSNICJqeTHGiGZmO68%2BBdosQp47T9XM%2BeqbZtBs"}]}
    - cf-ray: a106ac2d0e9eab71-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 61
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:11 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=XMVwtUdTu7UrfoJMNHTehN3nje%2Fdbq1ifo8Y%2B9BN%2FezvU5XrcUxe%2Fc9aJvZ4XKq11aqw3MfwqG%2BcSTD5VpQ9yXOvUJRyVsgcBdB0L92Pvu3MlP8n2vpmq1DfGCZf4RE%2B0cl5DyZu8elk"}]}
    - cf-ray: a106ac2f6cbab33f-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 61
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:11 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=WRfbXONFUmo64U1zhgHxolQXoUMDq0OHVh0Bvy6Ykj6hW7uKl7O%2FL4eoBBgWpbIpXVmA%2Fyo07xkbt3TwBntyPgcmumyzG%2BLRYncK2dxnxn%2FOtZDN3EQ0sJYjxG7tjDzVvzhUcGa8LcDf"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ac31c881f7fc-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 61
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:12 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=muFyxkAtqQUATOSz75VRgNT9r7HUzqeDj9x0O%2FWxQZmv0%2BrP6EL242vJweREpKiDihXObFtXloDAyrVQH1nKUsN1LAGortCAa%2BjCOrTF2Q%2Bzt29%2B8%2FVdS5i2zjr5QEPYbXZdZFrtHfyi"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ac34284dfe20-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 61
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:12 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=2DhLzOW3HWK7qR1yS4gURkRddI3DlAZs3kmd5WMW9nSaOJZJX31HwkUWGmd7r0Ip5U41Ju1hvvYO3YKybRDHOSy%2BcDBFQ2Bo4GOmQuDUDgQdbHWAINjeJoBT%2FjBqlUFTNNkcZJqrEBsU"}]}
    - cf-ray: a106ac36890d1f93-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 61
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:13 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=k6tJT91AdzpC2tdcmw9DwJx8vXcxOZlHFMEJzVkSF8kBK7ICZBz%2FaNAxoV4tVNQ7tXAfgaxt5X%2FuYQkRg2i5aYMCHp2Yo9kayTmb41VMSYweZwPcYOVBzWRln3aw3F2zK2LXvI9Fu7VW"}]}
    - cf-ray: a106ac38ea63e81c-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 61
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:13 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=QbkVJSR73nfV8TI99ofHUavzHAVf%2BR5Yh0UmMhunOS5d2UQQ0zDkvrgefVoZJDNu4UxVPMCFnJ34LqBMTdusmEcfT5Ft9lqpUSbub5bR1gtL2lPlMlIuYBrF4vgK5SHxtgLkcUqQL6rP"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ac3b4f36928a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 61
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:13 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=tHFJ2J4cbsvvJKqlTQ17aeFK8S1jSL8eGDIR%2BN1RGO%2BRuKcSBmnT0uPaK6bMK%2FCyR2XhtjlCqLdE98%2FHGcT8xSC%2FalDC7dc%2B1Z8AoyUBVNSSkB2JkVjLjk3ngvcXeIi7XJeImODP5eX5"}]}
    - cf-ray: a106ac3d989fd7f1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 61
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:14 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=t9UbxfRToXkcyJO8xmC0CF2pRGLa634sWAY%2BlbfY69K67%2Be4YjDMWLyGy7T%2BgMOEXp7UjYVxtr3tfS5RwnF6Ltyb74xMrXivUyyN%2BS2uztnnsD7Vwn5h34uKQaGRHzSmfYedWn%2FEuJFd"}]}
    - cf-ray: a106ac400a2ce80c-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 61
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:14 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=se9OVQui%2BoexHwpaTCrnqhA1IN3jwbGI5Tr1QKmzgp2TDqiMz6ry4VTjGXLZZ3hUt0o64Jc5cx34QrI6n3hgla45f8WTCq35OWCsdy03qVKYusF8h9OdF5%2Fgk7hLB5%2BjkvY5WRfDxKx9"}]}
    - cf-ray: a106ac428a5feb66-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 61
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:14 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=UdWVrTsjcEqZrSx858Bo%2B6v5fXMIMduCkQ72iGEWbsEZkevZ0%2FUXIOj4jFKjBKLamOQk1Db7Qh1iGfOq8%2FGM0NPmCKC%2BMVnDQ%2BelX6cve55q%2BuABLGSuF5W63aFkZef%2Fn%2FV65dgNxR1r"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ac44e8d1000a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 61
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:15 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=USkMSE0NE34QA9bm9CV3joi9cPH0X6d4BFCoHZDSpXqgrnA81iamXG%2BHD%2FkDok%2FrAk5IiPviWcEiVKIhiUG7scGZd1Ut3uEsvkUvp1%2F7hLwJcXyDik4UvH4esIMm4zp9QD7xme7zT9Qu"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ac476d0d222b-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 61
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:15 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=lPCnLkSuneFMlpd6fpHwQ88cwQtfKGE8n1RiUzTr1VMyGN8b%2BsbmRNFkyIW0x6tOQqRN3N0%2FTCXFmwvgc%2Ffrh3TuSIs2De05x1Cllw599RvawMa5F9XZ%2FeQ%2FLAkWj9a%2Bp7qef4WC%2BNzA"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ac49d81e90bd-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 61
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:16 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=k2wUIZestt4esJ4s%2FbIihTyjaNQqjwDczI21KOv3C2AtORNlugBf6N0Kz%2FbGe2EVJV0DtOu8g51Vw2fTq4DqX%2BUgOY7SgGTb0j5FfcUSYO9HDxQXweqTlYMelFHfkqCNWsj%2Bn24cOpPl"}]}
    - cf-ray: a106ac4c4fd5a068-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 61
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:16 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=QA15K8Jg2DHePXk6hgzfYenylgn0UYSL%2B89etsK218OOjdfbd9QfUAYi%2F3NuY2putyC0O1qkRR7pDVBWpSToldS6BL0t1iqKTp8Vma8bZZCRcxVaraZaPq68NhSxvAiWo1mpmzLRwgvT"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ac4eac13edc5-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 61
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:44:16 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=an7LLMnDhFUUDf3i7bfc02ufmP1WZUAYbrFZ6g9Ti9QUZAUYMYwARMQHG%2Bn%2F6HhVZZnEnwYgqUd4vTeWO9Waz4R%2BY2FlMAJ5G2BhoP2ba1WF9Gzbhm6mMS%2FS2LYv9JEsmIWECNfewzsN"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ac50faa7fafa-ORD
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