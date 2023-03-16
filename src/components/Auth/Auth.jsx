export const Auth = ({ onLogIn }) => {
  return (
    <div>
      <button type="button" onClick={onLogIn}>
        Log in
      </button>
    </div>
  );
};
