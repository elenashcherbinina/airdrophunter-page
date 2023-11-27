import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PrevBtn from '../buttons/PrevBtn';
import NextBtn from '../buttons/NextBtn';
import ProjectList from './ProjectList';
import { actions as navbarActions } from '../store/slices/navbarSlice';

const Nav = () => {
  const { projects } = useSelector((state) => state.navbar);
  const dispatch = useDispatch();

  const [nextPosition, setNextPosition] = useState(0);
  const [prevPosition, setPrevPosition] = useState(projects.length - 1);

  const handleNextBtn = () => {
    setNextPosition((nextPosition + 1) % projects.length),
      dispatch(navbarActions.pushToNextElements(projects[nextPosition]));
  };

  const handlePrevBtn = () => {
    setPrevPosition((prevPosition - 1 + projects.length) % projects.length);
    dispatch(navbarActions.pushToPrevElements(projects[prevPosition]));
  };

  return (
    <div className='container bg-white rounded mb-4 p-2 sticky-top custom-shadow'>
      <div className='d-flex align-items-center justify-content-around gap-3 px-2'>
        <PrevBtn handlePrevBtn={handlePrevBtn} />
        <ProjectList />
        <NextBtn handleNextBtn={handleNextBtn} />
      </div>
    </div>
  );
};

export default Nav;
