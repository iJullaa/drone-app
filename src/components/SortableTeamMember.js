import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import './AboutUs.css'; // Używamy stylów z głównego komponentu

export const SortableTeamMember = ({ member }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: member.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    boxShadow: isDragging ? '0 25px 50px rgba(0,0,0,0.2)' : undefined,
    zIndex: isDragging ? 10 : 1, // Ensures that the dragged item is on top
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="team-member-card"
    >
      <img src={member.image} alt={member.name} />
      {/* Nakładka z tekstem na zdjęciu */}
      <div className="member-info">
        <p className="role">{member.role}</p>
        <h3>{member.name}</h3>
      </div>
    </div>
  );
};
