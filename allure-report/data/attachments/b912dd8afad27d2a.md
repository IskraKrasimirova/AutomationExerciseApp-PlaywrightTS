# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/userFlows.spec.ts >> @ui @api @e2e User Login & Deletion Flow (API → UI) >> User created via API can login and delete account via UI @smoke
- Location: tests/ui/userFlows.spec.ts:23:9

# Error details

```
Error: apiRequestContext.post: Max redirect count exceeded
Call log:
  - → POST https://automationexercise.com/api/createAccount
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 342
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:05:33 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Goc8zI3rI9Apu0Fi5vGJBUzS47zYvIZrcKfE74UHKySKhGfmgRQ5XTvmtD58sFPRlikHOFd42dO%2B3aR%2FdnAFRohH7VtZsOJz1iHCeu7ysRjWI18EqIzP9gjU6TCBgiFMbzj0KDyJXez2"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cb7d1af0b4b8-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:05:34 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ev1Iao1RGl8Nu%2Fci%2BO868fqX1SYgTxQMvznvBOR9u%2BGskWTvYj58IqUrBNDDB61x52IYKVHFFWXY8%2FMWUskYfL0vFNz3s7eV3T2nA0LBB4dnqtmrAkglOKOTUkLWNrQD7DAPZcj%2BcSSh"}]}
    - cf-ray: a106cb7f7da9b834-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:05:34 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=bAPxXc0u2cKzXVO%2FlksTlDB%2Bs4NWZlGTiqgx6X8ply2yw77Tqum%2FEmIaWVSKci0BCWOW3gVrzMfg7Tr1fSw%2F641TwzGQ7vHup0PhKb0WfggG10j1nOix4xJFmWMA1VrU4QcFx42ts3s7"}]}
    - cf-ray: a106cb82da30b7cd-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:05:35 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=TRwc%2Be6Re0elaAngbB%2FuVlp2osqla7IYyPxRF6V6hcRNfGRCaQ48Kk6tHEz535pjXymosKFaA%2FxyX4N8X0LP%2B3Xi73xeP9aNQkXD7t49Cj1sZw5DaWmHUbh%2FPKSeA7bDss8FrpTktN%2Bv"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cb853de5e801-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:05:35 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=4NjH2oQH22SWJNQ0cO9vE2S9Dmo1NCJX97CeBw6RaVn3VLv3KNDieieML1stUGB%2Bn4fo4ghzNHtEYAzc5Nl7E8%2FiuCNSl6PVix5WQ%2BZ0ynpQcPmfyQMu81jdgj43YoAQZyRVuBeuja79"}]}
    - cf-ray: a106cb887832eace-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:05:36 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2B75BNqMz294FTLU39eWt%2FJZR0dccLYgQ83rEloMPdDkjCvdbUxmt8REpKFmr4waaUeO6%2Bn2%2FtmwyEOP3A2eyJ7v6v7yW7d08eQ%2Fd8HfZJtPFvtBqDmXBY%2BinsVgv7UyNQEoonxccLCQF"}]}
    - cf-ray: a106cb8bbba3000a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:05:36 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=tGfjk63IGdQn%2FK3iDars2inyvq1Bzu99z6L1zl816K3HEVAQrGbY%2FcWUQyUHzUH3FHEsnvqYc3kruQ5I07WjIGp9DUT7DsuuoxsQm8sYudRayc6c2Pmj19KmFC1yjGEcpF%2B8z%2BCpJdkL"}]}
    - cf-ray: a106cb8e0a5322fe-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:05:36 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=g62i2lw%2F4ry8KPMocPPQF%2FRE5KtqWiId%2FVYs%2FD5iW7T7Tauvb3PdVo5lNssY0nLCvrkS9smRLZx3CH0rYzR4WQmKeCy6wtUHaWlFKoXve1ahydTgwq8W6DKh%2FZB1WtVDVU%2Bn2G4kQwma"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cb914d562d03-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:05:37 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=jd6m0QAxcp%2B4CcBekel5biKMYgmN19A%2BsehatM1epeaN4THcUe%2BVakLkBQOSFwH5c9x3nFX1ZKiHfrVsQp7%2BfjAkyEzEzCyR9KIVKQdND1NJuOpcTtyL5LWbN9B0vAFkR%2Bv3op6Mf08W"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cb939f4beb05-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:05:37 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=DhlORnnc90pB%2FfphMu%2BzHW7VUrPr5qRpz8xSgWPvxKrHZaq0EnSo2ljUpY3eDNbe5Q443uLduQBiHPi8muocMzY6AoXwgBR0mdn0AbEw7EUVUO2MRG3VUwNu9ZaA3qurJU%2BlV5fApn9e"}]}
    - cf-ray: a106cb960df4ef0a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:05:38 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=TyB140huRCbOXlIR2q03GSZzUnEgIYAnH64bImz8HI4%2FvAGbVaIDGDZshIscG3xfAdKn22F7PdNETbqJf%2BJRD9xOVDMOAzLOgAnXQ4Gwj5UoqtRdOaB8aodHjAgZ%2BnUp5JGySteBo%2F%2Fh"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cb986c65b78e-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:05:38 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ZCbzgVXLs%2BauUegzIJK1Yywu4YRjMFHLaUFbiIF4TbyeeuwBTKgYI37Rzj9IMHxcVB2Znv7Tq5mFVESkmOzrs81k%2BpYXEDGPXY%2FY12gErH%2Fzubq7UIEwexME%2B1g1DCVVKZeqEDCsT%2BEh"}]}
    - cf-ray: a106cb9acc2d7667-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:05:38 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=3UVJwcr1FtpRH9romK1tDX6r%2Bw57SAlzxLlGq%2BhZYocGVivnQcpMbOCVeJkYfWZMmW8AeJFh564HniTNOAGh%2B4Fq2R70dBd6eitZ7JzK%2FAn31fL0kpPnyl%2FOgmG4wW0bYEbuTa%2BGqiaz"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cb9d3bba7a44-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:05:39 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=rynOQWpWjVpazrGgsEvlpDtgLqrutX2J2XbR2Ph0lCCeXSleK8Q5BZKRIzhAZ8bB78p80rg3FLztQasiV0aFrkPUaU24rDzgOsV5QnPjcBVYoD%2FQwUB%2Fk70Ma9KYny6VvFLJ6iR9q5I1"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cb9f9ed457fd-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:05:39 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=258096Do2M1PfxuLLk%2B0oBymOKCAPkeb2KdGRTRgHzsZrO8G2lQQNwkDxWt4%2FcVzkEhWDxuUFIrnccVV02AuQqUMrGPHSCPEzldY24rUwRl6dXl3RMjx2uMxS6HsxmuVClqNnzoveDg5"}]}
    - cf-ray: a106cba1fe2095c1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:05:39 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=DP3g59qY8bldLVz2jAAEO6ObjKyQTlVWBvwxSlrRtyGeEpLUxM%2FBWyVSsXUcpXXn3R5X1BLNsxFra6wGDKhKWnoe7WxCjOFRdgI5dPMxto5kAFCDbZEsemmUjP9Ko9PeR%2BJU6u%2BRmEtq"}]}
    - cf-ray: a106cba44c2aeada-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:05:40 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=a4U6pUSl4auraip%2BKriSyjeJdG1E9lwdiIDXPM4wlRTMV26TGGsON3kSdqPfqLmtMvtVOnA%2FAunKWHbN3DsX0xbUR0pGlEhvxFsXeXYpxCw9y4So9YiTi5CD%2FMUUPQ4rwqtkAm2zMdYK"}]}
    - cf-ray: a106cba6a933a3d4-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:05:40 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=tI8ggR68zN%2FwuXD%2FSweDDRe4UXcUm1JhfPFHbNzWm9wOqB%2FxsUAgXYtWZ2Q3NHWTG7ph56DVtF20urbJ2VYLPEi0pXXTn3yRulqDbjtyBxQfUIxNj%2ByJbTIc2SZwnZjTXBmdi4P%2FZToS"}]}
    - cf-ray: a106cba8fb08b7cd-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:05:41 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=3ov%2F4nzyMXwIeh887xgDCDZlBOB5IdSO8Lso4Np2d%2FoyP30SL5yGSbSo7eInB7Jj6VQSQKxYjOPPXl6Ybc6x0FTAWZdU2HU5IHyuCQawgsHJYAAZj6cuewjpWRHfnHuL3Ob4fOZtir24"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cbab6a35eac0-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:05:41 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=fjxJCBPuNYq%2FcNY80N4xNFHAycRWavE3iKHKkTBJXEkvCKFR3iwp523y204E2sAebuyiMyZiArk%2F4lyKzFfrlftAUkzzdtpAKgK%2FmkjH0grxXqUBmI2n3DFI3a4p4%2B69MBVxOAlXjiiZ"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106cbadda8bfced-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:05:41 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=xcsy25TKIWIJEXVS8%2BgI235MBipi5p8cyQh1gP%2Fq74hNGHjhjmlX0aISrfzXdr9f3rBBAse1rdNrwj6XJYZZT9h4Q2IWiocIhJHkAtjejciZdj8B9tnyqCDnOz6WweIfJwA89L917RHe"}]}
    - cf-ray: a106cbb03fd9000a-ORD
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