import { onValue, set } from "@firebase/database";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOut, userRef } from "../../services/firebase";
import { changeName, toggleCheckbox } from "../../store/profile/actions";
import { selectCheckBox, selectName } from "../../store/profile/selectors";
import "./Profile.css";

export const Profile = () => {
  const checkboxValue = useSelector(selectCheckBox);
  const name = useSelector(selectName);

  const [profileName, setProfileName] = useState(name);

  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(toggleCheckbox);
  };
  useEffect(() => {
    const unsubscribe = onValue(userRef, snapshot => {
      const userData = snapshot.val();
      dispatch(changeName(userData?.name || ""));
    });
    return unsubscribe;
  }, [setProfileName, dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    set(userRef, {
      name: profileName,
    });
  };
  const handleChangeText = e => {
    setProfileName(e.target.value);
  };
  const handleLogOutClick = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="profile-block">
      <input type="checkbox" checked={checkboxValue} onChange={handleChange} />
      {/* <h1 className="profile-block__name">{profileName}</h1> */}
      <form onSubmit={handleSubmit}>
        <input type="text" value={profileName} onChange={handleChangeText} />
        <input type="submit" value="Применить" />
      </form>
      <button onClick={handleLogOutClick}>Выйти</button>
    </div>
  );
};
