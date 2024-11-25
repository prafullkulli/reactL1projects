import './App.css';
import React, {useState, useEffect} from 'react';
import Imagecard from './components/Imagecard';
import ImageSearch from './components/ImageSearch';

//https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true
function App() {
  const [images, setImages] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [term, setTerm] = useState('');
  //https://pixabay.com/api/?key=47012971-903468d2c49d8a0965fad0fd7&q=yellow+flowers&image_type=photo&pretty=true
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsloading(false);
    })
    .catch(err => console.log(err))
  }, [term]);

  return (
    <div className='container mx-auto'>
      <ImageSearch searchText={(text) => setTerm(text)} />
      {isloading? <h1 className='text-6xl text-center mx-auto mt-32'>Loading</h1>:
      <div className='grid grid-cols-3 gap-4'>
      {images.map(image =>(
        <Imagecard key={image.id} image={image} />
      ))}
    </div>}
      
    </div>
  );
}

export default App;
