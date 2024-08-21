import React from 'react';


function TempTable({TempEnq,deleteTemp }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Enquiry ID</th>
          <th>TempName</th>
          <th>Course</th>
          <th>EnquiryText</th>
          <th>Email</th>
          <th>PhoneNo</th>
          <th>Alternate Phn</th>
        </tr>
      </thead>
      <tbody>
        {TempEnq.map((temp) => (
          <tr key={temp.enqId}>
            <td>{temp.enqId}</td>
            <td>{temp.name}</td>
            <td>{temp.course}</td>
            <td>{temp.enquirytext}</td>
            <td>{temp.email}</td>
            <td>{temp.phone}</td>
            <td>{temp.altPhone}</td>
            <td>
              <button onClick={() => deleteTemp(temp.enqId)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TempTable;
