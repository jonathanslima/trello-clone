import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TopoComponent } from "./topo/topo.component";
import { BuscaFiltrosComponent } from "./busca-filtros/busca-filtros.component";
import { BuscaComponent } from "./busca/busca.component";
import { FiltrosComponent } from "./filtros/filtros.component";
import { BoardColumnComponent } from './board-column/board-column.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    BuscaFiltrosComponent,
    BuscaComponent,
    FiltrosComponent,
    BoardColumnComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
