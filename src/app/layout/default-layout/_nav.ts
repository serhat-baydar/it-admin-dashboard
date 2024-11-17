import { INavData as CoreUINavData } from '@coreui/angular';

export interface INavData extends CoreUINavData {
  customIcon?: string;
}

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Migros Platform ve Bulut Yönetim Sistemi'
  },
  {
    name: 'Alpha Teams',
    url: '/alphateams',
    iconComponent: { name: 'cil-people' },
    children: [
      {
        name: 'Ekibimiz',
        url: '/alpha/ekibimiz',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Vizyon',
        url: '/alpha/vizyon',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Misyon',
        url: '/alpha/misyon',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Değerlerimiz',
        url: '/alpha/degerlerimiz',
        icon: 'nav-icon-bullet'
      },
    ]

  },
  {
    name: 'Platform Sistemleri',
    url: '/platform-sistemleri',
    iconComponent: { name: 'cil3d' },
    children: [
      {
        name: 'Tanzu Platform',
        url: '/base/platform-servisleri/tanzuplatform',
        iconComponent: { name: 'cil-folder' },
        children: [
          {
            name: 'Envanter',
            url: '/base/platform-servisleri/tanzuplatform/envanter',
            iconComponent: { name: 'cil-file' },
          },
          {
            name: 'Güvenlik',
            url: '/base/platform-servisleri/tanzuplatform/guvenlik',
            iconComponent: { name: 'cil-lock-locked' },
          },
          {
            name: 'Maliyet',
            url: '/base/platform-servisleri/tanzuplatform/maliyet',
            iconComponent: { name: 'cil-dollar' },
          },
          {
            name: 'Kapasite',
            url: '/base/platform-servisleri/tanzuplatform/kapasite',
            iconComponent: { name: 'cil-storage' },
          },
          {
            name: 'Alarmlar',
            url: '/base/platform-servisleri/tanzuplatform/alarmlar',
            iconComponent: { name: 'cil-bell' },
          },
        ]
      },
      {
        name: 'Openshift Platform',
        url: '/base/platform-servisleri/openshift',
        iconComponent: { name: 'cil-folder' },
        children: [
          {
            name: 'Envanter',
            url: '/base/platform-servisleri/openshift/envanter',
            iconComponent: { name: 'cil-file' },
          },
          {
            name: 'Güvenlik',
            url: '/base/platform-servisleri/openshift/guvenlik',
            iconComponent: { name: 'cil-lock-locked' },
          },
          {
            name: 'Maliyet',
            url: '/base/platform-servisleri/openshift/maliyet',
            iconComponent: { name: 'cil-dollar' },
          },
          {
            name: 'Kapasite',
            url: '/base/platform-servisleri/openshift/kapasite',
            iconComponent: { name: 'cil-storage' },
          },
          {
            name: 'Alarmlar',
            url: '/base/platform-servisleri/openshift/alarmlar',
            iconComponent: { name: 'cil-bell' },
          },
        ]
      }
    ]
  },
  {
    name: 'Bulut Sistemleri',
    url: '/bulut-sistemleri',
    iconComponent: { name: 'cil-cloud' },
    children: [
      {
        name: 'Microsoft Azure',
        url: '/base/bulut-sistemleri/azure',
        iconComponent: { name: 'cil-folder' },
        children: [
          {
            name: 'Envanter',
            url: '/base/bulut-sistemleri/azure/envanter',
            iconComponent: { name: 'cil-file' },
          },
          {
            name: 'Güvenlik',
            url: '/base/bulut-sistemleri/azure/guvenlik',
            iconComponent: { name: 'cil-lock-locked' },
          },
          {
            name: 'Maliyet',
            url: '/base/bulut-sistemleri/azure/maliyet',
            iconComponent: { name: 'cil-dollar' },
          },
          {
            name: 'Kapasite',
            url: '/base/bulut-sistemleri/azure/kapasite',
            iconComponent: { name: 'cil-storage' },
          },
          {
            name: 'Alarmlar',
            url: '/base/bulut-sistemleri/azure/alarmlar',
            iconComponent: { name: 'cil-bell' },
          },
        ]
      },
      {
        name: 'Google Cloud GCP',
        url: '/base/bulut-sistemleri/gcp',
        iconComponent: { name: 'cil-folder' },
        children: [
          {
            name: 'Envanter',
            url: '/base/bulut-sistemleri/gcp/envanter',
            iconComponent: { name: 'cil-file' },
          },
          {
            name: 'Güvenlik',
            url: '/base/bulut-sistemleri/gcp/guvenlik',
            iconComponent: { name: 'cil-lock-locked' },
          },
          {
            name: 'Maliyet',
            url: '/base/bulut-sistemleri/gcp/maliyet',
            iconComponent: { name: 'cil-dollar' },
          },
          {
            name: 'Kapasite',
            url: '/base/bulut-sistemleri/gcp/kapasite',
            iconComponent: { name: 'cil-storage' },
          },
          {
            name: 'Alarmlar',
            url: '/base/bulut-sistemleri/gcp/alarmlar',
            iconComponent: { name: 'cil-bell' },
          },
        ]
      }
    ]
  },
  {
    name: 'Duyurular',
    url: '/duyurular',
    iconComponent: { name: 'cil-alarm' },
    badge: {
      color: 'info',
      text: 'NEWS'
    }
  },
  {
    title: true,
    name: 'İştİrakler'
  },
  {
    name: 'Mimeda',
    url: '/mimeda',
    iconComponent: { name: 'cil-people' },
    children: [
      {
        name: 'Envanter',
        url: '/mimeda/envanter',
        iconComponent: { name: 'cil-file' },
      },
      {
        name: 'Maliyet',
        url: '/mimeda/maliyet',
        iconComponent: { name: 'cil-dollar' },
      },
    ]
  },
  {
    name: 'Migen',
    url: '/migen',
    iconComponent: { name: 'cil-puzzle' },
    children: [
          {
            name: 'Envanter',
            url: '/migen/envanter',
            iconComponent: { name: 'cil-file' },
          },
          {
            name: 'Maliyet',
            url: '/migen/maliyet',
            iconComponent: { name: 'cil-dollar' },
          },
        ]
  },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Base',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Accordion',
        url: '/base/accordion',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Breadcrumbs',
        url: '/base/breadcrumbs',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Carousel',
        url: '/base/carousel',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Collapse',
        url: '/base/collapse',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'List Group',
        url: '/base/list-group',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Navs & Tabs',
        url: '/base/navs',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Pagination',
        url: '/base/pagination',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Placeholder',
        url: '/base/placeholder',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Popovers',
        url: '/base/popovers',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Progress',
        url: '/base/progress',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Spinners',
        url: '/base/spinners',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Tables',
        url: '/base/tables',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Tabs',
        url: '/base/tabs',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Maliyet',
        url: '/base/maliyet',
        iconComponent: { name: 'cil-dollar' },
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Button groups',
        url: '/buttons/button-groups',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Forms',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Form Control',
        url: '/forms/form-control',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Select',
        url: '/forms/select',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Checks & Radios',
        url: '/forms/checks-radios',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Range',
        url: '/forms/range',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Input Group',
        url: '/forms/input-group',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Floating Labels',
        url: '/forms/floating-labels',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Layout',
        url: '/forms/layout',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Validation',
        url: '/forms/validation',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Charts',
    iconComponent: { name: 'cil-chart-pie' },
    url: '/charts'
  },
  {
    name: 'Icons',
    iconComponent: { name: 'cil-star' },
    url: '/icons',
    children: [
      {
        name: 'CoreUI Free',
        url: '/icons/coreui-icons',
        icon: 'nav-icon-bullet',
        badge: {
          color: 'success',
          text: 'FREE'
        }
      },
      {
        name: 'CoreUI Flags',
        url: '/icons/flags',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'CoreUI Brands',
        url: '/icons/brands',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Modal',
        url: '/notifications/modal',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Toast',
        url: '/notifications/toasts',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    iconComponent: { name: 'cil-calculator' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    title: true,
    name: 'Links',
    class: 'mt-auto'
  },
  {
    name: 'Docs',
    url: 'https://coreui.io/angular/docs/5.x/',
    iconComponent: { name: 'cil-description' },
    attributes: { target: '_blank' }
  }
];