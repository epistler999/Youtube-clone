import React from "react";
const commentsData = [
  {
    name: "Swapnil Gupta",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Swapnil Gupta",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Swapnil Gupta",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Swapnil Gupta",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Swapnil Gupta",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Swapnil Gupta",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Swapnil Gupta",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Swapnil Gupta",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Swapnil Gupta",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Swapnil Gupta",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Swapnil Gupta",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Swapnil Gupta",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Swapnil Gupta",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Swapnil Gupta",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Swapnil Gupta",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Swapnil Gupta",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Swapnil Gupta",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Swapnil Gupta",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex p-2 my-2 bg-gray-100 rounded-lg shadow-sm">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const CommentsList = ({ comments }) => {
  // Disclaimer: Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="p-2 m-5">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
