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

          <span>Email verified: </span>
          {item.emailVerified ? (
            <span>verified</span>
          ) : (
            <span>not verified</span>
          )}

          <p>
            Created At:{" "}
            {item.createdAt.toLocaleString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
              timeZone: "Asia/Kathmandu",
            })}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
