# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/createAccountApiTests.spec.ts >> @api @createAccount Create Account API - /createAccount >> @regression Empty value for 'title' returns 201
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
    - content-length: 324
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:01 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=zqDP7UGvuCk5RiG%2FqTVX7bVn7XI%2BZ6gWQx9fSv6p8d8BGXshheTL1GvCprp1J4M9UqyAHPxhspPA%2FNG2uW7IzksTPXdUR2Y5xBvRU9E0Z3lvSnTIa2%2FYnBuKwibvCG%2B44ElwreZiVHMs"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a9004c43edc5-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:01 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=PECNDCb8Q6QTgqrzSVBuNvNMd85wc6eIXAUmqOwNDQzXozjYqU2nWNy1T7oQl%2FU80E6zht9vD5%2BVTfwot9q%2BhgDEpv%2Be%2B9T36qmMfPN6lSAmh0Yz7pquxWKMjf9t%2FaaIm96MzOgKg%2B%2BC"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a902a90f93b1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:01 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=crEKt6Uuiob7kkmanCOqlv7bXYta0RMUlxbHCOxEJashIshgZF0fiapLN4yhso146TzlNvmP6iiLlJY91sofHwTSXri%2Bp4H7ZfXXpouJT8swwz9g%2FDUHMh%2FRj%2B2kFtVVFka%2BNccz36B8"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a904fd69eaec-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:02 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=5YoCroCzD%2FNf09fqiDdzM7CAIu7j8U0DbN098HbnutOQbGOJy%2Ft4U%2FOKlMzZbhRf9DfJfNpDFLztWQ9zE0IS2hnUZ3YGXujMP7YHt9YSu0wH2FY2QxOgwCDUB5XPilV%2F8%2FBatluyp8I5"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a9076943fe20-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:02 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=UR33bdsHGRl8MLjIYN%2FuwIs1Gb%2FMZFgUM5F5AEOsKU5c%2B9dnJamfDeCE092oeDhrHOj5OudV2EMRs3VCRQBuqvsRdNDJ0IETjk23JruDVPEvqxXOS8UQRlJ6SnMhM0j5rPx%2FEE9Cap9W"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a909b88beada-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:03 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=PKMLko45Dm3EjXRN95YvyZamerFIoAnzX6dIhovA4wfsSf9l6icq7pyyyxvLEk%2FoHtlEWtW%2F9lbWUzBCAzaA%2FoetLnImNgw8DO84kZfetD3WkxrRcJLFRiaXBScKKdD5NcyNirQTc%2B8x"}]}
    - cf-ray: a106a90c39eaeb66-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:03 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=W8iekVpmHQQN0E1nOCcKBDwuFS5KMFs02jd7sVJfCc890Bt2YGxRZjeNjzacO1c9qg6cr6qri0iF2rpAZSqCoFvHiJQecuIydd2Q3sWSoPYl5CQqzOmVIlpn09121LWIirjNgvouQroo"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a90efbfd222b-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:03 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=0Z2fp85mD5MeUcA4cG5AWSX8uPkLTirZE87Tosq5KbG4Y1Lw17rMQSP4jRDxp64iUf%2FVPkyQnR5hA9qhrixuEt7Gt5WMY6WF6kNAGTNKPztCskP351xy30e0CSHkdWUPJ2Qumgklwyol"}]}
    - cf-ray: a106a9116d2aaa8f-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:04 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=4uYkAafpW%2B42MhjZuOtBsrsRamKqMEW9zGfsNZGabK%2FpZUR8fD%2B9TsEr4f2VtpGIIB0fAMivqmO%2FAThr5FGiQJ41m3jZMlu8ya8UQ%2Bmbq3lH8bcn3qNkiHhpVRxnmB8RUaKQgaKn4Ltr"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a913de92ead6-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:04 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=nVZhSrp3vLcv3V%2BPpQc%2FVtUuIvMMDl6X1jlNDzjysJXT6CeOYbtAG09A5aiO%2BMpMFWJVuGS81oa7Fl%2Fg8ZLc4cSA12EikOwKP8oeF%2FK%2FdbqfCAc9PQ6tzxCWTqSg0NqsWenZGq0AOeK8"}]}
    - cf-ray: a106a9162c41c93a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:04 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=L4AmtooLGV9rK%2F4%2FcX0XJRH5e5QNrphDVeFdXpo32Z%2F581OZnW9iXmyMzueHSAcdWdVogbKf0QBG32beiy%2FW3xigmFSVzoWu3qy6ASApY74TLRHyev8s1He13NzGqgKh7rIGNYRTbOCz"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a918899841cb-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:05 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=NHmNaJ6%2FI7Op%2FdSp72dL1MldeXUvKRSRoBaOUe7XGmbZrEH7xCoUQyhD41s1phAEZofbydZPODh1xUMj%2BMpe4pPdb5aomdgXEWw9KlAI2D5O0sYTjSIWrUs%2F%2FrgG8VsfJ2FFtK9tf5st"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a91afd2eeac3-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:05 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Bmd8v1%2F6yYrCzh8lRoW4wdt9ncrpVan0B2mx5Nb3gd7T1sdyrlqhLEhl%2BLoD6s2Jq5YUmoRl7%2BBLSWRN5%2B1MFhED3mQ8HnPQGauD3P0wA2vyxcJY4qMnBPwHHfLw%2Fjlc1EvRMfHR3waG"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a91d5ba8eb68-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:06 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=F7MKM5RGjiblMmWIdmvQs4Go730xqpoexi16iKFZLC12%2BhPd7FuQ8Zj0AmmSS7bxqm%2B5rWhqXRlYTpXvCl8fOUrjgNtj0L%2BMgvG%2FhdUC3Br6%2Bo3atT89XaHjl4iQ8MYXSy4%2FDX3gZ5gc"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a91faacf3426-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:06 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=1hZBerSEJbWC1n4LVIddLzRjL35BloAJ1%2FnXZsLgCtBouBz0ClqWuO3hCI%2BmcbeVe2PP4TnoLxWCORQzn%2FMGUF9xbppg%2F%2BzuSa7M1rv%2FRLfNuW22SdETM5U466UdIg%2By%2F0xAkPjXCO9p"}]}
    - cf-ray: a106a921fab21238-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:06 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=iZsVVDg5Q7cIw87rv6LOHqH1sOJROOeXE7E9odhLOsm6X%2BkFkjmOiZkzE93CVfaEUyRgFXPSIQUdITsGr%2BKsddGnz%2BNoXTjjYpSnEsykeJx7XlPEZtERkInLD2slEvJFLKTJLo%2BsWZJ4"}]}
    - cf-ray: a106a9246bc657fd-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:07 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=moGvRID0PQj0q%2B1C696r3hmewuuGWPYZSGradCHCzY6A4WwZ5dJYpSanQTGgN2A1%2BOxUQyizM3DyrB9oEdTNnikUCmBpoFuXNDxtUm0%2FziqStxYamNFA1Fim0kwHsP98Bk9cjDD788Yg"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a926bf84771e-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:07 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=dKUxxGQDHZXXwvjE3qw32Xqk%2FLOtgor4tQzrNR%2BKQc5EFF94FJKz0O6B7Z1o7jwZrnL5molhZCKqoAudzefmMLcBGuLYqtbslXtcyn4P6AdUVVfkJIFuHo%2B6dhDKs8owcKWG75hDrmRx"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a929083f15b6-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:07 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=jq5bvtRANwyGqGir8wyxDE0tW2On1H5A6fDvFIAK41nKa5PH8rV0RedHB8qlEWMtmFzZZI5W212Tp5AHiM%2FUq7pqw%2BiW8P24%2BUTOhhsOjN%2ByQBI6WW9ehZhA%2F%2FBaYLeGUMs5LIpzhj30"}]}
    - cf-ray: a106a92b6af87aad-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:08 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Ai2j8IaGAAgyiaWlTZ5ffUSed4k9UPlMsgNvPcetq9iqD0BEh5YA17iF7vrdkDgaaq8b%2FeFL80xsqyZ1JFCqciwIRdVrNPFNZy%2F42bVMjOwffO%2F4tUX7Tprb40AUYPATyYsGv1GTVNdg"}]}
    - cf-ray: a106a92dd9d493b1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:08 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=w42%2F4GnVTLrzxBIddVeZYcd5idvu5uHFVEWe9mq5nPRNAdAmY1RSY4WzRbZaTp6tAK%2BFwB115BHQ6E%2Bg1TQS6KtnhYsVSSp5uhHO5PKmZFmg6uc8sFTGZ9z%2FjndNPBhvDlwNeBJpaAsk"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a9303f9aef0a-ORD
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
    - content-length: 58
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:09 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=NRGw60r04Sq5VQJkzbTL%2Bp7hLClvv5P26HKYxgZYHdvVfVePffDNPo23JlAnUUjYGZ8NuCXriO8P63DLi%2BwmA0MR0thFwFX90O7%2BYyk4SSLV4dYLDUcxU%2FCUB2oIKE01HXCaPFXW8T4d"}]}
    - cf-ray: a106a9331b95b7cd-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 58
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:09 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=m7xq9UXt8uW1Fi7wGebU%2BBA2CViRJ0CvW%2Fu3badue%2B6%2BPrcVdiOY%2FWjcEcRzfC6fQOw7nsrhyahR9Ac2uaZPXgs%2B%2Fl%2F9mm5PQ1YBRgh%2Bq22ynmKHz%2BlEQsbptoh5%2BI1hDLiIBriZPeMz"}]}
    - cf-ray: a106a9356b69e7fc-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 58
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:09 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=WyfeE7cWNKcuxNLxpMoRXwAR41LO2DK%2FHWR%2FlP1zQmGu95mI0UnGt%2BYkxCETam1iWEPHs02Q4E08tS6zYUDK%2BL7qt0NjX4y3Axhg7lgSLBhdNMD6PT6lPwoMXCMoHau1UHmhAkZeETxE"}]}
    - cf-ray: a106a937cbde549d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 58
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:10 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=26CC4GA7oSlDTSjwPWwDm9SnO2lcxNeEzi9uGdCsqYPq%2FOFRwmUJPEQUFhWUUVDCxkvjrQVrFAVnVvOqE9ew7mnYbZwnpAV9ddRJcTiXgDEcwqiCNdfGSMxqQq3RRbpC7tjWz0%2FzKmuj"}]}
    - cf-ray: a106a93a1e417815-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 58
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:10 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=pFiTrcTz4SAh0AA76%2FBKCzmW1gHXCIKiverdljkdjjBh1TYcGuFQb8VQLdkwO5igdAhYvuMQ4%2Fzp3bwyBoB1Lrp5%2Bg9S%2FnxQZRHdMyTkkHzC2hbm8gR5ia15HdcmXh3TXPBnhDP6sEoQ"}]}
    - cf-ray: a106a93c7eccc93a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 58
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:11 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=lN56PAxk8LcTkeGf6MuGxA7Qfpo%2B4zM863qbkLA%2BnI4kUPX1XIR%2F%2FNgRcBy%2By87X8G7jAtcqAG%2FztoUFGf7zAOa4Rn62MBpPxr5z9bUyJfMlWvGJ5CrKfjy0yF%2F12ha4zGcBbr6lV6EE"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a93ed848eace-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 58
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:11 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=E%2Fe1cC4zlnJpBREmg5uUHSLUVbrYWyz0inoOAEoKpgwexJyoUYXCeEcdmJZzAhdhKkgCdztM4PYAeYDYeWje2hEjbPcywNTrCluEUVyjpo8ozgPcVl5Gtw8Cw3sUK%2BBGMW6RwXDegbfe"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a94139362ced-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 58
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:11 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=cBt5FYDnZQeFOivIF4BgV08h2nmYsq00IJF89%2BuNat%2B7ElBo3zKgTJ4HdHMgAJp6%2BkfgIfpOrp0qXgDMJNt6BlXzUF1pn4k36kxrX%2FfAqCmR4tM14qYQvhowjuzXH569tBFnpA0IZUrI"}]}
    - cf-ray: a106a9439a8441cb-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 58
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:12 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=19OXTxJeQ%2BFqtRww1NObKguWwqQmPJp9cDi902b%2FRGQbx4HA2seUSyDie9T5hkWq6a11fRdA2sxOV1BCw1uLjzGacuAC3jmDmk4SLnb3JPkuE2B0vkkhq1%2FAHe4GbK%2BtBNedEWAAfQIh"}]}
    - cf-ray: a106a9460f01a3d4-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 58
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:12 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=6Z0ZCtq1sgUQIoBjb8v%2B6w%2FhgFZAH0Vz9ofpIdeoi8K%2FcXj%2BMr%2BVarVGR8CwIHQfRN3TxvD3mdXTfqCdB%2FKGQCBpf9XkBQvjU%2BrSifq%2B%2BnGu8d%2B2mKFUBIRmdsU82IveNp708Zd%2Fyjpf"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a9485d2aead6-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 58
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:13 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=HzGURUoWvqFCF20%2BpfyxJUqOVmDIBQImdSfED96OncyFb4Vks7xpKrsQoy9PcFLGQ66qVFk%2FB%2FN%2BcgEWdZjrIOmUNAF%2BZekXiahzS6ec%2F2E9tkqLUatWQAFkSWeUKGnBO%2BcFU8y4IMvb"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a94abfc7771e-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 58
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:13 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=sZjNP4eUq723M6tQDBxmaZn9hnaPl0BpVF2MwvSxVqq1ffGRG6jwsqU%2Fet%2BW9my6h%2FrsCstBITRWIEGJ5EqMOe%2FYhQ9uZ%2FB2Cynx%2B%2BkQ9VyelXgQkj82dUY14eRwnCjTyzm%2FSYuys6xn"}]}
    - cf-ray: a106a94d6e603426-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 58
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:13 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=KtQB3lXWEJz2dMLDYbSc4rLYLjOyuPHfbOCI3WNcGMfmxk50MO1cZJUjKaBbjxqPtCu%2BsQlg0CNJvpz%2BHJ%2B0%2FEJIB1oijyY0c%2BkfxmtY9QYqZpUAAFJdZKSj7RRrJu4TkJ1mPZlMnJon"}]}
    - cf-ray: a106a94fbd87bd1f-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 58
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:14 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=z0fnHexBGkrprW5paGcS0bJ4B0al9UziCKD8YP5tXRKAQ1uVHThMgSAtH9lJ5ko0EI5mRribpAdbvxAQtLDbiXtOqpywBxLRhBlHam4lAPwlSL%2Fy010SztkwB%2Fv24j9Tc3btWXm49i1j"}]}
    - cf-ray: a106a952086ba068-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 58
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:14 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=uDkAzvH78%2FObSRJg74FdjDj42YrDwm4s86fQci5%2FDIrV%2BvW14oRUpAAUFI2IMz6KvVlkIRXObILt8mNWhE9aw8ZHn2CTYhOYuEU3v%2Ffv8iaA6kcpGX18QRRvxocn7ZbzTCZ8WMhdnOu9"}]}
    - cf-ray: a106a9546a9feada-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 58
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:15 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=71wGMubmGwHNUeeFDtwAQLBkZTEtOmB0MjWuy0u8xmuSgzTu2TEXLS70V3ez3y%2FeeylsyrQHFJQZ5rGnfh%2BdAukGQ0tDGAWfYQyr7gRZjk2hHzdgeAycKV06FYed65g82PeOvj5Ecsoc"}]}
    - cf-ray: a106a956c9a093b1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 58
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:15 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=YpeUnpZqcc2reFNwJeHsnVhWMqvGcwOu%2F0psXiKylbeFu4x6MyHJKdSir5r6rtr3S5viJQE0maF%2Bo%2FnMVrlQQSQlYEzk40vdc954PHnuj5dhV5OrZNppPWvuDYSg5ALgrtgK20dqbyAs"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a959e906f571-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 58
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:15 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=qlUlyk%2BvHD8bHRnorBB%2FgIz%2FzjWQzkDLVKI1bcfi8lwRjK0y2RcWA1nARf24oCJgaicK3Hmz4O1K%2FSeYgZWhbcxkSZ8u7XphCoVggmGSfFJVz7fvcKc7cos9X%2B9CereTRX%2BVSRXNUaNd"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a95c492eeb66-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 58
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:16 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=9T6T7%2F3QM9OvmjkhEF8nVrCF6P7ICiEao2Mluoelbt46zvMFKyJiMAEYck27JlNhQLlj3VYI2m41ZBM5K8a4dYaf9lRSE8m8Zosuda0UHZTHe0eRUQPtin2Z%2F8IJ00tYcloNaFhF%2BWpU"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a95ec9e7fe20-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 58
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:16 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=TlPCINPRp%2F7ZnWvIWzP832keLlUbtB%2B4rLYebHy6dlJcoX4n205ogovf0GRWBkgJL9shHlheuMrLm2FKCL%2B6E1syEsT8VlRNlTq6fIRyaodBI5O0R46hS86Hb21qg1lmkZ2qmrF5scW1"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a9613a73253f-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 58
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:42:16 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Cg6EWzk3VgIMbusTLigXYNDmPSENW61im3dPc%2B%2BR218ykEsypS55JzN29QDcf%2B0oiBanKSkdmSOdovEc1hMa38SCkB2t%2F6F2FqLvKRy8vGIcONP36y2grhW4YW1wKekY6AUPUkPcrued"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106a9639cc1eace-ORD
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