import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExtractProvider } from '../../services/request/providers/extract.provider';
import { CommonModule } from '@angular/common';
import { Transaction } from '../../models/transaction.model';
import { TransactionProvider } from '../../services/request/providers/transaction.provider';

@Component({
  selector: 'app-extract-list',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,],
  templateUrl: './extract-list.component.html',
  styleUrl: './extract-list.component.scss'
})
export class ExtractListComponent {

  constructor(
    private formBuilder: FormBuilder,
    private extractService: ExtractProvider,
    private transactionService: TransactionProvider
  ) {
    this.extractForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.min(0)]],
      
    });
  }

  public extractForm: FormGroup;

  public showTransactions: boolean = false;

  public transactionList: Array<Transaction> =[]

  public total:number = 0;

  clear(){
    this.extractForm.reset();
    this.showTransactions = false;
  }

  submit(){
    console.log(this.extractForm.value)
    this.extractService.getByClientId(this.extractForm.value.id).subscribe(
      (apiData) => {
        this.transactionList = apiData.transactions
        this.total = apiData.total
        this.showTransactions = true;
    }, (apiError) => {
      alert(apiError.error.message)
    }
    )
  }
  
}
