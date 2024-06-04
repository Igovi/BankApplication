import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ExtractListComponent } from '../../components/extract-list/extract-list.component';

@Component({
  selector: 'app-extract',
  standalone: true,
  imports: [HeaderComponent,ExtractListComponent],
  templateUrl: './extract.component.html',
  styleUrl: './extract.component.scss'
})
export class ExtractComponent {

}
