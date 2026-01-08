import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OnInit } from '@angular/core'

@Component({
    selector: 'app-productgrid',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './productGrid.component.html',
    styleUrl: './productGrid.component.scss',
})
export class ProductGridComponent implements OnInit {
    ngOnInit() {
        console.log('ProductGridComponent: ngOnInit')
    }
}
