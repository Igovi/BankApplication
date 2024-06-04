import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { TransactionListComponent } from '../../components/transaction-list/transaction-list.component';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [HeaderComponent,TransactionListComponent],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss'
})
export class TransactionComponent {

}
