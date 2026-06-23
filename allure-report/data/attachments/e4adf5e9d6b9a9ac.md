# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/searchProductApiTests.spec.ts >> @api @search Search Product API - /searchProduct >> @regression POST /searchProduct with whitespace for search term "  jean" returns empty list
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
    - content-length: 21
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:46 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=sAa6kPv0UH4sgxme9th6OQ6j3OdTk48%2B7LG2BOD2igOQ8IBJ%2FUVd3YkwY0Eg0TX3mINBHuhfbqwv%2BwR3CHd7vn3pysMDb0dt%2FwkIOTXfGgaUxIaskMdg9zJl9VPkYmadnltS0h2E7vXw"}]}
    - cf-ray: a106b5d64c771238-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:47 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=wW6eiLug1yQ7wFi34qY7qldc4jlatksqyT9MgqM536Xfkadl3W7xs%2BSFndDOKmFKm0dLJTuUWZMfqK0TdluCWDhuqXv68xdt9pa28QrOUgwPJoxle5mTdCek3LaMCZkMj%2F2oTQR%2Boxud"}]}
    - cf-ray: a106b5d8acee634a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:47 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=EpqQ%2BtwFSdmU2a1WIH9XM3fKbtWzDd6n8S2VOIf54VnCMXXwONdCbduGEYl01rbe5vvezq1BCR5wrkgvEpSvzX28AcpfsUInxfVOXQezp5Szmw40laBDmLeoqbkCIrkuRRnk6FBRlkUD"}]}
    - cf-ray: a106b5db0d13b0fc-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:47 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=sVknz7s9R071OAJH7tcqx%2FvYXPJ6NbOSW8DEee4M%2Bwq1QpkzBz403XFab8IyhT9fj0uLPzGSmvnAnHdWgOkcXhLHjIfOpHf8xIq1%2BPYttdgM8iIppSRVVmj86cIowar05HFIwuniuzlA"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b5dd5d71acac-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:48 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Znn%2F927DCvMKKJHZrwBJwrEUx8rye4RvmAYxXqa9eaUo7wRFUNx477vjHjLOKn1YQbMlxrtkCM571C%2FLoSZRUWs3vxQmkOw6hjI%2B%2FPAj9rX9Tv5VuxrQq8vtuQ7zcb3td2m26irLQJXs"}]}
    - cf-ray: a106b5dfbdbcc93a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:48 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=E8q1%2FRWBs0EsSS%2B1WbCCnA7VQHLqq5wDNHeOytDg%2B3LSnecGGhqUj6JiZ%2FL0%2FSLXZVMePiTzSYjh8nRKy7qWqvCd98Wea%2FzSmq0BL6zR3YJESrsCzWRLF9cKoGjw%2BVo47aR05uK%2FNBQM"}]}
    - cf-ray: a106b5e21c371257-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:49 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Ac0W0UTn5F6DC647pXm4RJX706hDN8TkQvD1WZcz6%2BanYezAL3hGcmLlsJjbkgZ%2Fj9u%2BWLkwlHaHF7Ok%2FpbMP1rE%2BDP9YH9leRUKqnghvsIy5XpVkXkGk2MXYXIvgRUxWryCNHGbNCiP"}]}
    - cf-ray: a106b5e46d5557fd-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:49 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ccmHvC2JxIg3T6h8ZeElMsDfLdvJJKmuwUo5UXnUHo6Uuh775L4PcASiNUgQkf8%2F%2FVsCELu44BkGrTbZ5qrC5plXtCdfnoTpR2jxrEsHUO3U%2FUcFgzNY94929Epu1otOOrhY5lk7Wqd%2F"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b5e7be87edc5-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:50 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=AsB4UsxcIHpPdWQa9fZEprrEuNpESmcJOVMUYIurOUsWxWC7cPci14OMnV8vY5alu2%2Bda8RDPO0W5f%2BPmWlqm%2BZl%2BzMLI7v4DH89yzphwscOZEJWuKyJAhuc3N%2Boecd3F63jlJNBPFbr"}]}
    - cf-ray: a106b5ea2c586178-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:50 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=VkSRSfWwmatba5TbvNUnq2WnoT32aYgwl%2FG5Cty0u1WEY7DgEJy%2BzsrjdXY62Ze9%2BP2K%2F1hzNwEGpp97JEL%2FmZ6E5j3mVCOqQiWyfdIRQ3mEs3r5%2BijkvJ2Zc1TsPEmZOVY%2B24cYidk9"}]}
    - cf-ray: a106b5ec7dd922d5-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:50:50 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=3YA88j%2Fr5Jz97mCRaJmsXcuyWOiMmUXXQuaFdIZp8a0nwNnu2lebdZ3JKmZfCZJJ6HjWpf8i%2BAhXPR7jfuKzBU41JpcsYxejSE%2FaxFYUOwJi5QG7%2BkFYsz2xQJwQTUc7vkxAfWzXTypE"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b5eed9e293b1-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=IPlPQs%2BSfaKvKI4u%2FX9j2De5E2EYbt%2Fab8TiXi0tP8FnWGmMzu24LZ%2Bdd5%2BIAIdNGm99%2BsdatZPCplq9vt1bR3ftgSzo9A%2F7%2BLm2Cr9r29xAoG%2B9cUQk5vHSSCJSA%2FqqTglrWlm%2F0WfS"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b5f13a4850d9-ORD
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Dp63hgz2ECn4SRXS9KG%2FYSgF1svLluyJBIVrX81ORcycMGVlE1%2BlDDRvOV0dyhym0MzoD0yvGLJSsnwma%2FLW5%2BGrO8vVNNSBuHrTQgOw8msuymZdG8Sh3awNn%2FRqxo54W5OkcRAQq8sl"}]}
    - cf-ray: a106b5f38b17eae2-ORD
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=c9pV6vm8TJVIs4uji190Dkaxn5NdK75%2BjEAUthh8tiO2mdwRoya80nJrHytM5jdtWjxE6ExuLosd0dJSyEtHVi0Zwv88j7Zlm3DcWAcIDUVYy8k0zJuUxfFVux8yL81QkoSihlCt0%2F%2B8"}]}
    - cf-ray: a106b5f5eeb634ad-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=PcokswJ5og6F0%2Bx%2FnszYtPzy2bPs2Z0BHqy8zhTsqN%2Fy6Qg8KCtefTfKLZxJn%2BaXNUWbcdf2G3YyAZibB6leUhy%2BwoANwM0UBYkKFPmmxI8Rwwoetgz%2BuWO48xLAYXg1p1L%2FfjQolZO1"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b5f84a4f771e-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=lA5h1mJtvJPFznvJXSfSQcepMYZCgXshnKQqQrlGmPFc6CPWnt0jLxiJjMaMOLpe1%2FuWOKyq5ZAh9b79eLFVaxFqVlGYS5DVgOWAp7lFTVtFrQ3MLzWIJJ3Hfpw063qod1yiwUpCcBop"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b5faad29eb68-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=SdvPUokRNMQ0AeOV3G5kaaUZNBxPnQEEQ0XXeoTZ1530oOCo5OYCDELRs6ejdqOJysN%2BqVMXRgkFb22hNE3ir1eDDhyS5fORfI2xtweoND993yjUJnMhRI6MrpMjov%2BDHJzUO2Lh3s%2Bf"}]}
    - cf-ray: a106b5fcff30d7f1-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=1hY%2BxOkoiVSdByCO5tPRxdXEkTvUB6HEhvFDiK5ZGYGpCM2gp2prYqHbA%2BALO%2Ba4y7xlgBQTV7EehPnTQo7ExG790%2FA%2BHfy%2BotlfQI36O7WNiy5gylKWnZ1KdStlAUntneGEfjEH7aC5"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b5ff4f6b000a-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=r1IvZfVe8Kp0kCTHIu7XrS3yqO6139mVArMDZUZXpU%2FaSQvE6WgCNdBHkrC4%2FCBtqndgWvHTwnfouzqP87I9x3cuxt%2BLvCWEIrAKsoqy%2FaanXhvaJRzikxZV5JikiGho%2FEcWtkQ6nq6d"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106b601beb7ead6-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=wTCJJknSJ8hm7epA6mT2W5NV3W6SRE%2FR7qbV4SHKb%2BMO5%2FGXhoawq903kLBOK4keguE13xn5bAJSm2ENl0x3DbV9gXmzND3o5UM%2BJ4731IpbF5ODeIGiHu%2B68eP7DaFEQPkg57beuH%2B0"}]}
    - cf-ray: a106b60418f01cf4-ORD
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=C1vgFClKR31S4u9W37huEjzghUYiA1otlLq5hWd2HYaheA%2FaSZeAzU3PVzD%2BpMcIVc43IdspCBpcCZfLR6Jcri4Tc9j07YhJnKEBlzVoovmDMVevJuBBu386aAM1gFTAcfwPGGlN9pgb"}]}
    - cf-ray: a106b6069db722e6-ORD
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