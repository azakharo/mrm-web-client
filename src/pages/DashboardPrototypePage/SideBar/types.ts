import {ComponentType} from 'react';

export interface SideBarMenuItem {
  Icon: ComponentType;
  text: string;
  route: string;
}
