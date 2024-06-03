import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'user'
    },
    {
        path: 'user',
        loadComponent: () => 
            import('./pages/user/user.component')
                .then(m => m.UserComponent)
    },
    {
        path: 'transaction',
        loadComponent: () => 
            import('./pages/transaction/transaction.component')
                .then(m => m.TransactionComponent)
    },
    {
        path: 'extract',
        loadComponent: () => 
            import('./pages/extract/extract.component')
                .then(m => m.ExtractComponent)
    }
];
