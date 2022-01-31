import Album from './components/Album'
import './App.css';
// var contentful = require('contentful');
import {useState, useEffect} from "react";

const query = `
{
  roadmapCollection {
    items {
      header
      body1 {
        json
      }
    }
  }
}`

function App() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_API_KEY}`,
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setPage(data.roadmapCollection.items[0]);
      });
  }, []);

  if (!page) {
    return "Loading...";
  }

  console.log('page', page);
  return (
    <Album page={page}/>
  );
}

export default App;
