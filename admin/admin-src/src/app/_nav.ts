interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  module?: string;
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

let Data = [
  {
    name: 'Dashboard',
    url: '/UQZYyKXjbJhGPFSqSzkY/pages/dashboard',
    icon: 'icon-speedometer'
  },
  {
    module: 'Log History',
    name: 'Log History',
    url: '/UQZYyKXjbJhGPFSqSzkY/pages/loghistory',
    icon: 'fa fa-file-text'
  },
  {
    module: 'Pairs',
    name: 'Pairs',
    url: '/UQZYyKXjbJhGPFSqSzkY/pages/pairs',
    icon: 'fa fa-exchange'
  },
  {
    module: 'Manage CMS',
    name: 'CMS',
    url: '/UQZYyKXjbJhGPFSqSzkY/pages/cms',
    icon: 'fa fa-file-text'
  },
  {
    module: 'Manage FAQ',
    name: 'FAQ',
    url: '/UQZYyKXjbJhGPFSqSzkY/pages/faq',
    icon: 'fa fa-question-circle'
  },  
  {
    module: 'Bridge History',
    name: 'Bridge History',
    url: '/UQZYyKXjbJhGPFSqSzkY/pages/bridge-list',
    icon: 'fa fa-history'
  },
  {
    module: 'Stake History',
    name: 'Stake History',
    url: '/UQZYyKXjbJhGPFSqSzkY/pages/stake-list',
    icon: 'fa fa-history'
  },
   {
    module:'Manage Site Settings',
    name: 'Site Settings',
    url: '/UQZYyKXjbJhGPFSqSzkY/pages/sitesettings',
    icon: 'icon-settings'
  },
  {
    module: 'Manage IP',
    name: 'Block IP',
    url: '/UQZYyKXjbJhGPFSqSzkY/pages/blockip',
    icon: 'fa fa-ban'
  }
];

export const navItems: NavData[] = Data;
