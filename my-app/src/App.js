import Header from './Header.js';
import Body from './Body.js';
import Footer from './Footer.js';
import { useEffect, useState } from 'react';
import './App.css';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTAyNmViYjQyMTE1Yjg1NjQ2ZWMyYTY1ODA3ZTZiZSIsIm5iZiI6MTczMjM5OTkzMS42MSwic3ViIjoiNjc0MjUzM2I3MDNlODU1ODlkMThhNTIxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.75szsB1T1mbfykSC4fkYzwDDnojAiZBgBG69-Iydm8A'
  }
};

function App() {
  const [queryType, setQueryType] = useState('discover');
  const [input, setInput] = useState('');
  const [sortBy, setSortBy] = useState('popularity.desc');
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Called when sort by option changes
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=${sortBy}`, options)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
        setTotalPages(data.total_pages);
        setQueryType('discover');
      })
      .catch(err => console.error(err));
  }, [sortBy]);

  // Called when input in search bar changes
  useEffect(() => {
    // If search bar is not empty, fetch movies based on input
    // Otherwise, fetch movies based on sort by option
    if (input !== '') {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=en-US&page=${currentPage}`, options)
        .then(res => res.json())
        .then(data => {
          setMovies(data.results);
          setTotalPages(data.total_pages);
          setQueryType('search');
        })
        .catch(err => console.error(err));
    } else {
      fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=${sortBy}`, options)
        .then(res => res.json())
        .then(data => {
          setMovies(data.results);
          setTotalPages(data.total_pages);
          setQueryType('discover');
        })
        .catch(err => console.error(err));
    }
  }, [input]);

  // Called when Prev or Next button is clicked
  useEffect(() => {
    if (queryType === 'search') {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=en-US&page=${currentPage}`, options)
        .then(res => res.json())
        .then(data => {
          setMovies(data.results);
          setTotalPages(data.total_pages);
          setQueryType('search');
        })
        .catch(err => console.error(err));
    } else {
      fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=${sortBy}`, options)
        .then(res => res.json())
        .then(data => {
          setMovies(data.results);
          setTotalPages(data.total_pages);
          setQueryType('discover');
        })
        .catch(err => console.error(err));
    }
  }, [currentPage]);

  const handleOnInputChange = (event) => {
    setInput(event.target.value);
  }

  const handleOnSortChange = (event) => {
    setSortBy(event.target.value);
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div>
      <Header onInputChange={handleOnInputChange} onSortChange={handleOnSortChange} />
      <Body movies={movies} />
      <Footer currentPage={currentPage} totalPages={totalPages} onNextPage={handleNextPage} onPreviousPage={handlePreviousPage} />
    </div>
  );
}

export default App;
