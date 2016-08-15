import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow(){
      this.set('addNewAnnouncement', true);
    },

    save() {
      var params = {
        date: this.get('date'),
        title: this.get('title'),
        content: this.get('content'),
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('save', params);
    }
  }
});
