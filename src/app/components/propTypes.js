import { PropTypes } from 'react';


// TODO: Use a custom validator
export const iso8601 = PropTypes.string;

export const link = PropTypes.shape({
  to: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
});

export const links = PropTypes.arrayOf(link);

export const location = PropTypes.shape({
  pathname: PropTypes.string,
  search: PropTypes.string,
  hash: PropTypes.string,
  query: PropTypes.object,
});

export const user = PropTypes.shape({
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
});

export const _workshopSet = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
export const workshopSet = PropTypes.shape(_workshopSet);

export const workshopSets = PropTypes.arrayOf(workshopSet);

export const _workshop = {
  id: PropTypes.number.isRequired,
  topic: PropTypes.string.isRequired,
  startDate: iso8601,
  endDate: iso8601,
  campus: PropTypes.string.isRequired,
};
export const workshop = PropTypes.shape(_workshop);

export const workshops = PropTypes.arrayOf(workshop);
