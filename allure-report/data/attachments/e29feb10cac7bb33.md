# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/userFlows.spec.ts >> @ui @api @e2e User Login & Deletion Flow (API → UI) >> Login fails with SQL-like injection attempt (UI validation) @regression
- Location: tests/ui/userFlows.spec.ts:105:9

# Error details

```
Error: apiRequestContext.post: Max redirect count exceeded
Call log:
  - → POST https://automationexercise.com/api/createAccount
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 348
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:19 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=VFAMfASwJsmQepkVpIVCCr4qYoEJbmt2xleMaThhpAm1sUTTEM5sApARMw1ou6cKP%2FD7bcLQEXcwtBkmtLPwY8vPnNJ2qGuFW4MX%2B3QOB3MgQWuOwv5CQWQylpmzctE%2BBX4cwF8uj5vG"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ce129e8fe801-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:19 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=JgZCB1jbN%2BPxuk%2FWa2%2FY6sqXCHwHpXamVhz3q8Jvc8scM2tCeO7FrZ4I4SqTOJ7nOnkFd9gT2780%2FTsyNrSgFtV3TGj8GiDTgKXX24M9FMGy55RGCWNrWPN1AxiQamn%2Fukyuzm56nryI"}]}
    - cf-ray: a106ce14ff6d7317-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:20 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=mOW8E8kFPqApBD3f6FHWb4dIX0mbR5oT3jqd8jIBJV42eHqmDeQVfs4VmqMqNkFuZGbrWR%2BAXZp7eylHnWX%2FfC49DZWI2fudXCjq5EYh%2Bg9P%2F4Oik1aYmv3pSmLuzLH6JhzWLVZPV0z0"}]}
    - cf-ray: a106ce174d2aeb66-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:20 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Yw9J2td0FwqD39cbOV6%2Bw7m0T0MkP6Frpa1dkifkv7MHX1nPyPZVXQ1dS%2Bvpc2ZqqJ8NHfK%2FI%2FagItiNc3t1gRAtbo6FgYKsALTblv7Cz95nJPzyWj1otSUdt3uZA88mbPIh0bLgdH2g"}]}
    - cf-ray: a106ce19ac09b78e-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:21 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=GjkpyRsKMTiPqZDVp98P2rx9ZU7KQ2UoCjD0GGCD2fRye2merH%2B9maI8RXnEPuprEgd1ki46UDZjnL6M6bcEQsiE3%2FQfKFtVloZgtBzXflc4P%2F92y2YKtHMunWF0ojD6esT5x6mWw%2FAi"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ce1bfb26eac3-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:21 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=g%2Fv6GZgCTafSIpro02BliMElQ3%2FjJb2Jzb4ctP%2FhndwAkEOkh%2Bmtp%2FOlVVxzBbwPmDWItGZdH%2FzFHfvVR%2BgYb4XJ7ef59jVeLDkreWAgmBgca1Y05OQdRhowf4c2PTKGNN66iQAIT%2BxB"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ce1e483f7e6b-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:21 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=DGo4M3CWmt73EaGGiVSM9bTZz69UxWBX9R50py%2BoWBFmhhj%2Bx4i8LedxdYOnX55eoA2FhE1y6e4REPjmXqOCNrj6oozunmd08zdU8kBi%2F2%2F5CVOUEMkNbS0vqwdqKr%2BspD10cnEgqfX8"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ce209d0b7815-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:22 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=sDmJ8r3zSdIGvgD5TjHmwML%2F14gvq%2FSTXBs0CTGAVNnu1NveyxEmFUP9QWxKw1BK2CqgC23sFYSyNzDCvVqt%2BxvewHWJaiVal74IB01W1VfrCKQs984z9AFeMrJc0Kt7FSN5JyezJA0y"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ce22ea57c77f-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:22 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=EywYyxwz2MlliK%2F5a5%2Fi5cn6ct1EMJHdJ7rkMaFSY3xcTKjQG3XDuX3KDPPfhkIJZQv3ugQbD2YxRoQFnYUxT9RTBJ3b0%2B7TPdj0nxMlfXVRPKRKgCTkGEN4rCJcIChRqruTE95WhX0a"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ce253de2771e-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:22 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=buXuK0K9uhUMakukFJooWvry%2FrJ3bzRvLZYpGTvmQrhm%2B%2BYfXFmuGcIIohFumtKNIO1fSNbQ%2FoigcuN7m1w4xuCoW81Fs6ZU5%2BVtQ7F6Fpl86zk0Ob3awcy9ZqVqHsL4xPaJ2ATN6U%2By"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ce279df2e80c-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:23 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=baf%2Fddt0e%2ByFpHlGAaeuhT4wqGKDy8ah%2Ff25USRJszgThXPRaQPqhIal0CVKlK0qXPyMtS%2Bd5kk8upHjZa6eWk6%2BTTT7rBEl3oTDkcTh0tOGi3xDA4%2F%2FDyvgcCpKffsXSDJHdvVbUabz"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ce29e98a90bd-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:23 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=VsZ%2FfQf12YVP9limz63U3PivFb%2BoM9VmvXFfqTr%2BPAUl1paZlvlRmngCIfF6s5qJ5MThD7Hh0YVt2dXxZubuu1je4Yawcq2wMT8R7eJGJdNiezvP0nl0T2Ut17xtCUMDI8lr5vAQgFWQ"}]}
    - cf-ray: a106ce2c3d9aeaec-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:23 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=HtRLpawlii8%2FBPgS8rAbBXcIumN9Z0ncFd%2BkCn54WeXyRbHGynOs0%2FIlnrCZEizJ5IXyIHJtSxZqvNj9lzE2u9lYxmLwmZnvs%2FzdIs7gZi43Qc0uq%2BBwkoBX9ttQkhzPdIrFIb1UYkeJ"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ce2e9ae293b1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:24 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=yveB6hhVJiP8nSCjwvLZYlVpvaZ2SJcNd3XJZ3UNRixX3IVopvfdVHowvj9dFmgaznlVs7XdXupA5jUzgT2kZY3fnrUMbvGhuvYUKut%2BolzKFMPNmN7D5Hj9mMoUa5fQxLbtmqp7CZC2"}]}
    - cf-ray: a106ce30ea482d03-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:24 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=wIjQw0ZPfpFOBQ93IL4286Cy63t8myBDtJUhX0MOjRoJci%2B7IbaT3OryYDzig8cnwAzOe9jBrwtGfAb9X8PAvVSuxbFs2yLidzcQfTcyoXPhnOfEBd4fIlKNdMz9dGOFvUSpT3ShB7VF"}]}
    - cf-ray: a106ce333f12fced-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:25 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Fyc2WDMFOKoG1xwHC9wsEdFSClWfLVqHTolW9xC4KfphoTtGxXe5OoaE7xtGx65OlkZ%2BToZcgYpXfw79%2Be%2FA4LnoCG9mq4FaLwu%2BjKMlHzbAFNDB5WfkGaJ0naVqXagpvrHiiWOXMJJi"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ce358daa1049-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:25 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=JPnUthzVVmUYiJU45BRLdi2Am7rfSmr45SGdHtLI01BwzhvMALRwLglj2IBv8U%2BBFJJShGyENBli5YMoN2n4vzJ0wSfSbSNFq%2FaRQFD1TTUA0pHZ3mRe12EyMmiOfaspcHfvhf%2FASWwZ"}]}
    - cf-ray: a106ce37efa52ced-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:25 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=8KHCsIqH7grCvOAHXs5CcMk1Eozr3GBzdFl17WKqHc6LZ8a4QXVGgSx8QOfnJ5cY50AFNxDQYHekV6zPPxyoBOXfeBPvfXBG82IQdxvyMCGhqqwgTWrqNdLHcPwg5Syr1%2FxFlzp4gEnw"}]}
    - cf-ray: a106ce3a3d310012-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:26 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=XFqVCsYVCAuWy%2B5pTABD9DNdFpY1rybUe2bKdaRVirHJt%2FZppvGD69x9PgCrHPMbULzeosM2mRapO8iH6WL18r4BaP2y7P7u5x%2BHk79gxnFwRrfr7QZInumfyBbsSj2HXtucLgVsJTA9"}]}
    - cf-ray: a106ce3c8e2ceb66-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:26 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=RDBgR3ZDEeAhWedn8h3NxyWh7fcf5rdbqJBHkvEHm4yt%2B%2BjfBo2i1bB9PZfPwGopG1DIG7qvIW5laS0HjbSKeO0asMWc9JEqo1oEi7RaqFWG7qnDCb9PsfzZp0vf7%2BRtnNqWHLYTRaiy"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ce3ef8b2eae2-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 22:07:26 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=YooRemzdm1iey0Z%2FOvnXRmwChuGYjw4ilQQdclScxJrjGxgDwdKHWWHW5OgJL9ZAUnWGU8viDF%2FNxwh0Fc8Ejqu%2F%2Fgxu95i%2BEqakp%2B1K6D63jTS8McB%2FHsP26DeigeKmonX1tSUhz4Jp"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106ce415ea2549d-ORD
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