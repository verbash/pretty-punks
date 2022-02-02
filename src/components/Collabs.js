import React from 'react';
import Typography from '@mui/material/Typography';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function Collabs(props) {
  console.log('Collabs props', props);
  return (
    <div>
      {documentToReactComponents(props.page.otherCopy.collabsBody.json)}
    </div>
  );
}