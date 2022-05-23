import DateMomentUtils from '@date-io/moment';
import React, { useState } from 'react';
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import "../css/bootstrap.css";
import {Helmet} from 'react-helmet';


import { red300 } from 'material-ui/styles/colors';

function Datee() {
  let [currentDate, setCurrentData] = useState(new Date());


  return (
    <div style={{marginLeft:"250px", backgroundColor: red300}} >

                
          <Helmet>
                  <style>{'body { background:	Lavender  ; }'}</style>
          </Helmet>
      <MuiPickersUtilsProvider utils={DateMomentUtils}>
        <DatePicker value={currentDate} onChange={setCurrentData} />
        <TimePicker value={currentDate} onChange={setCurrentData} />
        <DateTimePicker value={currentDate} onChange={setCurrentData} />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default Datee;



// import React, { Component }  from 'react';
// import { compareAsc, format } from 'date-fns'

// const Datee = () => {


// format(new Date(2014, 1, 11), 'yyyy-MM-dd')
// //=> '2014-02-11'

// const dates = [
//   new Date(1995, 6, 2),
//   new Date(1987, 1, 11),
//   new Date(1989, 6, 10),
// ]
// alert(dates.sort(compareAsc));
// //=> [
// };

// export default Datee;