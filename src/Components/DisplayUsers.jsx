import React from "react";
import { MdDeleteForever} from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { removeUsers } from "../Store/Slices/UserSlice";

const DisplayUsers = () => {
const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  });

  const DeleteAllUsers = (id) =>{
    dispatch(removeUsers(id))
  };

// by using userName 
//   const DeleteAllUsers = (user) =>{
//     dispatch(removeUsers(user))
//   };

  return (
    <Wrapper>
      {data.map((user, id) => {
        return (
          <li key={id}>
            {user}
            <button className="btn-delete" onClick={()=> DeleteAllUsers(id)}>
              <MdDeleteForever className="delete-icon" />
            </button>
          </li>
        );
      })}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin: 1rem 3.2rem;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 12px 0px;
  }
  .btn-delete {
    background: none;
    border: none;
  }
`;

export default DisplayUsers;
