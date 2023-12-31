import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { InserirContatoComponent } from './views/contatos/inserir-contato/inserir-contato.component';
import { ListarContatosComponent } from './views/contatos/listar-contatos/listar-contatos.component';
import { EditarContatoComponent } from './views/contatos/editar-contato/editar-contato.component';
import { ExcluirContatoComponent } from './views/contatos/excluir-contato/excluir-contato.component';
import { ListarCompromissosComponent } from './views/compromisso/listar-compromissos/listar-compromissos.component';
import { InserirCompromissoComponent } from './views/compromisso/inserir-compromisso/inserir-compromisso.component';
import { EditarCompromissoComponent } from './views/compromisso/editar-compromisso/editar-compromisso.component';
import { ExcluirCompromissoComponent } from './views/compromisso/excluir-compromisso/excluir-compromisso.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },

  //contatos
  {
    path: 'contatos/inserir',
    component: InserirContatoComponent,
  },
  {
    path: 'contatos/editar/:id',
    component: EditarContatoComponent,
  },
  {
    path: 'contatos/excluir/:id',
    component: ExcluirContatoComponent,
  },
  {
    path: 'contatos/listar',
    component: ListarContatosComponent,
  },
  {
    path: 'compromissos/listar',
    component: ListarCompromissosComponent,
  },
  {
    path: 'compromissos/inserir',
    component: InserirCompromissoComponent,
  },
  {
    path: 'compromissos/editar/:id',
    component: EditarCompromissoComponent,
  },
  {
    path: 'compromissos/excluir/:id',
    component: ExcluirCompromissoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
