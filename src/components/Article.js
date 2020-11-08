import React from 'react'

function article({ article, apiKey }) {
  const baseURL = "https://content.guardianapis.com/";
  console.log(article);
  const {
    apiUrl,
    id,
    webTitle,
    sectionName,
    sectionId,
    pillarName,
    pillarId,
    webPublicationDate,
    webUrl,
  } = article;
  return (
    <article className="article">
      <h2 className="article-heading">
        <a href={webUrl} target="_blank">
          {webTitle}
        </a>
      </h2>
      <a
        href={`${baseURL}${pillarId}&api-key=${apiKey}`}
        target="_blank">
        <span>{pillarName}</span>
      </a>
      &nbsp;>&nbsp;
      <a
        href={`${baseURL}${sectionId}&api-key=${apiKey}`}
        target="_blank"
      >
        <span>{sectionName}</span>
      </a>
      <p>{webPublicationDate}</p>
    </article>
  );
}

export default article
