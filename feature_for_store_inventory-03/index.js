let pricesInUSD = {
    "item1": 10,
    "item2": 20,
    "item3": 30
  };
  
  let exchangeRate = 80;
  
  let pricesInINR = Object.entries(pricesInUSD).map(([item, price]) => {
    let priceInINR = price * exchangeRate;
    return [item, priceInINR];
  });
  
  pricesInINR = Object.fromEntries(pricesInINR);
  
  console.log(pricesInINR);
  