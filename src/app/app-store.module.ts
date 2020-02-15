
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';

@NgModule({
    imports: [
      StoreModule.forRoot({
        router: routerReducer
      }),
      EffectsModule.forRoot([]),
      EntityDataModule.forRoot(entityConfig),
      StoreRouterConnectingModule.forRoot(),
      environment.production ? [] : StoreDevtoolsModule.instrument()
    ]
  })
  export class AppStoreModule {}
  