import React, { Component } from "react";
import { connect } from "react-redux";
import ContactForm from "../components/contacts/ContactForm";
import Filter from "../components/contacts/Filter/";
import ContactList from "../components/contacts/ContactList";
import contactsOperations from "../redux/contacts/selectors/contactAsync";
import contactsSelectors from "../redux/contacts/selectors/contactSelectors";
import classes from "./ContacterView.module.css";
import { CSSTransition } from "react-transition-group";
import "./ContacterView.scss";

class ContacterView extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="fadePhone"
          unmountOnExit
        >
          <h1 className={classes.titleName}>Phonebook</h1>
        </CSSTransition>
        <ContactForm />
        <h2 className={classes.minTitleName}>Contacts</h2>
        <CSSTransition
          in={this.props.contacts.length > 1}
          timeout={500}
          classNames="filterPhone"
          unmountOnExit
        >
          <Filter />
        </CSSTransition>
        <h2 className={classes.minTitleName}>Contacts List</h2>
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
