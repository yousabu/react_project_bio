
import React, { Component }  from 'react';
import { compareAsc, format } from 'date-fns'

const Datee = () => {


format(new Date(2014, 1, 11), 'yyyy-MM-dd')
//=> '2014-02-11'

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
]
alert(dates.sort(compareAsc));
//=> [
};

export default Datee;