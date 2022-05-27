import Component from '@ember/component';
import { get, set } from '@ember/object';
import $ from 'jquery';
import moment from 'moment';

export default Component.extend({

  didInsertElement() {
    this._super(...arguments);

    this.$('.datepicker').datepicker({
      clearBtn: true,
      format: "dd-mm-yyyy",
      language: "ru",
      autoclose: true
    });

    this.$('.datepicker').datepicker().on("change", function() {
      // moment.fn.toJSON = function() { return this.format(); }

      // set(this, 'dateMeeting', moment($(this).datepicker('getDate')).format());
      set(this, 'dateMeeting', moment($(this).datepicker('getDate')));

      // console.log(typeof get(this, 'dateMeeting'));
      // console.log(get(this, 'dateMeeting'));

      // console.log(moment(get(this,'dateMeeting')).format());
      // console.log(moment(get(this,'dateMeeting')).toJSON());
      // console.log(moment(get(this,'dateMeeting')));

    });
  },

  actions: {
    componentActionName() {
      this.sendAction('getDateMeeting', get(this,'dateMeeting'));
      console.log(get(this,'dateMeeting'))
    }
  }

});

