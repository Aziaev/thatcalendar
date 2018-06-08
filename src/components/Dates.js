import React from 'react';

export default function (props) {
  let { day, month, year } = props;
  return (
    <div style={{ marginTop: '15px' }}>
      <hr />
      <h1>
        {day ? day : '__'} . {month ? month : '__'} . {year ? year : '____'}
      </h1>
      <hr />
    </div>
  );
}
