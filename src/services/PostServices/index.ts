export const getAllPosts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
