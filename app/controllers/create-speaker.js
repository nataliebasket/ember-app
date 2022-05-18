import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';
// import { set } from '@ember/object';

export default Controller.extend({

  init() {
    this._super(...arguments);
    this.set('speaker', EmberObject.create());
    this.get('speaker').set('lastName', '');
    this.get('speaker').set('firstName', '');
    this.get('speaker').set('patronymic', '');
  },

  dataService: service('data'),

  actions: {
    async saveSpeaker(speaker) {
      // e.preventDefault();

      // await this.get("dataService").createSpeaker({
      //   lastName: speaker.lastName,
      //   firstName: speaker.firstName,
      //   patronymic: speaker.patronymic,
      //     // lastName: this.get('lastName'),
      //     // firstName: this.get('firstName'),
      //     // patronymic: this.get('patronymic'),
      //   });

      // let newSpeaker = this.get('store').createRecord('speaker', {
      //   lastName: speaker.lastName,
      //   firstName: speaker.firstName,
      //   patronymic: speaker.patronymic,
      // });

      let newSpeaker = this.get('store').createRecord('speaker', speaker);
      // newSpeaker.serialize();
      await newSpeaker.save();

      this.transitionToRoute('speakers');
    },

    cancelSaveSpeaker () {
      this.transitionToRoute('speakers');
    }
  }
});
