import { useDispatch } from 'react-redux';
import { actions as navbarActions } from '../store/slices/navbarSlice';

const HideBtn = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        className='btn btn-light border rounded-circle'
        style={{ width: '40px', height: '40px' }}
        onClick={() => dispatch(navbarActions.setHidden(true))}
      >
        <svg
          className='align-middle'
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='icons'>
            <g id='Group 9186'>
              <path
                id='Line_63'
                d='M7 5L13 5'
                stroke='black'
                strokeLinecap='round'
              />
              <path
                id='Line_65'
                d='M5 13L12.2426 5.75736'
                stroke='black'
                strokeLinecap='round'
              />
              <path
                id='Line_64'
                d='M13 5L13 11'
                stroke='black'
                strokeLinecap='round'
              />
            </g>
          </g>
        </svg>
      </button>
      <p className='color-blue'>Hide</p>
    </>
  );
};

export default HideBtn;
