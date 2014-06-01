App.ContactController = Em.ObjectController.extend({
  isEditing: false,
  needs: ['contactEdit'],

  startEditing: function() {
    var contactEditController = this.get('controllers.contactEdit');
    contactEditController.set('model', this.get('model'));
    contactEditController.startEditing();
    this.set('isEditing', true);
  },

  stopEditing: function() {
    var contactEditController = this.get('controllers.contactEdit');
    contactEditController.stopEditing();
    this.set('isEditing', false);
  },

  destroyRecord: function() {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      this.get('model').deleteRecord();
      this.get('store').commit();

      // return to the main contacts listing page
      this.get('target.router').transitionTo('contacts.index');
    }
  }
});
