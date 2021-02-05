// DONT USE TO MUCH: 5/MIN AND 500/DAY

async function getStock(text) {
  const STOCKAPIKEY = 'OJT7B1VABV44T1CP'

  const APILINK = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${text}&apikey=${STOCKAPIKEY}`
  
  const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${text}&apikey=${STOCKAPIKEY}`)
  const res = await response.json()
  
  var globalQuote = res["Global Quote"]
  var symbolStock = globalQuote["01. symbol"]
  var openStock = globalQuote["02. open"]
  var highStock = globalQuote["03. high"]
  var lowStock = globalQuote["04. low"]
  var priceStock = globalQuote["05. price"]
  var volumeStock = globalQuote["06. volume"]
  var latestTradingDayStock = globalQuote["07. latest trading day"]
  var previousCloseStock = globalQuote["08. previous close"]
  var changeStock = globalQuote["09. change"]
  var changePrecentStock = globalQuote["10. change percent"]
  var data =  {
      "symbol" : symbolStock,
      "open" :  openStock,
      "high" : highStock,
      "low" : lowStock,
      "price": priceStock,
      "volume" : volumeStock,
      "latestTradingDay" : latestTradingDayStock,
      "previousClose" : previousCloseStock,
      "change": changeStock,
      "changePrecent": changePrecentStock
  } 
  changeText(data)
}

function changeText(data) {
    document.getElementById("symbolStock").innerHTML = "Symbol: " + data.symbol
    document.getElementById("openStock").innerHTML = "Open: " + data.open
    document.getElementById("highStock").innerHTML = "High: " + data.high
    document.getElementById("lowStock").innerHTML = "Low: " + data.low
    document.getElementById("priceStock").innerHTML = "Price: " + data.price
    document.getElementById("volumeStock").innerHTML = "Volume: " + data.volume
    document.getElementById("latestTradingDayStock").innerHTML = "Latest Trading Day: " + data.latestTradingDay
    document.getElementById("previousCloseStock").innerHTML = "Preious Close Price: " + data.previousClose
    document.getElementById("changeStock").innerHTML = "Change: " + data.change
    document.getElementById("changePrecentStock").innerHTML = "Change Precent: " + data.changePrecent
}

document.getElementById("stockButton").onclick = function() {
  var text = document.getElementById("stockInput").value;
  getStock(text)
}


