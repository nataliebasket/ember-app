import Component from '@ember/component';

export default Component.extend({
  actions: {
    submitForm(e) {
      e.preventDefault();

      this.onsubmit(this.get('speaker'));
    },

    cancelForm() {
      this.onsubmit();
    },

    // submitForm(e) {
    //   e.preventDefault();

    //   this.onsubmit({
    //     id: this.get('idSpeaker'),
    //     firstName: this.get('firstName'),
    //     lastName: this.get('lastName'),
    //     patronymic: this.get('patronymic'),
    //   });
    // }
  },

  didReceiveAttrs() {
    this._super(...arguments);
    // this.set('firstName', this.get('author.firstName'));
    // this.set('lastName', this.get('author.lastName'));

    this.setProperties({
      idSpeaker: this.get('speaker.id') ? this.get('speaker.id') : undefined,
      firstName: this.get('speaker.firstName'),
      lastName: this.get('speaker.lastName'),
      patronymic: this.get('speaker.patronymic'),
    });
  },
});
