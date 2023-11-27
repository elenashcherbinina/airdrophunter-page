import { useDispatch } from 'react-redux';
import { actions as navbarActions } from '../store/slices/navbarSlice';

const ShowBtn = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        className='btn btn-light border rounded-circle'
        style={{ width: '40px', height: '40px' }}
        onClick={() => dispatch(navbarActions.setHidden(false))}
      >
        <svg
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='icons'>
            <g id='Group 9186'>
              <path
                className='hovered'
                id='Line_63'
                d='M13 7L13 13'
                stroke='black'
                strokeLinecap='round'
              />
              <path
                id='Line_65'
                d='M5 5L12.2426 12.2426'
                stroke='black'
                strokeLinecap='round'
              />
              <path
                id='Line_64'
                d='M13 13L7 13'
                stroke='black'
                strokeLinecap='round'
              />
            </g>
          </g>
        </svg>
      </button>
      <p className='color-blue'>Show</p>
    </>
  );
};

export default ShowBtn;
