import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  transform(
    value: number, 
    countryCode: string = 'US', 
    truncateDecimal: boolean = false
  ): string {

    if (value == null || isNaN(value)) return '';

    // Truncate or keep decimals
    if (truncateDecimal) {
      value = Math.round(value);
    }

    let currencySymbol = '$'; // default USD
    switch (countryCode.toUpperCase()) {
      case 'IN':
        currencySymbol = '₹';
        break;
      case 'AU':
        currencySymbol = 'A$';
        break;
      case 'US':
        currencySymbol = '$';
        break;
      case 'EU':
        currencySymbol = '€';
        break;
      // Add more cases as needed
      default:
        currencySymbol = '$';
    }

    // Format with thousands separator and optional decimals
    const formattedValue = truncateDecimal
      ? value.toString()
      : value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    return `${currencySymbol}${formattedValue}`;
  }

}
