import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ByCountryComponent } from './countries/pages/by-country/by-country.component';
import { ShowCountryComponent } from './countries/pages/show-country/show-country.component';
import { ByRegionComponent } from './countries/pages/by-region/by-region.component';
import { ByCapitalComponent } from './countries/pages/by-capital/by-capital.component';

const routes: Route[] = [
  {
    path: '',
    component: ByCountryComponent
  },
  {
    path: 'capital',
    component: ByCapitalComponent
  },
  {
    path: 'region',
    component: ByRegionComponent
  },
  {
    path: 'country/:code',
    component: ShowCountryComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
