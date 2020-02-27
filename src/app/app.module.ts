import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { TopoComponent } from "./topo/topo.component";
import { BuscaFiltrosComponent } from "./busca-filtros/busca-filtros.component";
import { BuscaComponent } from "./busca/busca.component";
import { FiltrosComponent } from "./filtros/filtros.component";
import { BoardColumnComponent } from "./board-column/board-column.component";
import { CriarColunaComponent } from './criar-coluna/criar-coluna.component';
import { CriarTaskComponent } from './criar-task/criar-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    BuscaFiltrosComponent,
    BuscaComponent,
    FiltrosComponent,
    BoardColumnComponent,
    CriarColunaComponent,
    CriarTaskComponent
  ],
  imports: [BrowserModule, HttpClientModule, DragDropModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
