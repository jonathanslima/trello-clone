import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TopoComponent } from './topo/topo.component';
import { BuscaFiltrosComponent } from './busca-filtros/busca-filtros.component';
import { BuscaComponent } from './busca/busca.component';
import { FiltrosComponent } from './filtros/filtros.component';

@NgModule({
  declarations: [AppComponent, TopoComponent, BuscaFiltrosComponent, BuscaComponent, FiltrosComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
