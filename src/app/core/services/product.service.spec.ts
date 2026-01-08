import { TestBed } from '@angular/core/testing'
import { ProductService } from './product.service'
import { expect } from '@jest/globals'
import { provideHttpClient } from '@angular/common/http'

describe('ProductService', () => {
    console.log('SiteStatusService test - INIT')
    let mockSiteProductService: ProductService

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProductService, provideHttpClient()],
        })
        mockSiteProductService = TestBed.inject(ProductService)
    })

    it('should be created', () => {
        console.log('ProductService - should be created')
        expect(mockSiteProductService).toBeTruthy()
    })
})
