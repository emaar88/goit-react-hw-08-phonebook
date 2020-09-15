import React from "react";
import Contact from "../Contact/";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classes from "./ContactList.module.css";
import contactSelectors from "../../../redux/contacts/selectors/contactSelectors";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./ContactList.scss";

const ContactList = ({ contacts }) => (
  <div className={classes.container}>
    <TransitionGroup component="ul">
      {contacts.length > 0 &&
        contacts.map((contact) => (
          <CSSTransition
            key={contact.id}
            timeout={500}
            classNames="Contact"
            unmountOnExit
          >
            <li className={classes.li} key={contact.id}>
              <Contact id={contact.id} />
            </li>
          </CSSTransition>
        ))}
    </TransitionGroup>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

const mapStateToProps = (state) => ({
  contacts: contactSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(ContactList);
