import Image from "next/image";
import React from "react";

const MemberAvatar = ({ imgURL, name }) => {
  return (
    <div className="rounded-full overflow-hidden">
      <Image src={imgURL} alt={name} width={15} height={15} />
    </div>
  );
};

export default MemberAvatar;
