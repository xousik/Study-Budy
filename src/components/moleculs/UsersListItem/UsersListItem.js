import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, NameInfoWrapper, StyledAverage } from './UsersListItem.styles';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper>
      <StyledAverage value={average}>{average}</StyledAverage>
      <NameInfoWrapper>
        <p>
          {name}
          <DeleteButton onClick={() => deleteUser(name)} />
        </p>
        <p>attendance: {attendance}</p>
      </NameInfoWrapper>
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;