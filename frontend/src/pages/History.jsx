import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import HistoryCards from '../components/HistoryCards';

const History = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token") || null;

  axios.get("http://localhost:6969/getcalculation", { headers: { 'Authorization': 'Bearer ' + token } })
    .then((res) => { setData(res.data) })

  if (token) {
    return <div>
      <HistoryCards data={data} />
    </div>
  } else {
    return <h1>Please Login</h1>
  }
}

export default History