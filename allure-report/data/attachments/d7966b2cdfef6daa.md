# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/createAccountApiTests.spec.ts >> @api @createAccount Create Account API - /createAccount >> @regression Invalid email 'invalid' returns 400
- Location: tests/api/createAccountApiTests.spec.ts:110:13

# Error details

```
Error: apiRequestContext.post: Max redirect count exceeded
Call log:
  - → POST https://automationexercise.com/api/createAccount
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 337
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:04 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=N8eh0Sg9KbQTk3Q3X6Rxx9AqkStiwvpBGLjleXH%2BR6yBv1gLL2MJL7pTDXC1T99LFGgZk8ob3yJxbT5zJhGlCknw5UILTnP0r9yZp%2FD0jD%2BHLo1BNAhHaQn%2FVwKcPmB19fjNYwokHpZV"}]}
    - cf-ray: a106ad7bc9b493b1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:05 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=psz%2F1livP%2FTExyu7h58OkPt19eat3lQGcRfWeNGbVjEibjGm6gG4G2I3MSgJT3AONt0HCH1q1cKDPqsvem6deXZkMnreQsWnE%2FErLARE6aR9Y1QP%2F%2FkjDNsxamZ%2BG5PjcIKJJLWv2J6z"}]}
    - cf-ray: a106ad7e2eace23d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:05 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=vI1xyk5ky2ptL8giylzJnUcmWBHF9X6itNfgVoRwrhzJIo88yUBRLGkyzsllBJt9K51iPKQE4dlHjfM%2FHLmb%2ByQtExdm7dlHhjeTjGAMFQLFP93hQbvTF6AHqC0%2Ba9r2hgCmHNFVo9%2B3"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ad809b99e81c-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:05 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=2a7ztVtQPbghyFVKHV1J6XhEi1jxnhSc%2BfMeBhuBn9fII5TWLhyn7sMctV4KN5Cv3AzX7JaEu%2FOL3J%2BJabrqNRgbstQ2aQQAZUaqBSURldjb%2F8nFBE0OCVRfzm6UiW8%2BcAV2eSe3344d"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ad8308a2928a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:06 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=vdNgh9jsCPVn1bIw%2Fiezgove6%2FXGolu0ryhfnnz%2FZOhP%2FcHgE%2B5GipyLMWgGk5FZkdFfYwz7THplwj2BWlQyfVW93mjBZQlIiMA%2B9MlAJANQp6YelUX%2BzokyBmRc%2FLSyWDuA9ZtqPB2p"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ad857b362d03-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:06 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2FpdfPIxF%2FX81UgChvWSS2C8C75lgK3SIVCcjz9ONDkMU6%2BkEcePmeeBH8fjqfBk3TV4XjdEMbHlRMMYSHrz%2F9GaSjNLUm8G%2B8bHPyBQsPxD4EfBQuIIRWyeysooND9rshn2QvGe2eyAG"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ad87dc103426-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:06 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=4M8xAuuUhaEPIfZzDU0favdnfuHgmqg2%2F%2F0A4LX3XmJB4p8BXK8U7d2FQ5SsKyxILcZ5PN7Gcr%2FTmFUP%2FieyAYBNzOwEu5hG6kwppEG88rAg7ksv0YNrs7TBSp1OCBuJ5YCWep1pJjo6"}]}
    - cf-ray: a106ad8a3e00eb09-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:07 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=0Il8c4fdHH9cjX5VBCeDAqGP8z12kcFA5LINgEDFVF%2BxovtdkPJ9LZ93IjHqWeZmvOPYUtvI8hOHy1IOxfB5G1P9agmNZIS1GrgCAuqRXcueWZpDEbt%2BSxuJvidpLNXeyNx43ul5hnS2"}]}
    - cf-ray: a106ad8c9971771e-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:07 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Vje0wax1SQeOnqta6TdQQhd7YNWXellhjgbFHlJ35M3IuHuKWpWyu0Cn1%2BIwzxfK%2BH%2FtolrbG3iBN3u3DsBZF0PtmuGmuXUUWRJgc39W2OW%2B8Us%2FZpErYVgc2cgPfxmDOUlTfrfnRYYu"}]}
    - cf-ray: a106ad8eeae7f7fc-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:08 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=M5DCBI32m1y3Fx9HUxFBXt2sNnccFxk8Q1JQvDB5XyQkDNHobTSr%2FlPN%2BFnQSfdHb1j%2FVtPi%2FryzCjAmoAUEdZA2SShFrP3wx34t8zkaIoSF9%2FIb%2FAmH4FKFLrvfHUMpWpHJvFEec1Pa"}]}
    - cf-ray: a106ad916a0657b1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:08 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=boquF1ZE68y7ri%2BBcxZYclpmoEh5OnI1QZOI48Tbcp1QceNUXoSRL9xfWOX%2BOi6KGCmLCqYeSjoM8ukZUv%2F9C8J8HhbUjmDc58woT9nnQEk5bXIfeR1wVrOKL5ttEnEXnfp40YaW6h9c"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ad93cbad7aad-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:08 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=dcqLS3uJJqenkYlWFJxInnf4zQav9h3jADEEmVbbPvBw8FWJsRi5wAnO%2FhChVu3ZfdB1PYszsm3%2FurVUvXlyJ6vTpO7Xo79Mc7fZjY6cqK%2BPBgfmnAetPeRq%2B3ExpUntXrJ1PuSTHQbV"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ad96397ee82a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:09 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=CYmH%2BbgKaKe5OL%2Fjx04b1eD4C1GblrHlhh3aAJ7PRYf08dJZh3GRZs1XSzP3Kl6EaBMbHPU9BgGm3pGOWXEaJm76jM1jm6H4a%2BZQMA0KOLM2CKxn5o7HG%2FLXTfwkuWQ6K6IgJttXTi9D"}]}
    - cf-ray: a106ad98898aedc5-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:09 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Eean9MBHAjBtngiTdX5Xf32RlB8SaNYv4nHZJZmxsLViHS3GbW88EEEW4Mel8W%2B1STGqm9axoweCIzcnhq1DrxU0JCwcd5Fwnyohi78psZ%2BtTbj6RYS7yungDI6O9TIAt6zIMVuvw6B1"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ad9bc8d3b33f-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:10 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Pd4sfoS5eLApfDjHfap4Dt1trCNsTIS%2FR%2Bp%2FTt0qIjeReP6mq8HGdbXMPKBNxuL37DEj%2BfrYdH8YBjWx57%2BgE44VD1KlrCp2J4AxXOH%2FSbNvOeEoEe45hvOfRK0dq6DfPifFIvYXgSOo"}]}
    - cf-ray: a106ad9e2a811f93-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:10 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2Fz0Km7MVA8qUaOh%2FXlXKtzPjDJcSQaALdcf43atwSBQu4G46dHd9bi%2BJbn38yLaOrgES313jDeV1Q6sr63P15dvBaOyw7GY6NFaAbDgrQq3qOcDrWCYWfNFkPtJ7I4EB4tJxcEv%2BlHki"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ada0887d4354-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:10 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=rmd5EXGEbNeZruyg%2BmHxfR0dcx%2FjCTVOhDhPs7aeabbF9EEXge7oIY7y1bzbM9YgNr5qiv6R5u%2B2gKFVcMmrYwDW0Z%2B5CdsewnLRAfOysKMU18OTZa9rAWAZzP5QS2tahhEIkhKe5k8M"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ada2e89393b1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:11 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=T8pJfC%2FoPCsLXNG8JgkIOCDZDjuXe8t3GxivpzUTU%2BdpUN2cfooqk8afcD%2Bf43ORAtpuuTf9Gel0FJ%2BLNIoA%2Bdkl%2BbTrm7ZedVTDng9Qjxc7C1xBxO9iHCYLveJfHel7MZ9zqdOr5vWQ"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ada56b5feace-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:11 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=h2k8rQktQzjlBnwtxw9PU2A0T8ijMlMLMEx76Jbx0TYmBd0xq0byG3%2B7IBrFLjJxbI4y254fx1vzzQorTkVPNF3iuazyqFxiHFQfjuj8FtpGMRg3Un4MxRIHPICKHgcnCwb1iIJcoFss"}]}
    - cf-ray: a106ada7e837928a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:12 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=lilgeffUx6HIugHrY1qDhwuLmytScmImkN2H0QgaE8hrVIgxTbb2UtGKF%2FlSLEfqZFYKfLvFeYE5r7uSJHDcsvr5iHXmUrz5kY3guzZAEaukQJUtyHLRRdxubT8MPTPoWDvuIdT67xUW"}]}
    - cf-ray: a106adaa4e330bf0-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:12 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=IosyBkfzJppc6HI6neXX0JcldFt%2B1aLjfxvUUayr4qM7t0vyITIlUGPfKEBuOQ%2ByZiHxrFrjmPvmeHUs9UgXSwyEVHUQi0eQzLZ7NHFQZ%2FdxKT%2FB%2FRe9BxRTIUpTOr8%2B6nHy1s0ifhk2"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106adacfd81e8fb-ORD
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
    - content-length: 54
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:13 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=KfoL211yT9TQACrgpqZS5bPAgzAXeqIeaijwgehqs8DtdGynugJXyVG2NUtpuuvyEFUqgkaXzHP2cOj%2B8C7lZvxQLYkysBhVmABxsb2Jar5EtHts%2B0hV3oyF9XTGBKkADxRW1WU51FZ7"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106adaffb5b2b19-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 54
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:13 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2FGco68mu%2Fps0uucM1g%2BN0OmXuqtPUN1FFg4xnhoMJm%2FDk6VMS6101yKIEqqEZkgQ6lwGqyaTxroYB7qPE%2FRXOmSSBw0JMAFvOKnPBgPIbw%2BJP2kEJ4855M2KXtwY8qnMBd67SsDP85VQ"}]}
    - cf-ray: a106adb26d9010c6-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 54
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:13 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=fEDCHeezqul12g%2BiIw4cc0Tqc15w6EmfcKB3WIvtqxxLDwkHNYutt6aS1%2BoSP1hXKH6ZabpzoY65UCpgMZu8cJXxN74Q1kvTSexgIScCUuJuOGiyEWXyjO%2BlFY5tHYgMhRrUShdRw8hK"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106adb4c8b82d03-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 54
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:14 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=LJRofs6zApMUpYOgy3NlKiKlAgh%2BKX0JIicSm6ZhuUku5VaFM3mhyfgegsY2t8Ubq8sUmWD0hFQLr2tjL5VRgm26AfCg56iPgW8jKsPVteA2DJdIVcNZORJOF1bJbDA4kxXL4%2B5GrmtV"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106adb7287de80c-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 54
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:14 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=9LuYnP%2Be8DhNSOfm8eDRA5NG5PUfE7RDZdpLNin0z7ffPa2aIUl3KLgHQ86RcuNkhineMfuBP6ELSXPAPpA%2BrDWfWKL%2FZahQ0Dzi%2FVEsnNQGZ5W5HlJKCSC4gogYOtzg3xFCXUHC7pPJ"}]}
    - cf-ray: a106adb98f9f57b1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 54
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:14 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=NY1aqWZBM8bqIWAqNIBpLGUoEXhduMgs2sm%2BbfMzp%2F9j1NioI%2BXRVgH5bSluZC4%2BtAAiLTr1V6t6FoofUjoQMnRzMjJyrvXg2PVNfruefNhyqprf0fwTkCQ5YH19MslG8n7UkInDib1v"}]}
    - cf-ray: a106adbc0d111238-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 54
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:15 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=jnt%2Fyd5VJFDIzNhLaiTe78v5w87L7RjbQDRoI3jKjC0gDlbe%2BCvJZzHhPcIr%2FKd1wvKpCYtWseZ%2Fca%2F5vW3B8ywvyzSry%2BUWomFerMXwYjlmvvJLboXyxzXXGNNzOUmpL8%2F0KhncLqdg"}]}
    - cf-ray: a106adbe7af0e23d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 54
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:15 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Mg%2BJG3SciX1LN6Hix7axTnKAUoBGGlO2fv0tDZMu8AEaAehVKzANe3kbx7nke4PB7%2FEWeaQ5tV6oDwvGednt%2Fcgpj7thL3JabpHmvP4XYrpymtrrcD%2FlmWofN7zLvMRxg5IuvtnYoiDY"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106adc11e03b33f-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 54
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:16 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=v8E2NHruqlUvTl9lunW4ONfcWElHPzHemWGw0ek%2FbGIXFYFz6sbEQBBe%2F4Mcd72DqJDUUd06YxOeSSNJwCMTBFs%2FqZmKMdv7fTASkM68I9Xsl23K%2BkpSxvtNnSlltkosW2cX4xQz2JLr"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106adc36cf8eac0-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 54
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:16 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=voQIyhiEwVEX5La%2FELoO7lRSUxscQ0rZLalu0n%2BSIbQaoLYMD05EtN4mrqAIvttsKm6Zw5f2dcia%2FuTBAWxjNoYeBxBPz8lRcP6JDubC19sQ9QpmyTJUB1rvj%2BKVqcte0mqNHaM4iAXl"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106adc5e92722e6-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 54
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:16 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=fWOzxvYLEPfmep9l6r3TkfwYGR1OH%2FwFeiwBTDWcE0V2%2BoxayWmj810xFdJ5wGVn6nmQHI0QmUs3tG5yWy0A4%2BCDJRd1fvW4x9SARLd3tIhskpaizKNBU8XKzvKDP%2FO9qab9tRN%2FQ2fS"}]}
    - cf-ray: a106adc85c371060-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 54
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:17 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=onvYrfmxgUmbDbm5Sl0awO8QJxCJ9A2zwajhCubJ3SL03qUaG%2BXaLx3WPfbOOaGn4CMeNXsA4IZJYXMu%2BL2i3zMvxq1cK8j6hpoSbH5c9XVLPLrjJYJ8B7v1bzbswEdF0Ge0Cv8%2FZpkG"}]}
    - cf-ray: a106adcaad680012-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 54
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:17 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2B4dxm4V6jk20xV9N1X5NMIsFgUfQlBH%2FK%2B0fc19x64ecFHDopSCD%2Boeyf8tRvH29oyXJIlkbvpv%2BgHwrmdDJRCuaQWU2YRhBJBn2S7q6okZlXHWKbyNX2ugS72REQFn3z%2F%2BpNFV%2BZhz%2B"}]}
    - cf-ray: a106adcd1e2e4354-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 54
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:18 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=0pgPQ5RRFy%2BcC7XLOCVSeEEtgG35xDG85TGDafpSxZiOCHnqPKT4XyuYOW%2B4oPp0k7irFkYVhmMCSLs8nljl1vHYa5DKJy8zPnVInB2nSeuZ37nuhdAOeTiZEXSq4TUPqDii2quQtm4a"}]}
    - cf-ray: a106adcf7893f97d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 54
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:18 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Pnk%2FTuRSye86cTFLt2TPzf7oOnm%2FrN0nhmtZGYdqiD3UZJyMGf4FxDLjfsB2cJthHxr3F8D9ZPcXuFZIMqSkX4m11z82Tz2%2Fav2E%2FCJp9LYSxTCJFq7RPJZcVYUMWrix2L4RtU2TrDu%2B"}]}
    - cf-ray: a106add1de793426-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 54
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:18 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Kzy%2FgQxGrBBJGAw9WvDpJOj1fqWkpr%2FqIgeVWIBJZJLIBEwgWIDojPrOHAdj%2BIebd2iuuC3MLX6E4%2FN8oYJtD3TieyolME%2Bf3WoHobKxIE7fBTZngE6C1sorKWw9d6XvopHMmSjR5A7q"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106add43c12c5e4-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 54
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:19 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=sHBqhMX9NWkCML8f14E0HixrQElDjzUrdJ1bZOl42OoRr6wft2XqCrMaV1ePvcAo%2BkfACEekl0267ABDzO557HksgUAhJD75RZwYp6Vjt4GP99qvXuTeR6bRhz%2BI2eAP9YaCLt1eaVo6"}]}
    - cf-ray: a106add6ba7eeace-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 54
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:19 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=jOUhN74dBtwRbeFTuKaBjo1kOLizZSayNyagV6cBLQOx8E%2BTkRDxKRoMFE%2BaNC3swGuoUtf%2F8aiim30%2B4s1zKmpx%2Fmj0Vsizi5%2BOYJRG%2B3S3AN0UVM0%2BTc97vV30k8%2FYoUC8grxgdR2g"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106add93f507815-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 54
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:20 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=HthduQGw1rcdGHU0k8cCdE57WLe3kwR6B58oXUJ%2B4J%2FylC22dmsMaLfpAMSLuqYza4QPTPVTQDmdVIWikPRooHWILfsvlWw1rxZQcwFKvPssruRApoaCxbOvO2MUz6myFINksIC6QLZY"}]}
    - cf-ray: a106addbba006501-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 54
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:20 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=i4APUwiTvXJFx0XBAw7hAt7H3rGsU4lnPw3J%2Fn4T50FH1oCM2KEZfy56OPJHpwNT13EHi05vPXFnMqFri7Rqfkbi63ebiGu%2BQX%2BQQ9pxgL9nZxc33onKb7TD%2B%2Fl1cV9sXzKVIVyZ0%2BVU"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106adde1d79aef5-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 54
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:45:20 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=vzYWgNOOAI8Xnbjpl8%2BUjng1UcvpMEpbuY90w6GMfUJ8D3kru92JXeacbCLQdzm7m7WLVKHQ3OTkc5dYHKdaqF29t5%2F8uq%2BKateG%2FZ68zgAaHLuCFxJEtsL7gtL2itD7drY0OZ3OvMI4"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ade07b532ced-ORD
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