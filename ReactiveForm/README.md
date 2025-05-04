# Angular User Form with Custom Currency Pipe

This Angular application provides a **dynamic user form** with Bootstrap styling, **form validation**, and **custom currency formatting**. The app uses a custom pipe to format currency values based on the country selected by the user and displays the data in a responsive table.

---

## Features

- **User Form:** Collects user information (name, age, address, country, and gender) with input validation.
- **Custom Currency Pipe:** Formats the age field as currency based on the selected country, with options to truncate decimals.
- **Bootstrap Styling:** Responsive design and user-friendly interface.
- **User Table:** Displays the collected data in a well-formatted table with responsive design.

---

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://your-repository-url.git
    cd your-project-folder
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the application:**
    ```bash
    ng serve
    ```

4. Visit `http://localhost:4200` in your browser.

---

## Components

### 1. User Form
The user form collects the following data:
- **Name** (required)
- **Age** (number)
- **Address**
- **Country** (dropdown: options are provided from the `countries` array)
- **Gender** (radio button options)

### 2. User Table
The data is displayed in a responsive table. The `customCurrency` pipe is applied to the `Age` field to format the number as currency based on the selected country. For example:
- **IN** → ₹ (Indian Rupee)
- **AU** → A$ (Australian Dollar)
- **US** → $ (USD)
  
### 3. Custom Currency Pipe

This is a custom pipe that formats a number as currency, based on the country code and an optional `truncateDecimal` flag:

#### Pipe Implementation:
```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  transform(value: number, countryCode: string = 'US', truncateDecimal: boolean = false): string {
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
