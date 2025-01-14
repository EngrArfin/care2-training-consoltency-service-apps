const CardData = (/* { posts }: { posts: TPost[] } */) => {
  return (
    <div>
      <div className=" my-10 w-[90%] mx-auto">
        <h1 className="text-4xl text-center">
          Latest <span className="text-fuchsia-800"> Posts</span>
        </h1>
        <p className="text-gray-400 text-center italic w-2/4 mx-auto mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          voluptatum sint corporis ea, vero voluptates corrupti consectetur
          molestias eos maiores odio enim veniam eum quis, dolore at soluta
          architecto debitis?
        </p>
        <div className="grid grid-cols-3 my-12 gap-8">
          {/* {posts.slice(0, 6).map((post) => (
            <CartCard key={post.id} post={post} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default CardData;
