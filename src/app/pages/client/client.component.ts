import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ClientListComponent } from '../../components/client-list/client-list.component';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [HeaderComponent,ClientListComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent {

}
