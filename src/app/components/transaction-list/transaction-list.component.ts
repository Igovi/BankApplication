import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TransactionProvider } from '../../services/request/providers/transaction.provider';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.scss'
})
export class TransactionListComponent {

  constructor(
    private formBuilder: FormBuilder,
    private transactionService: TransactionProvider
  ) {
    this.transactionForm = this.formBuilder.group({
      clientId: ['', [Validators.required, Validators.min(0)]],
      type: ['',Validators.required],
      amount: ['', Validators.required]
    });
  }

  public transactionList: Array<Transaction> = [];

  public transactionForm: FormGroup;

  ngOnInit() {
    this.getAllTransactions();
  }

  getAllTransactions(){
    this.transactionService.getAllGeneric().subscribe(
      (apiData) => {
        this.transactionList = apiData
        
    }, (apiError) => {
      alert(apiError)
    }
    )
  }

  clear() {
    this.transactionForm.reset();
  }

  deleteTransaction(id:number){
    this.transactionService.DeleteGeneric(id).subscribe(
      (apidata:any) => {
        this.transactionList = this.transactionList.filter(transaction => transaction.id !== id )
        alert(apidata.message);
      }
    ),(apiError: any) => {
      alert(apiError.message);
    }
  }

  submit(){
    let currentDate = new Date();
    let body = {
      clientId: this.transactionForm.value.clientId,
      type: this.transactionForm.value.type.toLowerCase(),
      amount: this.transactionForm.value.amount,
      transactionDate: currentDate
    }
    console.log(body)
    this.createTransaction(body)
    this.clear();
  }

  createTransaction(body:any){
    this.transactionService.postGeneric(body).subscribe(
      (apiData:any) => {
        this.transactionList.push(apiData);
      }
    ),(apiError: any) => {
      alert(apiError.message);
    }
  }



}
