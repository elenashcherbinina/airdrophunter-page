import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import Project from './Project';
import getRandomId from '../../utils/getRandomId';

const ProjectList = () => {
  const { nextElements, prevElements, projects } = useSelector(
    (state) => state.navbar,
  );
  const nextElementRef = useRef(null);
  const prevElementRef = useRef(null);

  useEffect(() => {
    nextElementRef.current?.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
    });
  }, [nextElements]);

  useEffect(() => {
    prevElementRef.current?.scrollIntoView({
      behavior: 'smooth',
      inline: 'end',
    });
  }, [prevElements]);

  return (
    <div className='d-flex gap-2 overflow-hidden'>
      <div className='d-flex'>
        {prevElements.length > 0 && <span ref={prevElementRef}></span>}
        {prevElements.length > 0 &&
          prevElements.map((project) => (
            <Project key={getRandomId()} project={project} />
          ))}
        {projects.map((project) => (
          <Project key={getRandomId()} project={project} />
        ))}
        {projects.map((project) => (
          <Project key={getRandomId()} project={project} />
        ))}
        {nextElements.length > 0 &&
          nextElements.map((project) => (
            <Project key={getRandomId()} project={project} />
          ))}
        {nextElements.length > 0 && <span ref={nextElementRef}></span>}
      </div>
    </div>
  );
};

export default ProjectList;
