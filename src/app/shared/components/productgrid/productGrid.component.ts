import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProductService, Product } from '../../../core/services/product.service'

@Component({
    selector: 'app-productgrid',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './productGrid.component.html',
    styleUrls: ['./productGrid.component.scss'],
})
export class ProductGridComponent implements OnInit {
    products: Product[] = []

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.productService.getProducts().subscribe({
            next: products => {
                this.products = products
                console.log('Products loaded:', products)
            },
            error: err => {
                console.error('Error loading products', err)
            },
        })
    }
}
