import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    setText('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(' ');
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const isDark = props.mode === 'dark';
  
  // Outer Container Styling (Slightly lighter/darker than inner components)
  const containerStyle = {
    backgroundColor: isDark ? '#1e1e1e' : '#f8f9fa',
    borderColor: isDark ? '#333333' : '#e0e0e0',
    transition: 'all 0.3s ease'
  };

  // Inner Components Styling (Textarea, Stat Cards, Preview Box)
  const innerCardClass = isDark 
    ? 'bg-black text-white border-secondary' 
    : 'bg-white text-dark border-light-subtle';

  const subTextClass = isDark ? 'text-white-50' : 'text-muted';

  const wordCount = text.split(/\s+/).filter((element) => element.length !== 0).length;
  const readingTime = (0.008 * wordCount).toFixed(2);

  return (
    <div className={`container py-4 ${isDark ? 'text-white' : 'text-dark'}`}>
      {/* Main Form Section Container */}
      <div className="p-4 rounded-4 shadow-sm border" style={containerStyle}>
        <h2 className="fw-bold mb-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
          <span>{props.heading}</span>
          <span className="badge bg-primary fs-6 px-3 py-2 rounded-pill shadow-sm">
            ⚡ Text Utility
          </span>
        </h2>

        <div className="mb-3 position-relative">
          <textarea
            className={`form-control shadow-sm ${innerCardClass}`}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            placeholder="Type or paste your text here..."
            style={{
              resize: 'vertical',
              fontSize: '1.05rem',
              transition: 'background-color 0.3s ease, color 0.3s ease'
            }}
          ></textarea>
        </div>

        {/* Action Buttons */}
        <div className="d-flex flex-wrap gap-2 pt-2">
          <button 
            disabled={text.length === 0} 
            className="btn btn-primary shadow-sm px-3 fw-medium" 
            onClick={handleUpClick}
          >
            Uppercase
          </button>
          <button 
            disabled={text.length === 0} 
            className="btn btn-primary shadow-sm px-3 fw-medium" 
            onClick={handleLoClick}
          >
            Lowercase
          </button>
          <button 
            disabled={text.length === 0} 
            className="btn btn-secondary shadow-sm px-3 fw-medium" 
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button 
            disabled={text.length === 0} 
            className="btn btn-success shadow-sm px-3 fw-medium ms-auto" 
            onClick={handleCopy}
          >
            📋 Copy Text
          </button>
          <button 
            disabled={text.length === 0} 
            className="btn btn-danger shadow-sm px-3 fw-medium" 
            onClick={handleClearClick}
          >
            🗑️ Clear
          </button>
        </div>
      </div>

      {/* Analytics & Summary Section Container */}
      <div className="mt-4 p-4 rounded-4 shadow-sm border" style={containerStyle}>
        <h3 className="fw-bold mb-3">Your Text Summary</h3>
        
        <div className="row g-3 mb-4">
          <div className="col-6 col-md-3">
            <div className={`p-3 rounded-3 text-center border ${innerCardClass}`}>
              <div className="fs-3 fw-bold">{wordCount}</div>
              <div className={`${subTextClass} small`}>Words</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className={`p-3 rounded-3 text-center border ${innerCardClass}`}>
              <div className="fs-3 fw-bold">{text.length}</div>
              <div className={`${subTextClass} small`}>Characters</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className={`p-3 rounded-3 text-center border ${innerCardClass}`}>
              <div className="fs-3 fw-bold">{readingTime}</div>
              <div className={`${subTextClass} small`}>Minutes Read</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className={`p-3 rounded-3 text-center border ${innerCardClass}`}>
              <div className="fs-3 fw-bold">{text.split(/\n/).filter(line => line.trim().length > 0).length}</div>
              <div className={`${subTextClass} small`}>Paragraphs</div>
            </div>
          </div>
        </div>

        {/* Live Preview Box */}
        <h4 className="fw-semibold">Preview</h4>
        <div className={`p-3 rounded-3 border ${innerCardClass}`}>
          <p className="mb-0" style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
            {text.length > 0 ? text : <span className={subTextClass}>Nothing to preview yet...</span>}
          </p>
        </div>
      </div>
    </div>
  );
}