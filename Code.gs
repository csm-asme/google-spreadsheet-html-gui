function doGet() {
  return HtmlService
      .createTemplateFromFile('index')
      .evaluate();
}

function getData() {
  return SpreadsheetApp
      .openByUrl('https://docs.google.com/spreadsheet/ccc?key=0AiQ2-YVZUywudGQydTk1eWNzZWZHVG5KYXZROGR6NkE&usp=drive_web#gid=0')
      .getDataRange()
      .getValues();
}
