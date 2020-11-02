import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  navLinks = [
    {location: '/products', label: 'products', icon: 'computer'},
    { location: '/categories', label: 'categories', icon: 'category' },
    { location: '/manufacturers', label: 'manufacturers', icon: 'portrait' },
    { location: '/brands', label: 'brands', icon: 'portrait' },
    { location: '/suppliers', label: 'suppliers', icon: 'portrait' }
  ];
}
