import { useParams } from 'react-router-dom';
import articles from '../data/articles';
import '../styles/pages.css';

function Article() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return <div className="page">Article not found.</div>;
  }

  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      <p><strong>Authors:</strong> {article.authors.join(', ')}</p>
      <p>
        <strong>Volume:</strong> {article.volume}, <strong>Issue:</strong> {article.issue}, <strong>Year:</strong> {article.year}
      </p>
      <p><strong>Abstract:</strong> {article.abstract}</p>
      <a href={article.pdfUrl} target="_blank" rel="noopener noreferrer">Download PDF</a>
    </div>
  );
}

export default Article;