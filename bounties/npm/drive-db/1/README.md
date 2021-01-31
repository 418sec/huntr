# Description

`franciscop/drive-db`. this package is vulnerable to `Stored Cross-Site Scripting (XSS)`.

https://github.com/franciscop/drive-db
https://www.npmjs.com/package/drive-db

# Steps To Reproduce
  0) download https://github.com/franciscop/drive-db or use https://jsfiddle.net/v8uLpx59/1/
  1) Create the Google Drive spreadsheet and publish it:Create a Google Spreadsheet(File > Publish to the Web > Publish Copy the id between /spreadsheets/ and /edit in the url)
  2) use this this for testing `https://docs.google.com/spreadsheets/d/13Sxv7P6yv6shDx_QfHnGoZ_Rt4ZSYO_x-9H_908vJis/edit?usp=sharing`
  3) then follow the steps in https://github.com/franciscop/drive-db to reproduce
# POC
  [gdrive](https://drive.google.com/file/d/1VqfAgldmtY-qrgHRfizVvAH2oIFZVT-q/view?usp=sharing)
# Impact
run any javascript payloads
