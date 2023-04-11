import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-center mt-5 rounded-md bg-purple-950 text-white p-6 font-bold text-3xl w-[45%] m-auto">
        Questions :
      </h1>
      <div className="mt-8 ml-24 bg-purple-700 p-8 mr-24 text-white text-lg font-semibold">
        <h1>1. When should you use context API?</h1>
        <p>
          Ans: Context is primarily used when some data needs to be accessible
          by many components at different nesting levels. Apply it sparingly
          because it makes component reuse more difficult.
        </p>
        <h1>2. What is a custom hook?</h1>
        <p>
          Ans: A custom hook is a special JavaScript function whose name starts
          with 'use' and can be used to call other hooks.
        </p>
        <h1>3. What is useRef?</h1>
        <p>
          Ans: useRef(initialValue) is a built-in React hook that accepts one
          argument as the initial value and returns a reference (aka ref). A
          reference is an object having a special property current .
        </p>
        <h1>4. What is useMemo?</h1>
        <p>
          Ans: useMemo is a function that returns a memoized value of a passed
          in resource-intensive function.
        </p>
      </div>
    </div>
  );
};

export default Blog;
