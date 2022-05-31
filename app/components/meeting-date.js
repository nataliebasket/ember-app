import Component from '@ember/component';
import { get, set } from '@ember/object';
import $ from 'jquery';
import moment from 'moment';

export default Component.extend({

  didInsertElement() {
    this._super(...arguments);

    this.$('.datepicker').datepicker({
      clearBtn: true,
      format: "dd.mm.yyyy",
      language: "ru",
      autoclose: true
    });

    const self = this;

    this.$('.datepicker').datepicker().on("change", function() {
      // moment.fn.toJSON = function() { return this.format(); }

      // set(this, 'dateMeeting', moment($(this).datepicker('getDate')).toISOString());

      get(self, 'changeDateMeeting')(moment($(this).datepicker('getDate')).toISOString());
      // console.log(moment(get(this,'dateMeeting')).toISOString());

    });
  },

});

