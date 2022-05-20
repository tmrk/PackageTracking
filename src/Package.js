import { useState } from 'react';
import Highlight from './Highlight';
import Moment from 'react-moment';
import Map from './Map';

const Package = ({item, searchTerm}) => {

  return (
    <li className={item.hidden ? "hidden" : ""}>
      <div className="left">
        <header>
          <span className="title">Parcel #{<Highlight text={item.parcel_id} highlight={searchTerm} />}</span>
          <span className={"status " + item.status}>{item.status.replaceAll("-"," ")}</span>
        </header>
        <ul className="info">
          <li><span>Est. arrival:</span> <Moment date={item.eta} durationFromNow /></li>
          <li><span>Last updated:</span> <Moment date={item.last_updated} format="YYYY-MM-DD hh:mm" /></li>
          <li>
            <span>Location:</span>
            <span className={item.location_status_ok ? "location ok" : "location not-ok"}>
              <Highlight text={item.location_name} highlight={searchTerm} />
            </span>
          </li>
          <li>
            <span>Sender:</span>
            <span><Highlight text={item.sender} highlight={searchTerm} /></span>
          </li>
          <li>
            <span>User Name:</span>
            <span><Highlight text={item.user_name} highlight={searchTerm} /></span>
          </li>
          <li>
            <span>User Phone:</span>
            <span><Highlight text={item.user_phone} highlight={searchTerm} /></span>
          </li>
          <li><span>Verification:</span> <span>{item.verification_required ? "Required" : "Not Required"}</span></li>
          {item.notes &&
            <li>
              <span>Notes:</span>
              <span><Highlight text={item.notes} highlight={searchTerm} /></span>
            </li>
           }
        </ul>
      </div>
      <aside className="right">
        <Map lat={item.location_coordinate_latitude} long={item.location_coordinate_longitude} />
      </aside>
    </li>
  );

}

export default Package;
