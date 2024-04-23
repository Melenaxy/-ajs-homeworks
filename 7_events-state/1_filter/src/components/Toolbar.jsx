import React from 'react'

export default function Toolbar({ filters, selected, onSelectFilter }) {
    return (
      <div className="toolbar">
        {
          filters.map(filter => (
            <button 
              className={ filter === selected ? 'active' : ''}
              key={crypto.randomUUID()}
              onClick={() => onSelectFilter(filter)}
            >
              {filter}
            </button>
          ))
        }
      </div>
    );
  }
