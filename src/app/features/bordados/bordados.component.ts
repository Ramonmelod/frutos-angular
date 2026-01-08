import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProductGridComponent } from '../../shared/components/productgrid/productGrid.component'

@Component({
    selector: 'app-bordados',
    standalone: true,
    imports: [CommonModule, ProductGridComponent],
    templateUrl: './bordados.component.html',
    styleUrl: './bordados.component.scss',
})
export class BordadosComponent {}
