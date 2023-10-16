import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BancomatService } from 'src/app/bancomat.service';

@Component({
  selector: 'app-contante',
  templateUrl: './contante.component.html',
  styleUrls: ['./contante.component.css']
})
export class ContanteComponent {
  importo = 0;
  constructor(private bs: BancomatService, private router: Router) { }

  deposita() {
    this.bs.deposita(this.importo);
    this.router.navigate(['/estratto-conto']);
  }
}
