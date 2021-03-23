import { MouseEvent, ReactNode } from 'react';

type TabsVariant = 'scrollable' | 'fullWidth' | 'default';
type TabsOrientation = 'horizontal' | 'vertical';

interface TabProps {
  label?: string;
  icon?: ReactNode;
  onlyAdmin?: boolean;
  value?: number;
  onChange?: (event: MouseEvent, newValue: number) => void;
  index?: number;
  tabWidth?: number;
  tabHeight?: number;
  variant?: TabsVariant;
  orientation?: TabsOrientation;
}

interface TabButtonProps {
  width: string;
  height: string;
  isActive: boolean;
  variant: TabsVariant;
}

interface TabLabelProps {
  isActive: boolean;
}