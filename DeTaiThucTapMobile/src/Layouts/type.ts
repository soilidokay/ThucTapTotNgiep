import {StyleViewComponent} from 'Types';

export interface LayoutCircleProps {
  children?: JSX.Element;
  style?: StyleViewComponent;
  Horizontal?: boolean;
}
export interface LayoutCircleState {
  weight: number;
}
export interface ContainerVewProps {
  style?: StyleViewComponent;
  Horizontal?: boolean;
  Flex: number;
}

export interface IContainerBox {
  style?: StyleViewComponent;
}
