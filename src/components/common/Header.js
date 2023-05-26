import React from "react";
import styled from "styled-components";
import profile from '../../resource/profile.jpeg'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';

const StyledHeader = styled.div`
  height: fit-content;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
  margin: auto;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  
  img {
    border-radius: 100%;
    width: 40px;
    height: 40px;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  input {
    width: 250px;
    height: 25px;
    border-radius: 12px;
    padding: 10px;
    border: none;
    background-color: var(--input-color);
  }
`;

const AlarmIcon = styled(NotificationsNoneIcon)`
  color: var(--point-color);
  cursor: pointer;
`;

const Search = styled(SearchIcon)`
  color: var(--point-color);
  cursor: pointer;
`;

const Header = () => {

  return (
    <StyledHeader>
      <Container>
        <img src={profile} alt="사용자 프로필" />
        <AlarmIcon sx={{ fontSize: "2.5rem" }} />
        <SearchWrapper>
          <input placeholder="어디로 데이트를 가시나요?" type="text" />
          <Search sx={{ fontSize: "2.5rem" }} />
        </SearchWrapper>
      </Container>
    </StyledHeader>
  );
}

export default Header;