const Error404 = {
  allowAccess: async () => true,
  render: async () => {
    const view = /*html*/ `
      <h1>Not Found</h1>
    `;
    return view;
  },
  postRender: async () => {},
};

export default Error404;
