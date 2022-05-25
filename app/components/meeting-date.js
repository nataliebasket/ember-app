import Component from '@ember/component';
import { get, set } from '@ember/object';
// import $ from 'jquery';


export default Component.extend({
  
  init() {
    this._super(...arguments);
    set(this, 'dateMeeting', '');
  },

  didInsertElement() {
    this._super(...arguments);

    const dateMeeting = get(this, 'dateMeeting');
    console.log(dateMeeting);
    console.log('didInsertElement');

  },

  didRender() {
    console.log('didRender');
    const dateMeeting = get(this, 'dateMeeting');
    console.log(dateMeeting);
  },
});
