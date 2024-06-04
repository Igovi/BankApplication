import { Component } from '@angular/core';
import { ClientProvider } from '../../services/request/providers/client.provider';
import { Client } from '../../models/client.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})
export class ClientListComponent {
  constructor(
    private  clientService: ClientProvider,
    private formBuilder: FormBuilder
  ) {
    this.clientForm = this.formBuilder.group({
      name: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(0)]],
      account_number: ['',[Validators.required, Validators.min(0)]],
    });
  }

  public clientForm: FormGroup;

  public clientList: Array<Client> = [];

  public isEditMode:boolean = false;

  public clientSelected!: Client;



  ngOnInit() {
    this.getAllClients();
  }

  getAllClients(){
    this.clientService.getAllGeneric().subscribe(
      (apiData) => {
        this.clientList = apiData
        
    }, (apiError) => {
      console.log(JSON.stringify(apiError))
    }
    )
  }

  edit(client:Client){
    this.clientForm.patchValue(client);
    this.isEditMode = true;
    this.clientSelected = client;

  }

  deleteClient(id:number){
    this.clientService.DeleteGeneric(id).subscribe(
      (apiData:any) => {
        this.clientList = this.clientList.filter(client => client.id !== id )
        alert(apiData.message);
    }, (apiError) => {
      alert(apiError.message);
    }
    )
  }

  clear() {
    this.clientForm.reset();
    this.isEditMode = false;
  }

  submit(){
    let body = {
      name: this.clientForm.value.name,
      email: this.clientForm.value.email,
      age: this.clientForm.value.age,
      account_number: this.clientForm.value.account_number
    }
    if(this.isEditMode){
      this.editClient(body);
    }else{
      this.createClient(body)
    }
   
    this.clear();
  }

  createClient(body:any){
    
    this.clientService.postGeneric(body).subscribe(
      (apiData) => {
        this.clientList.push(apiData);
    }, (apiError) => {
      alert(apiError)
    }
    )
    
  }

  editClient(body:any){
    this.clientService.putGeneric(body,this.clientSelected.id).subscribe(
      (apiData) => {
        this.clientList.map(client => {
          if(client.id == this.clientSelected.id){
            client = apiData;
          };
        })
    }, (apiError) => {
      alert(apiError)
    }
    )
  
  }
}
