# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/searchProductApiTests.spec.ts >> @api @search Search Product API - /searchProduct >> @smoke POST /searchProduct with searchTerm "jean" returns matching products
- Location: tests/api/searchProductApiTests.spec.ts:11:13

# Error details

```
Error: apiRequestContext.post: Max redirect count exceeded
Call log:
  - → POST https://automationexercise.com/api/searchProduct
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 19
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:02 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=6uo9%2Fw91bqipcYGOR9LBckO949suvI6TZ7o3058X7UvVpf93jvYox8arVBN9W4wN8QmM6IQXEnsAJ%2FkawwbBlkfLqbtC43yP80Q9LnjM5kiLlDDaOfv0%2B1Ccojfpg8WXFZ7hN1za3jsJ"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b4c36d0115b6-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:03 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=bX005UkAIPlJ50pvmKIRsUg2tIqMFT2kDiAm5sDGXb5DdPihk9djIgQxpSCvzBeORmpoWqkr1vFSxRyyhoB4lblftCiBY1yN0nZo%2F%2Fh%2F2psNkEm1iEmUjOzmzmI52KZ1ibLhpKQtaD85"}]}
    - cf-ray: a106b4c5cdfcfc38-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:03 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=OQcI8zL8pWUbhbzb0JtbKiIVigP03YKpdurYV7lGhfUaCouZ6l1XzXnpTHCJ3xrbu5z8S8JJb1NF6a6NKtGjCGgJF6va%2Bj1rKBH8N3JJnQUkLMdkhGkpHz5UtsGbbRs9Lov3tF8vLmhz"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b4c83f0a7aad-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:04 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=KhUJ0RTa8L2%2Fh5%2Filwmg1Iu%2FMXF5NAhEDsaLvh5UB7saMgQf9inalU4CoCrFfMntZJYtWNn8tOisGVYhdOJI86a8585%2BouYFn2hD%2FO%2BtIkbpkG541tIerISxLxDfwnS4ijw5oJWlDW1Z"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b4ca9bcdead6-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:04 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=SSuEIaiS%2BjGERDqiFRqF2dbBy7v4wc4CbdGb0uPUD88L3srDlW0aWFeRATpPTPCKI2AvcQy0pE4oELfEqEKZL%2FFYeIj%2F5OEIpCKUrdbOUBT7615XgvekcxG2YujpdJ9QH4i60nIcD81a"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b4cd2b0ec93a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:04 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=HrYQZjahK6PKlOrvpOfyOcvPVcldMQIrMaBY4Df34piAfJLqwLisnVwggDSlRq2XbVupy%2FBFxvQRAW%2BcvKWFNJrKNsy%2FH%2BDNBnJ7cXtUQli5l5%2BUNll8LEiO7fqm7mjRgIU14Xq1Cb3C"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b4cfaac9fe20-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:05 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Fp%2F7pYXHEeAN7a1yGxy28QWKYQ9CMsOutmlq1PU4JMNZ1kzEBbIpcXZ96j0dah2pTHUPdew%2F%2B8dTrfOQS7c7h%2Fvy0lYaJ9edMDP53iMUxOXQaCHN9yfItz5%2BeV%2FtepDZXONI%2FKvJCt%2Bh"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b4d22f8e7317-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:05 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=p4ZuQIm755oTQPqKPzVKngpWiPwvdnrnXDnmCfiIqkfiKAQzACOEMB5TKUzvIXFrZq937I5iAZ680EFMIQAqxzSSkZCfGvv6AUctMwRQqQCp03IlIaeUXXXkqXzO70osKjhvu7cUsKHA"}]}
    - cf-ray: a106b4d4ae267e6b-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:06 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=fYyhAbKMGt%2FoU8ZhCbJvwY0i903hZU7frukTVhy%2FMkP0HljyO%2BQsUsD7zNudrqKRHKXowwctJ3W7Hga1XV6tOebrvnXv%2BGtthIY3KhbafggjUgxLLsxljTsY32SMxpyz6sA6khtjRlhS"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b4d72e05115d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:06 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=92zGLJq5nUULltGL%2B1sKR3tZj0bRLgZ3JpP9FhaqoWCQ%2BJq8517Ds4SOmW4zI0VP8hCvYnZ%2BxXZ71sSIdgAdCcjKcqit8hyyOKUIPILvdiDhjVeg4fqkhPDUhLVGecDHRkzlZn9LxbUZ"}]}
    - cf-ray: a106b4d99d581049-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:06 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=1Jn35WfqEZRX1IsvK%2BkIkcrl7lc5bj0YORUIbX6SKOAgLRr960eZp3%2BCG76kugF1ytqEfD1WvGMSY62cLXOfekj%2BFKTzRK7beKXp9uQuWbwqt5r6FBgnTdPuzOO88nrwdQgawYkY4FH9"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b4dbfe47d7f1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:07 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=1rnRl6aDQNieOhe0mksX%2B67doxQUZ1FoC1DdaLY%2ByvvquNYvIrS31vFVWLGOlVRSkhX9yyM0H5Kz9BkVv%2BYP6ao5ALqUG7eoP6Ry7xxVSDn5jot7lRZ0SaZckmiKLxrnFMlq2WqPvyZo"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b4de6f997667-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:07 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=GYcDI5J%2FEDJ34ZSwl6bBF3%2BMlFhFzDaRcFbKhSjZbfZUSY0tY%2Bg7g24zUwSgLdbmpCESJ5wXv8ZR7pOjsoHu%2F3C%2BLBllFL2cR42Idlf8ciBoR1ZOEeENko%2FdDSetfHtM7Og%2FcavztAbm"}]}
    - cf-ray: a106b4e0cddeb266-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:07 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=hwFUm7wD6QhKb8dipYWrdvZyQO%2BjsjnU%2FPJGLDn7icj0vOyWcWosBWmmneVQow5jkrbWkJBlSLhHEEmDLNXy1uQhEONSoFu3dAIPNIdxKnxHLtRjxPjF8OmWvkmPcclObQxPsGsGe7vT"}]}
    - cf-ray: a106b4e31c54000a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:08 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=CQ4T1brPeiJv7taARxfRBYNi9C6dX5E0h%2FVphelpxWrmz0GRHBVmdqiC%2Fuqn6GB86M1XTJj7mKOdles6F3s9nhCLsMUpuLuovzD2T%2FSdAHkZhPj6x5qVLvbWPNw5f2t4aGDEw94EeGFS"}]}
    - cf-ray: a106b4e57bcd95c1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:08 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=V2CecpzhX8qbfa8UkIBsiIILyZ%2FidQ1wzCa0Q5Dm9gbw74GMgFuX%2FcfVKFL3rcJDbzB%2FDewmgSD1Mcr4V04lXHjAGARexWD%2BoEwPeybo98FRYFAPV4JKdDmg5oOXDosm5dQvMj83h0pG"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b4e7da3190bd-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:09 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2FIKtNOoO8OrKtKyphSWHfUW5at33TUtgBOj1u6jPyAC9FtdbnE6F3k%2B4eqiZ32s4ejX2JpQfzM2RPZEExxqkx00%2BbQzxtzPlx%2Fdcd92GogKVunYNKQXBxTHUD1%2FImNHqSdwriP5AkApE"}]}
    - cf-ray: a106b4ea3cb71cf4-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:09 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=4Zh%2BavA94PLjt3KYpNg4oQzOmkeA4%2FhIvTz4oRwQaONGDxADbZOP6ESjzuI1GMsNjGJGRQ3aaPAukmX4p7Bxo%2Bs3FWzfwOR8dOr%2FgTGwDGtVRSEgsEJJNiWx1mC9rXA5drWuFI%2BwcTiA"}]}
    - cf-ray: a106b4ec9e6f1238-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:09 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=dXsTsw6xhGT0U%2BTfYAtL44tNoahZTgDU2n%2FUo40wRHVeZcQBP%2BsSx2kBJCw9eEUqD%2Bg4wpBh46BlmB8zOZlnhVKvFgTdtuxvaOa%2BPz9WABaWWJpamPXIruEEkvXSq2n%2FDEgWW4GcizIQ"}]}
    - cf-ray: a106b4eef91a7aad-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:10 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2BNkhgENluQseUJuSZ1ws7AKUGxLr6b%2BQRKiJK3JhZJhLDCXKm00ePm93De%2BLoDOBZpm1%2FV%2BPDlJXz1fFX2uzefQiq2nPDUVPeH0d9r2e8MqXw054wYLjMdzfAcCCZMzijQaoXkdNvAgE"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b4f15ae7eb5e-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:10 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=2kcLPyDb40CD%2Fvj4hS0JOdn8c4qP1tUeIWh1rc6WD1Mcehg4qyUuq11mtNOcX%2Fw5M9Klme4zQW3i6xDR4hHrq6uZqPSmfRNA4kwN%2B2G8XMQx3MzspkKkK8RQLycdJ3ikmPV0XsfOUxAv"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b4f3bc8793b1-ORD
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
> 17  |             const response = await request.post(searchProductApiEndpoint, { form: requestBody });
      |                                            ^ Error: apiRequestContext.post: Max redirect count exceeded
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
```