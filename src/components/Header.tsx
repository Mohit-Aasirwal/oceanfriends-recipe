import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center h-full ">
      <div className="flex flex-col space-y-1">
        <h1 className="text-xl font-semibold">Hello Jaya</h1>
        <p className="text-xs text-gray-400">What are you cooking today?</p>
      </div>
      <Image
        src={
          "https://s3-alpha-sig.figma.com/img/c492/e0dc/4e79c0324e16a6e05cb4555a0dd25e28?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n0sgGEncGtvv79kZX79iXM0rxhVUQniXYCngJCyumwAIEA8DKWLoS~bpOWU1CEDTSWfSjDov-51WC5T01tx7z9UBJ42ARt7MVesVhLqAjq6mWqm6MYUOYXmrh4-tDQ0oHVtPF4M9FBAd7OrbK~XYszDLZCCRqUxOznv3YgHvM5doHRhiM1dUgg~MD6IWWZFslrjpCWzdeI0W6J8mcT9cF5lD7FRdJLNgoS-XxXUX1IIWGVyYEi0Lcbfl1AMMyNKCXS2ch2S~EMWeiXfFrW48--ZO-J9HhYsNzuesnN2dzwpU9gBPq7ewyJrGJHJHcv89mayE4W7Z2ozTS-kIyj7FAw__"
        }
        alt=""
        width={1000}
        height={1000}
        className="bg-[#FFCE80] w-10 h-10 rounded-xl"
      />
    </div>
  );
};

export default Header;
