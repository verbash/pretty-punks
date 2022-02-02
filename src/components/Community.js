import React from 'react';
import Typography from '@mui/material/Typography';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function Community(props) {
  return (
    <div>
      {documentToReactComponents(props.page.otherCopy.communityBody.json)}
    </div>
  );
}