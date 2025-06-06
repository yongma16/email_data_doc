# 数据来源
参考：
[https://www.reallygoodemails.com/categories/gaming](https://www.reallygoodemails.com/categories/gaming )。 
# Python 抓取 邮箱模板数据

```python
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service

import os
def run():
    global driver
    options = webdriver.ChromeOptions()
    options.add_experimental_option("detach", True)
    # 步骤1获取到的User Data路径  chrome://version
    options.add_argument(r'--user-data-dir=你的浏览器路径')
    # 步骤2获取到的--profile-directory值
    options.add_argument("--profile-directory=auto_py")
    options.add_argument("--remote-debugging-port=9222")
    options.add_argument('--disable-infobars')
    options.add_argument('--disable-blink-features=AutomationControlled')
    # driver_path = "C:\\Users\\v_bymyma\PycharmProjects\pythonProject\email\driver\chromedriver.exe"
    driver = webdriver.Chrome(options=options)
    driver.get('https://www.reallygoodemails.com/emails/were-crowdfunding/live')

    time.sleep(20)
    driver.execute_script(
        'document.querySelector(\'div[class="view-lines monaco-mouse-cursor-text"]\')')
    # htmlText
    htmlText=driver.execute_script('return document.querySelector(\'div[class="view-lines monaco-mouse-cursor-text"]\').innerText;')
    # 打开文件写入邮件内容
    with open('were-crowdfunding.html', "w", encoding="utf-8") as f:
        f.write(htmlText)
    time.sleep(20)
    driver.quit()

if __name__ == '__main__':
    run()
```

## 获取html内容

html  内容如下
```html
<!DOCTYPE html>

<!--
\\*-*-*-*-*-*-*-*-*-*-*-*//
-- Crafted by Ometria --
//*-*-*-*-*-*-*-*-*-*-*-*\\ v1.0
-->

<!--
-->
<html lang="en" dir="ltr" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>

    <!--yahoo-app-fix-->
  </head>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
    <meta name="x-apple-disable-message-reformatting">
    <meta name="robots" content="noindex, nofollow">
    <link rel="stylesheet" type="text/css" href="css/app.css">

    <!--[if !mso]>

<!-->
    <link rel="stylesheet" href="https://d1uewsh0mmowj3.cloudfront.net/emails/lick/assets/fonts/stylesheet.css">

    <!--<![endif]-->
    <title>
      Lick | We're crowdfunding 🚀&nbsp;
    </title>

    <!--[if mso]>
<noscript>
<xml>
<o:OfficeDocumentSettings>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
</noscript>
<![endif]-->

    <!--resets/do-not-change-->
    <style type="text/css">
      html {
        font-size: 16px;
      }
      html,
      body {
        margin: 0;
        padding: 0;
      }
      table {
        border-collapse: collapse;
        mso-table-lspace: 0;
        mso-table-rspace: 0;
      }
      table,
      p,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      div,
      blockquote {
        mso-hyphenate: none;
      }
      th {
        font-weight: 400;
      }
      strong,
      b {
        font-weight: 700;
      }
      em,
      i {
        font-style: italic;
      }
      ol,
      ul {
        list-style-position: inside;
      }
      img {
        border: none;
        outline: none;
        text-decoration: none;
      }
      a[href^="mailto:"],
      a[href^="tel:"],
      #root [x-apple-data-detectors=true],
      a[x-apple-data-detectors=true],
      #MessageViewBody a,
      .body a,
      u+.body a {
        color: inherit;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
        text-decoration: none;
      }
      .ms-outlook-linkify {
        color: inherit !important;
      }
      span.MsoHyperlink,
      span.MsoHyperlinkFollowed {
        mso-style-priority: 99;
        color: inherit;
      }
      div[style*="margin:16px 0"] {
        margin: 0 !important;
      }
      #WEBEXT,
      #message * {
        all: revert
      }
      .mso {
        font-size: medium;
        padding: 0;
      }
    </style>
    <style type="text/css">
      h1 {
        font-size: 1.75em;
        margin: 0.5em 0;
        line-height: 1.071em;
      }
      .mso h1 {
        line-height: 100%;
      }
      h2 {
        font-size: 1.5em;
        margin: 0.5em 0;
        line-height: 1.166em;
      }
      .mso h2 {
        line-height: 110%;
      }
      h3 {
        font-size: 1.375em;
        margin: 0.5em 0;
        line-height: 1.181em;
      }
      .mso h3 {
        line-height: 120%;
      }
      h4 {
        font-size: 1.25em;
        margin: 0.5em 0;
        line-height: 1.3em;
      }
      .mso h4 {
        line-height: 130%;
      }
      h5 {
        font-size: 1.125em;
        margin: 0.5em 0;
        line-height: 1.333em;
      }
      .mso h5 {
        line-height: 130%;
      }
      h6 {
        font-size: 1em;
        margin: 0.5em 0;
        line-height: 1.5em;
      }
      .mso h6 {
        line-height: 130%;
      }
      li,
      p {
        font-size: 1em;
        margin: 1em 0;
        line-height: 1.5em;
      }
      .mso p {
        line-height: 130%;
      }
      div,
      th,
      td,
      ol,
      ul,
      li,
      p {
        font-family: 'Basis Grotesque Pro', Arial, sans-serif;
        font-weight: normal;
      }
      .mso div,
      .mso th,
      .mso td,
      .mso ol,
      .mso ul,
      .mso li,
      .mso p {
        font-family: Arial, sans-serif;
        font-weight: normal;
      }
      .title,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: 'Clearface MT Std', Times, 'Times New Roman', serif;
        font-weight: bold;
      }
      .mso .title,
      .mso h1,
      .mso h2,
      .mso h3,
      .mso h4,
      .mso h5,
      .mso h6 {
        font-family: 'Times New Roman', serif;
        font-weight: bold;
      }
      th,
      td,
      ol,
      ul,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      a,
      a:link,
      a:hover {
        color: #354147;
      }
      a {
        text-decoration: none;
      }
      button a {
        font-family: 'Basis Grotesque Pro', Arial, sans-serif;
        font-weight: 500;
      }
    </style>
    <style type="text/css">
      @media screen and (max-width:30em) {
        #MessageViewBody,
        #MessageWebViewDiv {
          min-width: 100vw;
          margin: 0 !important;
          zoom: 1 !important;
        }
        u+.body {
          width: 100vw !important;
          max-width: 100% !important;
        }
        div>u+.body {
          width: 100% !important;
        }
        .hide {
          display: none !important;
        }
        .show {
          display: block !important;
          max-height: inherit !important;
          max-width: inherit !important;
          overflow: visible !important;
          visibility: inherit !important;
        }
        .tac {
          text-align: center !important;
        }
        .p0 {
          padding: 0 !important;
        }
        .wf {
          width: 100% !important;
          min-width: 100% !important;
          max-width: 100% !important;
          height: auto !important;
        }
        .col {
          display: inline-block !important;
        }
        .hauto {
          height: auto !important;
        }
        .column {
          display: block !important;
          width: 100% !important;
          min-width: 100% !important;
        }
        .column-top {
          display: table-header-group !important;
          width: 100% !important;
          min-width: 100% !important;
        }
        .column-bottom {
          display: table-footer-group !important;
          width: 100% !important;
          min-width: 100% !important;
        }
        .column-w33 {
          display: inline-block !important;
          width: 33.333% !important;
          min-width: 33.333% !important;
        }
        .column-w50 {
          display: inline-block !important;
          width: 50% !important;
          min-width: 50% !important;
        }
        .w90 {
          width: 90% !important;
        }
        .fs20 {
          font-size: 20px !important;
        }
        .fs16 {
          font-size: 16px !important;
        }
        .fs14 {
          font-size: 14px !important;
        }
        .fs12 {
          font-size: 12px !important;
        }
        .fs10 {
          font-size: 10px !important;
        }
        .pmob {
          padding: 2% !important;
        }
        .pt10 {
          padding-top: 10px !important;
        }
      }
    </style>
    <style type="text/css">
      .tdn,
      .tdu {
        text-underline-offset: 0.1em;
      }
      a:hover,
      .tdn:hover {
        text-decoration: none !important;
      }
      .tdu:hover {
        text-decoration: underline !important;
      }
    </style>

    <!--om:editor-->
    <style type="text/css">
      a[om\:editable="image"] {
        display: block !important;
      }
    </style>
  </head>
  <body class="body" xml:lang="en" style="background:#f5f5f5; font-family:'Basis Grotesque Pro', Arial, sans-serif; letter-spacing:normal; margin:0; padding:0; text-align:center; word-spacing:normal; word-wrap:normal;">
    <div lang="en" dir="ltr" style="display:none;">
      Community has always been at the heart of who we are and now we’d like to give you, our community, a chance to invest and be part of Lick’s future. &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &nbsp;
    </div>
    <div style="display:none;">
    </div>

    <!--
-->

    <!--resets/do-not-change-->
    <div role="article" aria-roledescription="email" aria-label="newsletter from Lick" lang="en" dir="ltr" style="font-size:16px; font-size:max(16px, 1rem); -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale; text-rendering:optimizeLegibility; line-break:normal; word-break:break-word; background-color:#FFFFFF;">

      <!--[if true]><table align="center" class="mso" role="none" width="100%" style="font-size:medium; background-color:#FFFFFF;"><tr><td></td><td style="background:#ffffff; width:37.5em;"><![endif]-->
      <div style="background:#ffffff; max-width:37.5em; margin:0 auto;">
        <div>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center" style="padding:10px 0;">
                <a href="http://clickom.email.lick.com/f/a/f9vHhiPMfC0W1m56skrP3g~~/AAAAARA~/F73RxRF-j9lkkYx2V-PhcafDaJzbIksRahW3MTbCIZR5Q5L0V8OyOZHbylLWQ_UmXG52lq2hPlYdM4SiZDUsR0AxSbc7ABmMbp1yDBQq4rLWwtrQzLziSgpfSBWfat9DWzbkeJWPSsWq70fu22Odakw314qgqZL5gJndMltHUPp3r0M_7Jxyv_3o8dTvxa5lBw0qEzkjMRijU0mUC4TkPdaohCrhcT73-_hm4BAMrrv2X9KKr0wtvbBQtZ7UaBEh2cgkpypNY5NK306AFZdeXZTVFCYXv9YZb3N0jbosXMZggrG0pKqP92bNojr_vFGICAyhbw__W2nO5PWUgO40KEtZjdkBATIIZPs04VjztSwV8d6lCSXDi7tNeR_1uxgDg6MQBqZH1A6erRh676QO3G8fCx_7e6JaZYLHn8Mq9O4~" style="color:#354147; text-decoration:none;" target="_blank"><img alt="Lick" border="0" src="https://d1uewsh0mmowj3.cloudfront.net/emails/lick/assets/img/lick-logo.png" style="max-width:100%; height:auto; vertical-align:middle; border-radius: 4px;" width="120" height="auto"></a>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td class="fs14" align="center" style="font-size:16px; padding:10px;">
                <nav>
                  <div><span style="display:inline-block;">
<span style="font-size:1em;">&#8203;&emsp;&#8203;</span>
                    <a href="http://clickom.email.lick.com/f/a/o9nYZWUkfK8MumQPp4lnew~~/AAAAARA~/63siPvgBJZXyX1O5ycr8F9yzyLarkhVL4eq4mKghzrwawJdcaFetHyFUgp1wAjPx5xwrH3lKjLdsCDngmc4-U1BQKrPwtPsP3bIyvHUvTpPpEvgvjoFqKZXahu3tSrRIpCT-qyIyXAi0vxEx5DEaUZsLucoLGKpq9aZ928oCdUQAFVPdDijYqupDioN8Ijftl-XnVMDeoPzJ02xhCobCYPTDzLJop5fjTTl14JCksA6sJ7bhZv_gvC__xTKGJ9QwcYf28BPDWyb40ZZ1yru1bb3cjgUvTbYNTCmS2ChRI2RYx6Ro9XoOEzNL1T1fFFbVfMgXFmEMMNFcaoZu_TUaUaqk_xYcMC33bYLTD-spl2s8jvJl81lz8xa1rOZBPxuhWvuw1--jwKq_jVan_nCN8fxVukZKsR_L29HpZJ3QfdQs_6hkaU0ntVZlDfRVfcxq" style="color:#354147; text-decoration:none; text-transform:none; word-break:normal;" target="_blank">Paint</a>
                    <span style="font-size:1em;">&#8203;&emsp;&#8203;</span>
                    </span>
                    <span style="display:inline-block;">
<span style="font-size:1em;">&#8203;&emsp;&#8203;</span>
                    <a href="http://clickom.email.lick.com/f/a/84pjrLfnhKlwijdelQ-4UA~~/AAAAARA~/1vTApZHvF2MekRg9KW_IAHTGeQTkyfyhgGpVoGAtRnqNCOY7N9-QwnABcMTTCDjaS2DG2eah85JN_9lrzTgPcudbE7Eydi_PqlMEHSdTNyPskYN3L8d85LVpqCSUvCSGQtX7s8aZuKUlOIxCs9pr1sbfl8Y6OlosV7OJJICMQQ9hbo-nohIXord9RtPb4Au7vv34LDVU_ZW_YvFhM91sIqZ7tNg9O2PLupDGEV6ZCQgOcewF46Xb0b-7uzfJwae1OLd5sVsRxQL7Y5O9EmH8caClS88fYcqFA4nQj-c-7RtOmRYS7lEu2T3kCqmBX5IFCBK9qKTh1n6tu_6anshDZ-xVOtbJ1N_4HWu9EjkL1T4_VLgCoZj2JC1l_eMNi6Uz95vsY5IvJSyp_QobwDRzYboiV7NDqUY13va9ZDkfGKM9b681e5NjndCf9RTTTYJR" style="color:#354147; text-decoration:none; text-transform:none; word-break:normal;" target="_blank">Wallpaper</a>
                    <span style="font-size:1em;">&#8203;&emsp;&#8203;</span>
                    </span>
                    <span style="display:inline-block;">
<span style="font-size:1em;">&#8203;&emsp;&#8203;</span>
                    <a href="http://clickom.email.lick.com/f/a/RsoZhqvcvx7sh7TKTtf6jw~~/AAAAARA~/zUWJ1CtO-zScNgiHi1U4FAG4qK1Gl6enf4xpKTNucGJfvBI2BzXiZRuebEJUQVJMvbth_D1L2R73vQ0-Txn3wymzAnriQ8QmfeDFPjYbR8msL2wS5LqhTXB_XeSZQDcmcGV98Mzc4gQEjUlScqfQWK5b_Yu-oOEXgF4h7V744tetqsoCM63yx6AFFtdBG5qy97yvTI6XyVUKW_ZKB_9x1DkWytWR3tKbSM41qFmiNMc8gJCjdom338a3kicvcKCCR5zXvvKUt6tTrHd-HQ-yfRAtHL9LxqxkB6Jy3aiTHr83tQEG5SIOOOPBnLalZ3zhsv00OZwtiFB8xSFmL2PZvdlGouvurpww7pfPxNQwt68XO1BDWkq4DckYyR2OS0YUyEyhFLNsa2bV60dI82tmLDwZKLzgcx8JNNfr1paMFiAcl2mxXCA_PoZnSlD8VstzJHAjWD61b6OCp9_zzyvKew~~" style="color:#354147; text-decoration:none; text-transform:none; word-break:normal;" target="_blank">Samples</a>
                    <span style="font-size:1em;">&#8203;&emsp;&#8203;</span>
                    </span>
                    <span style="display:inline-block;">
<span style="font-size:1em;">&#8203;&emsp;&#8203;</span>
                    <a href="http://clickom.email.lick.com/f/a/GbBmvBupEgmkxWdut3jBDQ~~/AAAAARA~/_GquY8-srGsxCcyPnhutrJF4WGmk90H6DbMEGVI3EaW8Dvqq8MOAZJz0E6LDoD56aqft2L8uSMI0fV1cb7J2HRqTOwDhm23skRcDFtEjHCod0ln3SlHvGGaZjFDguRYe5WaGSwFMh__wZzpHrGOK3nImvTmGI06dFBZ410igl8XhPdRUgTt1_8o3t8aZGp7XAKTCKrUFF3ZGZikALo5pDsGccrmd2JM9WMrw4bo_Kfs9f8t3dAz_V-sv1fq9NRFpd4jFZMuIj9mN2KiemR5Wu3OcQDASFCUh6_tvy8Ybk8DUQHSlzBqUCg6v2WXyinTose7Qrg6-BwTQeRLaeD-FvKYwomtAErn4fj8fZQ7KaKvoZwbhTyCzfyg4DcuoXdpUikCfgPLe318yx8ZDePaGLuAzNdZFO5yqOVapq0d3XCadCR3zODHrUrlv08LDgp9K" style="color:#354147; text-decoration:none; text-transform:none; word-break:normal;" target="_blank">Tools</a>
                    <span style="font-size:1em;">&#8203;&emsp;&#8203;</span>
                    </span>
                  </div>
                </nav>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">

                <!--  -->
                <div style="display:none;"> </div>

                <!--
-->
                <div style="line-height:05px; height:05px; font-size:05px; mso-line-height-rule:exactly;" role="separator">&#8202;</div>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">
                <a href="http://clickom.email.lick.com/f/a/0UnKbvdb17RSjEDNdI8urg~~/AAAAARA~/gR7qmTtNF9lq4sA3hy4TOYWcogZ7HKmrEfmKh_kGvghrFuBa7pYIOySaOCprWFQZvk78tr_A37VTFgxFkJN1JVvL2LvSDm7bl0HTYvWo3Rd5prBx-cJTq9UK2uRGOFRc6soQxhNzHqwJcBdK_aSB40EOFd8tLBIALxnb7h1PURY~" style="color:#354147; text-decoration:none;" target="_blank"><img class="wf" border="0" src="https://d1a2o89e23clzw.cloudfront.net/emails/b7a78722a29c968b/6f0bab7d9f63f3175828f1d9ae4fe704.jpg" style="max-width:100%; height:auto; vertical-align:middle; " width="600" height="auto"></a>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">

                <!--  -->
                <div style="display:none;"> </div>

                <!--
-->
                <div style="line-height:05px; height:05px; font-size:05px; mso-line-height-rule:exactly;" role="separator">&#8202;</div>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">

                <!--  -->
                <div style="display:none;"> </div>

                <!--
-->
                <div style="line-height:05px; height:05px; font-size:05px; mso-line-height-rule:exactly;" role="separator">&#8202;</div>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">
                <a href="http://clickom.email.lick.com/f/a/bnNYwdpPCmPqJglug6Hc3w~~/AAAAARA~/iLyhIagum0W7aGsSdz6spMx-hWAH8npV8ILO4kr5PxvPw6eWODKIO9k36ZWb4i5AWe60T9TrWpOWMzzos1un_jqdXloFaicnSloEQUDpiTCiGSF95H_2PE_T96lGHduQKuO1B4_UQsQxLXDFeq4cx5Ahr6PX3vQTP7DN9iBtPxUiZl6f2UEYJFiwa-lhEr7KAkRQ48SnlH7qaTsC1IKjzrKvIFrWPG-G_iMilNrhHPjqWCGqdQ_PM81E9sIt8pw77yeNc4_COcVTxFw1dw3aPPifouxtmIVWIyBpQHJYBihhQNoSvpxk_Mfn5S39et36JlpIaStDKcTNKSxeSHhekYEJWyirzCgCoaXAcwJiPds4nw0aQtOHN-7KGwvsOKqzPx8BMlJ7E_jnHbWHcdjzSp-4ht_5iZ9_Rn0YEs8cFcHmCUdx_lDh6N5-9q4heYKXi-ocvVas82MDkcOul482pw~~" style="color:#354147; text-decoration:none;" target="_blank"><img class="wf" border="0" src="https://d1a2o89e23clzw.cloudfront.net/emails/b7a78722a29c968b/b718be945c809dacba6be3c867469470.gif" style="max-width:100%; height:auto; vertical-align:middle; " width="600" height="auto"></a>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">

                <!--  -->
                <div style="display:none;"> </div>

                <!--
-->
                <div style="line-height:05px; height:05px; font-size:05px; mso-line-height-rule:exactly;" role="separator">&#8202;</div>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">

                <!--  -->
                <div style="display:none;"> </div>

                <!--
-->
                <div style="line-height:05px; height:05px; font-size:05px; mso-line-height-rule:exactly;" role="separator">&#8202;</div>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center" style="padding: 0 24px;">
                <table align="center" border="0" cellspacing="0" cellpadding="0" role="none" style="margin:0 auto; min-width:100%; width:100%;">
                  <tr>
                    <td align="left" style="padding:0px;">
                      <div class="rich">
                        <p style="margin: 0px; text-align: initial;text-align:center;">To celebrate five years of Lick, we’re crowdfunding!</p>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">

                <!--  -->
                <div style="display:none;"> </div>

                <!--
-->
                <div style="line-height:10px; height:10px; font-size:10px; mso-line-height-rule:exactly;" role="separator">&#8202;</div>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center" style="padding: 0 24px;">
                <table align="center" border="0" cellspacing="0" cellpadding="0" role="none" style="margin:0 auto; min-width:100%; width:100%;">
                  <tr>
                    <td align="left" style="padding:0px;">
                      <div class="rich">
                        <p style="margin: 0px; text-align: initial;text-align:center;">Community has always been at the heart of who we are and now we’d like to give you, our community, a chance to invest and be part of Lick’s future.</p>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">

                <!--  -->
                <div style="display:none;"> </div>

                <!--
-->
                <div style="line-height:10px; height:10px; font-size:10px; mso-line-height-rule:exactly;" role="separator">&#8202;</div>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center" style="padding:0 18px;">
                <div style="display:none;">
                </div>

                <!-- 
-->
                <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" style="margin:0 auto; width:100% !important;" width="100%">
                  <tr>
                    <td align="center">
                      <table border="0" cellspacing="0" cellpadding="0" role="none">
                        <tr>
                          <td class="button" style="line-height:100%; padding:6px 6px 6px 6px; ">
                            <a href="http://clickom.email.lick.com/f/a/qs50JbKgvY-8_mcowcfDeg~~/AAAAARA~/Bb1aU4GgeRlah8f9wrz7giSSiSMVQMJaD9Dr7Sz47MhDuBn-MTjnfEMJo7deTroLkeO2QRv-rjoPZ4E9-5OL2OigmM1CDgYmmHAT-ZrXwn08eg2d49_-VhM-1wBb9ZmpitZUKYeqaJ_Frg7KuFGQaI8rNDbzRnKBa-e10R84FOBwWP7n6dtAYjqZBGypQjQtHVShOfqyfaMtMTWBuHSZaNm-kFzoyTli-8LoIllo2NU588jNmeVbNxklJu1y9xBB96eVZmsP87WtdHeYfyRXZv5ExxL6L3mHzwqOUsoSy7EtNowU-xe-MHDro8SW6mxenCWj_vtEwy0ZzmMsqApRUmFPVToR6BSl-xArjxE9YjuEM8wNrRETwIAD6JdYvpR0jnyvOpsqa1PaWztZ9tSSGkYoY1l7S1Q9cXLLUg2oX7znUGgYuju4IDZVxa01-QHcak6egZ5Da_JU99RW1oL5Nw~~" style="background-color:#354147; border:2px solid #354147; border-radius: 4px; font-family:'Basis Grotesque Pro', Arial, sans-serif; color:#ffffff; display:inline-block; font-size:16px; font-weight:500; letter-spacing:0em; padding:12px 20px 8px; mso-padding-alt:0; text-decoration:none; white-space: nowrap;">

                              <!--[if mso]><i style="mso-font-width:200%;mso-text-raise:200%" hidden>&#8203;&emsp;</i><span style="mso-text-raise:100%"><![endif]-->Get priority access

                              <!--[if mso]></span><i style="mso-font-width:200%" hidden>&emsp;&#8203;</i><![endif]--></a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">

                <!--  -->
                <div style="display:none;"> </div>

                <!--
-->
                <div style="line-height:10px; height:10px; font-size:10px; mso-line-height-rule:exactly;" role="separator">&#8202;</div>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">

                <!--  -->
                <div style="display:none;"> </div>

                <!--
-->
                <div style="line-height:10px; height:10px; font-size:10px; mso-line-height-rule:exactly;" role="separator">&#8202;</div>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center" style="padding: 0 24px;">
                <table align="center" border="0" cellspacing="0" cellpadding="0" role="none" style="margin:0 auto; min-width:100%; width:100%;">
                  <tr>
                    <td align="left" style="padding:0px;">
                      <div class="rich">
                        <h1 style="margin: 0px; text-align: initial;text-align:center;">Our Growth in Numbers</h1>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">

                <!--  -->
                <div style="display:none;"> </div>

                <!--
-->
                <div style="line-height:10px; height:10px; font-size:10px; mso-line-height-rule:exactly;" role="separator">&#8202;</div>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">
                <a href="http://clickom.email.lick.com/f/a/BK9KqlnfZnFyy4hrxNYkoA~~/AAAAARA~/enqfr8RIung8e28oTgyDkf8o4RGhDb5gDS80eaxIuN8PZ8qjeVUAiFFRJxM43KI-llIVCdx8-r0AtflliyQ8dOXvWF1_5WZV_aZPfo6M1AZ-8uIIDHaefZhGjAVp9N4q4dQ0ORjsVfFS3xoX2fryLsjHTi1WYqMmEUKvgA7FKf4soQ155O0wnAFWhfN5pLhWhDa8jmnaujs0sA7fSCCQvIlhv2566sQZyWzCz9_Yppky38SgyQZ7--WNRFLNDidl-sUxtsAhlYOEzGDkYR2o6ramcqAGBhFNbr_aOhvtlWCYcokkcJOxd4f0LktxxBWxBveXklwVpwjQ8-CUucwLhpQHGQx3mB5UK4-nw4d-GMjtw7OKd3YF4gQNbnih-BC7t34tOSRsxmsFLnHiMNiDhhWrdFy0677c8PjNNFy7B3pXTSya2LYJDmCgLw8q8fcuPdy6JJdHiNoASsVCzoKfxw~~" style="color:#354147; text-decoration:none;" target="_blank"><img class="wf" border="0" src="https://d1a2o89e23clzw.cloudfront.net/emails/b7a78722a29c968b/6fa6254f1ce817d576ea171161b7172d.jpg" style="max-width:100%; height:auto; vertical-align:middle; " width="600" height="auto"></a>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">

                <!--  -->
                <div style="display:none;"> </div>

                <!--
-->
                <div style="line-height:10px; height:10px; font-size:10px; mso-line-height-rule:exactly;" role="separator">&#8202;</div>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">

                <!--  -->
                <div style="display:none;"> </div>

                <!--
-->
                <div style="line-height:10px; height:10px; font-size:10px; mso-line-height-rule:exactly;" role="separator">&#8202;</div>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">
                <a href="http://clickom.email.lick.com/f/a/lS6aPlXiuNaVQR195yFehA~~/AAAAARA~/M8UrtqoWPZcHa7q4OC_FdGh4HQZD-c5O2EJcObSEGNGF8M11bE4OU64dQ8glEOND6M8hDOMUML_q5ir9iCd_TArG7blbkOZUTUvB16Z4NTwcDd6M0Ik4NSkaZXXre0drbHlXEiq8p83H28k62kODfCnrEChVSq9Sn6P9EG6fxxUtroFH8EDW0rs2UR8ex5j9qSBVG8kN0X-nAXRfFDi1eI7yhhXDM93tsVls284Z_jG8gyqVvPtmJ6XpZ-6kRHu3Z9yM0TZCeXhp6m8xkKsiDdDvL52qdy6_8WM6lly4YT4hlnWTAFOl3lIIMgjbwFOY_OyQ34Z6ndCY2mfmMSeFQZhyIvBToQbPLhDxQcjD8fkmWUCxzkRdZoSHoLID1ZTGr7q03ZWDwYuoc09j8sBaOAlfRUpupIsbHklp3_EVmoarNPkdlMUxBK2SHge4FYm9qO1Rg9Ex985PdOo5XQCY5Q~~" style="color:#354147; text-decoration:none;" target="_blank"><img class="wf" border="0" src="https://d1a2o89e23clzw.cloudfront.net/emails/b7a78722a29c968b/bd32a3dbe74441071c8817c833b10d4a.png" style="max-width:100%; height:auto; vertical-align:middle; " width="600" height="auto"></a>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">
                <a href="http://clickom.email.lick.com/f/a/CoPylbypFiEYmlELdvBLGA~~/AAAAARA~/nCZJF2eLU1Dj6ZcKQ3pr1o5c4DSzoKJ7gO_L1GEJxBveTlalnXeMtj7EX9AYiCqQyQB-gBLs3YezZoTgxCCZeozBPvmJmbc9bEqQICdfpEBvRrBpW49WSGTuik8A-Ng8wFVCiAYG_zZqlHlef0nXSppUJoZBJg-f_XBfecP4h3vv4gAfGN0rE3gJUHiQ-wngwPmy4K9oJzL27QBAYKCJCu-RNXuHhR9EZ8kT1sNBYka4m3wd2qkcnzqOC4z0BboFe0Hx2NPj_7IlHLLnVdDqYeDzAK2U1mMjHrbwZTzAIc7mb2N8Vk2-h99k8hhi30O6DBd-UM8NCHO1MbXJy1p2auht4Yrt0HP0HHnEU58HBIJKEIiQAcniEmA9lXv_5o7G6_MZTDL9-01GLBG0PKjarp3wcQimDDro_Ab8MbT32PHuEdEWH5OrNxKcgeMjRByq8gm1WUzVyLjeRYfO-K2vkw~~" style="color:#354147; text-decoration:none;" target="_blank"><img class="wf" border="0" src="https://d1a2o89e23clzw.cloudfront.net/emails/b7a78722a29c968b/3ceaab9c96ea61676c986aa212952ec3.png" style="max-width:100%; height:auto; vertical-align:middle; " width="600" height="auto"></a>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">
                <a href="http://clickom.email.lick.com/f/a/6ysbGa6aRkBxmvFZ7a9YQw~~/AAAAARA~/TlajIk4XAKdSlRLpJcUI_CRD9ynZtMT73HbIZCWRfyBQuOJjm3pSlQkxvx8nO_EUKDY075nafcLKFDxYi5rgB12iR20_bSAV8di7cupGbpES2nBd03Hsn-yh77zy40arksa9trETGKK0V_jr1Od0klsILynrMEr8CyBCBxFR8pg_xy371N4k--nSDXFO1RC_PeNMnLTZl5VAJtKq9oA8ro8siH6ff1t5vaIqk-nM1c-qkPQR75uvyWKjsk5lEx5hvX_6ISVUAhWS7GvLXKga1gr4z4dr1AWYDcG9sgO9lYjg5ERwBkPRsujVNyMfugj5x-xnGgRd6pNt-DyTu9DMwwSYCmAt4URFsDTRjtB7-49cyde_Ml7AqjiNLimOCqn_FvhMaTx_BhBIge-jrmgfS3STFfX2QMkklwPIhn_4ZN5KgD7Xym8fLv6k1yDRXbW3aXKfZTUj35O6RRsxI4MWaA~~" style="color:#354147; text-decoration:none;" target="_blank"><img class="wf" border="0" src="https://d1a2o89e23clzw.cloudfront.net/emails/b7a78722a29c968b/45a0b869a13cb498c0872b935ea0a60a.png" style="max-width:100%; height:auto; vertical-align:middle; " width="600" height="auto"></a>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">

                <!--  -->
                <div style="display:none;"> </div>

                <!--
-->
                <div style="line-height:10px; height:10px; font-size:10px; mso-line-height-rule:exactly;" role="separator">&#8202;</div>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">

                <!--  -->
                <div style="display:none;"> </div>

                <!--
-->
                <div style="line-height:10px; height:10px; font-size:10px; mso-line-height-rule:exactly;" role="separator">&#8202;</div>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">

                <!--  -->
                <div style="display:none;"> </div>

                <!--
-->
                <div style="line-height:10px; height:10px; font-size:10px; mso-line-height-rule:exactly;" role="separator">&#8202;</div>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center" style="padding: 0 24px;">
                <table align="center" border="0" cellspacing="0" cellpadding="0" role="none" style="margin:0 auto; min-width:100%; width:100%;">
                  <tr>
                    <td align="left" style="padding:0px;">
                      <div class="rich">
                        <h1 style="margin: 0px; text-align: initial;text-align:center;">Backed by Europe's leading investors</h1>
                        <p style="margin: 0px; text-align: initial;text-align:center;">We have secured investment from some of Europe's leading investors and we're inviting you to invest alongside them.</p>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">

                <!--  -->
                <div style="display:none;"> </div>

                <!--
-->
                <div style="line-height:10px; height:10px; font-size:10px; mso-line-height-rule:exactly;" role="separator">&#8202;</div>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">
                <a href="http://clickom.email.lick.com/f/a/a2N6ycPD3Mu_U6hBt2nukA~~/AAAAARA~/ZIExsAmx6OeAj2Ejf6zF4qWQ-y1qbvi75lieX3xJY-I79ICq8Wjt_HLFJo2LfLx3k_TdUfHvO3MkwJPQE7C1_Qgfj5usjYw0UCu6urr7Fll8GC4WNW3imvnA25UGNUNCKwPEvV6F3JCFNCu8lmS9X7D4iW7f04PCHJ7Hu10ZeNF2jj1Vzk_wbPG-oyEQPH3xfjRrpcbXykqOxDGxq__32UMcv9s0nJpSDCkIUIsFjRi-RAUsBymVpk8h6kkFquFTX0TsGH0CJqXz5fFIxwJ-rHsT40jERgldWtS1TjZqjl2uypA_W3StkqlZU3e-dD7cSMAFtD3NoYzEKzXSrk67MKccR951kHOha7CEa5pK_cDp8i0OZySI5ch6mP6FaC06Lvu7gsfMxJHslEQ0VQYN8EEMzlU9x8koPZh9rwKtdrG1dUBcFoXG2PskRNU1133UfleburkZyQbPucmsJuJyyg~~" style="color:#354147; text-decoration:none;" target="_blank"><img class="wf" border="0" src="https://d1a2o89e23clzw.cloudfront.net/emails/b7a78722a29c968b/324c5f7fd462124b9e5ed649211bcb8a.png" style="max-width:100%; height:auto; vertical-align:middle; " width="600" height="auto"></a>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">

                <!--  -->
                <div style="display:none;"> </div>

                <!--
-->
                <div style="line-height:10px; height:10px; font-size:10px; mso-line-height-rule:exactly;" role="separator">&#8202;</div>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center" style="padding:0 18px;">
                <div style="display:none;">
                </div>

                <!-- 
-->
                <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" style="margin:0 auto; width:100% !important;" width="100%">
                  <tr>
                    <td align="center">
                      <table border="0" cellspacing="0" cellpadding="0" role="none">
                        <tr>
                          <td class="button" style="line-height:100%; padding:6px 6px 6px 6px; ">
                            <a href="http://clickom.email.lick.com/f/a/NprChJgoCO6VmsJMlFYOOw~~/AAAAARA~/sojpTUVMG0uI0qJfd-AxW4RC71IF2QVFh3R0Z9wkpopUfQrOma_ZutvsdsyEzBv1gNM0364iaKLTbRE-Vkx4TplOBFiSe1wwrmWamTRgRCPiZiO_B0ACMOaEf6kXKPLB-BHKzbS3xkxeNH1o5SI-pUjPxywTv7hcqO1AgE1wMb-vwVJO-jLlel_TCMm_-KvtFAYHp3k0XXFHdrbHYOlViGmntWcvZCXCcYnmFw-exvueIxGTJMpLICM7pdtpP630CCZDf6DBKG6s2OwjboABom5i2nxXxUieUgAwWKNLns3VZMWy-x_JMxfRKRUo4L-0SDdXSK-O9uvP6nJ0Ud3aFpXVrvLugYrCGGA5LsZAQXrdpngaQ6PiRU5XnCMpOFrIC4P3GEl00GquYfhIlgt4ntSAvo3K6Pm9gmt1tc-QI0trbWC4sWTePXwq6vqaKQoXt5dqVlGhNWgoExmoCyahkA~~" style="background-color:#354147; border:2px solid #354147; border-radius: 4px; font-family:'Basis Grotesque Pro', Arial, sans-serif; color:#ffffff; display:inline-block; font-size:16px; font-weight:500; letter-spacing:0em; padding:12px 20px 8px; mso-padding-alt:0; text-decoration:none; white-space: nowrap;">

                              <!--[if mso]><i style="mso-font-width:200%;mso-text-raise:200%" hidden>&#8203;&emsp;</i><span style="mso-text-raise:100%"><![endif]-->Get priority access

                              <!--[if mso]></span><i style="mso-font-width:200%" hidden>&emsp;&#8203;</i><![endif]--></a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">

                <!--  -->
                <div style="display:none;"> </div>

                <!--
-->
                <div style="line-height:10px; height:10px; font-size:10px; mso-line-height-rule:exactly;" role="separator">&#8202;</div>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">
                <a href="http://clickom.email.lick.com/f/a/htFBkME_P46dsRHSrF7U0g~~/AAAAARA~/Essaf6ta-5ltWUKNjpxrQhyQw5WfyjjMjGUD1lArgMQp6O2z6GSScBrqKV7_kTpY6cvfxJr4DnL3KQJayLQQ2Rv0F6b-v3LlteHKAQCDy6ooYeDHyK8Njv0c-9un0419yFPmdTQi3gHxx4o7lMEd6VUxzCdf8yH__JGu7YZtPDyTBhXSChefiBKwtwLgiyRPP0jG-DA89eEhAhCvZmbYdt5yCOX0oDXdXpkRndyTEKa7OZD57mjcfUcKdYy3COT8ajK1JCLjtzloYxIEySEf285xjh6tfdtDu2rHyjET3YgRQ17ceJo8UYeAQgLnCM8Y0zRgjq_j_OCCvdsYMCDMbbR_va4Gn82Xb2tFH-G0wJIj-uIeKlZi-V_iYEBijrsAVfOoRBO8tdvfsGTMRB6XJluacWZS172YMF0z4GYq3uzip9OaBA37o2KQkKQ6VLWNWmOe0AEfLww6RdMMe8fh7g~~" style="color:#354147; text-decoration:none;" target="_blank"><img class="wf" border="0" src="https://d1a2o89e23clzw.cloudfront.net/emails/b7a78722a29c968b/03cf2c15d6061c523d39d64ebff7202f.jpg" style="max-width:100%; height:auto; vertical-align:middle; " width="600" height="auto"></a>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">

                <!--  -->
                <div style="display:none;"> </div>

                <!--
-->
                <div style="line-height:10px; height:10px; font-size:10px; mso-line-height-rule:exactly;" role="separator">&#8202;</div>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">

                <!--  -->
                <div style="display:none;"> </div>

                <!--
-->
                <div style="line-height:10px; height:10px; font-size:10px; mso-line-height-rule:exactly;" role="separator">&#8202;</div>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">
                <table align="center" border="0" cellspacing="0" cellpadding="0" role="none" style="margin:0 auto; min-width:90%; width:90%;">
                  <tr>
                    <td style="text-align:center;">

                      <!--  -->
                      <div style="display:none;">
                      </div>

                      <!--
-->
                      <div style="background-color:#C3867B; line-height:2px; height:2px; font-size:2px; mso-line-height-rule:exactly;" role="separator">&#8202;</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">

                <!--  -->
                <div style="display:none;"> </div>

                <!--
-->
                <div style="line-height:10px; height:10px; font-size:10px; mso-line-height-rule:exactly;" role="separator">&#8202;</div>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">

                <!--  -->
                <div style="display:none;"> </div>

                <!--
-->
                <div style="line-height:10px; height:10px; font-size:10px; mso-line-height-rule:exactly;" role="separator">&#8202;</div>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">
                <a href="http://clickom.email.lick.com/f/a/C5acJpS0UEj5d0VFOjN72g~~/AAAAARA~/0Ver18jqi2o76myeYLDVq7f1tuegbNiT26xAOMp4F4Yi-5Jmdxt6z31C-vOVZd0Mr9CPIGNVEut123E-EXRp-zMyGhRXLUTNMQJTcJBXxs7ONbdB4tAwmKte0uDKjalacjgYoaer3vpZfO1yPdG28vs-yK-bMZu6frBy3iP6xWs~" style="color:#354147; text-decoration:none;" target="_blank"><img class="wf" border="0" src="https://d1a2o89e23clzw.cloudfront.net/emails/b7a78722a29c968b/76e244a241eb6c245c66216a910e0c3a.jpg" style="max-width:100%; height:auto; vertical-align:middle; " width="600" height="auto"></a>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center">

                <!--  -->
                <div style="display:none;"> </div>

                <!--
-->
                <div style="line-height:10px; height:10px; font-size:10px; mso-line-height-rule:exactly;" role="separator">&#8202;</div>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%;">
            <tr>
              <td align="center" style="padding: 0 24px;">
                <table align="center" border="0" cellspacing="0" cellpadding="0" role="none" style="margin:0 auto; min-width:100%; width:100%;">
                  <tr>
                    <td align="center" style="padding:1px 0px; text-align: left">
                      <h1 style="color:#354147; font-size:28px; font-weight:bold; margin:0.5em 0;">
                      </h1>
                      <p style="color:#354147; font-size:12px; font-weight:normal; margin:1em 0;">
                        Approved by Republic Europe on 31/03/25. <br><br>
                        Seedrs Limited (trading as Republic Europe) is authorised and regulated by the Financial Conduct Authority. Seedrs Limited is a limited company, registered in England and Wales (No. 06848016), with registered office at Stylus Building, 112-116 Old Street, London, England, EC1V 9BG.
                      </p>
                      <p style="color:#354147; font-size:16px; font-weight:normal; margin:1em 0;">
                      </p>
                      <p style="color:#354147; font-size:16px; font-weight:bold; margin:1em 0;">
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" role="none" style="min-width:100%; width:100%; background-color: #ffffff;">
            <tr>
              <td align="center" style="padding:12px;">
                <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" style="margin:0 auto; width:100% !important;" width="100%">
                  <tr>
                    <td align="left">
                      <p style="color:#354147; font-size:12px; font-weight:normal; margin:1em 0;">
                        &copy; 2025 Lick<br>9 Brighton Terrace, London,
                        SW9 8DJ, United Kingdom
                      </p>
                      <p style="color:#354147; font-size:12px; font-weight:normal; margin:1em 0;">
                        You've opted in to receive emails from Lick.<br>
                        If you'd rather not, you can <a class="tdn" href="#" style="color:#354147; text-decoration:underline;" target="_blank">Unsubscribe</a> or <a class="tdn" href="#" style="color:#354147; text-decoration:underline;" target="_blank">Update your Preferences</a>
                      </p>
                      <p style="color:#354147; font-size:12px; font-weight:normal; margin:1em 0 0 0;">
                        <a href="http://clickom.email.lick.com/f/a/80PWaQjJ4Zq-iqIl2rUT_w~~/AAAAARA~/0l6U2jB8-5dD-acowkKHcQJ1UYTFKsHtME8GYeBBjiwc_kG6zmIY2t8R0xauL6eG1mprcDGVi6J7fKZ5H7e0BciPkhQwollJHL6A2CoCOF9mmUd8uTkY5t75zAds6ay2ZKU6Vr6ehdHdgsh_YPTEn-qzU9Fqi4jEiCUq2n05BMvMBFayMVk-xI_F4rb1h6OuzoA0WUH6aWWNqN8fHDKw1xlh0Ih2Vmvcvrp6DaTlKs4uZcnzQcCU2YwYSEIebINaeYTrStlbWQb35TnPlikAUtVIpcdmNLqjtWw6sE4ztWDqeeFQDX9BLesPoqo8UxoOX76gIIbFgO64cj1R2QrmRjzruHjeti6DVfQR8hYaLMzK2qpQKtJHUN4xH4ebImMsjKyz2MF8QhuGpo7cy4xjEhsmTbatQ23aJwOubwuGYP3ly3MXczXtKXbco9Rj4AMKZ6NGtLri8zCZ5W0yQdgbba9lvfrpBr8sDslktsrZG0KiJJuZLDNjcppTGJ_OcyPmYdqcSuwNUm2yopMfBbCvFg~~" style="color:#354147; font-size:11px; text-decoration:underline;" target="_blank">View in browser</a>
                      </p>
                    </td>
                    <td align="right" valign="bottom"><a href="#" target="_blank" style="display:block"><img border="0" height="auto" src="https://d1a2o89e23clzw.cloudfront.net/emails/b7a78722a29c968b/b384ff41b5bf6a055735d1d5651b062f.png" style="display:block; margin:0 auto; max-width:100%; padding:0;" width="41"></a></td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="font-size:20px; line-height:20px">&nbsp;</td>
            </tr>
          </table>
        </div>

        <!---->
      </div>

      <!--[if true]></td><td></td></tr></table><![endif]-->
    </div>
  </body>
</html>

```

## 渲染