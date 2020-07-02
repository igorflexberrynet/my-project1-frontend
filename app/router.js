import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('data-line-my-project1-maintenance-operation-l');
  this.route('null',
  { path: 'null/:id' });
  this.route('null.new',
  { path: 'null/new' });
  this.route('data-line-my-project1-periodicity-l');
  this.route('data-line-my-project1-periodicity-e',
  { path: 'data-line-my-project1-periodicity-e/:id' });
  this.route('data-line-my-project1-periodicity-e.new',
  { path: 'data-line-my-project1-periodicity-e/new' });
  this.route('data-line-my-project1-scheduled-maintenance-operation-l');
  this.route('null',
  { path: 'null/:id' });
  this.route('null.new',
  { path: 'null/new' });
  this.route('data-line-my-project1-договор-l');
  this.route('data-line-my-project1-договор-e',
  { path: 'data-line-my-project1-договор-e/:id' });
  this.route('data-line-my-project1-договор-e.new',
  { path: 'data-line-my-project1-договор-e/new' });
  this.route('data-line-my-project1-модель-оборудования-l');
  this.route('data-line-my-project1-модель-оборудования-e',
  { path: 'data-line-my-project1-модель-оборудования-e/:id' });
  this.route('data-line-my-project1-модель-оборудования-e.new',
  { path: 'data-line-my-project1-модель-оборудования-e/new' });
  this.route('data-line-my-project1-оборудование-l');
  this.route('data-line-my-project1-оборудование-e',
  { path: 'data-line-my-project1-оборудование-e/:id' });
  this.route('data-line-my-project1-оборудование-e.new',
  { path: 'data-line-my-project1-оборудование-e/new' });
  this.route('data-line-my-project1-организация-l');
  this.route('data-line-my-project1-организация-e',
  { path: 'data-line-my-project1-организация-e/:id' });
  this.route('data-line-my-project1-организация-e.new',
  { path: 'data-line-my-project1-организация-e/new' });
  this.route('data-line-my-project1-план-т-о-l');
  this.route('data-line-my-project1-план-т-о-e',
  { path: 'data-line-my-project1-план-т-о-e/:id' });
  this.route('data-line-my-project1-план-т-о-e.new',
  { path: 'data-line-my-project1-план-т-о-e/new' });
  this.route('data-line-my-project1-программа-т-о-l');
  this.route('data-line-my-project1-программа-т-о-e',
  { path: 'data-line-my-project1-программа-т-о-e/:id' });
  this.route('data-line-my-project1-программа-т-о-e.new',
  { path: 'data-line-my-project1-программа-т-о-e/new' });
  this.route('data-line-my-project1-расположение-l');
  this.route('data-line-my-project1-расположение-e',
  { path: 'data-line-my-project1-расположение-e/:id' });
  this.route('data-line-my-project1-расположение-e.new',
  { path: 'data-line-my-project1-расположение-e/new' });
  this.route('data-line-my-project1-сотрудник-l');
  this.route('data-line-my-project1-сотрудник-e',
  { path: 'data-line-my-project1-сотрудник-e/:id' });
  this.route('data-line-my-project1-сотрудник-e.new',
  { path: 'data-line-my-project1-сотрудник-e/new' });
  this.route('data-line-my-project1-статус-оборудования-l');
  this.route('data-line-my-project1-статус-оборудования-e',
  { path: 'data-line-my-project1-статус-оборудования-e/:id' });
  this.route('data-line-my-project1-статус-оборудования-e.new',
  { path: 'data-line-my-project1-статус-оборудования-e/new' });
  this.route('data-line-my-project1-тип-оборудования-l');
  this.route('data-line-my-project1-тип-оборудования-e',
  { path: 'data-line-my-project1-тип-оборудования-e/:id' });
  this.route('data-line-my-project1-тип-оборудования-e.new',
  { path: 'data-line-my-project1-тип-оборудования-e/new' });
  this.route('data-line-my-project1-факт-т-о-l');
  this.route('data-line-my-project1-факт-т-о-e',
  { path: 'data-line-my-project1-факт-т-о-e/:id' });
  this.route('data-line-my-project1-факт-т-о-e.new',
  { path: 'data-line-my-project1-факт-т-о-e/new' });
});

export default Router;
