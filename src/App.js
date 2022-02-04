import Album from './components/Album'
import './App.css';
// var contentful = require('contentful');
import {useState, useEffect} from "react";

const query = `
{
  roadmapCollection {
    items {
      header1
      title1
      body1 {
        json
      }
      title2
      body2 {
        json
      }
      title3
      body3 {
        json
      }
      title4
      body4 {
        json
      }
    }
  }
  faqCollection {
    items {
      header1
      title1
      body1 {
        json
      }
      title2
      body2 {
        json
      }
      title3
      body3 {
        json
      }
      title4
      body4 {
        json
      }
      title5
      body5 {
        json
      }
      title6
      body6 {
        json
      }
      title7
      body7 {
        json
      }
    }
  }
  otherCopyCollection {
    items {
      aboutBody {
        json
      }
      ctaButton
      commonTitle
      commonSubTitle
      uncommonTitle
      uncommonSubTitle
      rareTitle
      rareSubTitle
      legendaryTitle
      legendarySubTitle
    }
  }
  teamCollection {
    items {
      name1
      role1
      description1
      twitter1
      name2
      role2
      description2
      twitter2
      name3
      role3
      description3
      twitter3
      name4
      role4
      description4
      twitter4
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
        // setPage(data.roadmapCollection.items[0]);
        setPage({
          roadmap: data.roadmapCollection.items[0],
          faq: data.faqCollection.items[0],
          otherCopy: data.otherCopyCollection.items[0],
          team: data.teamCollection.items[0],
        })
      });
  }, []);

  if (!page) {
    return "Loading...";
  }

  return (
    <Album page={page}/>
  );
}

export default App;
