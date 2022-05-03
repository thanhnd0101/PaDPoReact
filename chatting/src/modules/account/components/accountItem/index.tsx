import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { chooseAccountAC } from "../../reducers";

type AccountItemProps = {
  id: string;
  name: string;
};

export default function AccountItem({ id, name }: AccountItemProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function chooseAccount() {
    dispatch(chooseAccountAC({ id, name }));
    navigate("/chat");
  }

  return (
    <button type="button" className="w-200 my-5 mx-5" onClick={chooseAccount}>
      <div className="flex flex-grow group block">
        <div className=" items-center bg-slate-200 py-5 border-solid border-2 border-zinc-400 rounded w-full">
          <div>
            <img
              className="mx-auto h-30 w-30 rounded-full xl:w-48 xl:h-48"
              src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
              {name}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}
