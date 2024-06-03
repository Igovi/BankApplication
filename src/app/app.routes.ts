import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'clients'
    },
    {
        path: 'clients',
        loadComponent: () => 
            import('./pages/client/client.component')
                .then(m => m.ClientComponent)
    },
    {
        path: 'transactions',
        loadComponent: () => 
            import('./pages/transaction/transaction.component')
                .then(m => m.TransactionComponent)
    },
    {
        path: 'extracts',
        loadComponent: () => 
            import('./pages/extract/extract.component')
                .then(m => m.ExtractComponent)
    }
];
