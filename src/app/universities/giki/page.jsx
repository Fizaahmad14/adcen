import React from "react";
import jsonData from "./GIKI.json";
import "./style.css"; // Import the CSS file

const BlogComponent = () => {
  const formatContent = (content) => {
    // Use regular expressions to match the headings and apply bold formatting
    return content.replace(/\*([^*]+)\*/g, "<strong>$1</strong>");
  };

  return (
    <div>
      {/* Picture covering the whole page */}
      <img
        src="/images/universities/giki.jpg"
        alt="Blog Cover"
        className="blog-cover"
      />

      {/* Data display */}
      <div className="blog-container">
        <div className="blog-post">
          {Object.keys(jsonData).map((key) => {
            return (
              <div key={key}>
                <h2 className="blog-title">{key}</h2>
                {/* Check if the key is "Why GIKI" to apply special formatting */}
                {key === "Why GIKI" ? (
                  <p
                    className="blog-content"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {/* Render HTML with bold headings using dangerouslySetInnerHTML */}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: formatContent(jsonData[key]),
                      }}
                    />
                  </p>
                ) : (
                  <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{
                      __html: formatContent(jsonData[key]),
                    }}
                  />
                )}
                {/* Add a horizontal rule after each item except the last one */}
                {key !==
                  Object.keys(jsonData)[
                    Object.keys(jsonData).length - 1
                  ] && <hr />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
