var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  results = {};
  salesData.forEach((company) => {
    var total = company['sales'].reduce((sum, value) => { return sum + value; });

    if (!results.hasOwnProperty(company.name)) {
      results[company.name] = {
        totalSales: total,
        totalTaxes: total * taxRates[company.province]
      }
    } else {
      results[company.name].totalSales += total;
      results[company.name].totalTaxes += (total * taxRates[company.province]);
    }
  });
  return results;
}


var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/