// import React, { useState } from 'react';
// import Sidebar from './sideBar';
// import AddEventForm from './AddEventForm';

// const EventPage = () => {
//   const [showForm, setShowForm] = useState(false);

//   return (
//     <>
//     <div className="event-page">
//       <Sidebar onCreateClick={() => setShowForm(true)} /> 
//       <main className="main-content">
//         {showForm && <AddEventForm onClose={() => setShowForm(false)} />} 
//       </main>
//     </div>
//     </>
//   );
// };


// export default EventPage;

import React, { useState } from 'react';
import Sidebar from './sideBar';
// import AddEventForm from './AddEventForm';
import { FaPlus } from 'react-icons/fa';

const EventPage = ({headerTitle, headerSubTitle}) => {
  const [showForm, setShowForm] = useState(false);

  const handleAdd = () => {
    setShowForm(true);
  };

  return (
    <div className="event-pages">
      <main className="main-content">
        <div className="event-header-card">
          <div className="left">
            <h2>{headerTitle}</h2>
            <p>{headerSubTitle}</p>
            {/* <span className="new-tag">New</span> */}
          </div>
          <div className="right">
            <button className="add-button" onClick={handleAdd}>
              <FaPlus style={{ marginRight: "6px" }} />
              Add New Event
            </button>
          </div>
        </div>

        {/* {showForm && <AddEventForm onClose={() => setShowForm(false)} />} */}
      </main>
    </div>
  );
};

export default EventPage;
