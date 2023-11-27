import PropTypes from 'prop-types';

const NextBtn = ({ handleNextBtn }) => {
  return (
    <button
      className='btn btn-light border rounded-circle'
      style={{ width: '40px', height: '40px' }}
      onClick={handleNextBtn}
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
              d='M10.4142 4.75732L14.6569 8.99997'
              stroke='black'
              strokeLinecap='round'
            />
            <path
              id='Line_65'
              d='M3.34314 9L13.5858 9'
              stroke='black'
              strokeLinecap='round'
            />
            <path
              id='Line_64'
              d='M14.6569 9L10.4142 13.2426'
              stroke='black'
              strokeLinecap='round'
            />
          </g>
        </g>
      </svg>
    </button>
  );
};

NextBtn.propTypes = {
  handleNextBtn: PropTypes.func,
};

export default NextBtn;
