import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'media',
        children: [
          {
            path: '',
            loadChildren: () => import('../media/media.module').then(m => m.MediaPageModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
          }
        ]
      },
      {
        path: 'apps',
        children: [
          {
            path: '',
            loadChildren: () => import('../apps/apps.module').then(m => m.AppsPageModule)
          },
          {
            path: 'app-details/:appId',
            loadChildren: () => import('../app-details/app-details.module').then(m => m.AppDetailsPageModule)
          }
        ]
      },
      {
        path: 'games',
        children: [
          {
            path: '',
            loadChildren: () => import('../games/games.module').then(m => m.GamesPageModule)
          },
          {
            path: 'game-details/:gameId',
            loadChildren: () => import('../game-details/game-details.module').then(m => m.GameDetailsPageModule)
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/schedule',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

