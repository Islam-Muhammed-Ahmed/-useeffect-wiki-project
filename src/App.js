import { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [term, setTerm] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          srsearch: 'apple',
          origin: '*',
        },
      });
    };
    fetchData();
  }, [term]);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='my-3'>
            <label htmlFor='exampleFormControlInput1' className='form-label'>
              Search Input
            </label>
            <input
              type='text'
              className='form-control'
              id='exampleFormControlInput1'
              onChange={(e) => setTerm(e.target.value)}
              value={term}
            />
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Title</th>
                <th scope='col'>Desc</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>title</td>
                <td>Desc</td>
              </tr>
              <tr>
                <th scope='row'>1</th>
                <td>title</td>
                <td>Desc</td>
              </tr>
              <tr>
                <th scope='row'>1</th>
                <td>title</td>
                <td>Desc</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
