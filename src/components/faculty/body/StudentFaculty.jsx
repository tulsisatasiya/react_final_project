import React from 'react';

const StudentFaculty = () => {
  return (
    <div className='pt-5 pb-5 '>
      <h1 style={{ textAlign: 'center' }}>Student Data</h1>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '20px',
          // backgroundColor : 'white'
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: '8px',
                textAlign: 'center',
                backgroundColor: '#f2f2f2',
              }}
            >
              ID
            </th>
            <th
              style={{
                padding: '8px',
                textAlign: 'center',
                backgroundColor: '#f2f2f2',
              }}
            >
              Name
            </th>
            <th
              style={{
                padding: '8px',
                textAlign: 'center',
                backgroundColor: '#f2f2f2',
              }}
            >
              Course
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='pm-5'>
            <td style={{ padding: '8px', textAlign: 'center'}}>1</td>
            <td style={{ padding: '8px', textAlign: 'center' }}>xyz</td>
            <td style={{ padding: '8px', textAlign: 'center' }}>node</td>
          </tr>
          <tr>
            <td style={{  padding: '8px', textAlign: 'center' }}>2</td>
            <td style={{  padding: '8px', textAlign: 'center' }}>abcd</td>
            <td style={{  padding: '8px', textAlign: 'center' }}>react</td>
          </tr>
         
        </tbody>
      </table>
    </div>
  );
};

export default StudentFaculty;
