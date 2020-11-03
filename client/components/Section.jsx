import React from 'react';
import ReactDOM from 'react-dom';

import Ticket from './Ticket.jsx';

const Section = ({sectionName, sectionTickets, pushTicket}) => {
  return (
    <div className="section">

      <h2>{sectionName}</h2>
      {Object.keys(sectionTickets).length === 0
      ? <div className=" empty">Empty</div>
      : Object.keys(sectionTickets).map((id, i) => <Ticket ticketId={id} ticket={sectionTickets[id]} sectionName={sectionName} pushTicket={pushTicket} key={i}/>)}

    </div>
  )
}

export default Section