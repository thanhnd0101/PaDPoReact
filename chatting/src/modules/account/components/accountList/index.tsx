import React, { useEffect, useState } from "react";
import { listAccountsAsync } from "../../apiCalls/listAccounts";
import AccountItem from "../accountItem";

type ListAccountsResponse = Array<{ id: string; name: string }>;
export default function AccountList() {
  const [accounts, setAccounts] = useState<ListAccountsResponse>([]);

  useEffect(() => {
    listAccountsAsync().then((res) => {
      if (res.status === 200) {
        setAccounts(res.data);
      }
    });
  }, []);

  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Select an Account
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              {accounts.map((account) => (
                <AccountItem
                  key={account.id}
                  id={account.id}
                  name={account.name}
                />
              ))}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
