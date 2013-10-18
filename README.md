google-spreadsheet-html-gui
===========================

An HTML web app for viewing the contents of a google spreadsheet

Refer to:
------------
https://developers.google.com/apps-script/guides/html/

and

https://developers.google.com/apps-script/


openByUrl(url)

Opens the spreadsheet with the given url.

 // The code below opens a spreadsheet using its id and logs the name for it.
 // Note that the spreadsheet is NOT physically opened on the client side.
 // It is opened on the server only (for modification by the script).
 var ss = SpreadsheetApp.openByUrl(
     "https://spreadsheets.google.com/a/yourdomain.com/ccc?key=abc1234567");
 Logger.log(ss.getName());
 
 Useful Resources
 http://stackoverflow.com/questions/16128903/google-apps-script-reading-from-private-spreadsheet
