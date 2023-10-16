import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstrattoContoComponent } from './components/estratto-conto/estratto-conto.component';
import { PrelievoComponent } from './components/prelievo/prelievo.component';
import { AssegniComponent } from './components/assegni/assegni.component';
import { ContanteComponent } from './components/contante/contante.component';
import { DepositoComponent } from './components/deposito/deposito.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    EstrattoContoComponent,
    PrelievoComponent,
    AssegniComponent,
    ContanteComponent,
    DepositoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
