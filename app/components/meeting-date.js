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

    this.$('.datepicker').datepicker().on("change", function() {
      moment.fn.toJSON = function() { return this.format(); }
      set(this, 'dateMeeting', moment($(this).datepicker('getDate')));
      console.log(moment(get(this,'dateMeeting')).toJSON());
    });
  },

  didRender() {
    // this._super(...arguments);
    // this.setProperties({
    //   dateMeeting: this.$('.datepicker').datepicker('getDate', '') ? this.$('.datepicker').datepicker('getDate', '') : undefined,
    // });
    // console.log(this.get('dateMeeting'));
  },

  didReceiveAttrs() {
    // this._super(...arguments);
    // this.setProperties({
    //   dateMeeting: this.$('.datepicker').datepicker('getDate', '') ? this.$('.datepicker').datepicker('getDate', '') : undefined,
    // });
    // console.log(this.get('dateMeeting'));
  }

});

