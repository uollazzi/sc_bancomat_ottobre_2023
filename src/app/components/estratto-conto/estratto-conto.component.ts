import { Component } from '@angular/core';
import { BancomatService } from 'src/app/bancomat.service';

@Component({
  selector: 'app-estratto-conto',
  templateUrl: './estratto-conto.component.html',
  styleUrls: ['./estratto-conto.component.css']
})
export class EstrattoContoComponent {
  constructor(public bs: BancomatService) { }
}
