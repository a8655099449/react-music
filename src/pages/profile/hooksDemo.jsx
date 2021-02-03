import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from 'react';

let Context = createContext();

// const ChildCom = () => {
//   let { age } = useContext(Context);
//   return <div>父组件传来的 {age}</div>;
// };

export default () => {
  // let [age, setAge] = useState(18);
  let [state, dispacth] = useReducer(
    (state, action) => {
      console.log(action.type);
      switch (action.type) {
        case 'add':
          state.age++;
          break;
        case 'sub':
          state.age--;
          break;
      }
      return { ...state };
    },
    { age: 18 },
  );
  console.log(state);
  return (
    <div>
      我的名字是{state.age}
      <div>
        <button
          onClick={() => dispacth({ type: 'add' })}
          className="btn btn-blue"
        >
          age + 1{' '}
        </button>
      </div>
      {/*  <Context.Provider
        value={{
          age: age,
        }}
      >
        <ChildCom />
      </Context.Provider> */}
    </div>
  );
};
