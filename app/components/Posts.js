import React from "react";
import prisma from "../../lib/db";

const Posts = async () => {
  const posts = await prisma.user.findMany();

  return (
    <div>
      {posts.map((item) => (
        <div key={item.id}>
          <h1>Name: {item.name}</h1>
          <p>Content: {item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
