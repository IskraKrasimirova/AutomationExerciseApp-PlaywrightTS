# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/userFlows.spec.ts >> @ui @api @e2e User Login & Deletion Flow (API → UI) >> Login fails with uppercase email @regression
- Location: tests/ui/userFlows.spec.ts:121:9

# Error details

```
Error: apiRequestContext.post: Max redirect count exceeded
Call log:
  - → POST https://automationexercise.com/api/createAccount
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 344
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:57:49 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=hivmDAbgOZPvhWPuHUzJmW4jAZFAT3bRu3ORm1G2uPS%2FBhtIAteKuwdwL1YRN9GilV96vjzvFchSQWv0LVFW%2BEzIA2AN1xG%2B47d2sL9qbc2sbXHbGA0dDhyHogDsVxm2RUyACTyKqyZZ"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106c02b188deb60-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:57:50 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=APk%2BRzF2XylnjFVQfUPldm9TVQryFMPWEmxK4tI2ed2tF0y9KUwyLYv%2B%2Bt%2FAy2bMNY%2BBcGyEyigmvJkUxqoJGIEeLJ5s9CN7%2B4u%2FGPA1v%2FZQTODXJ2Pk7sxz48g3s48%2BrjbCJrF5PWgj"}]}
    - cf-ray: a106c02d8a49eb65-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:57:50 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=2euJhwRpyILOLx1v1NHaq9keVF3ZlP794Q8TvbyxaZj2t981sev8pnWo7NNUn6nftcOTBEmClAPLG6WfPQU6E%2FzBhji7gGAFcTQi45YzYHD%2BtL63tIPRoIkHJGXEEZxY6Ka6l%2FOVa9q2"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106c02fee8d986a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:57:51 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2BJG9op3XM18zMe3MyeiEYtDMHQTiVmyyuuTfA5XqrzY14J1EAl7DN0yFdiAKSdNys6wEKWqiKUD3%2B0KlBkisdM9y6wMKIvLouAtEegwNzTl6ok80qpWLLotBwhhVLCAibt11LFk4I5ZT"}]}
    - cf-ray: a106c0325e24eaff-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:57:51 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=lDc8Ut7DVtBzW5NOSHE2wFyGgLdpiRdvREztXb%2BCTSbHyW%2FiS2Bw4Y%2FFNNENSuabn%2Bmi3PYj%2BldSapK4LSikiEtpomOdtiTySvK9g6FZ6blRolTMhFJgrEHFlCHyo6MEhXNckC3vZTGd"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106c034aa11c5fe-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:57:51 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Gqo6qKtxezbfc8ISjdzfgrkcEa4O39sgYooBuoyWFR9Jwog9j2ZUgeSnB2DuyfvXpmsj2xJGeYE6gAi6oU6lV3n5iAL0pRtn9th3arPfckL4ugtJKX6o9BhEGXne9W5Jg%2F6OV4UHMfXT"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106c03719a961c9-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:57:52 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=kumICoVw15Sk7JVLzxCr7eeCBkkJm0yRu%2BvbPAQuL2Ql%2FQWrw8CKYBlbx%2FS%2FZUuWllO5k%2FNGjwnh0oJeUsnIhm0GQEKBFBVcK%2Fq35bWvdP4WR3f42754hJkEMybaCz6nE8kezd1bxGPh"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106c0399e5311fd-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:57:52 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=aZlLtVbScsmo5NHG5R4bJAIHTWQ5j%2F8NUQ4XibHWBabRXUuFdL2szL58hcFV5UboQlZmwSSFfK2f9s%2BFkRqYuVaYZE1z56GW2jcuIlyOxQ%2Bn7TpfyHl%2Bvh78f2qbsfm0CT7iAZ5LiLPm"}]}
    - cf-ray: a106c03bef74251b-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:57:53 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=C8pZQnFDevNT55bnso5olLRSXQxDkkDf8zJsRFAl%2FuRyPxQbLLJLIDcfbUA5whiieB3gdPkWJxwJKRQC%2ByMZ9QQ0atf8yaremKFrR3eoJExxBpQyYvdV6GcrKagKuiqcjYti8uKfpyNe"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106c03e3b1e1e95-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:57:53 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=cs34G933Bln%2FzEJGbjG9Ew%2BWgMQwELfT9XaVWcThFdyI6jB%2BsRncYou2UoXa5%2BpHCDKJrFrQuLM4bbnLqHiVldEu%2FNjzvXil2nZu3fSK3DyHFEtDlr7nn9eP%2F8mIgpoOlfYuANxMFehm"}]}
    - cf-ray: a106c0409fb0c667-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:57:53 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=De9PiSJjCbZszdKgniV%2B6rxFhv3Ife5U5bOq2d3Ql4niqxf4MXHWiawbd%2F%2BFeggETIMZbVfkoi7lsmc2VcfSQ21ZEMt18q7i6j3hOLWLBOy9wiV18nuBcSoLivOLeOUzo5A1Zd0LeQAY"}]}
    - cf-ray: a106c042ef776b84-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:57:54 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=kVqGju%2FmJMOajX7cc8pT9u%2FPL1KxDf7x0L6KpOBQg9tMkh7FiruYsnH62kR3fmi5HO9VlnypOAxsWWFLoEhQ3PZS4qmY%2BEIASsgcXuc8BxBnJ5OGi%2F%2BFspS5FD7M9H%2FeqgaUNsQL26LG"}]}
    - cf-ray: a106c0456f896168-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:57:54 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=56z1%2FhiDCV%2BZKujFaDW9kCzBfDf0mI%2FRmSKNNJW48DSpR9JfacKQ%2BCO%2FYlI3P2LlDr70kW3hocQrno2TtsmP5JgVgLztiE4fxmw1s2TDpspVzj5W6t%2FkuomYdv3YBfQO6GYD6a3qIIl%2F"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106c047dc613d6e-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:57:54 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=HUXxAU7KBVqH4pTZ1aRxuVfOHA5ny0WZgN3WkwyRcu38yrpHn8FstKtvbrqpKiv41VnKuqQoA1Wq2vKKXHBKy30EMbEJalegTqZ2ddRFrI2bSsaKVcyLXHgeOIBbgtOYLSHZLwO4ApD2"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106c04a3bb3fa19-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:57:55 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=2jZSgXw4lxhoLR%2Bp2lykK8rC4aV6wlfa25VKSRctMgWvnAHHWQpx8Eo0z0oPdiabU6rus98%2FQppmTnHpk31tibcjNdwxZL5aSvw5IFuybvCChJtux5oet5vPrq6ox1qtfyMLUkUvnzOn"}]}
    - cf-ray: a106c04c8e0e0aad-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:57:55 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Bod9tY1m1bupU2mCtfqzNds3nCq%2FNDRP0ekBQFHF3HKCNOKNp1Z6haaxVplVBKZG%2BvMaEoeTRNf3oYLHp6qiNavXduEDX3nfUlvKr%2FTPLPRMRkJSJGQHT5vwegA5mWDmY5KP1fgCVUEd"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106c04edd5e124c-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:57:56 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=40TOKmpAk45273mg9FOdYZ7teN%2BIyTb2umfXd8bpovC2ACnovPU37ZH3OXUvbTNsLo4BH09bVpCB1xs7VJiaag49wKKkCcjjxxYQ%2BaJJ3Jf%2FztqlEJcuK3lRdUGfHvcU%2BjrPZqOPywH0"}]}
    - cf-ray: a106c05139270ccc-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:57:56 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=T3oEviYfHJpvKlzko69fi%2F4vRgJf7Jv%2BJMlw4QnnboYNt3QseMGYSMCnYJiS8o4c0hcsOwyS42ywdMELp0lFT3gPXhnCP0vimzrxeehssZVaU%2BL%2BU5s9eX6r7%2BsQp4IAbKz3BGRFe09r"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106c053abd0986a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:57:56 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=3ybuc%2FrvfpFOBcgx3jthRwjbrZsl99cAvVwuwo%2BV5nXQmmrUpIJMf5kci8mKyn5MdJsz0AAc%2B7YU5Bu5ijQWOVp5xIKqku4wdeMmgLgOkxU6fYTRwtZyvQiNwbTtvBKm79rwCqjLaBAr"}]}
    - cf-ray: a106c0560d95dcf3-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:57:57 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Nd%2F0j2eDjhP24zwN6HG8miU4V%2BYtLLM%2Ft66cMh06hqG3Q4%2BhRpoB9xqORXzGfCLolGLPzcbhEXCyeH4vqY4IKWKznOB2lhgnBYIpQS7xh8D05PR68Q2lUDy9e9rUO5X6gBw35UQhQoi0"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a106c0585bd8c5fe-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 22.04) node/24.14 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 23 Jun 2026 21:57:57 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=5iqpGTWEJgiP2DHGBjq2MLCd0k4wftREtkoToKSLUd28b8TBFvSNlPkVJ1nk5ocOayM8cNXeT1n4M1NvM1lQsNMClgZl1gGtJaakIVPW3dT760Gts%2Flts3%2FgE084TIfdyYS0K3JEnW0V"}]}
    - cf-ray: a106c05ac9faa3e2-ORD
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