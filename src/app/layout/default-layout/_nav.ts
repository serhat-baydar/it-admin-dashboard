import { input } from '@angular/core';
import { INavData as CoreUINavData } from '@coreui/angular';
export interface INavData extends CoreUINavData {
  customIcon?: string;
}

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Platform ve Bulut Sistemleri'
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
    name: 'Platform Servisleri',
    url: '/platform',
    iconComponent: { name: 'cil3d' },
    children: [
      {
        name: 'Tanzu Platform',
        url: '/platform/tanzu',
        iconComponent: { name: 'cil-folder' },
        children: [
          {
            name: 'Envanter',
            url: '/platform/tanzu/envanter',
            iconComponent: { name: 'cil-file' },
          },
          {
            name: 'Güvenlik',
            url: '/platform/tanzu/guvenlik',
            iconComponent: { name: 'cil-lock-locked' },
          },
          {
            name: 'Maliyet',
            url: '/platform/tanzu/maliyet',
            iconComponent: { name: 'cil-dollar' },
          },
          {
            name: 'Kapasite',
            url: '/platform/tanzu/kapasite',
            iconComponent: { name: 'cil-storage' },
          },
          {
            name: 'Alarmlar',
            url: '/platform/tanzu/alarmlar',
            iconComponent: { name: 'cil-bell' },
          }
        ]
      },
      {
        name: 'Openshift Platform',
        url: '/platform/openshift',
        iconComponent: { name: 'cil-folder' },
        children: [
          {
            name: 'Envanter',
            url: '/platform/openshift/envanter',
            iconComponent: { name: 'cil-file' },
          },
          {
            name: 'Güvenlik',
            url: '/platform/openshift/guvenlik',
            iconComponent: { name: 'cil-lock-locked' },
          },
          {
            name: 'Maliyet',
            url: '/platform/openshift/maliyet',
            iconComponent: { name: 'cil-dollar' },
          },
          {
            name: 'Kapasite',
            url: '/platform/openshift/kapasite',
            iconComponent: { name: 'cil-storage' },
          },
          {
            name: 'Alarmlar',
            url: '/platform/openshift/alarmlar',
            iconComponent: { name: 'cil-bell' },
          }
        ]
      }
    ]
  },
  {
    name: 'Bulut Servisleri',
    url: '/bulut',
    iconComponent: { name: 'cil-cloud' },
    children: [
      {
        name: 'Microsoft Azure',
        url: '/bulut/azure',
        iconComponent: { name: 'cil-folder' },
        children: [
          {
            name: 'Envanter',
            url: '/bulut/azure/envanter',
            iconComponent: { name: 'cil-file' },
          },
          {
            name: 'Güvenlik',
            url: '/bulut/azure/guvenlik',
            iconComponent: { name: 'cil-lock-locked' },
          },
          {
            name: 'Maliyet',
            url: '/bulut/azure/maliyet',
            iconComponent: { name: 'cil-dollar' },
          },
          {
            name: 'Kapasite',
            url: '/bulut/azure/kapasite',
            iconComponent: { name: 'cil-storage' },
          },
          {
            name: 'Alarmlar',
            url: '/bulut/azure/alarmlar',
            iconComponent: { name: 'cil-bell' },
          }
        ]
      },
      {
        name: 'Google GCP Platform',
        url: '/bulut/gcp',
        iconComponent: { name: 'cil-folder' },
        children: [
          {
            name: 'Envanter',
            url: '/bulut/gcp/envanter',
            iconComponent: { name: 'cil-file' },
          },
          {
            name: 'Güvenlik',
            url: '/bulut/gcp/guvenlik',
            iconComponent: { name: 'cil-lock-locked' },
          },
          {
            name: 'Maliyet',
            url: '/bulut/gcp/maliyet',
            iconComponent: { name: 'cil-dollar' },
          },
          {
            name: 'Kapasite',
            url: '/bulut/gcp/kapasite',
            iconComponent: { name: 'cil-storage' },
          },
          {
            name: 'Alarmlar',
            url: '/bulut/gcp/alarmlar',
            iconComponent: { name: 'cil-bell' },
          }
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
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: 'pages',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: 'pages/login',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Register',
        url: 'pages/register',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Error 404',
        url: 'pages/404',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Error 500',
        url: 'pages/500',
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
    name: 'MS Learn',
    url: './Datadisplay',
    iconComponent: { name: 'cil-description' },
    attributes: { target: '_blank' }
  },
  {
    title: true,
    name: 'Data Display',
    class: 'mt-auto'
  },
  {
    name: 'Api',
    url: './Api',
    iconComponent: { name: 'cil-description' },
    attributes: { target: '_blank' }
  }
];