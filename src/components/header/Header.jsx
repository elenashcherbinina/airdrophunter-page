import logo from '../../imgs/logo.svg';

const Header = () => {
  return (
    <header className='row'>
      <p
        className='bg-blue text-white text-center py-2'
        style={{ height: '33px', fontSize: '14px' }}
      >
        This project is beta. DYOR
      </p>
      <nav className='navbar row justify-content-between'>
        <div className='container-fluid'>
          <a className='navbar-brand mx-5' href='#'>
            <img
              src={logo}
              alt='logo'
              style={{ width: '78px', height: '70px' }}
            />
          </a>

          <div className='d-flex gap-2'>
            <button
              className='btn btn-deposit bg-blue'
              style={{ width: '95px', height: '40px' }}
            >
              Deposit
            </button>

            <button className='btn btn-outline-info'>Connect Wallet</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
