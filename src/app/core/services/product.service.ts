import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

export interface Product {
    id: string
    title: string
    price: string
    image_url: string[]
    description: string
    detailsPage: string
}

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private productsUrl: string = ''

    constructor(private http: HttpClient) {
        // this.http = http
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.productsUrl)
    }
    setProductsUrl(productUrl: string): void {
        this.productsUrl = productUrl
    }
}
