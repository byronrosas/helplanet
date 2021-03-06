import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationListPageRoutingModule } from './notification-list-routing.module';

import { NotificationListPage } from './notification-list.page';
import { ItemNotificationComponent } from '../components/item-notification/item-notification.component';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationListPageRoutingModule
  ],
  declarations: [NotificationListPage, ItemNotificationComponent, HeaderComponent]
})
export class NotificationListPageModule {}
