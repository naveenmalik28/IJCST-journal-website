import '../styles/pages.css';

function About() {
  return (
    <div className="about-page">
      <h1>About IJCST</h1>
      <section className="about-section">
        <h2>Our Editorial Team</h2>
        <p>
          The IJCST editorial board consists of renowned experts, researchers, and academicians from leading universities and research institutions worldwide. Our team ensures a rigorous peer-review process to maintain the highest standards of research publication.
        </p>
      </section>
      <section className="about-section">
        <h2>Editor-in-Chief:</h2>
        <ul>
          <li>Dr. Naveen Malik - Editor-in-Chief, Kuruksehtra University</li>
        </ul>
      </section>
      <section className="about-section">
        <h2>Associate Editors:</h2>
        <ul>
          <li>Dr. Pankaj - Associate Editor, Institute of Computing</li>
          <li>Dr. Manish Singh - Reviewer, Data Science Academy</li>
        </ul>
      </section>
      <section className="about-section">
        <h2>Advisory Board:</h2>
        <ul>
          <li>Dr. Vikram Thakur - Advisory Board, University of Tech</li>
          <li>Dr. AB Devillers - Advisory Editor, Institute of Computing</li>
          <li>Dr. William James - Advisory, Data Science Academy</li>
        </ul>
      </section>
      <section className="about-section">
        <h2>ISSN</h2>
        <p>ISSN: 1234-5678 (Print) | ISSN: 9876-5432 (Online)</p>
      </section>
    </div>
  );
}

export default About;