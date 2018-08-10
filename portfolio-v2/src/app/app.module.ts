import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SlideshowModule } from 'ng-simple-slideshow';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './sections/about/about.component';
import { WebDesignComponent } from './sections/web-design/web-design.component';
import { PhotographyComponent } from './sections/photography/photography.component';
import { WritingComponent } from './sections/writing/writing.component';
import { ContactComponent } from './sections/contact/contact.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'web-design', component: WebDesignComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'writing', component: WritingComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    WebDesignComponent,
    PhotographyComponent,
    WritingComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    SlideshowModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
