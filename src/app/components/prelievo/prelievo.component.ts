import { Component } from '@angular/core';
import { BancomatService } from 'src/app/bancomat.service';
import { PrelievoStato } from 'src/app/models/prelievo-stato';

@Component({
  selector: 'app-prelievo',
  templateUrl: './prelievo.component.html',
  styleUrls: ['./prelievo.component.css']
})
export class PrelievoComponent {
  importo = 0;
  stato?: PrelievoStato;

  constructor(private bs: BancomatService) {

  }

  preleva() {
    this.stato = this.bs.preleva(this.importo);
  }
}
