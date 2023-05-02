import PropTypes from 'prop-types';

const useScrollInto = () => {
  const handleScroll = (sectionId) => {
    try {
      const getId = document.getElementById(sectionId);
      if (typeof window !== 'undefined') {
        window.scroll({
          top: getId.offsetTop - 130,
          left: 0,
          behavior: 'smooth',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return handleScroll;
};

useScrollInto.propTypes = {
  sectionId: PropTypes.string.isRequired,
};

export default useScrollInto;
