var util = require('util');
var yahooFinance = require('yahoo-finance');
var express = require('express');
var app = express();
var nCnt = 0;

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');

app.get('/', function(request, response) {
  console.log("--> Request main page");
  response.send('OK !!!!Test da GITHUB.COM!!!' + nCnt);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

var SYMBOL = 'AAPL';

yahooFinance.historical({
  symbol: SYMBOL,
  from: '2012-01-01',
  to: '2012-12-31',
  period: 'd'
}).then(function (quotes) {
  console.log(util.format(
    '=== %s (%d) ===',
    SYMBOL,
    quotes.length
  ).cyan);
  if (quotes[0]) {
    console.log(
      '%s\n...\n%s',
      JSON.stringify(quotes[0], null, 2),
      JSON.stringify(quotes[quotes.length - 1], null, 2)
    );
  } else {
    console.log('N/A');
  }
});
  
