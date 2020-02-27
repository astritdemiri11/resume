import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(module => module.HomeModule) },
  { path: 'resume', loadChildren: () => import('./resume/resume.module').then(module => module.ResumeModule) },
  { path: 'portfolio', loadChildren: () => import('./portfolio/portfolio.module').then(module => module.PortfolioModule) },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(module => module.BlogModule) },
  { path: 'contactus', loadChildren: () => import('./contact-us/contact-us.module').then(module => module.ContactUsModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', loadChildren: () => import('./page-not-found/page-not-found.module').then(module => module.PageNotFoundModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
