import { toast } from 'react-hot-toast';
import { Form, Icon } from './SearchBar.styled';

export const SearchBar = ({ handleSubmit }) => {
  const handleSearchSubmit = e => {
    e.preventDefault();
    const newQuery = e.target.elements.query.value;
    e.target.reset();

    if (newQuery !== '') {
      return handleSubmit(newQuery);
    }
    toast.error('Please enter your search query.', {
      style: {
        borderRadius: '10px',
        background: 'var(--bg-color)',
        color: 'var(--main-color)',
        textAlign: 'center',
        width: '300px',
      },
    });
  };
  return (
    <Form onSubmit={handleSearchSubmit} role="search">
      <label>Choose What to Watch Next</label>
      <div>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Enter the movie title"
        />
        <button>
          <Icon />
        </button>
      </div>
    </Form>
  );
};
