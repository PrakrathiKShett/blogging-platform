import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Static sample news data
    const sampleNews = [
      {
        id: 1,
        title: "India Launches Chandrayaan 4 for Lunar Exploration",
        content:
          "ISRO successfully launched Chandrayaan 4 today from Sriharikota, marking another milestone in India's space journey.",
        image:
          "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1000&q=80",
        author: "ISRO News",
        date: "2025-10-18T09:30:00",
      },
      {
        id: 2,
        title: "Global Stock Market Surges Amid Tech Boom",
        content:
          "Tech companies led the charge today as markets rallied worldwide. Analysts credit strong Q3 earnings for the optimism.",
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80",
        author: "Business World",
        date: "2025-10-18T14:45:00",
      },
      {
        id: 3,
        title: "Tomorrow: Partial Solar Eclipse Visible Across India",
        content:
          "Astronomers confirm a partial solar eclipse will occur tomorrow morning across India. Viewers advised to use protection.",
        image:
          "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1000&q=80",
        author: "SkyWatch",
        date: "2025-10-19T06:15:00",
      },
      {

        
        id: 4,
        title: "Heavy Rain Yesterday in Delhi & Abroad",
        content: "Yesterday, heavy rain was reported in Delhi, and parts of America experienced significant rainfall.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1950&q=80",

        author: "Weather Daily",
        date: "2025-10-19T09:00:00"

},
    ];

    setNews(sampleNews);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>🗞️ NewsXpress</h2>
        <div>
          <a style={styles.link} href="/">Home</a>
          <a style={styles.link} href="#today">Today</a>
          <a style={styles.link} href="#tomorrow">Tomorrow</a>
          <a style={styles.link} href="#login">Login</a>
        </div>
      </nav>

      {/* Header */}
      <header style={styles.hero}>
        <h1>Today's & Tomorrow's Top News</h1>
        <p>Stay informed with daily stories, images, and real-time updates.</p>
      </header>

      {/* News Cards */}
      <div style={styles.grid}>
        {news.map((item) => {
          const dateObj = new Date(item.date);
          const date = dateObj.toLocaleDateString("en-IN", {
            weekday: "short",
            month: "short",
            day: "numeric",
          });
          const time = dateObj.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
          });

          return (
            <div key={item.id} style={styles.card}>
              <img src={item.image} alt={item.title} style={styles.image} />
              <div style={styles.cardBody}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div style={styles.meta}>
                  <span>{date} — {time}</span>
                  <span>By {item.author}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} NewsXpress | Built with React</p>
      </footer>
    </div>
  );
}

// CSS styles inside JS
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 40px",
    background: "#fff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  logo: { color: "#007bff", fontWeight: "bold" },
  link: {
    marginLeft: "20px",
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
  },
  hero: {
    textAlign: "center",
    background: "linear-gradient(135deg, #007bff, #00c6ff)",
    color: "white",
    padding: "60px 20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "25px",
    padding: "40px",
  },
  card: {
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
    overflow: "hidden",
    transition: "transform 0.3s ease",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  cardBody: { padding: "15px" },
  meta: {
    marginTop: "10px",
    fontSize: "0.8em",
    color: "#777",
    display: "flex",
    justifyContent: "space-between",
  },
  footer: {
    textAlign: "center",
    padding: "16px",
    background: "#f1f1f1",
    color: "#555",
    fontSize: "0.9em",
  },
};

export default App;
