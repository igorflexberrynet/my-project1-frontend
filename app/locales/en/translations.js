import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import DataLineMyProject1MaintenanceOperationLForm from './forms/data-line-my-project1-maintenance-operation-l';
import DataLineMyProject1PeriodicityLForm from './forms/data-line-my-project1-periodicity-l';
import DataLineMyProject1ScheduledMaintenanceOperationLForm from './forms/data-line-my-project1-scheduled-maintenance-operation-l';
import DataLineMyProject1ДоговорLForm from './forms/data-line-my-project1-договор-l';
import DataLineMyProject1МодельОборудованияLForm from './forms/data-line-my-project1-модель-оборудования-l';
import DataLineMyProject1ОборудованиеLForm from './forms/data-line-my-project1-оборудование-l';
import DataLineMyProject1ОрганизацияLForm from './forms/data-line-my-project1-организация-l';
import DataLineMyProject1ПланТОLForm from './forms/data-line-my-project1-план-т-о-l';
import DataLineMyProject1ПрограммаТОLForm from './forms/data-line-my-project1-программа-т-о-l';
import DataLineMyProject1РасположениеLForm from './forms/data-line-my-project1-расположение-l';
import DataLineMyProject1СотрудникLForm from './forms/data-line-my-project1-сотрудник-l';
import DataLineMyProject1СтатусОборудованияLForm from './forms/data-line-my-project1-статус-оборудования-l';
import DataLineMyProject1ТипОборудованияLForm from './forms/data-line-my-project1-тип-оборудования-l';
import DataLineMyProject1ФактТОLForm from './forms/data-line-my-project1-факт-т-о-l';
import DataLineMyProject1PeriodicityEForm from './forms/data-line-my-project1-periodicity-e';
import DataLineMyProject1ДоговорEForm from './forms/data-line-my-project1-договор-e';
import DataLineMyProject1МодельОборудованияEForm from './forms/data-line-my-project1-модель-оборудования-e';
import DataLineMyProject1ОборудованиеEForm from './forms/data-line-my-project1-оборудование-e';
import DataLineMyProject1ОрганизацияEForm from './forms/data-line-my-project1-организация-e';
import DataLineMyProject1ПланТОEForm from './forms/data-line-my-project1-план-т-о-e';
import DataLineMyProject1ПрограммаТОEForm from './forms/data-line-my-project1-программа-т-о-e';
import DataLineMyProject1РасположениеEForm from './forms/data-line-my-project1-расположение-e';
import DataLineMyProject1СотрудникEForm from './forms/data-line-my-project1-сотрудник-e';
import DataLineMyProject1СтатусОборудованияEForm from './forms/data-line-my-project1-статус-оборудования-e';
import DataLineMyProject1ТипОборудованияEForm from './forms/data-line-my-project1-тип-оборудования-e';
import DataLineMyProject1ФактТОEForm from './forms/data-line-my-project1-факт-т-о-e';
import ContractModel from './models/contract';
import DocumentToTheModelModel from './models/document-to-the-model';
import EmployeeModel from './models/employee';
import EquipmentModelModel from './models/equipment-model';
import EquipmentStatusModel from './models/equipment-status';
import EquipmentTypeModel from './models/equipment-type';
import FactOfTheMaintenanceModel from './models/fact-of-the-maintenance';
import FactOperationOfTheMaintenanceModel from './models/fact-operation-of-the-maintenance';
import HardwareModel from './models/hardware';
import LocationModel from './models/location';
import MaintenanceOperationModel from './models/maintenance-operation';
import MaintenancePlanModel from './models/maintenance-plan';
import MaintenanceProgramModel from './models/maintenance-program';
import OrganizationModel from './models/organization';
import PeriodicityModel from './models/periodicity';
import PurposeOfTheMaintenanceModelModel from './models/purpose-of-the-maintenance-model';
import ScheduledMaintenanceOperationModel from './models/scheduled-maintenance-operation';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'contract': ContractModel,
    'document-to-the-model': DocumentToTheModelModel,
    'employee': EmployeeModel,
    'equipment-model': EquipmentModelModel,
    'equipment-status': EquipmentStatusModel,
    'equipment-type': EquipmentTypeModel,
    'fact-of-the-maintenance': FactOfTheMaintenanceModel,
    'fact-operation-of-the-maintenance': FactOperationOfTheMaintenanceModel,
    'hardware': HardwareModel,
    'location': LocationModel,
    'maintenance-operation': MaintenanceOperationModel,
    'maintenance-plan': MaintenancePlanModel,
    'maintenance-program': MaintenanceProgramModel,
    'organization': OrganizationModel,
    'periodicity': PeriodicityModel,
    'purpose-of-the-maintenance-model': PurposeOfTheMaintenanceModelModel,
    'scheduled-maintenance-operation': ScheduledMaintenanceOperationModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        оборудование: {
          caption: 'оборудование',
          title: 'оборудование',
          'data-line-my-project1-оборудование-l': {
            caption: 'data-line-my-project1-оборудование-l',
            title: 'data-line-my-project1-оборудование-l'
          },
          'data-line-my-project1-договор-l': {
            caption: 'data-line-my-project1-договор-l',
            title: 'data-line-my-project1-договор-l'
          }
        },
        'журнал-т-о': {
          caption: 'журнал-т-о',
          title: 'журнал-т-о',
          'data-line-my-project1-программа-т-о-l': {
            caption: 'data-line-my-project1-программа-т-о-l',
            title: 'data-line-my-project1-программа-т-о-l'
          },
          'data-line-my-project1-план-т-о-l': {
            caption: 'data-line-my-project1-план-т-о-l',
            title: 'data-line-my-project1-план-т-о-l'
          },
          'data-line-my-project1-факт-т-о-l': {
            caption: 'data-line-my-project1-факт-т-о-l',
            title: 'data-line-my-project1-факт-т-о-l'
          }
        },
        справочники: {
          caption: 'справочники',
          title: 'справочники',
          'data-line-my-project1-periodicity-l': {
            caption: 'data-line-my-project1-periodicity-l',
            title: 'data-line-my-project1-periodicity-l'
          },
          'data-line-my-project1-модель-оборудования-l': {
            caption: 'data-line-my-project1-модель-оборудования-l',
            title: 'data-line-my-project1-модель-оборудования-l'
          },
          'data-line-my-project1-организация-l': {
            caption: 'data-line-my-project1-организация-l',
            title: 'data-line-my-project1-организация-l'
          },
          'data-line-my-project1-расположение-l': {
            caption: 'data-line-my-project1-расположение-l',
            title: 'data-line-my-project1-расположение-l'
          },
          'data-line-my-project1-сотрудник-l': {
            caption: 'data-line-my-project1-сотрудник-l',
            title: 'data-line-my-project1-сотрудник-l'
          },
          'data-line-my-project1-статус-оборудования-l': {
            caption: 'data-line-my-project1-статус-оборудования-l',
            title: 'data-line-my-project1-статус-оборудования-l'
          },
          'data-line-my-project1-тип-оборудования-l': {
            caption: 'data-line-my-project1-тип-оборудования-l',
            title: 'data-line-my-project1-тип-оборудования-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'data-line-my-project1-maintenance-operation-l': DataLineMyProject1MaintenanceOperationLForm,
    'data-line-my-project1-periodicity-l': DataLineMyProject1PeriodicityLForm,
    'data-line-my-project1-scheduled-maintenance-operation-l': DataLineMyProject1ScheduledMaintenanceOperationLForm,
    'data-line-my-project1-договор-l': DataLineMyProject1ДоговорLForm,
    'data-line-my-project1-модель-оборудования-l': DataLineMyProject1МодельОборудованияLForm,
    'data-line-my-project1-оборудование-l': DataLineMyProject1ОборудованиеLForm,
    'data-line-my-project1-организация-l': DataLineMyProject1ОрганизацияLForm,
    'data-line-my-project1-план-т-о-l': DataLineMyProject1ПланТОLForm,
    'data-line-my-project1-программа-т-о-l': DataLineMyProject1ПрограммаТОLForm,
    'data-line-my-project1-расположение-l': DataLineMyProject1РасположениеLForm,
    'data-line-my-project1-сотрудник-l': DataLineMyProject1СотрудникLForm,
    'data-line-my-project1-статус-оборудования-l': DataLineMyProject1СтатусОборудованияLForm,
    'data-line-my-project1-тип-оборудования-l': DataLineMyProject1ТипОборудованияLForm,
    'data-line-my-project1-факт-т-о-l': DataLineMyProject1ФактТОLForm,
    'data-line-my-project1-periodicity-e': DataLineMyProject1PeriodicityEForm,
    'data-line-my-project1-договор-e': DataLineMyProject1ДоговорEForm,
    'data-line-my-project1-модель-оборудования-e': DataLineMyProject1МодельОборудованияEForm,
    'data-line-my-project1-оборудование-e': DataLineMyProject1ОборудованиеEForm,
    'data-line-my-project1-организация-e': DataLineMyProject1ОрганизацияEForm,
    'data-line-my-project1-план-т-о-e': DataLineMyProject1ПланТОEForm,
    'data-line-my-project1-программа-т-о-e': DataLineMyProject1ПрограммаТОEForm,
    'data-line-my-project1-расположение-e': DataLineMyProject1РасположениеEForm,
    'data-line-my-project1-сотрудник-e': DataLineMyProject1СотрудникEForm,
    'data-line-my-project1-статус-оборудования-e': DataLineMyProject1СтатусОборудованияEForm,
    'data-line-my-project1-тип-оборудования-e': DataLineMyProject1ТипОборудованияEForm,
    'data-line-my-project1-факт-т-о-e': DataLineMyProject1ФактТОEForm
  },

});

export default translations;
