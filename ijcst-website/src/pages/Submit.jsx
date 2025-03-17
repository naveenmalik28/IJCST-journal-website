import { useState } from 'react';
import axios from 'axios';
import '../styles/pages.css';

function Submit() {
  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    file: null,
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('abstract', formData.abstract);
    data.append('file', formData.file);

    try {
      const response = await axios.post('http://localhost:8000/api/submit/', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage('Submission successful!');
      setFormData({ title: '', abstract: '', file: null });
    } catch (error) {
      setMessage('Error submitting paper. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="page-submit">
      <h1>Submit Your Paper</h1>
      <form className="submission-form" onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </label>
        <label>
          Abstract:
          <textarea name="abstract" value={formData.abstract} onChange={handleChange} required></textarea>
        </label>
        <label>
          Upload PDF:
          <input type="file" name="file" accept=".pdf" onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default Submit;