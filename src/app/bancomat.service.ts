import { Injectable } from '@angular/core';
import { PrelievoStato } from './models/prelievo-stato';

@Injectable({
  providedIn: 'root'
})
export class BancomatService {
  saldo = 2000;

  constructor() { }

  preleva(importo: number): PrelievoStato {
    if (importo > this.saldo) {
      return new PrelievoStato(true, "Impossibile prelevare più del saldo.");
    }

    this.saldo -= importo;
    return new PrelievoStato(false, `Prelievo effettuato con successo. Nuovo saldo: ${this.saldo}`);
  }

  deposita(importo: number) {
    this.saldo += importo;
  }
}
