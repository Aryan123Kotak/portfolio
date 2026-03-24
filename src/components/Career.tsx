import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Automation Intern</h4>
                <h5>Edverb.in, Surat</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Engineered end-to-end automated growth systems by orchestrating
              n8n workflows for high-volume cold outreach and lead pipelines.
              Integrated Apify for web scraping with AI-personalized email
              automation and multi-stage follow-ups tracked in Google Sheets.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Agent Builder (Contract)</h4>
                <h5>Kryzen Software Pvt Ltd</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Designed and deployed a custom RAG-based Knowledge Retrieval
              system to eliminate internal information silos. Built a specialized
              web interface powered by Pinecone vector DB for instant,
              context-aware technical answers from internal documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
