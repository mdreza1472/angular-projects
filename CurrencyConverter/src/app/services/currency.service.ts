import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface CurrencyData {
  currencyName : string,
  rate : number
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  _currencyURL : string = 'https://open.er-api.com/v6/latest/';

  constructor(private httpClient: HttpClient) {
  }

  fetchCurrencies(currency : string) : Observable<any> {
    
    let result : CurrencyData[] = [];

    return this.httpClient.request('GET', this._currencyURL + currency);

  }

  calculateConversion(fromAmount : number, toCurrencyRate: number) : number {
    return fromAmount * toCurrencyRate;
  }

}
