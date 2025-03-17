import { Link } from 'react-router-dom';
import '../styles/pages.css';

function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <h3>
        <Link to={`/article/${article.id}`}>{article.title}</Link>
      </h3>
      <p><strong>Authors:</strong> {article.authors.join(', ')}</p>
      <p>
        <strong>Volume:</strong> {article.volume}, <strong>Issue:</strong> {article.issue}, <strong>Year:</strong> {article.year}
      </p>
      <a href={article.pdfUrl} target="_blank" rel="noopener noreferrer">Download PDF</a>
    </div>
  );
}

export default ArticleCard;