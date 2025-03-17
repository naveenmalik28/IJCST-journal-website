import { useState } from 'react';
import ArticleCard from '../components/ArticleCard';
import articles from '../data/articles';
import '../styles/pages.css';

function Archives() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = articles.filter((article) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      article.title.toLowerCase().includes(searchLower) ||
      article.authors.some((author) => author.toLowerCase().includes(searchLower)) ||
      article.keywords.some((keyword) => keyword.toLowerCase().includes(searchLower))
    );
  });

  const groupedArticles = {};
  filteredArticles.forEach((article) => {
    const { volume, issue } = article;
    if (!groupedArticles[volume]) {
      groupedArticles[volume] = {};
    }
    if (!groupedArticles[volume][issue]) {
      groupedArticles[volume][issue] = {
        releaseDate: article.releaseDate,
        articles: []
      };
    }
    groupedArticles[volume][issue].articles.push(article);
  });

  const volumes = Object.keys(groupedArticles).sort((a, b) => b - a);

  return (
    <div className="archives-page">
      <h1>Archives</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search articles by title, author, or keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {volumes.length > 0 ? (
        volumes.map((volume) => (
          <div key={volume} className="volume-section">
            <h2>Volume {volume} ({articles.find(a => a.volume == volume).year})</h2>
            {Object.keys(groupedArticles[volume]).sort((a, b) => a - b).map((issue) => (
              <div key={issue} className="issue-section">
                <h3>Issue {issue} - {groupedArticles[volume][issue].releaseDate}</h3>
                <div className="article-list">
                  {groupedArticles[volume][issue].articles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p>No articles found.</p>
      )}
    </div>
  );
}

export default Archives;