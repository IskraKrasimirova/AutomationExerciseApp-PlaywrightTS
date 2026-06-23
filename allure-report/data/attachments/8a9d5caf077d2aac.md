# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/createAccountApiTests.spec.ts >> @api @createAccount Create Account API - /createAccount >> @regression Invalid email 'email@domain.' returns 400
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
    - content-length: 342
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:17 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=xjDDJ4Gm94HI%2BkwIMNLTMtheSvEUWyOzH2InS%2B6rhSp38tua1jXJ9h2egvX2%2BVXBWUfgEVzNCSqnPUd505On9gcv8YHiy%2BHAujsQKktURH61sV9trCiEldvf2%2FEBN%2FwRq6aCnKm7gfgb"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106af423c4ceace-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:17 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=l8Esmbvl93SjS7OMzuceLHdIi1yOQ5UXFrELudN34Jg3HN%2BL6TCxKfmf2ZW%2B2FcoQZ2nqzzToCdgcHj4pfbSNxCODdL83g%2BilD%2FVkpIajx49M8RFy7ymGWbAKvcDhCS4jQYpdPqkRepN"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106af44bfcc22e6-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:18 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=BshmkfqczBlEruDAKXN4Dx2VFW6ge2UIKpcY2v2QnEA%2Bs1ZQx2btrIPvF0BqO5odaPkybIIobjHnVTTbaZhHTeOH%2BkuAP0VUXdTGGsnbhUY4O9Uf3RuRBTMnHIs%2Fy2FXw3hFT4d9WgbV"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106af471babeb00-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:18 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=P1yCkG5rWP2%2BthDQ4QoIdzAiko%2BsxqCKL0Py9SLovIRnhuKt1WZ060bs6vEec%2BIcXd6cq%2FuL5yW6pdycHZN2%2Bo582gJdWQZgntinlPV7P1RNwOEOQQ3RJ4LX4n3xty3fX5%2BVWoDX4cpH"}]}
    - cf-ray: a106af497d07771e-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:18 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=PzwjrfvPdFkVOVApONXoh41GtBd8h%2F8sgtOZvba%2FdJ8Zsrw7CxGgkuj9ciH3%2BorLvpP%2F6eZ%2BVeCZauZwdJfi2kzGIB8gdeq2dxIqbwc1GJxM6bSMt3X9GT0RG0mJ3KSRatbqpx6ubuOk"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106af4bc8eaeb66-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:19 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=wB5Rw%2FpRlhrrmyyAXoRj%2B6b5J5UD%2FRujrr4s9cftzDtS8ZIKWs%2B3NKvTIeVrfmfa6P3SZmLUK32VjInL%2F5cqmL6ULu%2B%2BwsKuKPOKF75StVTNC2CaBqVZFHm841nTVsjTrLcTaTiFOLVQ"}]}
    - cf-ray: a106af4e293cc5e4-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:19 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=NOXaEROkf60ap13T21C9yFC5JZ%2Fa5kfLNkPJX7R4mZCUcvVS%2BzS2MxnHdwG%2FthjXsMVkTFNURKN4%2B5%2B4YViRlf0%2F8BlrO3KtpAS43MFuxeN5ieSdzV6WBPpFk7F9s%2BZc%2BSoVwcGLf4gw"}]}
    - cf-ray: a106af508e0410c6-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:20 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=wisTdskgOQD77otu%2F%2BzJLkVpPQY5agdN1ZDdtl50s2aIVsZES8TtS037JumLDIPz0%2BG1h25pmRjmaBZOHEg2ICxgPPRySZ%2Bp%2FkWNNFFJSgjTM5qk7QDKcumIJLB7ZBBhfuYeeHkLd117"}]}
    - cf-ray: a106af52eaf8fe20-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:20 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=xzIAYzM%2Flt0M6hdOebLnlhy%2BOwhaN04vOopna5tQR9UYgpPNAKNST%2BOUNExYmCzyY5BNX6ayj06T12%2BxqKZ7JPDVAfEE0FmDlAzVP7zLsgG0emxScCy7aJ%2BzAM0pI7LuhxZ%2FVoBLv9Wc"}]}
    - cf-ray: a106af5559b9eb5e-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:20 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ZLR90rmhnxekBKKQyEixHR%2Bwo%2B39GMTuJcgI7xNZA8wnHnJMrfyAwuAU2lxOtYwUBkBh9BckhK2iQFqZn9nwTsIar6RavAfs2h630THAle8w0yiP2NOVW%2BFlQd9SYc2rHywbYh9tsBhU"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106af57acdafced-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:21 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Dp4tdDKf2ewKhsHZhfo%2FMYnIfhR1r8U27wQJcO335xwPYv1R3VlSQnVCFCIb75LxCkU3%2BASI49UkY806Z%2FZ3OOk7W2PVcCWIJ0aFG%2F3e9Yqufd%2FgCjojIFDKrT5IPZXxdJ2Oy%2BYDPHQw"}]}
    - cf-ray: a106af5a08d657b1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:21 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2BfOpcImJKj5pAwRLk7QRZcU9zP%2BN4RMx6Kmym9Msp4B9y6Jd6MHxTke8o9e0jK7lfmNsWNBJaftT7cU6d3W9ivoeZQrnEeJM4lHcT4WWWiZBejmOB6SHD4bhWOjtzvrSW38hSx%2B%2FUWPH"}]}
    - cf-ray: a106af5c5afaa068-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:21 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=UtAvwjTQaIYuIWIp3nWUK6knjf6GUwfUqkKTq3oPHbHXdheaiv5bTqSa89DcVFX1H4gmYiFNEpVftTgnL2SS3RtkpJBcdIEO9xIuoSPFvhEsjCxz%2Bvf9yMh%2Fw9uE0An0FXUz7SMr%2FKYA"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106af5eba2b95c1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:22 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=tbLGRvqMun0BTEIKFfBqzfZUMDcdjFfeakiMTVxaBWUdDb1DWPsgz%2BJc2E6cHPbUMsCqvVJr8O%2Fv%2FQpl5ySCswGGaPNI0OcfBjqpaiD0eFnCAXpKU1TDUGdPIg8JnxOym%2FxtbVA%2FET%2Bh"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106af61198f253a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:22 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=sSl3MvT1jMPKPTYFFWvFd4fQuwZ5sqhpCSFWGeT6KHyFp5EeFsNR9gLj%2Bm6%2BR6eF%2F11D8B92rHaD0wcGzQSuLxVj3dVYh6WZliNkZow3uOB%2BxMKaWYBQFwxKWbDxG0X0%2FLOzUAJ%2FSFis"}]}
    - cf-ray: a106af637e9feada-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:23 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Vrbj0zreyhk2uSGRh%2BgqsVlb9pMzVuEl%2B0s1FwXZgoGOtGQ4ULNAmrUfJmAit1KFXc4LLnKPJFpv1Qi5cQR8ki1OhKC%2Bes2VaRlThM%2F7wRWNYPWxuyE2j1oDY3s%2FKSo5FhE0VTTLYBEo"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106af65decae7fc-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:23 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=RGkwwhjb2%2FeJLlE%2FSpJc5WNNpG4hkY9AH2Z6gCk1AtIgyh1SYJRCBZh%2BLtiTamSpy0%2B5kDWu5OwxEE6H2bbsMuMKrr3IW0bfexgPmMCIDxFuD9tuZtNyCWkXEcLOb3%2BviEoP6R2W7b0c"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106af683f50e8fb-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:23 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=gpcWfIXZ6DWcgCRGL2UzHZe7v9oMyah8LjJZIDrookn%2BjCqWMjhBmHEoVcuAQmvQnmSRtrRMjonAcoKYT8F4K%2B3OlA89uXnaB7JCZZovy911RAnPEc%2FDC%2BDOKlXfmWhusgJf02H5cc8e"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106af6a8e10eb09-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:24 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=gelA9Zenm7AsPCsEeyvxjLHUbF0WHbZoZ%2BcjXANjaaXSNkuQr7%2B3c9JI0zKLB%2Fs6C5dmWwTAJ4seqBle%2FlMuFhqlPgLMzHaedpCzUN0AOOrWCt2Jn5pr1n%2BV8F6ERT7d%2FqUt6cRqLZS0"}]}
    - cf-ray: a106af6cea82928a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:24 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=HlDm43LwvAXHdBT0C%2FljL6%2Fm%2Fpy9H%2B0Ps7vDbug1hAjri4oNKpAxUGSCoOnnf2JogaOWbnR3rWkHDYRhoZ8470m9cnRXcbiFslRt%2FNig1HHcgH3SpdXgc54jjSMOagw53QQVJZeJZ3ko"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106af6f3d0ceb66-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:24 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=NmOV%2BlVru1in%2BhXMpak%2B2p35tgQ0TaPv3fi565kZqqnmzUA8sFSzJRPFDGR8ADyyrK0wkDFnRvom6z7yn7rAeJBZj84DKEoC78vFAcme%2BYKMf86vfp8PI8oH3YZ8vuovk9rTE4l0pLHr"}]}
    - cf-ray: a106af7199ff1060-ORD
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
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:25 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=DeoRmDnnwcOXP82w36CB6Oc4MsttE5UBKUyw73s3ZlOmiiTRrocoXtyTTmydB6yMgS8hAdGLrSdj2xY8BlnDjzfEh0CR1vLuZat%2FToY74tdceGOxCObraFmvgI915Ql78yRv21%2FonaBs"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106af746bff10c6-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:25 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=oxj6k95bpXTcJScEG5s%2BzhGcYCOadOqLQbLhf5aqksnqKetQozd3npBGIpoUwVThYE4%2F%2FY4D9ELX03chyHYaTuUdzZXsWs92INVhKZmTHa43UL%2F9J2EWflr66spX7SpQll0J87u0vnmC"}]}
    - cf-ray: a106af76ce02549d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:26 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=G0Qfw2X0Vf6d1BU3825GBylV2m%2BxA5kUBrRuB5noxSpXF7OcpyyEISXhj%2FtPGPBaC3oyW0fyB8GTb329SJ%2BwajSVfwKqydlzowE%2FMd1EQ5wqZchZh30HBvZn57kQUTXgSPu3RC1oWwGA"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106af792b5c7815-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:26 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Ut%2BdbFLknL5pFI6zAHklboJecWmo9WEI%2FP8ZEdyG6zZ9dvHd3YkqD1xi7tXrBSdAizvrbMQ5ZTfwp8x8xWGEjd1WtDLYb68Fq2CHK3dDqtfRTRsqC8%2B710qrqZxQZluK1PYcq53tr%2FBg"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106af7b8943fafa-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:26 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=QNn2hjXIkwmrPR975PyVQvWeYS43cS%2FEVhy5h7O8KRTRnDNj66o3FolKZmqIPzpMzAKUDIeE%2FO77xAsuMBHfq%2BQUxMqLBPZq5j7ycFhwe4OwpTD0JuTp%2FgF10iw1hMmqIXGdVwLmjXkB"}]}
    - cf-ray: a106af7debb0f97d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:27 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=iC37mtF%2B3IB0lUZxk%2BI5wuS8ivvSjbb3dfkL92VnOW8Elx45bD3GcoII3r2Er74XzQsNLIskdHzjFdmD%2FgzWHwNSRCgWFfHIWmrRjsaW80mu%2F13fLT1THQxIHWX3GWUIJkhuQpwosZbU"}]}
    - cf-ray: a106af803f9d57fd-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:27 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=NbndKPYubbJyywQ6ozToCzqLB%2B2dkMFLRGhZVpXZOF7C5xg%2B1k2uVyftygdR5RvLk9JDuozxRs8%2FORurLN36mQRhZBx5Cz0ZU6mNBaiAmSY8b35WJ6v4f8RTGZfM5QUjGKavWItwEyz0"}]}
    - cf-ray: a106af828b3b95c1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:28 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=cdl1nJVP%2FSbxFzj6rCTkozRzzUhCXTiRbUaVKZw1XJaUiX4UElR7ZeC2%2FRoPr0pr%2BNwM3JyyJx6x057k1O4YWDDZFEhEYGUUEB9x66hmkQc%2BO5IDzkNg%2F058%2Fc29Pfsv%2B7hlSKLbYpqr"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106af84ef1fa068-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:28 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=2zdi1W6MB0l48byLtlL0tnkSWbVuAZLUO7FVDBkoFRBlxu%2BL0wN5wkrI1dYKBvetnQ29Yp5yCIhZT5ACm4cYn3vypMDeU8xGUaOlwgmUyTRCFzti9mSNMIS8ePh85IU%2BILAAcm%2B0z%2FoU"}]}
    - cf-ray: a106af873c68db04-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:28 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=7X%2FNvolxRRM9G4zv0r5tGnad9GDSercYG%2BNVJtJV%2BTxn%2BDGmDtmGKTNZVAw1CwfLH0%2BwECkC4pFt0ap4j%2F8kMq629ijwIOAhBPfvXZeZ%2FsVmzob3Lq7eapZVdLxhvkY6POFqt9skc3XT"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106af898c106204-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:29 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=hGvxQs8vukMwRtblO8%2FwD%2Bl6qbY9nPInHtHMHEdtZCyFCLl66YICWMzzu2Z2wcL8lH9VEXw0nhblG2CFB3Bq0I8L5PsWGpgngV0tgEMd98Fooq5269C%2B%2Fxew503nrscNoVI9Cx%2Fr24QO"}]}
    - cf-ray: a106af8be97efced-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:29 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=zdeVAA4l0WATHOT6jq21zP0xhNyUjtNIfOv9BTq%2FTB4LsI%2Fg%2Fiw52WV8%2FEqRoy4bA7KhNu0rdSIMwuaIdgrA64ABWz%2FiuLlg%2FXVx0E%2Fhwctoudzn34CJ2U1IpmieltQGc88tlY3%2BVKfK"}]}
    - cf-ray: a106af8e3f1cedc5-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:29 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ZboM4LmKk66BttJvWm1rJh9q%2F12ooc2Yq4gp1odTpF8Bu5pwCnecr787ViSCGuXwHR9Zos2y3pa8PscF%2Bwx5d6dE%2B%2F9%2FPXGc7YdutM7aUGSj30X6Bsbv9T%2FYHpibMlWKuMa6nzNbbEEo"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106af909d6d928a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:30 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=rndPNAiXU8i1zl7A%2BRAt8eqG5Tt%2FgudA6g%2FYaH2na5WVQNLZXXVAbijj%2FzmiBt%2FYe4k5yhE4Lp5Ev13r5tLiSC20xuRkhnmoJy1%2BLhLo65emdCmteP6m9ew0Rj6xyRP70Cok3VwtOS4b"}]}
    - cf-ray: a106af92edf893b1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:30 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=1aja7oWtYhYbcaXvISuNinzHgKeCUlpV4B09y4v8nDbVs8j5rrFGJ7TDatQPjGtVoVcenpvSoh5jt9eww8yWBcGX6sItSFKHyABsAFW4P1BKD79pPxQ%2BjlDMThZg87EEfEPHoY4yRcNL"}]}
    - cf-ray: a106af954e4202c0-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:31 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=SnWfMIRq1QOG4H%2B8ynkyBPPSEfeKbQs%2BCSb5I18QyilDY25wyhbxHo%2F4TBD%2BQXEDxEU04zQaDK8lOHiz%2BNyvzaQUmuzGRwHyjIsFI0UjGIvPyLd1vKcxJHvp%2Fn9VVKrR6HhhG7BxjC14"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106af979c12aef5-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:31 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ReJy3N2qzoJJaZQ6Y4xnDMlxpDQn%2FNzjMEMIQCe3yAxOVKsv3b70yFGFmn7XtAmMkPh4bl6WFaj104wJ3tCLtCiZLFFTUgLkqGb3FmS5xCkjmnjVg%2B9ISPDXf4LMNr646hjIH5Pm7c%2B%2F"}]}
    - cf-ray: a106af9a0f830bf0-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:31 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=4M6adjzbIxTIbeM%2FNuIjCvwFvM%2FYckKD8sw%2FIBiLaVKPb5YYdLosi0ySOW9bbKAnHt%2FaLOxpt8ZWOLOQ%2BngOpRSnM9gKq7DizNsBa39QrpnMFd6pFEVsNEcSm9hJMde8iYvm2kB4YDv3"}]}
    - cf-ray: a106af9d3e967317-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:32 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ZsIJr9LDIx0YfpXrStp3DFPjRMlGKhWksVpn0e0dUmI8epR%2Bt%2FRpP8ZTc5mio%2BkyE3q0JBZlb4IgEG%2Fu%2B6wk0lKVOzqxA9WBT0481vple6d7nO3rMCTl70b%2B2SuS9S5wmzQ2eP%2BJcNR7"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106af9f9fc01f93-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:32 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=WOwejbiQ2%2Bs0TXHoK%2FlLvOIX4Iz9sk0jgcFPOTqMMFnjiuY%2BHQZm8W%2F8IltEI23UWRS0qQnDSv0C8OuowByj62aaYFa%2FHhhr85WRIwZ8skUHWZf%2Fl5%2BV%2F%2BvuUfDDogYJPqAtsVF%2BSwZQ"}]}
    - cf-ray: a106afa1edd71238-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 55
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:46:33 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=bDhCCUXZ04cNScJqgQpDXzpXAsVRgPJC5nvmOXHY%2FUwilSGXMJbYWRG4q%2FsRVozm4bZ00YUPeCxf3iecA5MuUmkrfkbnZPEP8STqHlMMXgGbOBokLZxT2uu90Nv%2FZ44SRCFiTlNmJPMM"}]}
    - cf-ray: a106afa43e2c57fd-ORD
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