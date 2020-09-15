import React, { Component } from "react";
import { connect } from "react-redux";
import ContactForm from "../components/contacts/ContactForm";
import Filter from "../components/contacts/Filter/";
import ContactList from "../components/contacts/ContactList";
import contactsOperations from "../redux/contacts/selectors/contactAsync";
import contactsSelectors from "../redux/contacts/selectors/contactSelectors";
import { authSelectors } from "../redux/auth";

class ContacterView extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <>
        <ContactForm />
        <Filter />
        <ContactList />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContacts(state),
  isLoadingTasks: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContacterView);
