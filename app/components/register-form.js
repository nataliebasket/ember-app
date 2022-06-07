import Component from '@ember/component';
import { get, set, computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  email: [
    validator('ds-error'),
    validator('presence', true),
    validator('format', { type: 'email' })
  ],
  password: [
    validator('ds-error'),
    // validator('presence', {
    //   presence: true,
    //   message: computed('model.{password,i18n.locale}', function () {
    //     return '{description} ' + get(this, 'model.i18n').t('errors.blank');
    //   }),
    // }),
    validator('length', {
      min: 4,
      max: 8
    })
  ]
});

export default Component.extend(Validations, {
  i18n: service(),
  isFormValid: computed.alias('validations.isValid'),

  actions: {
    async saveUser(e) {
      e.preventDefault();
      set(this, 'isInvalid', !this.get('validations.isValid'));
      if (this.get('isFormValid')) {
        this.get('onSubmit')({
          email: this.email,
          password: this.password
        });
      }
    },
  },

  didReceiveAttrs() {
    this.setProperties({
      email: this.get('user.email'),
      password: this.get('user.password'),
    });
  }

});
