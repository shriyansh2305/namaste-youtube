import React from "react";

const commentsData = [
  {
    name: "John Doe",
    comment: "This video is really helpful! Thanks for sharing.",
    replies: [
      {
        name: "Jane Smith",
        comment: "I agree! The explanation was crystal clear.",
        replies: [
          {
            name: "David Brown",
            comment: "Absolutely! Learned a lot from this.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Alice Johnson",
    comment: "Can someone explain the part about closures again?",
    replies: [
      {
        name: "Robert Williams",
        comment: "Sure! Closures allow functions to access outer scope variables.",
        replies: [
          {
            name: "Chris Evans",
            comment: "Best example of closures I have seen was in a coding interview!",
            replies: [
              {
                name: "Emma Watson",
                comment: "Would love to see that example, could you share it here?",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Sophia Miller",
    comment: "Great content! Subscribed to your channel.",
    replies: [
      {
        name: "Liam Anderson",
        comment: "Same here, can't wait for more videos!",
        replies: [],
      },
    ],
  },
  {
    name: "Daniel Clark",
    comment: "The UI design is amazing. Which library did you use?",
    replies: [
      {
        name: "Olivia Garcia",
        comment: "I think it's built with Tailwind CSS.",
        replies: [],
      },
    ],
  },
  {
    name: "Mason Lee",
    comment: "Could you make a video on React performance optimization?",
    replies: [],
  },
];

const CommentComp = ({ data }) => {
  const { name, comment } = data;
  return (
    <div className="flex bg-gray-200 rounded-lg ml-5 border-l-2 p-2 items-center">
      <img
        className="h-10 w-10"
        src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png"
        alt="user-profile-photo"
      />
      <h1 className="p-2 m-2">
        <span className="font-bold">{name}</span>: {comment}
      </h1>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return (
    <>
      {comments.map((comment, index) => (
        <div key={index} className="">
          <CommentComp data={comment} />
          {comment.replies && comment.replies.length > 0 && (
            <div className="ml-8">
              <CommentsList comments={comment.replies} />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

const CommentsContainer = () => {
  return (
    <div className="p-2 m-5">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
