// import React, { useContext } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPenToSquare,
//   faAngleDoubleDown,
//   faXmark,
// } from "@fortawesome/free-solid-svg-icons";
// import { ContactsContext } from "../context/ContactsContext";

// const Contact = ({ index }) => {
//   console.log(index);
//   const { showDetails, setShowDetails } = useContext(ContactsContext);

//   const { contactList, setContactList } = useContext(ContactsContext);
//   let { loading, contacts, errorMessage } = contactList;

//   const handleDetails = (index) => {
//     setShowDetails({ index: !showDetails });
//   };

//   return (
//     <>
//       <div
//         className="container"
//         style={{ maxWidth: "800px", marginTop: "30px" }}
//       >
//         <div className="card card-body mb-3">
//           <h4
//             style={{
//               fontSize: "1rem",
//               display: "flex",
//               justifyContent: "space-between",
//             }}
//           >
//             <div>
//               {contact.name}
//               <FontAwesomeIcon
//                 icon={faAngleDoubleDown}
//                 fixedWidth
//                 size="xs"
//                 color="red"
//                 cursor="pointer"
//                 onClick={handleDetails}
//               />
//             </div>
//             <small
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <a className="nav-link float-right" href="/contact/edit/1">
//                 <FontAwesomeIcon icon={faPenToSquare} />
//               </a>
//               <FontAwesomeIcon icon={faXmark} color="red" className="ms-3" />
//             </small>
//           </h4>
//           {showDetails.index && (
//             <ul className="list-group">
//               <li className="list-group-item">
//                 <b>Email:</b> Sincere@april.biz
//               </li>
//               <li className="list-group-item">
//                 <b>Phone:</b> 1-770-736-8031 x56442
//               </li>
//             </ul>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;
