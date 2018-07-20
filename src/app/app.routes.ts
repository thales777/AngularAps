import { Routes } from "@angular/router";
import { EnderecoComponent } from './endereco/endereco.component';

export const rotas: Routes = [
    { path: 'endereco', component: EnderecoComponent },
    { path: '**', component: EnderecoComponent },
    { path: '', redirectTo: 'endereco', pathMatch: 'full' }
];