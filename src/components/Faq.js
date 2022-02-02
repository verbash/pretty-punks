import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function Faq(props) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{props.page.faq.title1}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {documentToReactComponents(props.page.faq.body1.json)}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>{props.page.faq.title2}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {documentToReactComponents(props.page.faq.body2.json)}
          </Typography>
        </AccordionDetails>
      </Accordion>
    {props.page.faq.title3 && props.page.faq.title3 != '' &&
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>{props.page.faq.title3}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {documentToReactComponents(props.page.faq.body3.json)}
          </Typography>
        </AccordionDetails>
      </Accordion>
    }
    {props.page.faq.title4 && props.page.faq.title4 != '' &&
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>{props.page.faq.title4}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {documentToReactComponents(props.page.faq.body4.json)}
          </Typography>
        </AccordionDetails>
      </Accordion>
    }
    {props.page.faq.title5 && props.page.faq.title5 != '' &&
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>{props.page.faq.title5}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {documentToReactComponents(props.page.faq.body5.json)}
          </Typography>
        </AccordionDetails>
      </Accordion>
    }
    {props.page.faq.title6 && props.page.faq.title6 != '' &&
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>{props.page.faq.title6}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {documentToReactComponents(props.page.faq.body6.json)}
          </Typography>
        </AccordionDetails>
      </Accordion>
    }
    {props.page.faq.title7 && props.page.faq.title7 != '' &&
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>{props.page.faq.title7}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {documentToReactComponents(props.page.faq.body7.json)}
          </Typography>
        </AccordionDetails>
      </Accordion>
    }
    </div>
  );
}