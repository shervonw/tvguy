import React from 'react';


const Summary = ({ summary, summaryStyle, classes }) => {
  const classList = (classes || []).join(' ');

  return (
    <p 
      className={ classList }
      dangerouslySetInnerHTML={{ __html: summary }}
      style={ [{ color: '#000' }, summaryStyle] }
    >  
    </p>
  );
}

export default Summary;