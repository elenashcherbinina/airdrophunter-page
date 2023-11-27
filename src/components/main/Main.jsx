import { useSelector } from 'react-redux';

const Main = () => {
  const { projects } = useSelector((state) => state.navbar);

  return (
    <div className='container mb-3 p-0'>
      <div className='row row-cols-1 row-cols-md-3 mb-3 justify-content-center align-items-center'>
        {projects.map((project) => {
          return (
            <div
              id={project.hashtag}
              key={project.id}
              className='col-12 col-md-6 col-lg-4 project-info'
            >
              <div className='p-3 mb-4 bg-white shadow-sm rounded overflow-hidden'>
                <div className='item-header mb-4'>
                  <div className='d-flex align-items-center py-3 gap-2'>
                    <img
                      className='rounded-circle'
                      src={project.logo}
                      alt={project.name}
                    />
                    <h5 className='my-0 fw-normal'>{project.name}</h5>
                  </div>
                  <p className='color-grey' style={{ height: '70px' }}>
                    {project.body}
                  </p>
                </div>
                <div className='item-body'>
                  <a
                    className='color-blue d-block mb-2'
                    style={{ cursor: 'pointer' }}
                  >
                    Read more
                  </a>
                  <div className='border border-dark rounded p-3 mb-2'>
                    <p className='mb-3'>On artificial AI:</p>
                    <div className='d-flex'>
                      <div className='col'>
                        <p>expected airdrop</p>
                        <p>$500 - $5 000</p>
                      </div>
                      <div className='col'>
                        <p>probability</p>
                        <p>65 %</p>
                      </div>
                    </div>
                  </div>
                  <div className='p-3'>
                    <div className='row bg-grey p-1 text-center rounded mb-2'>
                      <div className='col'>
                        <p>5 accounts</p>
                      </div>
                      <div className='col'>
                        <p>150</p>
                      </div>
                      <div className='col'>
                        <a className='color-blue' style={{ cursor: 'pointer' }}>
                          Detail
                        </a>
                      </div>
                    </div>
                    <div className='row bg-grey p-1 text-center rounded mb-2'>
                      <div className='col'>
                        <p>10 accounts</p>
                      </div>
                      <div className='col'>
                        <p>300</p>
                      </div>
                      <div className='col'>
                        <a className='color-blue' style={{ cursor: 'pointer' }}>
                          Detail
                        </a>
                      </div>
                    </div>
                    <div className='row bg-grey p-1 text-center rounded mb-2'>
                      <div className='col'>
                        <p>15 accounts</p>
                      </div>
                      <div className='col'>
                        <p>450</p>
                      </div>
                      <div className='col'>
                        <a className='color-blue' style={{ cursor: 'pointer' }}>
                          Detail
                        </a>
                      </div>
                    </div>
                    <div className='row bg-grey p-1 text-center rounded mb-2'>
                      <div className='col'>
                        <p>20 accounts</p>
                      </div>
                      <div className='col'>
                        <p>600</p>
                      </div>
                      <div className='col'>
                        <a className='color-blue' style={{ cursor: 'pointer' }}>
                          Detail
                        </a>
                      </div>
                    </div>
                    <div className='row bg-grey p-1 text-center rounded mb-2'>
                      <div className='col'>
                        <p>30 accounts</p>
                      </div>
                      <div className='col'>
                        <p>900</p>
                      </div>
                      <div className='col'>
                        <a className='color-blue' style={{ cursor: 'pointer' }}>
                          Detail
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='item-footer'>
                  <button className='btn btn-outline-info p-3 mb-2'>Buy</button>
                  <p className='text-center'>
                    Choose a suitable tarif and click the button
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
