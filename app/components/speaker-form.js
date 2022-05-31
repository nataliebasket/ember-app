import Component from '@ember/component';
import { inject as service } from '@ember/service';


export default Component.extend({
  store: service(),
  currentUser: service(),

  actions: {
    async saveSpeaker(e) {
      e.preventDefault();

      // this.onsubmit(this.get('speaker'));

      this.onsubmit({
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        patronymic: this.get('patronymic'),
        user: this.get('currentUser.user')
      });
    },

    cancelForm() {
      this.onsubmit();
    },


  },

  didReceiveAttrs() {
    this._super(...arguments);
    // this.set('firstName', this.get('author.firstName'));
    // this.set('lastName', this.get('author.lastName'));

    this.setProperties({
      idSpeaker: this.get('speaker.id') ? this.get('speaker.id') : undefined,
      firstName: this.get('speaker.firstName'),
      lastName: this.get('speaker.lastName'),
      patronymic: this.get('speaker.patronymic')
    });
  },
});
