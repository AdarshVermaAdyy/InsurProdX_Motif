import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonSizes, MotifContentSwitcherModule } from '@ey-xd/ng-motif';
import { ProductDetailsComponent } from 'src/app/components/product-details/product-details.component';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [MotifContentSwitcherModule,FormsModule,ProductDetailsComponent,CommonModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent implements OnInit {
  Options = [{ value: 'Product Details', selected: true }, { value: 'Product Info', selected: false }, { value: 'Coverage & Info', selected: false }];
 
  constructor(){}

  ngOnInit(): void {
    
  }

  isFormDisabled(value : string){
    
    return false;
  }

  
}
