import React, { useEffect, useState } from "react";
import AddContact from "./pages/AddContact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import EditContact from "./pages/EditContact";
import { ContactsContext } from "./context/ContactsContext";
// import { ContactsProvider } from "./context/ContactsContext";

// contacts url
const contactsUrl = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [showDetails, setShowDetails] = useState({});

  const [contactList, setContactList] = useState({
    loading: false,
    contacts: [],
    errorMessage: "",
  });

  //   const fetchContactList = async function () {
  //     const contacts = await fetch(contactsUrl).then((res) => res.json());

  //     console.log(contacts[0]);
  //   };

  useEffect(() => {
    try {
      setContactList({ ...contactList, loading: true });
      async function fetchContactList() {
        const contacts = await fetch(contactsUrl).then((res) => res.json());

        console.log(contacts[0]);
        setContactList({
          ...contactList,
          loading: false,
          contacts: contacts,
        });
      }
      fetchContactList();
    } catch (error) {
      setContactList({
        ...contactList,
        loading: false,
        errorMessage: error.message,
      });
    }
  }, []);

  return (
    <>
      <Navbar />

      <ContactsContext.Provider
        value={{ showDetails, setShowDetails, contactList, setContactList }}
      >
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-contact" element={<AddContact />} />
            {/* <Route path="/add-contact" element={<EditContact />} /> */}
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </div>
      </ContactsContext.Provider>
      <Footer />
    </>
  );
};

export default App;
