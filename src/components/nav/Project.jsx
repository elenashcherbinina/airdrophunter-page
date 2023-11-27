import PropTypes from 'prop-types';

const Project = ({ project }) => {
  const { id, hashtag, logo, name } = project;

  return (
    <a
      className='d-flex align-items-center justify-content-center rounded-4 project-logo'
      key={id}
      href={`#${hashtag}`}
      style={{ minWidth: '58px', minHeight: '58px' }}
    >
      <img
        className='rounded-circle'
        src={logo}
        alt={name}
        style={{ width: '40px', height: '40px' }}
      />
    </a>
  );
};

Project.propTypes = {
  project: {
    id: PropTypes.number,
    hashtag: PropTypes.string,
    logo: PropTypes.string,
    name: PropTypes.string,
  },
};

export default Project;
