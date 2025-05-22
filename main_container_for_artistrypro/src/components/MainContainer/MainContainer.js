import React, { useState } from 'react';
import './MainContainer.css';

// PUBLIC_INTERFACE
/**
 * MainContainer is the primary container component for ArtistryPro.
 * It provides the structure for the digital drawing application, including
 * areas for tools, canvas, and property panels.
 */
const MainContainer = () => {
  const [activeToolSection, setActiveToolSection] = useState('draw');
  const [selectedTool, setSelectedTool] = useState('brush');

  // Tool sections for the sidebar
  const toolSections = [
    { id: 'draw', icon: '✏️', label: 'Draw' },
    { id: 'shapes', icon: '⬜', label: 'Shapes' },
    { id: 'text', icon: 'T', label: 'Text' },
    { id: 'layers', icon: '📚', label: 'Layers' },
    { id: 'effects', icon: '✨', label: 'Effects' }
  ];

  // Available tools for the currently active section
  const toolOptions = {
    draw: [
      { id: 'brush', icon: '🖌️', label: 'Brush' },
      { id: 'pencil', icon: '✏️', label: 'Pencil' },
      { id: 'eraser', icon: '🧽', label: 'Eraser' }
    ],
    shapes: [
      { id: 'rectangle', icon: '⬜', label: 'Rectangle' },
      { id: 'circle', icon: '⭕', label: 'Circle' },
      { id: 'line', icon: '📏', label: 'Line' }
    ],
    text: [
      { id: 'text', icon: 'T', label: 'Text Tool' }
    ],
    layers: [
      { id: 'addLayer', icon: '+', label: 'Add Layer' },
      { id: 'deleteLayer', icon: '-', label: 'Delete Layer' }
    ],
    effects: [
      { id: 'blur', icon: '🌫️', label: 'Blur' },
      { id: 'sharpen', icon: '🔍', label: 'Sharpen' },
      { id: 'colorize', icon: '🌈', label: 'Colorize' }
    ]
  };

  const handleToolSectionChange = (sectionId) => {
    setActiveToolSection(sectionId);
    // Reset selected tool when changing sections
    setSelectedTool(toolOptions[sectionId][0]?.id || '');
  };

  const handleToolSelect = (toolId) => {
    setSelectedTool(toolId);
  };

  return (
    <div className="main-container">
      {/* Top Header/Navbar */}
      <header className="app-header">
        <div className="logo">
          <span className="logo-symbol">🎨</span> ArtistryPro
        </div>
        <div className="header-actions">
          <button className="btn">New</button>
          <button className="btn">Open</button>
          <button className="btn">Save</button>
          <button className="btn">Export</button>
          <button className="btn">Share</button>
        </div>
        <div className="user-profile">
          <span className="user-icon">👤</span>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="content-area">
        {/* Left Sidebar - Tool Categories */}
        <aside className="tool-sidebar">
          {toolSections.map(section => (
            <div 
              key={section.id} 
              className={`tool-section ${activeToolSection === section.id ? 'active' : ''}`}
              onClick={() => handleToolSectionChange(section.id)}
            >
              <div className="tool-icon">{section.icon}</div>
              <div className="tool-label">{section.label}</div>
            </div>
          ))}
        </aside>

        {/* Tools Panel */}
        <div className="tools-panel">
          <h3 className="panel-title">{toolSections.find(s => s.id === activeToolSection)?.label} Tools</h3>
          <div className="tools-list">
            {toolOptions[activeToolSection]?.map(tool => (
              <div 
                key={tool.id}
                className={`tool-item ${selectedTool === tool.id ? 'selected' : ''}`}
                onClick={() => handleToolSelect(tool.id)}
              >
                <span className="tool-icon">{tool.icon}</span>
                <span className="tool-label">{tool.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Canvas Area */}
        <div className="canvas-container">
          <div className="canvas-placeholder">
            <div className="canvas-message">
              <h3>Canvas Area</h3>
              <p>Selected Tool: {selectedTool}</p>
              <p>Click and drag to start creating</p>
            </div>
          </div>
        </div>

        {/* Right Properties Panel */}
        <div className="properties-panel">
          <h3 className="panel-title">Properties</h3>
          <div className="property-section">
            <h4>Tool Settings</h4>
            <div className="property-row">
              <label>Size:</label>
              <input type="range" min="1" max="100" defaultValue="10" />
            </div>
            <div className="property-row">
              <label>Opacity:</label>
              <input type="range" min="1" max="100" defaultValue="100" />
            </div>
            <div className="property-row">
              <label>Color:</label>
              <input type="color" defaultValue="#000000" />
            </div>
          </div>

          <div className="property-section">
            <h4>Canvas</h4>
            <div className="property-row">
              <button className="btn">Zoom In</button>
              <button className="btn">Zoom Out</button>
            </div>
            <div className="property-row">
              <button className="btn">Reset View</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <footer className="status-bar">
        <div className="status-item">Canvas: 800 x 600</div>
        <div className="status-item">Zoom: 100%</div>
        <div className="status-item">Tool: {selectedTool}</div>
        <div className="status-item">Last Saved: 2 minutes ago</div>
      </footer>
    </div>
  );
};

export default MainContainer;
