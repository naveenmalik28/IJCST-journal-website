import React from 'react';
import articles from '../data/articles';
import '../styles/pages.css';

function Home() {
  const latestIssueArticles = articles
    .filter((article) => article.volume === 10 && article.issue === 1)
    .slice(0, 3);

  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>International Journal of Computer Science and Technology</h1>
        <p>Welcome to IJCST - A peer-reviewed journal for cutting-edge research.</p>
      </section>
      <section className="about-journal">
        <p>The International Journal of Computer Science and Technology (IJCST) is a premier, peer-reviewed journal dedicated to the latest advancements in the field of computer science. Our mission is to provide a global platform for researchers, academicians, and industry professionals to share innovative ideas, groundbreaking discoveries, and high-quality research.</p>
        <p>At IJCST, we are committed to promoting scientific knowledge and fostering collaboration among scholars worldwide. Our journal publishes original research articles, review papers, and case studies that push the boundaries of modern computing and technology.</p>
      </section>
      <section className="scope">
        <h2>Our Objectives:</h2>
        <ul>
          <li>Promote scientific research and innovation in computer science.</li>
          <li>Provide an open-access platform for global knowledge-sharing.</li>
          <li>Encourage collaboration between academia and industry.</li>
          <li>Maintain high ethical standards in research publication.</li>
        </ul>
      </section>
      <section className="scope">
        <h2>Scope of Our Journal</h2>
        <ul>
          <li>Artificial Intelligence & Machine Learning</li>
          <li>Data Science & Big Data Analytics</li>
          <li>Cybersecurity & Cryptography</li>
          <li>Cloud Computing & IoT</li>
          <li>Blockchain & Web Technologies</li>
          <li>Software Engineering & Human-Computer Interaction</li>
        </ul>
      </section>
      <section className="latest-articles">
        <h2>Latest Articles</h2>
        <div className="article-list">
          {latestIssueArticles.map((article) => (
            <div key={article.id} className="article-teaser">
              <h3>{article.title}</h3>
              <p>By {article.authors.join(', ')}</p>
              <a href={`/article/${article.id}`}>Read more</a>
            </div>
          ))}
        </div>
      </section>
      <section className="call-to-action">
        <a href="/submit" className="button">Submit Your Paper</a>
      </section>
    </div>
  );
}

export default Home;