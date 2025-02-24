import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'facilities',
    loadChildren: () => import('./facilities/facilities.module').then( m => m.FacilitiesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'deli',
    loadChildren: () => import('./deli/deli.module').then( m => m.DeliPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'customer-club',
    loadChildren: () => import('./customer-club/customer-club.module').then( m => m.CustomerClubPageModule)
  },
  {
    path: 'comment',
    loadChildren: () => import('./comment/comment.module').then( m => m.CommentPageModule)
  },
  {
    path: 'mainfooter',
    loadChildren: () => import('./mainfooter/mainfooter.module').then( m => m.MainfooterCModule)
  },
  {
    path: 'deli-gallery',
    loadChildren: () => import('./deli/deli-gallery/deli-gallery.module').then( m => m.DeliGalleryPageModule)
  },
   {
    path: 'vrfyreservation',
    loadChildren: () => import('./vrfyreservation/vrfyreservation.module').then( m => m.VrfyreservationPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'reserve',
    loadChildren: () => import('./reserve/reserve.module').then( m => m.ReservePageModule)
  },
  {
    path: 'suit101',
    loadChildren: () => import('./suit101/suit101.module').then( m => m.Suit101PageModule)
  },
  {
    path: 'suit102',
    loadChildren: () => import('./suit102/suit102.module').then( m => m.Suit102PageModule)
  },
  {
    path: 'suit103',
    loadChildren: () => import('./suit103/suit103.module').then( m => m.Suit103PageModule)
  },
  {
    path: 'suit104',
    loadChildren: () => import('./suit104/suit104.module').then( m => m.Suit104PageModule)
  },
  {
    path: 'suit105',
    loadChildren: () => import('./suit105/suit105.module').then( m => m.Suit105PageModule)
  },
  {
    path: 'suit106',
    loadChildren: () => import('./suit106/suit106.module').then( m => m.Suit106PageModule)
  },
  {
    path: 'suit107',
    loadChildren: () => import('./suit107/suit107.module').then( m => m.Suit107PageModule)
  },
  {
    path: 'suit108',
    loadChildren: () => import('./suit108/suit108.module').then( m => m.Suit108PageModule)
  },
  {
    path: 'suit109',
    loadChildren: () => import('./suit109/suit109.module').then( m => m.Suit109PageModule)
  },
  {
    path: 'suit110',
    loadChildren: () => import('./suit110/suit110.module').then( m => m.Suit110PageModule)
  },
  {
    path: 'suit111',
    loadChildren: () => import('./suit111/suit111.module').then( m => m.Suit111PageModule)
  },
  {
    path: 'suit112',
    loadChildren: () => import('./suit112/suit112.module').then( m => m.Suit112PageModule)
  },
  {
    path: 'suit114',
    loadChildren: () => import('./suit114/suit114.module').then( m => m.Suit114PageModule)
  },
  {
    path: 'suit115',
    loadChildren: () => import('./suit115/suit115.module').then( m => m.Suit115PageModule)
  },
  {
    path: 'suit116',
    loadChildren: () => import('./suit116/suit116.module').then( m => m.Suit116PageModule)
  },
  {
    path: 'suit118',
    loadChildren: () => import('./suit118/suit118.module').then( m => m.Suit118PageModule)
  },
  {
    path: 'suit119',
    loadChildren: () => import('./suit119/suit119.module').then( m => m.Suit119PageModule)
  },
  {
    path: 'suit120',
    loadChildren: () => import('./suit120/suit120.module').then( m => m.Suit120PageModule)
  },
  {
    path: 'suit123',
    loadChildren: () => import('./suit123/suit123.module').then( m => m.Suit123PageModule)
  },
  {
    path: 'suit124',
    loadChildren: () => import('./suit124/suit124.module').then( m => m.Suit124PageModule)
  },
  {
    path: 'suit127',
    loadChildren: () => import('./suit127/suit127.module').then( m => m.Suit127PageModule)
  },
  {
    path: 'suit128',
    loadChildren: () => import('./suit128/suit128.module').then( m => m.Suit128PageModule)
  },
  {
    path: 'suit130',
    loadChildren: () => import('./suit130/suit130.module').then( m => m.Suit130PageModule)
  },
  {
    path: 'suit131',
    loadChildren: () => import('./suit131/suit131.module').then( m => m.Suit131PageModule)
  },
  {
    path: 'suit132',
    loadChildren: () => import('./suit132/suit132.module').then( m => m.Suit132PageModule)
  },
  {
    path: 'suit134',
    loadChildren: () => import('./suit134/suit134.module').then( m => m.Suit134PageModule)
  },
  {
    path: 'suit113',
    loadChildren: () => import('./suit113/suit113.module').then( m => m.Suit113PageModule)
  },
  {
    path: 'suit117',
    loadChildren: () => import('./suit117/suit117.module').then( m => m.Suit117PageModule)
  },
  {
    path: 'suit129',
    loadChildren: () => import('./suit129/suit129.module').then( m => m.Suit129PageModule)
  },
  {
    path: 'suit133',
    loadChildren: () => import('./suit133/suit133.module').then( m => m.Suit133PageModule)
  },
  {
    path: 'suit122',
    loadChildren: () => import('./suit122/suit122.module').then( m => m.Suit122PageModule)
  },
  {
    path: 'suit121',
    loadChildren: () => import('./suit121/suit121.module').then( m => m.Suit121PageModule)
  },
  {
    path: 'suit125',
    loadChildren: () => import('./suit125/suit125.module').then( m => m.Suit125PageModule)
  },
  {
    path: 'suit126',
    loadChildren: () => import('./suit126/suit126.module').then( m => m.Suit126PageModule)
  },
  {
    path: 'karvansara204',
    loadChildren: () => import('./karvansara204/karvansara204.module').then( m => m.karvansara204Module)
  },
  {
    path: 'karvansara205',
    loadChildren: () => import('./karvansara205/karvansara205.module').then( m => m.karvansara205PageModule)
  },
  {
    path: 'karvansara206',
    loadChildren: () => import('./karvansara206/karvansara206.module').then( m => m.karvansara206PageModule)
  },
  {
    path: 'karvansara207',
    loadChildren: () => import('./karvansara207/karvansara207.module').then( m => m.karvansara207PageModule)
  },
  {
    path: 'karvansara209',
    loadChildren: () => import('./karvansara209/karvansara209.module').then( m => m.karvansara209PageModule)
  },
  {
    path: 'karvansara212',
    loadChildren: () => import('./karvansara212/karvansara212.module').then( m => m.karvansara212PageModule)
  },
  {
    path: 'karvansara214',
    loadChildren: () => import('./karvansara214/karvansara214.module').then( m => m.karvansara214PageModule)
  },
  {
    path: 'karvansara215',
    loadChildren: () => import('./karvansara215/karvansara215.module').then( m => m.karvansara215PageModule)
  },
  {
    path: 'karvansara216',
    loadChildren: () => import('./karvansara216/karvansara216.module').then( m => m.karvansara216PageModule)
  },
  {
    path: 'karvansara201',
    loadChildren: () => import('./karvansara201/karvansara201.module').then( m => m.karvansara201Module)
  },
  {
    path: 'karvansara210',
    loadChildren: () => import('./karvansara210/karvansara210.module').then( m => m.karvansara210PageModule)
  },
  {
    path: 'karvansara211',
    loadChildren: () => import('./karvansara211/karvansara211.module').then( m => m.karvansara211PageModule)
  },
  {
    path: 'karvansara217',
    loadChildren: () => import('./karvansara217/karvansara217.module').then( m => m.karvansara217PageModule)
  },
  {
    path: 'karvansara208',
    loadChildren: () => import('./karvansara208/karvansara208.module').then( m => m.karvansara208PageModule)
  },
  {
    path: 'karvansara213',
    loadChildren: () => import('./karvansara213/karvansara213.module').then( m => m.karvansara213PageModule)
  },
  {
    path: 'karvansara202',
    loadChildren: () => import('./karvansara202/karvansara202.module').then( m => m.karvansara201PageModule)
  },
  {
    path: 'karvansara203',
    loadChildren: () => import('./karvansara203/karvansara203.module').then( m => m.karvansara203PageModule)
  },
  {
    path: 'karvansara219',
    loadChildren: () => import('./karvansara219/karvansara219.module').then( m => m.karvansara219PageModule)
  },
  {
    path: 'karvansara220',
    loadChildren: () => import('./karvansara220/karvansara220.module').then( m => m.karvansara220PageModule)
  },
  {
    path: 'karvansara218',
    loadChildren: () => import('./karvansara218/karvansara218.module').then( m => m.karvansara218PageModule)
  },
  {
    path: 'suitsdoblex',
    loadChildren: () => import('./suitsdoblex/suitsdoblex.module').then( m => m.SuitsdoblexPageModule)
  },
  {
    path: 'royalsuits2beddouble',
    loadChildren: () => import('./royalsuits2beddouble/royalsuits2beddouble.module').then( m => m.Royalsuits2beddoublePageModule)
  },
  {
    path: 'royalsuits4bed',
    loadChildren: () => import('./royalsuits4bed/royalsuits4bed.module').then( m => m.Royalsuits4bedPageModule)
  },
  {
    path: 'royalroomvip',
    loadChildren: () => import('./royalroomvip/royalroomvip.module').then( m => m.RoyalroomvipPageModule)
  },
  {
    path: 'karvansaravip',
    loadChildren: () => import('./karvansaravip/karvansaravip.module').then( m => m.KarvansaravipPageModule)
  },
  {
    path: 'karvansaradouble',
    loadChildren: () => import('./karvansaradouble/karvansaradouble.module').then( m => m.KarvansaradoublePageModule)
  },
  {
    path: 'karvansaratowin',
    loadChildren: () => import('./karvansaratowin/karvansaratowin.module').then( m => m.KarvansaratowinPageModule)
  },
  {
    path: 'karvansara3bed',
    loadChildren: () => import('./karvansara3bed/karvansara3bed.module').then( m => m.Karvansara3bedPageModule)
  },











];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
