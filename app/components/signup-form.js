// app/components/signup-form.js
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SignupFormComponent extends Component {
  @service session;
  @service router;
  @service store;

  @action
  async signup(event) {
    event.preventDefault();
    try {
      let response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          users: {
            name: this.name,
            email: this.email,
            mobilenumber: this.mobileNumber,
            password: this.password,
          },
        }),
      });

      if (response.ok) {
        let responseData = await response.json();
        let currentUser = responseData.data;

        // Create a new record in the Ember Data store
        let user = this.store.createRecord('users', {
          name: currentUser.attributes.name,
          email: currentUser.attributes.email,
          mobilenumber: currentUser.attributes.mobilenumber,
          id: currentUser.id,
          // Include other properties as needed
        });
        console.log(currentUser.attributes.name);
        // Set the ID on the record
        // user.set('id', currentUser.id);
        // user.set('id', currentUser.mobilenumber);
        // user.set('id', currentUser.name);
        // user.set('id', currentUser.email);
        // Save the record to the store
        // await user.save();

        // Set the user ID in the session
        this.session.set('userId', user.id);

        // Transition to the 'profile' route
        this.router.transitionTo('profile');

        let userId = this.session.get('userId');

        // Check if userId is not null or undefined before using it
        if (userId) {
          // The userId is available, you can use it in your logic
          console.log(`User ID: ${userId}`);
        } else {
          // The userId is not set in the session
          console.log('User ID not found in the session');
        }
      } else {
        console.log('Invalid');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
