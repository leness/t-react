import { Button } from '@material-ui/core';
// import { Button } from "./components/Footer/styled";

import Footer from "./components/Footer";
import Information from "./components/Information";

const CAT_IMAGE_SRC = 'https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg'

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <div>
        <img src={CAT_IMAGE_SRC} alt="cat" width="200" />
      </div>
      
      <Button variant="contained">
        Play with cat
      </Button>
      <Information handlersPull={{
        onClick: () => alert('clicked'),
        onHover: () => console.log('hovered'),
      }} >
        <h1>My plan!</h1>
         <ul>
                <li>Learn react</li>
                <li>stay healsy</li>
                <li>Make people happy</li>
            </ul>
      </Information>
      {[1, 2, 3].map((number) => (
        <Footer
          key={number}
      first={1} 
      second={2} 
        user={
          {
            name: 'Olena',
            state: 'Happy',
            questions: 20,
          }
        }
          color="blue"
      >
        <h1>message="Do not hesitate! React is cool!"</h1>
        </Footer>
        
        
      ))}
      
      
    </div>
  );
}

export default App;
