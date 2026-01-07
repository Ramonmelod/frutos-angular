import { Routes } from '@angular/router'
import { ErrorComponent } from './features/error/error.component'
import { HomeComponent } from './features/home/home.component'
import { MateriaisComponent } from './features/materiais/materiais.component'
import { MaintenanceGuard } from './core/guards/maintenance/maintenance.guard'

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [MaintenanceGuard],
    },
    {
        path: 'bordados',
        component: HomeComponent,
        canActivate: [MaintenanceGuard],
    },
    {
        path: 'cursos',
        component: HomeComponent,
        canActivate: [MaintenanceGuard],
    },
    {
        path: 'riscos-para-bordar',
        component: HomeComponent,
        canActivate: [MaintenanceGuard],
    },
    {
        path: 'decoracao',
        component: HomeComponent,
        canActivate: [MaintenanceGuard],
    },
    {
        path: 'materiais',
        component: MateriaisComponent,
        canActivate: [MaintenanceGuard],
    },
    {
        path: 'sobre',
        component: HomeComponent,
        canActivate: [MaintenanceGuard],
    },
    {
        path: 'contato',
        component: HomeComponent,
        canActivate: [MaintenanceGuard],
    },
    {
        path: 'error',
        component: ErrorComponent,
        canActivate: [MaintenanceGuard],
    },
    {
        path: '**',
        redirectTo: 'error',
    },
]
