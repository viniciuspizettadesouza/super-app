import React from "react";

interface Member {
  number: number;
  ticket: number;
  updated?: boolean;
}

interface WalletRecord extends Member {
  active: boolean;
}

function updateMembers(memberList: Member[], walletList: WalletRecord[]): void {
  for (let record of walletList) {
    const member = memberList.find((m) => m.number === record.number);

    if (member) {
      record.active = true;
      record.ticket = member.ticket;
      member.updated = true;
    } else {
      record.active = false;
    }
  }

  memberList
    .filter((m) => !m.hasOwnProperty("updated"))
    .forEach((member) => {
      walletList.push({
        ...member,
        active: true,
      });
    });
}

function Conaz2() {
  const walletList: WalletRecord[] = [
    { number: 1, active: true, ticket: 10 },
    { number: 2, active: false, ticket: 0 },
    { number: 3, active: true, ticket: 12 },
    { number: 4, active: false, ticket: 0 },
    { number: 5, active: true, ticket: 14 },
    { number: 6, active: true, ticket: 15 },
  ];

  const memberListTest: Member[] = [
    { number: 1, ticket: 16 },
    { number: 3, ticket: 13 },
    { number: 5, ticket: 15 },
    { number: 8, ticket: 10 },
    { number: 9, ticket: 19 },
  ];

  updateMembers(memberListTest, walletList);

  const output = JSON.stringify(walletList, null, 2);

  return (
    <div>
      <h2>Challenge 2 Output:</h2>
      <pre>{output}</pre>
    </div>
  );
}

export default Conaz2;
