import React from 'react';

const Summary = ({ summary }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: summary }} style={{ marginTop: 50, marginBottom: 50 }}>
      
    </div>
  );
}

export default Summary;