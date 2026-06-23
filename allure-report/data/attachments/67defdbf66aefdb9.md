# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/brandsApiTests.spec.ts >> @api @brands Brands API - /brandsList >> @regression PUT /brandsList returns 405 in response body
- Location: tests/api/brandsApiTests.spec.ts:28:9

# Error details

```
Error: apiRequestContext.put: Max redirect count exceeded
Call log:
  - → PUT https://automationexercise.com/api/brandsList
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:38:23 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=trE2tuAqfz%2BVnHWoKh9jWD7%2F0uSjEPDn380WpplYvanZAkcJJ34NQuQKVQ4iUL3%2FHcU6BEsa%2BaAJP4wDkHBkp4QcHRmJaBqRZ5GqZDUnzBRYFmhuAzOafIBskwSRe0%2FgcP7UcY90oxra"}]}
    - cf-ray: a106a3ad383c1049-ORD
    - alt-svc: h3=":443"; ma=86400
  - → PUT https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:38:23 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=WiqwvEUREggZiD57tGH%2BTcxR18vELp3kWkbyzipHSmV7qJcirU3xpTs9CJ3Ml4a2%2Bu2vKkagjHE9kf1R1W0%2BA0lasJ6mchI0vSoXh9Og3Ny5fqa%2Br6f2kOH8hNMwKvcOrf41nIa6zUKJ"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a3b09f73eb5e-ORD
    - alt-svc: h3=":443"; ma=86400
  - → PUT https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:38:24 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=QsSUznueNpq64MrnEmyeleluzTWIAmOOWBHPP5pRMmu1lv5Q1k0kthO4JZPU3yVHDDKUkutDbE0aT0g0j%2FHEerHJOeARfS59Q1eyNibnI%2Bc5cpwFf1cu9eY8i7DdzpSNe%2BMTRUarX%2Fzj"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a3b418757667-ORD
    - alt-svc: h3=":443"; ma=86400
  - → PUT https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:38:24 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=dHgS30VOCN4wPHRMc43xN8OoTnhbNW1t0FjCMRz7%2Fsgp4YHnOjhMRtpUh5lOpqEA6k0bFuWTZS5OxxRhztoXCvvB49E6Et4jS0q91TtioAiXOByFRezAFyuIc4QoiD%2FHaHZP%2F2DkIgNV"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a3b67a5093b1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → PUT https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:38:24 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=V87U2CIO7wn3uNfaOxvCrp89r4zKuFZ7NJRmHvyW%2BGxKI2q1XVT8xvuWg4rYIlpVaaa7kombXoNqP49jNkXFK9oFryJ9LDzctfQ%2FZsd2Z5%2FS8gc48agxm%2B0W8BOlebwXCiBSlUeRdGSA"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a3b8dc4df97d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → PUT https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:38:25 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=PQDK0k5kGpRBIEpKeS1B%2BwY3oYUVOhjPA8I2Dff2CA%2FOtk4ZK28ZZdWqMXNn6x5aai48kewHRaLS2226w4r6ViA0GYMttk01CRUQzp6ABO9xHAtlSuXBtH%2F63klBF2gbydjkI7dtIC4H"}]}
    - cf-ray: a106a3bb49b9e168-ORD
    - alt-svc: h3=":443"; ma=86400
  - → PUT https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:38:25 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ZjiM9H3Q6rpMrPk4DEy1hK3kX3DtqnKfR3JSCXjsPQlQDrK2qzeoiYYhN3fJGyMPwhy8d0GZA8km47iKTnq8lpuiW7GrPAiYxb1Bff71Xa0jFxgSR%2BdTh1g6BjZdnbdlJOCsCxsFQRip"}]}
    - cf-ray: a106a3bdbce8fe20-ORD
    - alt-svc: h3=":443"; ma=86400
  - → PUT https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:38:26 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=sAFrhfB0aLV80fv3WWiQk349VJc8nx8OviEt3cagQxcMcUamm5Q%2B%2BXru3i0HI0XjvXy4TBAEeWKfrfEH1dMKhk9CNppAEHw2daBtPbEwA0GkFAhfhB0%2FMJ9xKypDGVq2G6lMYNZnKAK4"}]}
    - cf-ray: a106a3c01f533443-ORD
    - alt-svc: h3=":443"; ma=86400
  - → PUT https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:38:26 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Yzn45P67IGytrBXiUzh6xKlRHJG4OfsLZlEQGK7tPdMGciN6GQZUPRPqTXOdSi88ytS4M0Wny2U%2BfFjGd%2FXBTsCJEah%2Bv85H9yrHbD91CPdWFhk927sNRhb0bRF877Sd6vNPRALAYvpv"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a3c28e6f253f-ORD
    - alt-svc: h3=":443"; ma=86400
  - → PUT https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:38:26 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=7KwoP%2Fs2F%2FUERjH6N6BJODyw6DC7Ii1TQ9%2Be7Lmpi8iK924GKYjdETUZznYubSHa01%2FoAGzveBaIYWWp%2FUQ3qniw6C5tJ40bLFgNT9FV%2FLNrixUf1qNy5QBjETfjq7ZPb7I0ZTz%2BcM32"}]}
    - cf-ray: a106a3c4dceaedc5-ORD
    - alt-svc: h3=":443"; ma=86400
  - → PUT https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:38:27 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Q6yfmGjRrwEOFLN3YAB511ICyDqUqhsljyFKOOWAM1iedre8l4P322Ay3Zc4ieQTtWf3ogWACByOakIisfQxMEJuNQtUW5csF1a%2Bd1RSrsrzOnxWyUbYAT21jhwfVp%2FvB39MXAkUdAJw"}]}
    - cf-ray: a106a3c73c4f61b5-ORD
    - alt-svc: h3=":443"; ma=86400
  - → PUT https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:38:27 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=M90EOh6I9Is4MfpqAZo7XtC%2BhKWYYG1gie2unKLuEahrIAj7b05iToDLwl8my11yFbJQYn2NPtBzoqdxsp6S5Gn9R2Lv5jW5iR8LAw6w0GEb1OykVE4tr6e8Egrqbo7nUCl6y2eS4qUC"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a3c9adc3eace-ORD
    - alt-svc: h3=":443"; ma=86400
  - → PUT https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:38:27 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=WEl%2BbhWQO4WEY1tCP8PQj%2B%2F4Adrn4WmBLO45Xv6qVs7fi7se%2BwlDrgzp4lekln0fzXhXt0hz6XXqGPOnaUWR8jOsfW7hw3zIF5KYxMgRoWoFqhsH%2B8HVlECSGosFliYdzaMa06AiyIQ3"}]}
    - cf-ray: a106a3cc1e5972e5-ORD
    - alt-svc: h3=":443"; ma=86400
  - → PUT https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:38:28 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=A4FQCws3C9jHsdLw6JpKumeZjo%2FNfcmKk32wt%2FIqRLxXOAYN1XPNyeLOVjMFIh6MF%2Bv3LLmkiL%2FwPjGjUUGiN0vjQUOJa%2BRuJcvZuqEtY%2BJaW7Xg%2Ft56E0KUPNATxBXVNwNmv0xS2ZIo"}]}
    - cf-ray: a106a3ce7abf771e-ORD
    - alt-svc: h3=":443"; ma=86400
  - → PUT https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:38:28 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=TbkO0OYlmOOABm4yaeepFe%2FbgXU2vJ009xeeJSOo%2Fg%2FmfLm%2BFpzGVzhZXT4pGoV3%2FBACr4ZBEpHkBCYaAyM9K3SVs0NQCjbt6CexoYVU8SCV7H3AJTb1FkeZGxEgfQHLUpne1T4Qvtec"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a3d0da5aeb05-ORD
    - alt-svc: h3=":443"; ma=86400
  - → PUT https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:38:29 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=aE0CJKwfwQQuLTxhKhzoI33vKfRdOUamPMH32oi73QezZOpBVv3gtbQn%2BgLJaoQiBuZgxdbDPQO2dmeS2GT8TXz3Rk%2BxwsL5imVx57kKUZiH%2BCGDPApSdO1Ez7OdEoBfi%2BbweiBVmm0J"}]}
    - cf-ray: a106a3d34d766178-ORD
    - alt-svc: h3=":443"; ma=86400
  - → PUT https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:38:29 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=T7TqecqUs2h6kkjwquVXseVR1gSLv1%2BFC%2FFCwLRc1BVH6kjjyUHdNCS%2Bu2Ke9aEstAebBsm4p1q4nMrKdp16SDxeaaAuN75ZB6%2Fj5arZNucX3%2BxoE6uM1sjvnZvctxr%2FN4I3AlyZ1sDj"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a3d59eac57b1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → PUT https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:38:29 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=kKeiwPWXD0tMVdOn%2BhOWyMbhgOow%2BRT6cfD1TfzZzC8sQyi7B9LyvsnYRwLGufitfn6%2BmY43F39ZyGbcNTTq1sKER5DW1QuhappqUZ7DoQ3zTpsJ9J7zoyj8UFw%2F563v6nylqRPgRoks"}]}
    - cf-ray: a106a3d7fb2d2d03-ORD
    - alt-svc: h3=":443"; ma=86400
  - → PUT https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:38:30 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Pr3UKCcw6sgt3SXke8txmQ9MJLtx9CXVnv9FWzqc7RWfWRVDwq4YN6nDERoFTYVPRm63PTna5oaMjtebTaYMUtRJlk5iR8NaUPx7omNgzpc8P1N6WtHq3LyD826tUK8M8gSBVlkDSKip"}]}
    - cf-ray: a106a3da6f5993b1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → PUT https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:38:30 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=59fcavAw6FGtSV9O%2BSbdotkmkKmAwlq1gWsaU5qiM%2Bro%2B5l9%2F8hwG05HoCvpDx8KUlUyqDnK2wv6ktL%2FIU25nSpsfr3E1z%2Bcs1OMZDuf%2BvSq5dokb6xnChysBgWkokdilskTAbY1ZCDP"}]}
    - cf-ray: a106a3dcc9c90012-ORD
    - alt-svc: h3=":443"; ma=86400
  - → PUT https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:38:30 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=oiqtVXn5kDYTSECD2nT5JWdmfzDFG9V%2BYxjMskS8R63l%2Fz2rSG%2FQ8tCDkZbquuP%2BaZuNT4ln1e2hcMsdLDovIdf%2F67p2B%2BZzNOYR2SvFi40dpEr3kvzRNWeMdPDlUXRGSxgOi8xxiRvZ"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a3df29eb7667-ORD
    - alt-svc: h3=":443"; ma=86400

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { ApiUrls } from '../../utils/api/apiUrls';
  3  | import { config } from '../../utils/config';
  4  | 
  5  | test.describe('@api @brands Brands API - /brandsList', () => {
  6  |     const brandsApiEndpoint = config.api.baseUrl + ApiUrls.brandsList;
  7  | 
  8  |     test('@smoke GET /brandsList returns all brands and each brand has required fields', async ({ request }) => {
  9  |         test.info().annotations.push({ type: "tag", description: "api" });
  10 |         test.info().annotations.push({ type: "feature", description: "brands" });
  11 |         test.info().annotations.push({ type: "tag", description: "smoke" });
  12 | 
  13 |         const response = await request.get(brandsApiEndpoint);
  14 | 
  15 |         expect(response.status()).toBe(200);
  16 | 
  17 |         const body = await response.json();
  18 |         const brandsList = body.brands;
  19 |         expect(brandsList.length).toBeGreaterThan(0);
  20 | 
  21 |         for (const brand of brandsList) {
  22 |             expect(brand.id).toBeGreaterThan(0);
  23 |             expect(brand.brand).toEqual(expect.any(String));
  24 |             expect(brand.brand.trim()).not.toHaveLength(0);
  25 |         }
  26 |     });
  27 | 
  28 |     test('@regression PUT /brandsList returns 405 in response body', async ({ request }) => {
  29 |         test.info().annotations.push({ type: "tag", description: "api" });
  30 |         test.info().annotations.push({ type: "feature", description: "brands" });
  31 |         test.info().annotations.push({ type: "tag", description: "regression" });
  32 | 
> 33 |         const response = await request.put(brandsApiEndpoint);
     |                                        ^ Error: apiRequestContext.put: Max redirect count exceeded
  34 |         expect(response.status()).toBe(200);
  35 | 
  36 |         const body = await response.json();
  37 |         expect(body).toHaveProperty('responseCode');
  38 |         expect(body).toHaveProperty('message');
  39 |         expect(body.responseCode).toBe(405);
  40 |         expect(body.message).toBe('This request method is not supported.');
  41 |     });
  42 | });
```