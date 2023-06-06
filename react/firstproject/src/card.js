import React, { useContext } from 'react';
import { DataContext } from './Head';
import './card.css'
const Card = () => {
  const data = useContext(DataContext);
    console.log("here is the data received",data)
  return (
        <table>
        <thead>
        <tr>
            <th> Name</th>
            <th>Batch</th>
        </tr>
        </thead>
        <tbody>
        {data.map(item => (
            <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.batch}</td>
            </tr>
        ))}
        </tbody>
    </table>
  );
};

export default Card;