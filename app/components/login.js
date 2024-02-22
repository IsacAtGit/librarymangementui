import Component from '@glimmer/component';
import { action } from '@ember/object';
export default class LoginComponent extends Component {
  @action
  login(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Your login logic goes here
    console.log('Login button clicked!');
  }

  //   @action
  //   signup() {
  //     // Your signup logic goes here
  //     console.log('Sign Up Here link clicked!');
  //   }
}
