import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { ProfileGuard } from './guards/profile.guard';

const routes: Routes = [
  { path: '', redirectTo:'auth', pathMatch:'full' },
  
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) ,
    canActivate: [LoginGuard]
  },

  { path: 'setting', loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule) ,
    canActivate:[ProfileGuard]
  },

  { path: 'product', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)  ,
    canActivate:[ProfileGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
