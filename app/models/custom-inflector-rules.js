import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('organization', 'Organizations');
inflector.irregular('periodicity', 'Periodicitys');
inflector.irregular('maintenance', 'Maintenances');
inflector.irregular('operation', 'Operations');
inflector.irregular('employee', 'Employees');
inflector.irregular('contract', 'Contracts');
inflector.irregular('location', 'Locations');
inflector.irregular('hardware', 'Hardwares');
inflector.irregular('program', 'Programs');
inflector.irregular('status', 'Statuss');
inflector.irregular('model', 'Models');
inflector.irregular('type', 'Types');
inflector.irregular('plan', 'Plans');

export default {};
