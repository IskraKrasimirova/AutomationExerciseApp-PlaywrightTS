# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/searchProductApiTests.spec.ts >> @api @search Search Product API - /searchProduct >> @regression POST /searchProduct is case-insensitive for term "tOp"
- Location: tests/api/searchProductApiTests.spec.ts:96:13

# Error details

```
Error: apiRequestContext.post: Max redirect count exceeded
Call log:
  - → POST https://automationexercise.com/api/searchProduct
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 18
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=nxq%2FfkX65zV2oZuRuNOv%2FPorvEy529GbHMgoiLrboNLFjG1aCFVOcWJ5%2BZNHZu5BeZWn0%2BZ4vpTWht9cYN8j6adGmV%2FsfLvY3n7u17O7jl9JkYzunB%2BVkPwW97pf0kyEyOPPgcLrDdHt"}]}
    - cf-ray: a106b561fa67b266-ORD
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=bbZtKgOi%2BS8b8x5gADHoFN43IklP4ilhyaMP%2BpkafyjNr3nPVcL6tT6U7zs4f7leq%2FR4xexv8ujoTLlcQSEEA4ma7IoEc4UOT9YEJF%2FSxn56ivuSZauu31MO8pn5XW4Xg%2F8MegxYUF%2B6"}]}
    - cf-ray: a106b56458961257-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=3Qac5zY7kq6QsqGi9cmmDXUP4KazAbXMkFCjsxNFlEzmD7I7toW2u3NRMplqPxrXokyKxfFqMhd6ugoY6koVAvJzu9LQqhJgM6dNicf3NfRjwnlvALanAqzHWz2WbesDemfvQeBFJp6C"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b566ced593b1-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=q%2FywM5%2FTqnR40%2FwKnspjMGq%2FU3VyPUzOVEfsF%2FYoq5paWBZY4sDg6VIJfaxssqt4DCcjEhNyfbRJOLqUNm7cKY7Ts%2Fde5NAulMnjH7pW5yKKzazhldTlwT784gKm9IuCbG2kdTzUzTS3"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b5693ef80bf0-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2BygWplWyt0fhHHuq8qlc3twfcwHa8vT0N9lHbFF3LiRtxoZCmKQb4B5lIGTOjbGeZymvvX%2FaegaV1CGJRmhAiRkDrHEvsvH16rVwuCnlVxIA%2Fyy4zo1M1FXlyiw1BvbxWNNm7ysmFlZH"}]}
    - cf-ray: a106b56babd795c1-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=sazvFr%2FVIMY7T3H1n0Sp2q%2B6h4NDwW%2Fzmd3WeX7XtwjDFUrtk86p71Vb%2B48jkaOFUFS%2BtrDTjwXqJcvKhE6oav%2B4AGkom80H65i1pP2RRSRs2uNSwL8YTnIwwS28%2BdHH2xCIn%2FJY9qsh"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b56dfb2d115d-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=yVsckeN8yuORCkbIM3Cakyw02Xo%2BuRrL0c6l3SkpDLPD%2FkqlFkDhGNS7pGzdTANoTRxf6xP2ABv9pZkkIuxalvI%2B9kMW5miwk8aSL14IjqFLVzHKn2%2FMWGgCyDwa9DATRPIpP%2FGFS1tp"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b570d8e37317-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=5sr%2BpuAZI2U7E6nYUAp%2B107EgS3KAfJL6b1abZcT4gsCVFwnAvC1g9w7JiPNRdupbob955tp64lCkQBU76N3KPlva8NLhv6%2FaclyGd3IOknUoJFIfmUwJiEhWXwIEIIK2D94a%2BSg2J19"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b5733f2a4354-ORD
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=djyW%2F17D%2FmoZo7RDzP%2BziMiDQEqxV0w5fTEDeYKXIXkxs5uGqol4XrylwtISPlv9wKFP%2FJSSKf7poZnLtt7E5jXPcJyhfGMVotMNqCgUd%2Bv4ef23QigcNkb4X3UxA%2B3zRT8gpWRQgoKu"}]}
    - cf-ray: a106b5759e6a10bf-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=s7IMs5Kjz0fXB0oTYg9%2BEvH69ebnaqEICo5%2FMVb2%2BnQnxS3i%2Fohs9gZ2tAQxj9n7%2Bsov1tlivghzs0py6dLRQbgsLM9rBUnlJ58T99KqdaDUFOXyEw%2BfkvMbNUVyvF%2F1ayvpsWWWmy3k"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b5780e9ce802-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:32 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Eq%2Fp3L4bcpZ2b6vTJvi0QJcgAO%2FZLpmROOp7L3D6LppY3GHxgsfjdJRjEJJLKo%2FPxLO8cnIdkKNHqMcCl3%2FdmoNuANaqRtCedLnbMgKfQawX3dQYeDugtE7QSKBIlRRvnQ%2FtsFrtGlH7"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b57a6f7e634a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:32 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=0BS3QenxG6DSQRNP%2FAt%2B4KbHmHGn3V2ROafhkHahzoUhe%2FXdoaqDQwow7%2BJUl7y%2Bv4tBy2gY4cwT%2BSstU7p6GXRnjorcNNVc5BjewvYOSV6m%2FXDPqKuUq0wtrd5USkuY6z5lZr4h5%2B3D"}]}
    - cf-ray: a106b57cc9600bcd-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:32 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=UX0wXQxlsSojlQGFicAEZgVa50c18L8r1ebq7fYQH95tDHScksiEpr%2FZlSAEn2O5x57ywTiMII47Z%2Fab0%2BqT5j5QeAt763o3KNhMFX3lrcsoZYkyew6%2BwtADm4RkE%2FoDvy7B6aNO9XSK"}]}
    - cf-ray: a106b57f2d0beaec-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:33 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=D3cWYuakUJdzu6ZGT%2F9p5It%2BfoSkn1B5gqZkBRfYEFCQx7ICRg0kUpRpfGFWrTYaJExggma6SmcogsbOt5c9eHzNIxovpn2OAF3IkhX1%2BBlGI5TDxlFUhdbb3qlr%2FKyj4EtEImXiaXXD"}]}
    - cf-ray: a106b5818e37fe20-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:33 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=RNvU3Lsic0qfu8PUS8X3XMvR%2Fj%2FqalwoECSW68iiw%2BVKTtrwtv1XHeHOEF0SJt1rPGA9P4WQuSvushFOfyu2cII5LGP23wBnOxTihlIoa757XkIwKPlOkYMYwL0St8%2F47DrQXnQyeIKi"}]}
    - cf-ray: a106b583dd0ab4b8-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:34 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=suqQ7aSP5f51FkAwn2%2FzLextzD1EGF%2B72JQ0jKhp4SbDLwbXqS%2Bb5%2B2l8%2BSA2bMoj65%2Bv2UkTqRDhLp4sLWMGRcuMQ2ddDyoAprRRCXftOjZ9FHQPx4IGfr9EBebd4Dukfyu7WUjF%2FNl"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b58778afda16-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:34 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=m3SYEemmkDj4oMUmt2g7I0Qc2Lnk8tLqiqAt%2F9QQRMx6c%2BOwYIMRVb%2BsW4kNOhwb0P0mlcLOJ%2BmUIjBK1BXItAOthXU2EQbCXMxrVS6J6u%2FIujcJnKHMvpAK70amMrzzxXEyU9FM%2Bfc%2F"}]}
    - cf-ray: a106b58aac14e23d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:35 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=CpClzQLBAHAfb5O1xBt9VQJWtHd9exVVqJ7Qc8TLu%2BhY6Wq%2F96f8K1selcSnbXN5I9WHQ7scA4w0hQBbV1f6YZyvHb8wDJC4hGUAKx77QTJf1tyaCJy5FEYBsmNkfu0HF%2F0xNr5QvIMz"}]}
    - cf-ray: a106b58cfb39b0fc-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:35 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=8gRfHxCv5yieWFpsJu1SXEoLitg0N1eqf02JQAHlYEt%2Bg9BBOdgLgifESAIg8VuI%2BUC5asKUAPZKTeCike2BX%2Be3JqAB%2BMs9IbM1YK6ogEtT1kzkiQtiu0nNG9YZ1INYCNwGQ1meMhZw"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b58f6cdd93b1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:35 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Te3fOpwCnnY9nbPY5lenHCz408Rgt80Kw19OpqwPNW6ILP9iz87korUK%2BJzzwbAzsQFZjUJ6Pb3PBUv7odsuTkNFn%2FVHZtEf9jMVoeYpS%2BU5%2BpL%2FPiqBn6Xxm4JeGCJKil6wvXoTnWcS"}]}
    - cf-ray: a106b591bdd1edc5-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:36 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=KscX7mbT1ZkCZKPeR0K1vpPjKZX5Mi8k3VAGv3uCVBuByKIHgEZYYBhs3d4eXoQ94WYxvrcW8vSPvXIjZfwXfTpSJpd5dz74Jj4vftAlLAj%2Byr2LShdl58Qi0ck21SRPlVRtXU2hA3la"}]}
    - cf-ray: a106b5940bedeb5e-ORD
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
> 101 |             const response = await request.post(searchProductApiEndpoint, {
      |                                            ^ Error: apiRequestContext.post: Max redirect count exceeded
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