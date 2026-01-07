import { Routes } from '@angular/router'
import { ErrorComponent } from './features/error/error.component'
import { HomeComponent } from './features/home/home.component'
import { MaintenanceComponent } from './features/maintenance/maintenance.component'
import { MaintenanceGuard } from './core/guards/maintenance/maintenance.guard'

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [MaintenanceGuard],
    },
    {
        path: 'bordados',
        component: MaintenanceComponent,
    },
    {
        path: 'cursos',
        component: MaintenanceComponent,
    },
    {
        path: 'riscos-para-bordar',
        component: MaintenanceComponent,
    },
    {
        path: 'decoracao',
        component: MaintenanceComponent,
    },
    {
        path: 'materiais',
        component: MaintenanceComponent,
    },
    {
        path: 'sobre',
        component: MaintenanceComponent,
    },
    {
        path: 'contato',
        component: MaintenanceComponent,
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
