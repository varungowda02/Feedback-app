import PropTypes from 'prop-types';

function Card({ children, reverse }) {
  const gradientAngle = reverse ? '45deg' : '-45deg';
  const gradientBackground = `linear-gradient(${gradientAngle}, #F4B400 20%, ${
    reverse ? 'rgba(0,0,0,0.4)' : '#fff'
  } 30%, ${reverse ? 'rgba(0,0,0,0.4)' : '#fff'} 70%, #F4B400 80%)`;

  return (
    <div
      className='card'
      style={{
        background: gradientBackground,
        color: reverse ? '#fff' : '#000',
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
