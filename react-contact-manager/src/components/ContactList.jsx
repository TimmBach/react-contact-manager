import React, { useContext, useEffect, useState } from "react";
import Contact from "./Contact";
import Spinner from "./Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faAngleDoubleDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { ContactsContext } from "../context/ContactsContext";

const ContactList = () => {
  const { contactList, setContactList } = useContext(ContactsContext);
  let { loading, contacts, errorMessage } = contactList;
  const { showDetails, setShowDetails } = useContext(ContactsContext);

  const handleDetails = (index) => {
    let showDetailsData;
    if (showDetails[index]) {
      showDetailsData = { index: !showDetails[index] };
    } else {
      showDetailsData = { index: true };
    }
    setShowDetails(showDetailsData);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        contacts.map((contact, index) => (
          <div
            className="container"
            style={{ maxWidth: "800px", marginTop: "30px" }}
          >
            <div className="card card-body mb-3">
              <h4
                style={{
                  fontSize: "1rem",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {contact.name}
                  <FontAwesomeIcon
                    icon={faAngleDoubleDown}
                    fixedWidth
                    size="xs"
                    color="red"
                    cursor="pointer"
                    onClick={() => handleDetails(index)}
                  />
                </div>
                <small
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <a className="nav-link float-right" href="/contact/edit/1">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </a>
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="red"
                    className="ms-3"
                  />
                </small>
              </h4>
              {showDetails.index && (
                <ul className="list-group">
                  <li className="list-group-item">
                    <b>Email:</b> Sincere@april.biz
                  </li>
                  <li className="list-group-item">
                    <b>Phone:</b> 1-770-736-8031 x56442
                  </li>
                </ul>
              )}
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default ContactList;
