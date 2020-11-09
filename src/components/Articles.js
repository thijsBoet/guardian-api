import React, { useState, useEffect } from "react";
import Loading from '../components/Loading'
import Article from './Article'

export default function Articles() {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const apiKey = "135f9224-8c69-4f05-a9a4-e41073cee848";

  const fetchArticles = async () => {
    setLoading(true);
    try {
      searchTerm.split(" ").join("%20");
      console.log(searchTerm)
      const res = await fetch(
        `https://content.guardianapis.com/search?${searchTerm}&api-key=${apiKey}`
      );
      const data = await res.json();

      let articles = []
      Object.entries(data.response.results).map(([key, value]) => {
        articles.push(value)
      });

      setArticles(articles);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    fetchArticles();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container">
      <form
        className="search-form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="form-control">
          <label htmlFor="search-term">Search The Guardian</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>
        <button type="submit">Search</button>
      </form>
      <section className="articles">
        {articles.map((article) => {
          return <Article key={article.id} article={article} apiKey={apiKey} />;
        })}
      </section>
    </div>
  );
}
