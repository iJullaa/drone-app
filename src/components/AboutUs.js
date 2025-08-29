import React, { useState } from 'react';
import './AboutUs.css';

import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { SortableTeamMember } from './SortableTeamMember';

import member1 from '../assets/team-member-1.jpeg';
import member2 from '../assets/team-member-1.jpeg';
import member3 from '../assets/team-member-1.jpeg';
import member4 from '../assets/team-member-1.jpeg';
import member5 from '../assets/team-member-1.jpeg';
import member6 from '../assets/team-member-1.jpeg';

const initialTeamData = [
  { id: 1, name: 'Krzysztof Chwalisz', role: '[SUPERVISOR]', image: member1 },
  { id: 2, name: 'Julia Szaniawska', role: '', image: member2 },
  { id: 3, name: 'Michał Zawitaj', role: '', image: member3 },
  {
    id: 4,
    name: 'Bartłomiej Kacperski',
    role: '',
    image: member4,
  },
  {
    id: 5,
    name: 'Aleksander Frączak',
    role: '',
    image: member5,
  },
  { id: 6, name: 'Szymon Drdzeń', role: '', image: member6 },
];

const AboutUs = () => {
  const [team, setTeam] = useState(initialTeamData);

  function handleDragEnd(event) {
    const { active, over } = event;
    if (active.id !== over.id) {
      setTeam((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <div className="team-container">
      <h3 className="team-group-title">Group 1 AI/ML</h3>

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={team.map((member) => member.id)}
          strategy={rectSortingStrategy}
        >
          <div className="team-grid">
            {team.map((member) => (
              <SortableTeamMember key={member.id} member={member} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default AboutUs;
