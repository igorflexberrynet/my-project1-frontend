import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import OfflineModelMixin from 'ember-flexberry-data/mixins/offline-model';

import {
  defineProjections,
  ValidationRules,
  Model as НазначениеТОДляМоделиMixin
} from '../mixins/regenerated/models/purpose-of-the-maintenance-model';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(OfflineModelMixin, НазначениеТОДляМоделиMixin, Validations, {
});

defineProjections(Model);

export default Model;
