import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutPage } from './components/about-page/about-page';
import { Contact } from './components/contact/contact';
import { HeaderComponent } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Tracks } from './components/tracks/tracks';
 import { ComingSoonComponent } from './components/coming-soon/coming-soon';
import { Committee } from './components/committee/committee';
import { CallForPapers } from './components/call-for-papers/call-for-papers';
import { ImportantDates } from './components/important-dates/important-dates';



export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: AboutPage },
  { path: 'header',component:HeaderComponent},
  { path: 'contact', component: Contact },
  { path: 'footer',component:Footer},
  { path: 'Tracks',component:Tracks},
  { path: 'Committee', component:Committee},
  { path: 'call-for-papers',component:CallForPapers},
  { path: 'important-dates',component:ImportantDates},
   { path: 'coming-soon',component:ComingSoonComponent},
  { path: '**', redirectTo: '' },
];

