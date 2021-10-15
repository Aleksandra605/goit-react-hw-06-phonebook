import './App.css';
import Form from './Components/form/Form';
import Filter from './Components/filter/Filter';
import ContactList from './Components/contacts-list/ContactList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function App() {
  return (
    <div>
      <Form />
      <Filter />
      <ContactList />
    </div>
  );
}

App.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default connect()(App);
