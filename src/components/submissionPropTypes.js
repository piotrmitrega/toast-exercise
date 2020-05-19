import PropTypes from 'prop-types';

export const submissionDataPropTypes = {
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired
};

export const submissionPropTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.shape(submissionDataPropTypes)
};
