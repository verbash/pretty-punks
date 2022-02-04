import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function Roadmap(props) {

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{props.page.roadmap.title1}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {documentToReactComponents(props.page.roadmap.body1.json)}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>{props.page.roadmap.title2}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {documentToReactComponents(props.page.roadmap.body2.json)}
          </Typography>
        </AccordionDetails>
      </Accordion>
      {props.page.roadmap.title3 && props.page.roadmap.title3 !== '' &&
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>{props.page.roadmap.title3}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {documentToReactComponents(props.page.roadmap.body3.json)}
          </Typography>
        </AccordionDetails>
      </Accordion>
      }
      {props.page.roadmap.title4 && props.page.roadmap.title4 !== '' &&
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>{props.page.roadmap.title4}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {documentToReactComponents(props.page.roadmap.body4.json)}
          </Typography>
        </AccordionDetails>
      </Accordion>
      }
    </div>
  );
}