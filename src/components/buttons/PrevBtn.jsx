import PropTypes from 'prop-types';

const PrevBtn = ({ handlePrevBtn }) => {
  return (
    <button
      className='btn btn-light border rounded-circle'
      style={{ width: '40px', height: '40px' }}
      onClick={handlePrevBtn}
    >
      <svg
        width='18'
        height='18'
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='Frame'>
          <g id='Group 9186'>
            <path
              id='Line_63'
              d='M7.58578 13.2427L3.34314 9.00003'
              stroke='black'
              strokeLinecap='round'
            />
            <path
              id='Line_65'
              d='M14.6569 9L4.41422 9'
              stroke='black'
              strokeLinecap='round'
            />
            <path
              id='Line_64'
              d='M3.34314 9L7.58578 4.75736'
              stroke='black'
              strokeLinecap='round'
            />
          </g>
        </g>
      </svg>
    </button>
  );
};

PrevBtn.propTypes = {
  handlePrevBtn: PropTypes.func,
};

export default PrevBtn;
