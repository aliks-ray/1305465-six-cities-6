import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import {SortingTypes} from "../../../consts/consts.js";
import {changeSorting} from "../../../store/actions.js";

const Sorting = () => {
  const dispatch = useDispatch();
  const {activeSorting} = useSelector((state) => state.DATA_SET);

  const [openedSorting, setOpenedSorting] = useState(null);

  const handleSortingArrowClick = () => {
    setOpenedSorting((prevState) => !prevState);
  };

  const handleSortingChange = (evt) => {
    dispatch(changeSorting(evt.target.innerText));
    setOpenedSorting(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSortingArrowClick}
      >
        {activeSorting}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      {openedSorting && (
        <ul className="places__options places__options--custom places__options--opened">
          {Object.values(SortingTypes).map((sortingType, id) => (
            <li
              className={classNames(`places__option`, {
                "places__option--active": sortingType === activeSorting
              })}
              key={sortingType + id}
              tabIndex={0}
              onClick={handleSortingChange}
            >
              {sortingType}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default Sorting;
